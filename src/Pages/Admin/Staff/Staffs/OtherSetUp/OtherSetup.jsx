import { Switch } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import {
  useAddOtherSetupMutation,
  useGetOtherSetupQuery,
} from "../../../../../features/Stuff_redux/otherSetup/otherSetupApi";
import Loading from "../../../../../Loading/Loading";
import BoolConverter from "../../../../Shared/BoolConverter/BoolConverter";
import OtherSetUpBottom from "./OtherSetUpBottom/OtherSetUpBottom";

const OtherSetup = () => {
  const [loading, setLoading] = useState(false);
  const store = [];
  const { token } = useToken();
  const { id } = useParams();
  const [txTypedata, settxTypedata] = useState([]);
  const [singleInput, setsingleInput] = useState([]);
  const { register, control, handleSubmit, reset } = useForm();

  //Get otherSetup Api
  const {
    data: otherSetup,
    isLoading: otherSetupLoading,
    isSuccess: otherSetupSuccess,
    isError,
  } = useGetOtherSetupQuery({
    token,
    id,
  });

  // ADD OTHER SETUP API
  const [addOtherSetup, { isSuccess, data, isError: addotherSetupError }] =
    useAddOtherSetupMutation();

  //Clients multi select data from server
  useEffect(() => {
    const othersetupApicall = async () => {
      setLoading(true);
      const res = await axios({
        method: "GET",
        url: `https://test-prod.therapypms.com/api/v1/internal/admin/ac/staff/other/setup/${id}`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || null,
        },
      });

      settxTypedata(res.data?.tx_type_data);
      reset();
      setLoading(false);
      // setsingleInput(res.data?.info);
    };
    othersetupApicall();
  }, [id, token, isSuccess]);

  //Success/Error message show added api
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (addotherSetupError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [addotherSetupError, data?.message, isSuccess]);

  const {
    adp_employee_id,
    created_at,
    custom_five,
    custom_four,
    custom_six,
    custom_three,
    custom_two,
    degree_level,
    employee_id,
    exemt_staff,
    external_software_id,
    gets_paid_holiday,
    heigh_degree,
    is_contractor,
    is_parttime,
    max_hour_per_day,
    max_hour_per_week,
    paid_time_off,
    provider_level,
    provider_render_without,
    signature_image,
    signature_valid_form,
    signature_valid_to,
    updated_at,
  } = otherSetup?.info || {};

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        adp_employee_id,
        created_at,
        custom_five,
        custom_four,
        custom_six,
        custom_three,
        custom_two,
        degree_level,
        employee_id,
        exemt_staff,
        external_software_id,
        gets_paid_holiday,
        heigh_degree,
        is_contractor,
        is_parttime,
        max_hour_per_day,
        max_hour_per_week,
        paid_time_off,
        provider_level,
        provider_render_without,
        signature_image,
        signature_valid_form,
        signature_valid_to,
        updated_at,
      });
    }, 0);
  }, [
    reset,
    adp_employee_id,
    created_at,
    custom_five,
    custom_four,
    custom_six,
    custom_three,
    custom_two,
    degree_level,
    employee_id,
    exemt_staff,
    external_software_id,
    gets_paid_holiday,
    heigh_degree,
    is_contractor,
    is_parttime,
    max_hour_per_day,
    max_hour_per_week,
    paid_time_off,
    provider_level,
    provider_render_without,
    signature_image,
    signature_valid_form,
    signature_valid_to,
    updated_at,
  ]);

  // bollian value all state
  const [paidTimeOff, setPaidTimeOff] = useState(BoolConverter(paid_time_off));
  const [exemptStaff, setExemptStaff] = useState(BoolConverter(exemt_staff));
  const [paidHoliday, setPaidHoliday] = useState(
    BoolConverter(gets_paid_holiday)
  );
  const [isPartTime, setIsPartTime] = useState(BoolConverter(is_parttime));
  const [isContractor, setIsContractor] = useState(
    BoolConverter(is_contractor)
  );
  const [providerWithoutNote, setProviderWithoutNote] = useState(
    BoolConverter(1)
  );

  // boolian value data control
  useEffect(() => {
    setPaidTimeOff(BoolConverter(paid_time_off));
    setExemptStaff(BoolConverter(exemt_staff));
    setPaidHoliday(BoolConverter(gets_paid_holiday));
    setIsPartTime(BoolConverter(is_parttime));
    setIsContractor(BoolConverter(is_contractor));
  }, [
    exemt_staff,
    gets_paid_holiday,
    is_contractor,
    is_parttime,
    paid_time_off,
  ]);

  console.log("single input", singleInput);

  const txTypeStore =
    (txTypedata &&
      txTypedata.length > 0 &&
      txTypedata.map((item) => store.push(item.id))) ||
    [];

  console.log("store", store);

  const onSubmit = (data) => {
    // console.log("from data", data);
    const payload = {
      ...data,
      edit_id: employee_id,
      paid_time_off: BoolConverter(paidTimeOff),
      exemt_staff: BoolConverter(exemptStaff),
      gets_paid_holiday: BoolConverter(paidHoliday),
      is_parttime: BoolConverter(isPartTime),
      is_contractor: BoolConverter(isContractor),
      provider_render_without: BoolConverter(providerWithoutNote),
      edit_tx_id: store,
    };
    console.log("payload", payload);
    addOtherSetup({ token, payload });
  };
  if (otherSetupLoading || loading) {
    return <Loading />;
  }

  // console.log("dm", dm);
  // console.log("loading..", loading);
  return (
    <div className="md:h-[100vh]">
      <h1 className="text-lg mt-2 text-left text-orange-400">Other Setup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-4 gap-y-2">
          {/* name  */}
          <div>
            <label className="label">
              <span className=" label-font">Max Hours For Day</span>
            </label>
            <input
              type="text"
              name="max_hour_per_day"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("max_hour_per_day")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Max Hours For Week</span>
            </label>
            <input
              type="text"
              name="max_hour_per_week"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("max_hour_per_week")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">ADP Employee Id</span>
            </label>
            <input
              type="text"
              name="adp_employee_id"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("adp_employee_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Provider Level</span>
            </label>
            <input
              type="text"
              name="provider_level"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("provider_level")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">custom2</span>
            </label>
            <input
              type="text"
              name="custom_two"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_two")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom3</span>
            </label>
            <input
              type="text"
              name="custom_three"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_three")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom4</span>
            </label>
            <input
              type="text"
              name="custom_four"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_four")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom5</span>
            </label>
            <input
              type="text"
              name="custom_five"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_five")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom6</span>
            </label>
            <input
              type="text"
              name="custom_six "
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_six")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Highest Degree</span>
            </label>
            <input
              type="text"
              name="heigh_degree"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("heigh_degree")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Degree Level</span>
            </label>
            <select
              className="input-border input-font w-full focus:outline-none "
              {...register("degree_level")}
            >
              <option value=""></option>
              <option value="1">Associate degree</option>
              <option value="2">Bachelor’s Degree</option>
              <option value="3">Master’s Degree</option>
              <option value="4">Doctorate</option>
              <option value="5">BCBA</option>
              <option value="6">BCBA-D</option>
              <option value="7">BCABA</option>
              <option value="8">High School</option>
              <option value="9">Enrolled Masters</option>
              <option value="10">RBT</option>
              <option value="11">PsyD</option>
              <option value="13">LCSW</option>
              <option value="15">BT</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">External Software Id</span>
            </label>
            <input
              type="text"
              name="external_software_id"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("external_software_id")}
            />
          </div>

          <div>
            <label className="label">
              <span className=" label-font">Signature Valid From</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none py-[1px]"
              type="date"
              {...register("signature_valid_form")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Signature Valid To</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none py-[1px]"
              type="date"
              {...register("signature_valid_to")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Upload File</span>
            </label>
            <input
              type="file"
              className=" px-2 text-xs w-full"
              {...register("signature_image")}
            />
          </div>
        </div>

        {/* --------------------------------- */}
        <div className="my-5">
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={paidTimeOff}
              onClick={() => setPaidTimeOff(!paidTimeOff)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is eligible for paid time off
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={exemptStaff ? true : false}
              onClick={() => setExemptStaff(!exemptStaff)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Exempt Staff
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={paidHoliday}
              onClick={() => setPaidHoliday(!paidHoliday)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Gets paid holidays
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={isPartTime}
              onClick={() => setIsPartTime(!isPartTime)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is Parttime
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={isContractor}
              onClick={() => setIsContractor(!isContractor)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is Contractor
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={providerWithoutNote}
              onClick={() => setProviderWithoutNote(!providerWithoutNote)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Prevent Provider Render Without Notes(for catalyst users)
            </span>
          </div>
        </div>
        <div className="other-box ml-2 my-10">
          <div className="flex items-center justify-around gap-2 mb-4 ">
            <h3 className="text-sm font-medium w-80">Tax Type</h3>
            <h3 className="text-sm font-medium w-80 text-center">Box 24J</h3>
            <h3 className="text-sm font-medium w-80 text-center">
              ID Qualifier
            </h3>
          </div>

          {/* {!otherSetupLoading ? (
            <Loading />
          ) : ( */}
          {loading ? (
            <p>loadin</p>
          ) : (
            <OtherSetUpBottom
              // propdata={{ fields, register, OtherSetupApiData, dm }}
              propdata={{ register, txTypedata, loading }}
            />
          )}
          {/* )} */}
        </div>
        <div className="mt-10 ml-2">
          <button className=" pms-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtherSetup;
