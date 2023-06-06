import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import "../../../../../Style/Pagination.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPOS } from "../../../../../../features/Settings_redux/placeOfServiceSlice";
import { baseIp } from "../../../../../../Misc/BaseClient";

export default function PlaceOfServicesActionAddModal({
  handleClose,
  open,
  recordData,
  page,
  token,
  endPoint,
}) {
  const { id, pos_code, pos_name } = recordData;
  console.log(id);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    if (formData && !id) {
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/add/pos/code`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: formData,
        });
        if (res?.data?.status === "success") {
          toast.success("successfully added new pos code", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: { fontSize: "12px" },
          });
          dispatch(fetchPOS({ page, token }));
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
    }

    //Update the pos if any pos clicked
    else {
      const payload = {
        pos_id: id,
        ...formData,
      };
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/update/pos/code`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: payload,
        });

        console.log(res);
        if (res.data.status === "success") {
          toast.success("successfully updated pos code", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
          //for showing updated data in real time
          dispatch(fetchPOS({ page, token }));
          handleClose();
        } else {
          toast.error("having issue to update for now", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
          });
        }
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        });
      }
    }
  };

  // Editable value
  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        pos_code: pos_code,
        pos_name: pos_name ? pos_name : null,
      });
    }, 100);
  }, [reset, pos_name, pos_code]);
  //console.log(errors);

  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={600}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Add Place of Service
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 my-3 mr-2 gap-x-4 gap-y-4">
              <div className="mt-[-15px]">
                <label className="label">
                  <span className="modal-label-name">Place of Service</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Here"
                  name="pos_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("pos_name")}
                  required
                />
              </div>
              <div className="mt-[-15px]">
                <label className="label">
                  <span className="modal-label-name">
                    Place of Service Code
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Here"
                  name="pos_code"
                  className="modal-input-field ml-1 w-full"
                  {...register("pos_code")}
                  required
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
