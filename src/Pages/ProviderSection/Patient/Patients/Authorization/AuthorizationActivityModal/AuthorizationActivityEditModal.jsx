import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import {
  useGetActivityCptcodeMutation,
  useGetSettingServiceMutation,
  useGetServiceSubTypeMutation,
  usePatientAuthorizationActivityInfoQuery,
  usePatientAuthorizationActivityUpdateMutation,
} from "../../../../../../features/Patient_redux/authorization/authorizationApi";
import useToken from "../../../../../../CustomHooks/useToken";
import ModalLoader from "../../../../../../Loading/ModalLoader";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AuthorizationActivityEditModal = ({
  authorizationActivityId,
  handleClose,
  open,
  treatment_name,
  defaultTreatment, //for the purpose of authorization activity edit
  allTreatment,
}) => {
  console.log("getting treatment_name:-", defaultTreatment, treatment_name);
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const [serviceName, setServiceName] = useState(null);
  const { token } = useToken();
  const { id: authorizationId } = useParams();
  const patientId = localStorage.getItem("p_key");
  const [billed, setBilled] = useState("");
  const [serId, setSerId] = useState(null);
  const [trtId, setTrtId] = useState(null);
  //setting initial service Name
  console.log("service name", serviceName);

  // console.log(
  //   "authorizationId,activityId",
  //   authorizationId,
  //   authorizationActivityId
  // );

  //Patient Authorization Activity Info API
  const {
    data: activityData,
    isLoading: activityLoading,
    isError: activityError,
  } = usePatientAuthorizationActivityInfoQuery({
    token,
    id: authorizationActivityId,
  });

  const {
    activity_one,
    activity_two,
    cpt_code,
    m1,
    m2,
    m3,
    m4,
    billed_type,
    billed_time,
    rate,
    hours_max_is_one,
    hours_max_is_two,
    hours_max_is_three,
    hours_max_per_one,
    hours_max_per_two,
    hours_max_per_three,
    hours_max_one,
    hours_max_two,
    hours_max_three,
  } = activityData?.patientAuthActivity || {};

  //[setting default service name if defaultTreatment and treatment_name are same]
  useEffect(() => {
    setServiceName(activity_one);
  }, [activity_one, defaultTreatment, treatment_name]);

  //Patient Authorization Activity Services api
  const [getSettingService, { data: settingServices, isLoading: settingServicesLoading }] = useGetSettingServiceMutation();
  useEffect(() => {
    getSettingService({
      token,
      payload: {
        treatment_name,
      },
    });
  }, [getSettingService, token, treatment_name]);

  //Patient Authorization Activity SubActivity api
  const [getServiceSubType, { data: settingServiceSubtypeData, isLoading: subTypeLoading }] = useGetServiceSubTypeMutation();
  useEffect(() => {
    if (serId && trtId) {
      getServiceSubType({
        token,
        payload: {
          service_id: serId,
          facility_treatment_id: trtId,
        },
      });
    }
  }, [getServiceSubType, token, serId, trtId]);

  const subtypes = settingServiceSubtypeData || [];

  //Patient Authorization CPT code api
  const [getActivityCptcode, { data: activityCptCode, isLoading: activityCptLoading }] = useGetActivityCptcodeMutation();
  useEffect(() => {
    getActivityCptcode({
      token,
      payload: {
        treatment_name,
      },
    });
  }, [getActivityCptcode, token, treatment_name]);

  //
  const [patientAuthorizationActivityUpdate, { isSuccess: updateSuccess, isError: updateError }] = usePatientAuthorizationActivityUpdateMutation();

  useEffect(() => {
    if (serviceName) {
      setSerId(settingServices?.settService?.find((item) => item?.service === serviceName)?.id);
    }
    if (allTreatment?.length > 0 && treatment_name) {
      setTrtId(allTreatment?.find((item) => item?.treatment_name === treatment_name)?.id);
    }
  }, [serviceName, settingServices, allTreatment, treatment_name]);
  console.log("serId", serId, trtId);

  useEffect(() => {
    setTimeout(() => {
      reset({
        activity_one: activity_one,
        activity_two: activity_two,
        cpt_code: cpt_code,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        rate: rate,
        billed_type: billed_type,
        billed_time, //shortcut cuz backend data key name and react hook register key name same
        hours_max_is_one,
        hours_max_is_two,
        hours_max_is_three,
        hours_max_per_one,
        hours_max_per_two,
        hours_max_per_three,
        hours_max_one,
        hours_max_two,
        hours_max_three,
      });
    }, 1000);
  }, [
    reset,
    activity_one,
    activity_two,
    cpt_code,
    m1,
    m2,
    m3,
    m4,
    billed_type,
    billed_time,
    rate,
    hours_max_is_one,
    hours_max_is_two,
    hours_max_is_three,
    hours_max_per_one,
    hours_max_per_two,
    hours_max_per_three,
    hours_max_one,
    hours_max_two,
    hours_max_three,
  ]);

  const onSubmit = (data) => {
    const payload = {
      activity_id: Number(authorizationActivityId),
      authrization_id: Number(authorizationId),
      activity_one: data?.activity_one,
      activity_two: data?.activity_two,
      cpt_code: Number(data?.cpt_code),
      m1: data?.m1,
      m2: data?.m2,
      m3: data?.m3,
      m4: data?.m4,
      billed_type: data?.billed_type,
      billed_time: data?.billed_time,
      rate: data?.rate,
      hours_max_one: data?.hours_max_one,
      hours_max_per_one: data?.hours_max_per_one,
      hours_max_is_one: data?.hours_max_is_one,
      hours_max_two: data?.hours_max_two,
      hours_max_per_two: data?.hours_max_per_two,
      hours_max_is_two: data?.hours_max_is_two,
      hours_max_three: data?.hours_max_three,
      hours_max_per_three: data?.hours_max_per_three,
      hours_max_is_three: data?.hours_max_is_three,
      notes: notes,
    };
    if (payload) {
      patientAuthorizationActivityUpdate({
        token,
        payload,
      });
    }
    console.log(payload);
  };

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Authorization Activity Updated Successfully", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      handleClose();
    } else if (updateError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [handleClose, updateSuccess, updateError]);

  return (
    <div>
      <div>
        <Modal
          // fullScreen={fullScreen}
          open={open}
          centered
          width={565}
          footer={false}
          closable={false}
          bodyStyle={{ padding: "0" }}
          className="box"
        >
          {settingServicesLoading ? (
            <ModalLoader></ModalLoader>
          ) : (
            <div className="px-5 py-2">
              <div className="flex items-center justify-between">
                <h1 className="text-lg text-left text-orange-400 ">Add/Edit Service</h1>
                <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 font-semibold  text-2xl hover:text-primary" />
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 sm:gap-y-1 gap-y-[1px]">
                  <div>
                    <label className="label">
                      <span className="modal-label-name">
                        Service
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select className="modal-input-field ml-1 w-full" {...register("activity_one")} onChange={(e) => setServiceName(e.target.value)}>
                      {defaultTreatment === treatment_name && <option value={0}>Select</option>}
                      {settingServices?.settService?.map((service) => {
                        return (
                          <option key={service?.id} value={service?.service}>
                            {service?.service}
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
                    <select disabled={subTypeLoading} className="modal-input-field ml-1 w-full" {...register("activity_two")}>
                      {defaultTreatment === treatment_name && <option value={0}>Select</option>}
                      {subtypes?.map((subtype) => {
                        return (
                          <option key={subtype?.id} value={subtype?.sub_activity}>
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
                    <select className="modal-input-field ml-1 w-full" {...register("cpt_code")}>
                      {defaultTreatment === treatment_name && <option value={0}>Select</option>}
                      {activityCptCode?.settingCptCode?.map((cptCode) => {
                        return (
                          <option key={cptCode?.id} value={cptCode?.cpt_id}>
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
                      <input type="text" name="m1" className="modal-input-field ml-1 w-full" {...register("m1")} />
                    </div>
                    <div>
                      <label className="label">
                        <span className="modal-label-name">M2</span>
                      </label>
                      <input type="text" name="m2" className="modal-input-field ml-1 w-full" {...register("m2")} />
                    </div>
                    <div>
                      <label className="label">
                        <span className="modal-label-name">M3</span>
                      </label>
                      <input type="text" name="m3" className="modal-input-field ml-1 w-full" {...register("m3")} />
                    </div>
                    <div>
                      <label className="label">
                        <span className="modal-label-name">M4</span>
                      </label>
                      <input type="text" name="m4" className="modal-input-field ml-1 w-full" {...register("m4")} />
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
                        {...register("billed_type")}
                        onChange={(e) => {
                          setBilled(e.target.value);
                        }}
                      >
                        <option value="15 mins">15 mins</option>
                        <option value="Hour">Hour</option>
                        <option value="Per Unit">Per Unit</option>
                        <option value="Per Session">Per Session</option>
                      </select>
                    </div>
                    {billed === "Per Unit" && (
                      <div className="mt-[32px]">
                        <select className="modal-input-field ml-1 w-full" {...register("billed_time")}>
                          <option value="15 min">15 min</option>
                          <option value="30 min">30 min</option>
                          <option value="45 min">45 min</option>
                          <option value="1 hour">1 hour</option>
                          <option value="2 hour">2 hour</option>
                          <option value="1 min">1 min</option>
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label className="label">
                      <span className="modal-label-name">Rate</span>
                    </label>
                    <input type="text" name="rate" className="modal-input-field ml-1 w-full" {...register("rate")} />
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">
                      Maximum Frequency allowed
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {/* 1 */}
                  <div className="flex sm:flex-wrap-none flex-wrap gap-y-[1px] border border-gray-300 p-1">
                    <div className="  text-xs font-semibold my-auto px-3">Maximum</div>
                    <div className="">
                      <select className="border border-gray-300 rounded-sm px-2 py-[1px] font-medium text-xs w-full" {...register("hours_max_one")}>
                        <option value="Hours">Hours</option>
                        <option value="Unit">Unit</option>
                      </select>
                    </div>
                    <div className=" text-xs font-medium my-auto px-3 mx-1">Per</div>
                    <div className="">
                      <select className="border border-gray-300 rounded-sm px-2 py-[1px]  font-medium text-xs w-full" {...register("hours_max_per_one")}>
                        <option value="0"></option>
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                        <option value="Total Auth">Total Auth</option>
                      </select>
                    </div>
                    <div className=" text-xs font-medium my-auto px-3 mx-1">Is</div>
                    <div className="">
                      <input
                        className="border border-gray-300 rounded-sm px-2 py-[2.5px] font-medium  text-xs w-full"
                        {...register("hours_max_is_one")}
                      ></input>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:flex-wrap-none flex-wrap gap-y-[1px] border border-gray-300 p-1">
                    <div className="  text-xs font-semibold my-auto px-3">Maximum</div>
                    <div className="">
                      <select className="border border-gray-300 rounded-sm  py-[1px]  px-2 font-medium text-xs w-full" {...register("hours_max_two")}>
                        <option value="Hours">Hours</option>
                        <option value="Unit">Unit</option>
                      </select>
                    </div>
                    <div className=" text-xs font-medium my-auto px-3 mx-1">Per</div>
                    <div className="">
                      <select className="border border-gray-300 rounded-sm px-2 py-[1px]  font-medium text-xs w-full" {...register("hours_max_per_two")}>
                        <option value="0"></option>
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                        <option value="Total Auth">Total Auth</option>
                      </select>
                    </div>
                    <div className=" text-xs font-medium my-auto px-3 mx-1">Is</div>
                    <div className="">
                      <input
                        className="border border-gray-300 rounded-sm px-2 py-[2.5px]  font-medium  text-xs w-full"
                        {...register("hours_max_is_two")}
                      ></input>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:flex-wrap-none flex-wrap gap-y-[1px] border border-gray-300 p-1">
                    <div className="  text-xs font-semibold my-auto px-3">Maximum</div>
                    <div className="">
                      <select className="border border-gray-300 rounded-sm px-2 py-[1px]  font-medium text-xs w-full" {...register("hours_max_three")}>
                        <option value="Hours">Hours</option>
                        <option value="Unit">Unit</option>
                      </select>
                    </div>
                    <div className=" text-xs font-medium my-auto px-3 mx-1">Per</div>
                    <div className="">
                      <select className="border border-gray-300 rounded-sm px-2 py-[1px]  font-medium text-xs w-full" {...register("hours_max_per_three")}>
                        <option value="0"></option>
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                        <option value="Total Auth">Total Auth</option>
                      </select>
                    </div>
                    <div className=" text-xs font-medium my-auto px-3 mx-1">Is</div>
                    <div className="">
                      <input
                        className="border border-gray-300 rounded-sm px-2 py-[2px] font-medium  text-xs w-full"
                        {...register("hours_max_is_three")}
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">Notes</span>
                  </label>

                  <div>
                    <TextArea onChange={(e) => setNotes(e.target.value)} maxLength={1002} rows={3} placeholder=" Notes" size="large" />
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
          )}
        </Modal>
      </div>
    </div>
  );
};

export default AuthorizationActivityEditModal;
