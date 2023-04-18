import { Modal } from "antd";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchServices } from "../../../../../../features/Settings_redux/settingServicesList";
import { useGetAllSelectedTreatmentsQuery } from "../../../../../../features/Settings_redux/addTreatment/addTreatmentApi";
import useToken from "../../../../../../CustomHooks/useToken";

export default function AddServicesActionModal({
  record,
  handleClose,
  open,
  page,
}) {
  console.log(record);
  const {
    id,
    type,
    treatment_type,
    service_treatment,
    duration,
    mileage,
    service,
    description,
  } = record;

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const { token } = useToken();

  //Getting All Selected Treatment Data
  const {
    data: selectedTreatmentData,
    isSuccess: selectedTreatmentSuccess,
    isLoading: selectedTreatmentLoading,
  } = useGetAllSelectedTreatmentsQuery({ token: token });

  console.log("selected treatments", selectedTreatmentData?.data);

  useEffect(() => {
    if (selectedTreatmentSuccess && selectedTreatmentData?.data?.length > 0) {
      setSelectedTreatments(selectedTreatmentData?.data);
    }
  }, [selectedTreatmentData?.data, selectedTreatmentSuccess]);

  // Editable value
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        treatment_id: treatment_type?.id,
        service: service,
        description: description,
        mileage: mileage,
        duration: duration,
        type: type,
      });
    }, 0);
  }, [
    reset,
    treatment_type?.id,
    service,
    description,
    mileage,
    duration,
    type,
    treatment_type?.treatment_name,
  ]);

  const onSubmit = async (FormData) => {
    console.log(FormData);
    if (FormData && !id) {
      try {
        let res = await axios({
          method: "post",
          url: "https://stagapi.therapypms.com/api/internaladmin/setting/add/setting/service",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token,
          },
          data: FormData,
        });

        // console.log(res.data);
        if (res?.data?.status === "success") {
          toast.success("Successfully Inserted", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: { fontSize: "15px" },
          });
          dispatch(fetchServices({ page, token }));
          handleClose();
        }
        //else res?.data?.status === "error" holey
        else {
          toast.error(res?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: { fontSize: "15px" },
          });
        }
      } catch (error) {
        toast.warning(error?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: { fontSize: "15px" },
        });
        console.log(error?.message); // this is the main part. Use the response property from the error object
      }
    } else {
      try {
        let res = await axios({
          method: "post",
          url: "https://stagapi.therapypms.com/api/internaladmin/setting/update/setting/service",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token,
          },
          data: {
            ...FormData,
            service_id: id,
          },
        });

        // console.log(res.data);
        if (res?.data?.status === "success") {
          toast.success(<h1 className="text-[12px]">{res?.data?.message}</h1>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: { fontSize: "15px" },
          });
          dispatch(fetchServices({ page, token }));
          handleClose();
        }
        //else res?.data?.status === "error" holey
        else {
          toast.error(<h1 className="text-[12px]">{res?.data?.message}</h1>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: { fontSize: "15px" },
          });
        }
      } catch (error) {
        toast.warning(error?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: { fontSize: "15px" },
        });
        console.log(error?.message); // this is the main part. Use the response property from the error object
      }
    }
    // reset();
  };
  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={500}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Add/Edit Service
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-medium  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ls-3 my-5 mr-2 gap-5">
              <div>
                <label className="label">
                  <span className="modal-label-name">Tx Type</span>
                </label>
                {/* Dynamic option showed and select new option feature */}
                <select
                  className="modal-input-field ml-1 w-full"
                  defaultValue={service_treatment?.treatment_name}
                  {...register("treatment_id")}
                >
                  {record?.facility_treatment_id ? (
                    <option value={record?.facility_treatment_id}>
                      {
                        selectedTreatments?.find(
                          (treatment) =>
                            treatment.treatment_id ===
                            record?.facility_treatment_id
                        )?.treatment_name
                      }
                    </option>
                  ) : (
                    <option>Select Treatment</option>
                  )}
                  {selectedTreatments
                    ?.filter(
                      (item) =>
                        item.treatment_id !== record?.facility_treatment_id
                    )
                    .map((treatment) => {
                      return (
                        <option
                          key={treatment?.treatment_id}
                          value={treatment?.treatment_id}
                        >
                          {treatment?.treatment_name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Service Type</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("type")}
                >
                  <option value={"1"}>UnBillable</option>
                  <option value={"2"}>Billable</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">Service</span>
                </label>
                <input
                  type="text"
                  placeholder="Service"
                  name="service"
                  className="modal-input-field ml-1 w-full"
                  {...register("service")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Description</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  {...register("description")}
                ></input>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Duration</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("duration")}
                >
                  <option value="5">5 min</option>
                  <option value="10">10 min</option>
                  <option value="15" selected="">
                    15 min
                  </option>
                  <option value="20">20 min</option>
                  <option value="25">25 min</option>
                  <option value="30">30 min</option>
                  <option value="35">35 min</option>
                  <option value="40">40 min</option>
                  <option value="45">45 min</option>
                  <option value="50">50 min</option>
                  <option value="55">55 min</option>
                  <option value="60">60 min</option>
                  <option value="65">1:05 hrs</option>
                  <option value="70">1:10 hrs</option>
                  <option value="75">1:15 hrs</option>
                  <option value="80">1:20 hrs</option>
                  <option value="85">1:25 hrs</option>
                  <option value="90">1:30 hrs</option>
                  <option value="95">1:35 hrs</option>
                  <option value="100">1:40 hrs</option>
                  <option value="105">1:45 hrs</option>
                  <option value="110">1:50 hrs</option>
                  <option value="115">1:55 hrs</option>
                  <option value="120">2:00 hrs</option>
                  <option value="125">2:05 hrs</option>
                  <option value="130">2:10 hrs</option>
                  <option value="135">2:15 hrs</option>
                  <option value="140">2:20 hrs</option>
                  <option value="145">2:25 hrs</option>
                  <option value="150">2:30 hrs</option>
                  <option value="155">2:35 hrs</option>
                  <option value="160">2:40 hrs</option>
                  <option value="165">2:45 hrs</option>
                  <option value="170">2:50 hrs</option>
                  <option value="175">2:55 hrs</option>
                  <option value="180">3:00 hrs</option>
                  <option value="185">3:05 hrs</option>
                  <option value="190">3:10 hrs</option>
                  <option value="195">3:15 hrs</option>
                  <option value="200">3:20 hrs</option>
                  <option value="205">3:25 hrs</option>
                  <option value="210">3:30 hrs</option>
                  <option value="215">3:35 hrs</option>
                  <option value="220">3:40 hrs</option>
                  <option value="225">3:45 hrs</option>
                  <option value="230">3:50 hrs</option>
                  <option value="235">3:55 hrs</option>
                  <option value="240">4:00 hrs</option>
                  <option value="245">4:05 hrs</option>
                  <option value="250">4:10 hrs</option>
                  <option value="255">4:15 hrs</option>
                  <option value="260">4:20 hrs</option>
                  <option value="265">4:25 hrs</option>
                  <option value="270">4:30 hrs</option>
                  <option value="275">4:35 hrs</option>
                  <option value="280">4:40 hrs</option>
                  <option value="285">4:45 hrs</option>
                  <option value="290">4:50 hrs</option>
                  <option value="295">4:55 hrs</option>
                  <option value="300">5:00 hrs</option>
                  <option value="305">5:05 hrs</option>
                  <option value="310">5:10 hrs</option>
                  <option value="315">5:15 hrs</option>
                  <option value="320">5:20 hrs</option>
                  <option value="325">5:25 hrs</option>
                  <option value="330">5:30 hrs</option>
                  <option value="335">5:35 hrs</option>
                  <option value="340">5:40 hrs</option>
                  <option value="345">5:45 hrs</option>
                  <option value="350">5:50 hrs</option>
                  <option value="355">5:55 hrs</option>
                  <option value="360">6:00 hrs</option>
                  <option value="365">6:05 hrs</option>
                  <option value="370">6:10 hrs</option>
                  <option value="375">6:15 hrs</option>
                  <option value="380">6:20 hrs</option>
                  <option value="385">6:25 hrs</option>
                  <option value="390">6:30 hrs</option>
                  <option value="395">6:35 hrs</option>
                  <option value="400">6:40 hrs</option>
                  <option value="405">6:45 hrs</option>
                  <option value="410">6:50 hrs</option>
                  <option value="415">6:55 hrs</option>
                  <option value="420">7:00 hrs</option>
                  <option value="425">7:05 hrs</option>
                  <option value="430">7:10 hrs</option>
                  <option value="435">7:15 hrs</option>
                  <option value="440">7:20 hrs</option>
                  <option value="445">7:25 hrs</option>
                  <option value="450">7:30 hrs</option>
                  <option value="455">7:35 hrs</option>
                  <option value="460">7:40 hrs</option>
                  <option value="465">7:45 hrs</option>
                  <option value="470">7:50 hrs</option>
                  <option value="475">7:55 hrs</option>
                  <option value="480">8 hrs</option>
                  <option value="540">9 hrs</option>
                  <option value="600">10 hrs</option>
                  <option value="660">11 hrs</option>
                  <option value="720">12 hrs</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">Mileage</span>
                </label>
                <input
                  type="number"
                  placeholder="Milage"
                  name="Mileage"
                  className="modal-input-field ml-1 w-full"
                  {...register("mileage")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Save
              </button>

              <button className="pms-close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
