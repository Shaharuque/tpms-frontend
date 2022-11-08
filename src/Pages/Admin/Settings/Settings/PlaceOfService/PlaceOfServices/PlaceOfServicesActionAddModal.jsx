import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { headers } from "../../../../../../Misc/BaseClient";
import "../../../../../Style/Pagination.css";

export default function PlaceOfServicesActionAddModal({
  handleClose,
  open,
  recordData,
  items,
  setItems,
  setTotalPage,
  page,
}) {
  const { id, pos_code, pos_name } = recordData;
  console.log(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (FormData) => {
    console.log(FormData);
    //create new pos [post req]
    if (FormData && !id) {
      try {
        let res = await axios({
          method: "post",
          url: "https://app.therapypms.com/api/v1/admin/ac/setting/create/pos",
          headers: headers,
          data: FormData,
        });

        // console.log(res.data);
        if (res.data.status === "success") {
          console.log("Successfully Inserted");
          //After posting data to database successfully we will append the responsed date with the existing table data using spread operator concept it will reduce the api calling problem
          // setItems([...items, res?.data?.pos_data]);
          const getPatientsData = async (page = 1) => {
            const res = await axios({
              method: "get",
              url: `https://app.therapypms.com/api/v1/admin/ac/setting/get/pos?page=${page}`,
              headers: headers,
            });
            // const result = await res.json();
            const result = res?.data?.pos_data?.data;
            //console.log(result);
            setItems(result);
            setTotalPage(res?.data?.pos_data?.last_page);
          };
          getPatientsData(page);
          handleClose();
        }
      } catch (error) {
        console.log(error.response.data.message); // this is the main part. Use the response property from the error object
      }
    }
    //Update the pos if any pos clicked
    else {
      const payload = {
        pos_id: id,
        pos_name: FormData?.pos_name,
        pos_code: FormData?.pos_code,
      };
      try {
        let res = await axios({
          method: "post",
          url: "https://app.therapypms.com/api/v1/admin/ac/setting/update/pos",
          headers: headers,
          data: payload,
        });

        // console.log(res.data);
        if (res.data.status === "success") {
          console.log("Successfully Updated");
          //for showing updated data in real time
          const getPatientsData = async (page = 1) => {
            const res = await axios({
              method: "get",
              url: `https://app.therapypms.com/api/v1/admin/ac/setting/get/pos?page=${page}`,
              headers: headers,
            });
            // const result = await res.json();
            const result = res?.data?.pos_data?.data;
            //console.log(result);
            setItems(result);
            setTotalPage(res?.data?.pos_data?.last_page);
          };
          getPatientsData(page);
          handleClose();
        }
      } catch (error) {
        console.log(error.response.data.message); // this is the main part. Use the response property from the error object
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
              Edit Document
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
