import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { headers } from "../../Misc/BaseClient";

const AddModal = ({ newData, setNewData}) => {


  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (FormData) => {
    console.log(FormData);
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
        setNewData(FormData)
       
        // setdatahit(true)
        // console.log('datahit modal', datahit)

        //After posting data to database successfully we will append the responsed date with the existing table data using spread operator concept it will reduce the api calling problem
        // setItems([...items, res?.data?.pos_data]);
      }
    } catch (error) {
      console.log(error.response.data.message); // this is the main part. Use the response property from the error object
    }
  };
  return (
    <div className="h-[600px] bg-pink-200 ">
      <h1>ADD Modal</h1>
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
              <span className="modal-label-name">Place of Service Code</span>
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
        </div>
      </form>
    </div>
  );


};


export default AddModal;