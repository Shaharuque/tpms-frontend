import { Modal } from "antd";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchServices } from "../../../../../../features/Settings_redux/settingFeaturesSlice";
import { fetchData } from "../../../../../../Misc/Helper";

export default function AddServicesActionModal({
  record,
  handleClose,
  open,
  page,
  token,
}) {
  console.log(record);
  const { id, type, treatment_type, duration, mileage, service, description } =
    record;
  const dispatch = useDispatch();
  const endPoint = "admin/ac/setting/service/all";
  const { register, handleSubmit, reset } = useForm();
  const [selectedTreatments, setSelectedTreatments] = useState([]);

  //getting all the selected treatment data for Tx type selection purpose
  useEffect(() => {
    fetchData("admin/ac/setting/get/selected/treatment", token).then((res) => {
      const result = res?.data?.selected_treatment;
      if (result?.length !== 0) {
        setSelectedTreatments(result);
      }
    });
  }, [token]);
  console.log(selectedTreatments);

  // Editable value
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        facility_treatment_id: treatment_type?.id,
        service: service,
        description: description,
        mileage: mileage,
        duration: duration,
        type: type,
      });
    }, 0);
  }, [
    reset,
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
          url: "https://test-prod.therapypms.com/api/v1/admin/ac/setting/service/create",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token,
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
          });
          dispatch(fetchServices({ endPoint, page, token }));
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
        });
        console.log(error?.message); // this is the main part. Use the response property from the error object
      }
    } else {
      console.log("else part is hitted");
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
                  defaultValue={treatment_type?.treatment_name}
                  {...register("facility_treatment_id")}
                >
                  {record.treatment_type?.treatment_name ? (
                    <option value={record.treatment_type?.id}>
                      {record.treatment_type?.treatment_name}
                    </option>
                  ) : (
                    <option>Select Treatment</option>
                  )}
                  {selectedTreatments
                    ?.filter(
                      (item) =>
                        item.treatment_name !==
                        record.treatment_type?.treatment_name
                    )
                    .map((treatment) => {
                      return (
                        <option
                          key={treatment?.treatment_id}
                          value={treatment?.id}
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
                  <option value={0}>UnBillable</option>
                  <option value={1}>Billable</option>
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
                <input
                  className="modal-input-field ml-1 w-full"
                  {...register("duration")}
                ></input>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">Mileage</span>
                </label>
                <input
                  type="number"
                  placeholder="Cpt Code"
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
