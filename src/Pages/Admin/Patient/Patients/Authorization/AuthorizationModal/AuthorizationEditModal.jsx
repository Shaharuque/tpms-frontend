import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import {
  useGetActivityCptcodeQuery,
  useGetActivityServicesQuery,
  useGetActivitySubtypesQuery,
} from "../../../../../../features/Patient_redux/authorization/authorizationApi";
import useToken from "../../../../../../CustomHooks/useToken";

const AuthorizationEditModal = ({
  handleClose,
  open,
  editableRow,
  treatment_name,
}) => {
  // console.log("getting treatment_name:-", treatment_name);
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const { token } = useToken();

  //Patient Authorization Activity Services api
  const { data: activityServices, isLoading: activityServicesLoading } =
    useGetActivityServicesQuery({
      token,
      payload: {
        treatment_name,
      },
    });
  const { data: activitySubtypes, isLoading: activitySubtypesLoading } =
    useGetActivitySubtypesQuery({
      token,
      payload: {
        treatment_name,
      },
    });
  const { data: activityCptCode, isLoading: activityCptLoading } =
    useGetActivityCptcodeQuery({
      token,
      payload: {
        treatment_name,
      },
    });
  console.log(activityServices, activitySubtypes, activityCptCode);
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  useEffect(() => {
    setTimeout(() => {
      reset({
        // description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset, editableRow]);
  return (
    <div>
      <div>
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
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
                  <div>
                    <label className="label">
                      <span className="modal-label-name">
                        Service
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("service")}
                    >
                      {activityServices?.services?.map((service) => {
                        return (
                          <option
                            key={service?.id}
                            value={service?.description}
                          >
                            {service?.description}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="modal-label-name">
                        Service Sub-Type
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("service_sub_type")}
                    >
                      {activitySubtypes?.subtypes?.map((subtype) => {
                        return (
                          <option
                            key={subtype?.id}
                            value={subtype?.sub_activity}
                          >
                            {subtype?.sub_activity}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="modal-label-name">
                        CPT Code
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("cpt_code")}
                    >
                      {activityCptCode?.cptcodes?.map((cptCode) => {
                        return (
                          <option key={cptCode?.id} value={cptCode?.cpt_code}>
                            {cptCode?.cpt_code}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label className="label">
                        <span className="modal-label-name">M1</span>
                      </label>
                      <input
                        type="text"
                        name="m1"
                        className="modal-input-field ml-1 w-full"
                        {...register("m1")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="modal-label-name">M2</span>
                      </label>
                      <input
                        type="text"
                        name="m2"
                        className="modal-input-field ml-1 w-full"
                        {...register("m2")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="modal-label-name">M3</span>
                      </label>
                      <input
                        type="text"
                        name="m3"
                        className="modal-input-field ml-1 w-full"
                        {...register("m3")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="modal-label-name">M4</span>
                      </label>
                      <input
                        type="text"
                        name="m4"
                        className="modal-input-field ml-1 w-full"
                        {...register("m4")}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label className="label">
                        <span className="modal-label-name">
                          Billed Per
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        className="modal-input-field ml-1 w-full"
                        {...register("per_unit")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="mt-[32px]">
                      <select
                        className="modal-input-field ml-1 w-full"
                        {...register("minute")}
                      >
                        <option value="single"></option>
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label className="label">
                      <span className="modal-label-name">Rate</span>
                    </label>
                    <input
                      type="text"
                      name="rate"
                      className="modal-input-field ml-1 w-full"
                      {...register("rate")}
                    />
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">
                      Maximum Frequency allowed
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-3 border border-gray-300 p-1">
                    <div className="  text-sm font-semibold my-auto px-3">
                      Maximum
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="hours">Hours</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium my-auto px-3 mx-1">
                      Per
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3 mx-1">
                      Is
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px]  text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 border border-gray-300 p-1">
                    <div className="  text-sm font-semibold my-auto px-3">
                      Maximum
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="hours">Hours</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium my-auto px-3 mx-1">
                      Per
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3 mx-1">
                      Is
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px]  text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 border border-gray-300 p-1">
                    <div className="  text-sm font-semibold my-auto px-3">
                      Maximum
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="hours">Hours</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium my-auto px-3 mx-1">
                      Per
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3 mx-1">
                      Is
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px]  text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">Notes</span>
                  </label>

                  <div>
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={1002}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
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
      </div>
    </div>
  );
};

export default AuthorizationEditModal;
