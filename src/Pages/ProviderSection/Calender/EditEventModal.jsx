import React, { useEffect, useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { useForm } from "react-hook-form";
import { Modal, Switch, TimePicker } from "antd";
import {
  IoCloseCircleOutline,
  IoTrashOutline,
  IoChatboxEllipsesOutline,
  IoFileTrayFullOutline,
  IoCopyOutline,
  IoEyeOutline,
  IoAdd,
} from "react-icons/io5";
import axios from "axios";
import Calendar from "react-calendar";
import { patientIp, providerIp } from "../../../Misc/BaseClient";
import useToken from "../../../CustomHooks/useToken";
import Loading from "../../../Loading/Loading";
import moment from "moment";

import CopyNotes from "./EditModalHelper/CopyNotes";
import ViewNotes from "./EditModalHelper/ViewNotes";
import MessegeShow from "./EditModalHelper/MessegeShow";
import AddSessionNote from "./EditModalHelper/AddSessionNote";

//To Convert Date YY/MM/DD(2022-10-21) to MM/DD/YY
const dateConverter = (date) => {
  const afterSplit = date?.split("-");
  console.log(afterSplit);
  if (afterSplit?.length > 0) {
    return `${afterSplit[1]}/${afterSplit[2]}/${afterSplit[0]}`;
  }
};

const EditEventModal = ({
  selectedDate,
  handleClose,
  clicked,
  refetch,
  eventId,
}) => {
  console.log(eventId);
  const [eventDetails, setEventDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [fromtime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);

  const from_Time = (time, timeString) => {
    console.log("From-Time", timeString);
    setFromTime(timeString);
  };

  const to_Time = (time, timeString) => {
    console.log("To-Time", timeString);
    setToTime(timeString);
  };
  console.log("after selecting time", fromtime, toTime);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const [view, setView] = useState(false);
  const [sessionopen, setSessionOpen] = useState(false);
  const [messege, setMessege] = useState(false);
  const [opencalender, setOpencalender] = useState(false);
  const [date, setDate] = useState(new Date());
  const { token } = useToken();
  const month = date ? date.toLocaleString("en-us", { month: "long" }) : null;
  const currentDate = date ? date.getDate() : null;
  const year = date ? date.getFullYear() : null;

  const handleClearDate = () => {
    setOpen(false);
    setOpencalender(false);
    setDate(null);
    setCopy(false);
    setView(false);
    setMessege(false);
    //setSessio(false);
  };
  const handleCancelDate = () => {
    setOpen(false);
    setOpencalender(false);
    setDate(new Date());
    setCopy(false);
    setView(false);
    setMessege(false);
    //setSessio(false);
  };

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        check_date: date ? date.toLocaleDateString() : null,
      });
    }, 0);
    // }, [date.toLocaleDateString()]);
  }, [date, reset]);

  //Event Details get based of eventId
  useEffect(() => {
    const getEventDetails = async () => {
      setLoading(true);
      try {
        const payload = {
          appointment_id: eventId,
        };

        const response = await axios({
          method: "post",
          url: `${providerIp}/calender/single/event/details`,
          headers: {
            "content-type": "Application/json",
            "x-auth-token": token,
          },
          data: payload,
        });

        const result = response?.data?.data;
        setEventDetails(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // If clicked of specific event in the calender then getEventDetails function will be called
    if (eventId) {
      getEventDetails();
    }
  }, [eventId, token]);

  let dateConverted = dateConverter(eventDetails?.schedule_date);

  useEffect(() => {
    if (dateConverted) {
      setDate(new Date(dateConverted));
    }
  }, [dateConverted]);

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        patient: eventDetails
          ? eventDetails?.app_patient?.client_full_name
          : null,
        provider: eventDetails ? eventDetails?.app_provider?.full_name : null,
        auth: eventDetails ? eventDetails?.app_auth?.authorization_name : null,
        activity: eventDetails
          ? eventDetails?.app_activity?.activity_name
          : null,
        from_time: eventDetails
          ? moment(eventDetails.from_time).format("hh:mm")
          : null,
        to_time: eventDetails
          ? moment(eventDetails.to_time).format("hh:mm")
          : null,
        status: eventDetails ? eventDetails?.status : null,
      });
    }, 0);
  }, [reset, selectedDate, eventId, eventDetails]);

  const onSubmit = (data) => {
    //console.log(data);
    const title = "Jo Co: Fa Aa";
    const color = "#FEE9A6";
    const display = "background-inverse";
    const start = data?.from_date + "T" + data?.from_time;
    const end = data?.from_date + "T" + data?.to_time;
    //console.log(start, end);
    const final = { title, ...data, start, end, color, display };
    console.log(final);

    // reset();
  };
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <Modal
        open={clicked} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={500}
        closable={false}
        className="box rounded-xl overflow-auto"
        // onClose={handleClose}
        // aria-labelledby="responsive-dialog-title"
      >
        {loading ? (
          <Loading />
        ) : (
          <div className="px-0 py-2 font-[poppins,sans-serif]">
            <div className="flex items-center justify-between px-3 py-2">
              {!eventId ? (
                <h1 className="text-lg text-left text-orange-400 ">
                  Edit Appointment
                </h1>
              ) : (
                <h1 className="text-lg text-left text-orange-400 ">
                  Appoinment Details
                </h1>
              )}
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="h-[518px] overflow-auto px-3 py-2">
              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1">
                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    Patient Name
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full"
                  {...register("patient")}
                >
                  <option value="">Select</option>
                  <option value={eventDetails?.app_patient?.client_full_name}>
                    {eventDetails?.app_patient?.client_full_name}
                  </option>
                </select>
                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    Auth
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full"
                  {...register("auth")}
                >
                  <option value="">Select</option>
                  <option value={eventDetails?.app_auth?.authorization_name}>
                    {eventDetails?.app_auth?.authorization_name}
                  </option>
                </select>
                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    Service
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full"
                  {...register("activity")}
                >
                  <option value="">Select</option>
                  <option value={eventDetails?.app_activity?.activity_name}>
                    {eventDetails?.app_activity?.activity_name}
                  </option>
                </select>
                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    Provider Name
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full"
                  {...register("provider")}
                >
                  <option value="">Select</option>
                  <option value={eventDetails?.app_provider?.full_name}>
                    {eventDetails?.app_provider?.full_name}
                  </option>
                </select>
                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    POS
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full"
                  {...register("provider")}
                >
                  <option value="">Select</option>
                  <option value={eventDetails?.app_provider?.full_name}>
                    {eventDetails?.app_provider?.full_name}
                  </option>
                </select>
                <label className="label">
                  <span className="modal-label-name text-[12px]">
                    From Date
                  </span>
                </label>
                <input
                  name="date"
                  readOnly
                  onClick={() => setOpen(!open)}
                  value={date ? date.toLocaleDateString() : "Select a Date"}
                  className="col-span-2 ml-1 w-full p-2 font-[poppings,sans-serif] text-[12px] border border-gray-300 rounded-sm"
                />

                {open && (
                  <Modal
                    open={open}
                    centered
                    footer={null}
                    closable={false}
                    bodyStyle={{
                      padding: "0px",
                    }}
                  >
                    <div className="grid grid-cols-3">
                      {date ? (
                        <div className="bg-[#0AA7B8] bold text-white col-span-1 rounded-l-[5px]">
                          <div className="w-full h-16 flex justify-center items-center bg-[#0AA7B8] backdrop-blur-xl rounded drop-shadow-lg">
                            <span className="text-xl">
                              {days[date.getDay()]}
                            </span>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <h1 className="text-8xl font-medium">
                              {currentDate}
                            </h1>
                            <h1 className="text-xl font-medium">{month}</h1>
                          </div>
                          <div className="flex justify-center items-end">
                            <h1 className="text-4xl font-medium mt-4">
                              {year}
                            </h1>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-[#0AA7B8] text-white font-bold rounded-l-[5px]">
                          <div className="w-full h-16 bg-[#0AA7B8] backdrop-blur-xl rounded drop-shadow-lg"></div>
                          <div className="text-center m-1 pt-8">
                            <h1 className="text-3xl">Please Select a Date</h1>
                          </div>
                        </div>
                      )}
                      {/* single calendar */}
                      <div className="col-span-2 w-[95%] my-0 mx-auto">
                        <Calendar onChange={setDate} value={date} />
                        <div className="flex justify-between rounded-b-[5px] bg-white py-1 rounded-br-[5px]">
                          <button
                            onClick={() => handleClearDate()}
                            className="text-[12px] text-red-400 hover:bg-black hover:text-white p-2 rounded"
                          >
                            CLEAR
                          </button>
                          <div>
                            <button
                              onClick={() => handleCancelDate()}
                              className="text-[12px] text-[#0AA7B8] hover:bg-black hover:text-white p-2 rounded"
                            >
                              CANCEL
                            </button>
                            <button
                              onClick={() => setOpen(false)}
                              className="text-[12px] ml-2 text-[#0AA7B8] hover:bg-teal-500 hover:text-white p-2 rounded"
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                )}
                {/* Custom Calender End */}

                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    From
                  </span>
                </label>
                <input
                  className="border border-gray-300 col-span-2 rounded-sm p-2 py-[3px] mx-1 text-[12px] w-full"
                  type="time"
                  {...register("from_time")}
                />

                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    To
                  </span>
                </label>
                <input
                  className="border border-gray-300 col-span-2 rounded-sm p-2 py-[3px] mx-1 text-[12px] w-full"
                  type="time"
                  {...register("to_time")}
                />
                <label className="label">
                  <span className="modal-label-name font-medium flex items-center text-[12px] text-gray-600 text-left">
                    Status
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full"
                  {...register("status")}
                >
                  <option value="">Select</option>
                  <option value={eventDetails?.status}>
                    {eventDetails?.status}
                  </option>
                </select>
              </div>

              <div className=" flex flex-wrap gap-1 items-center justify-between mt-2">
                <button
                  className="pms-button  mr-2"
                  onClick={() => setSessionOpen(!sessionopen)}
                >
                  <IoFileTrayFullOutline className="inline text-xl mr-1" /> Add
                  Session Notes
                </button>

                {sessionopen && (
                  <AddSessionNote
                    sessionopen={sessionopen}
                    setSessionOpen={setSessionOpen}
                  ></AddSessionNote>
                )}

                <button
                  className=" pms-button  mr-2"
                  onClick={() => setCopy(!copy)}
                >
                  <IoCopyOutline className="inline text-xl mr-1" />
                  Copy Notes
                </button>
                {copy && <CopyNotes copy={copy} setCopy={setCopy}></CopyNotes>}
                <button
                  className=" pms-button  mr-2"
                  onClick={() => setView(!view)}
                >
                  <IoEyeOutline className="inline text-xl mr-1" />
                  view notes
                </button>
                {view && <ViewNotes view={view} setView={setView}></ViewNotes>}
                <button>
                  {" "}
                  <IoChatboxEllipsesOutline
                    className="text-gray-600 text-xl hover:text-primary"
                    onClick={() => setMessege(!messege)}
                  />
                </button>
                {messege && (
                  <MessegeShow
                    messege={messege}
                    setMessege={setMessege}
                  ></MessegeShow>
                )}
              </div>

              <div>
                <div>
                  <button
                    onClick={toggleForm}
                    className="flex items-center justify-center  text-gray-600  rounded-full w-10 h-10"
                  >
                    {showForm ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    )}
                  </button>

                  {showForm && (
                    <div className="mt-4 p-4 border-2 rounded-md ">
                      {/*  form content goes here */}
                      <form>
                        <label className="label">
                          <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                            Replacement Provider
                          </span>
                        </label>
                        <select
                          className="border border-gray-300 col-span-2 rounded-sm px-2 py-1 mx-1 text-[12px] w-full"
                          {...register("provider")}
                        >
                          <option value="">Select</option>
                          <option value="ashni soni">ashni soni</option>
                          <option value="Max Auto">Max Auto</option>
                          <option value="Gomex twin">Gomex twin</option>
                        </select>

                        <div className="grid col-span-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-2 pl-1 gap-1">
                          <div>
                            <label className="label">
                              <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                                Break Form Time
                              </span>
                            </label>
                            <TimePicker
                              className="modal-input-field"
                              use12Hours
                              format="h:mm A"
                              onChange={from_Time}
                            />
                          </div>

                          <div>
                            <label className="label">
                              <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                                Break To Time
                              </span>
                            </label>

                            <TimePicker
                              className="modal-input-field"
                              use12Hours
                              format="h:mm A"
                              onChange={to_Time}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>

              <div className=" flex items-end justify-end mt-2">
                <button className=" pms-button mr-2" type="submit">
                  Save Changes
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
  );
};

export default EditEventModal;
