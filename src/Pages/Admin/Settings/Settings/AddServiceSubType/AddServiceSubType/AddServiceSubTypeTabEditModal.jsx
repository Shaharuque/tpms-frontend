import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useState } from "react";
import useToken from "../../../../../../CustomHooks/useToken";
import axios from "axios";
import Loading from "../../../../../../Loading/Loading";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchServiceSubType } from "../../../../../../features/Settings_redux/selectedServiceSubTypesApi";
export default function AddServiceSubTypeTabEditModal({
  handleClose,
  open,
  row,
  txType,
  serviceId,
  billAbleId,
  subActivityEndPoint,
  page,
}) {
  const { id } = row || null;
  const [singleData, setSingleData] = useState({});
  const { token } = useToken();
  const dispatch = useDispatch();
  //basis on the id now call the api to get single service sub-type data
  useEffect(() => {
    const getSingleServiceSubType = async () => {
      let res;
      //if type is not selected then api will not be called
      if (id) {
        res = await axios({
          url: "https://test-prod.therapypms.com/api/v1/admin/ac/setting/subactivity/single/data",
          method: "POST",
          headers: {
            Accept: "application/json",
            "treatmentSelect-Type": "application/json;charset=UTF-8",
            Authorization: token,
          },
          data: { sub_id: id },
        });
      }
      const data = res?.data;
      //console.log("single Data", data);
      setSingleData(data?.sub_activity);
    };
    getSingleServiceSubType();
  }, [id]);

  const { register, handleSubmit, reset } = useForm();

  // Editable value
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        description: singleData?.sub_activity,
      });
    }, 100);
  }, [reset, singleData?.sub_activity]);
  //console.log(errors);

  const onSubmit = async (data) => {
    if (id && data?.description !== "") {
      console.log(data);
      try {
        let res = await axios({
          method: "post",
          url: "https://test-prod.therapypms.com/api/v1/admin/ac/setting/subactivity/update",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token || null,
          },
          data: { edit_id: id, description: data?.description },
        });

        console.log(res.data);
        if (res?.data?.status === "success") {
          toast.success("Successfully Updated", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          dispatch(
            fetchServiceSubType({
              endPoint: subActivityEndPoint,
              page,
              token,
              data: { treatment_id: txType, service_id: serviceId },
            })
          );
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
      let res = await axios({
        method: "post",
        url: "https://test-prod.therapypms.com/api/v1/admin/ac/setting/subactivity/save",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
        data: {
          description: data?.description,
          billable_id: billAbleId,
          treatment_id: txType,
          service_id: serviceId,
        },
      });
      console.log(res);
      if (res?.data?.status === "success") {
        toast.success("Successfully Added ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        dispatch(
          fetchServiceSubType({
            endPoint: subActivityEndPoint,
            page,
            token,
            data: { treatment_id: txType, service_id: serviceId },
          })
        );
        handleClose();
      } else {
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
    }
  };
  // console.log("row", row);

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
              Add/Edit Service Sub Type
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className="">
              <div>
                <label className="label">
                  <span className="modal-label-name">Description</span>
                </label>
                <input
                  value={row.last_name}
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="modal-input-field ml-1 w-full"
                  {...register("description")}
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
