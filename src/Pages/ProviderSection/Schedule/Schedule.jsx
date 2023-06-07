import { Switch } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PatientSelect from "./AllMultiSelectComponents/PatientSelect";
import { RiArrowLeftRightLine } from "react-icons/ri";
import CustomDateRange from "../../Shared/CustomDateRange/CustomDateRange";
import { useSelector } from "react-redux";
import { providerIp } from "../../../Misc/BaseClient";
import axios from "axios";
import useToken from "../../../CustomHooks/useToken";
import ProviderSelect from "./AllMultiSelectComponents/ProviderSelect";

//Date converter function [yy-mm-dd]
function convert(str) {
  let date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

const Schedule = () => {
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patientsId, setPatientsId] = useState([]);
  const [providers, setProviders] = useState([]);
  const [providersId, setProvidersId] = useState([]);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const { token } = useToken();
  // is fixed toggle
  const isToggled = useSelector((state) => state.sideBarInfo);
  console.log(providersId, patientsId);

  const handleBillable = (e) => {
    setBillable(!billable);

    //Non-billable Session Table Will be closed and
    // setprocceed(false);
    // setNonBillableData([]);
    // setNonBillablePage(1);
  };

  //Date Range Picker
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    setOpenCalendar(false);
  };

  //Provider multi select data from server(Provider=>Stuff)
  useEffect(() => {
    const getProviderData = async () => {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/get/all/providers`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      const data = res?.data;
      setProviders(data);
    };
    getProviderData();
  }, [token]);

  //Clients multi select data from server(Client=>Patient)
  useEffect(() => {
    const getPatientsData = async () => {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/get/all/patients`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      const data = res?.data;
      //console.log(data);
      setPatients(data);
    };
    getPatientsData();
  }, [token]);

  //Initial manage session data fetching(This api call will be done for once)
  useEffect(() => {
    const getSessionData = async () => {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/get/all/sessions`,
        headers: {
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: {
          start_data: convert(range[0]?.startDate),
          end_date: convert(range[0]?.endDate),
          patient_ids: "",
          provider_ids: "",
          status: "",
          app_type_check: 1,
          load_check: 1,
          notes_avail: 1,
        },
      });
      const data = res?.data;
      console.log("initial session data", data);
    };
    getSessionData();
  }, [token, range[0]?.startDate, range[0]?.endDate]);

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate ? startDate.toLocaleString("en-us", { month: "short" }) : null;
  const endMonth = endDate ? endDate.toLocaleString("en-us", { month: "short" }) : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate ? startDate.getFullYear().toString().slice(2, 4) : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;
  //End Date Range Picker

  console.log("range", range);

  // Hide calendar on outside click
  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpenCalendar(false);
    }
  };
  //end outside click

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        start_date: startDate ? `${startMonth} ${startDay}, ${startYear}` : "",
        end_date: endDate ? `${endMonth} ${endDay}, ${endYear}` : "",
      });
    }, 0);
  }, [reset, startDate, startMonth, startDay, startYear, endDate, endMonth, endDay, endYear]);
  const onSubmit = async (data) => {
    const from_date = convert(data?.start_date);
    const to_date = convert(data?.end_date);
    console.log("converted date", from_date, to_date);

    // const payLoad = {
    //   patient_ids: patientId,
    //   provider_id: stuffsId?.length > 0 ? stuffsId : "",
    //   status: data?.status,
    //   ses_pos: location,
    //   ses_app_type: 1,
    //   from_date: from_date,
    //   to_date: to_date,
    // };
    // if (payLoad?.to_date === "NaN-aN-aN") {
    //   toast.error(<h1 className="font-bold">Select Valid Date-Range</h1>, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     theme: "light",
    //   });
    // } else {
    //   setFromData(payLoad);
    //   setPage(1);
    // }
    // handlePageClick({ selected: 0 });
  };

  // Non billable Session Handler Code
  const nonBillableSessionHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    // const selectedProviderIds = { provider_id: stuffsId };
    // setPayload(selectedProviderIds);
    // setprocceed(true);
    // setNonBillablePage(1);
  };

  return (
    <div className="text-black h-[100vh]">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-[16px] font-semibold ">Manage Sessions</h1>
      </div>
      <div className="flex items-center sm:justify-end sm:my-0 my-2 flex-wrap gap-2">
        <div>
          <Switch color="default" defaultChecked size="small" onClick={handleBillable} />

          <label className="form-check-label inline-block ml-2 text-[14px]" htmlFor="flexSwitchCheckDefault">
            {billable ? "Billable" : "Non-Billable"}
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className=" flex item-center  flex-wrap gap-3 ">
          {/* <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 2xl:grid-cols-8 gap-2 mb-2"> */}

          <div>
            <label className="label">
              <span className="label-text mb-[2px] text-[14px]  text-left">Provider</span>
            </label>

            <ProviderSelect providers={providers} setProvidersId={setProvidersId}></ProviderSelect>
          </div>
          <div>
            <label className="label">
              <span className="label-text mb-[2px] text-[14px]  text-left">Client</span>
            </label>

            <PatientSelect patients={patients} setPatientsId={setPatientsId}></PatientSelect>
          </div>
          <div className="md:w-[250px] w-[200px]">
            <label className="label">
              <span className="label-text text-[14px]  text-left">Date Range</span>
            </label>
            {/* Date Range calender will be set here */}
            <div className="ml-1">
              <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm  w-full pb-[2px]">
                <input
                  value={startDate ? `${startMonth} ${startDay}, ${startYear}` : "Start Date"}
                  readOnly
                  onClick={() => setOpenCalendar(true)}
                  className="focus:outline-none font-medium text-center text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                  {...register("start_date")}
                />
                <RiArrowLeftRightLine className="w-1/3 text-gray-600"></RiArrowLeftRightLine>
                <input
                  value={endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"}
                  readOnly
                  onClick={() => setOpenCalendar(true)}
                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                  {...register("end_date")}
                />
              </div>
              {/* Multi date picker component called */}
              <div
                ref={refClose}
                className={
                  isToggled
                    ? "absolute z-10 2xl:ml-[0%] xl:ml-[-25%] lg:ml-[0%] md:ml-[0%] md:mr-[5%] sm:mr-[14%] mt-1 "
                    : "absolute z-10 2xl:ml-[0%] xl:ml-[-10%] lg:ml-[0%] md:ml-[0%] md:mr-[5%] sm:mr-[14%] mt-1 "
                }
              >
                {openCalendar && (
                  <CustomDateRange range={range} setRange={setRange} handleCancelDate={handleCancelDate} setOpen={setOpenCalendar}></CustomDateRange>
                )}
              </div>
            </div>
          </div>

          {billable && (
            <>
              <div>
                <label className="label">
                  <span className="label-text mb-[2px] text-[14px]  text-left">Status</span>
                </label>
                <PatientSelect></PatientSelect>
              </div>
            </>
          )}
          <div>
            <label className="label">
              <span className="label-text mb-[2px] text-[14px]  text-left">Notes</span>
            </label>
            <PatientSelect></PatientSelect>
          </div>
          <button className="schedule-go-btn " type="submit">
            Go
          </button>

          {table && (
            <>
              {/* <button
                          onClick={clearFilters}
                          className="2xl:mb-2 xl:mb-0 lg:mb-0 md:mb-0 2xl:mt-[35px] xl:mt-[0px] py-2 px-1  bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
                        >
                          Clear filters
                        </button> */}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Schedule;
