import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Modal, Switch,TimePicker } from "antd";
import {
  IoCloseCircleOutline,
  IoTrashOutline,
  IoChatboxEllipsesOutline,
  IoFileTrayFullOutline,
  IoCopyOutline,
  IoEyeOutline,
} from "react-icons/io5";
import axios from "axios";
import useToken from "../../../../../src/CustomHooks/useToken";

import Calendar from "react-calendar";
// import "./CutomCSS/calenderDesign.css";
import "../../../Style/SingleCalendar.css";
import { useSingleAppointmentApiQuery } from "../../../../features/Appointment_redux/Calendar/CalendarApi";
import AddSessionNotes from "./CustomModalHelper/AddSessionNotes";
import CopyNotes from "./CustomModalHelper/CopyNotes";
import ViewNotes from "./CustomModalHelper/ViewNotes";
import MessegeShow from "./CustomModalHelper/MessegeShow";

const CustomModal = ({
  selectedDate,
  handleClose,
  clicked,
  refetch,
  eventId,
}) => {
  console.log("modal ----dynamicID", eventId);
  const [eventDetails, setEventDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();
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

  //useSingleAppointmentApiQuery

  const [open, setOpen] = useState(false);
  const [sessionopen, setSessionOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const [view, setView] = useState(false);
  const [messege, setMessege] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [opencalender, setOpencalender] = useState(false);
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const month = date ? date.toLocaleString("en-us", { month: "long" }) : null;
  const currentDate = date ? date.getDate() : null;
  const year = date ? date.getFullYear() : null;


  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const {
    data: singleData,
    isLoading: singledataLoading,
    isError,
  } = useSingleAppointmentApiQuery({
    token,
    payload: {
      appointment_id: eventId,
    },
  });

  console.log("come single data fromt api--", singleData);

  const handleClearDate = () => {
    setOpen(false);
    setOpencalender(false);
    setDate(null);
    setSessionOpen(false);
    setCopy(false);
    setView(false);
    setMessege(false);
  };
  const handleCancelDate = () => {
    setOpen(false);
    setOpencalender(false);
    setDate(new Date());
    setSessionOpen(false);
    setCopy(false);
    setView(false);
    setMessege(false);
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
  //id based event data get
  // useEffect(() => {
  //   const getEventDetails = async () => {
  //     try {
  //       const response = await axios({
  //         method: "get",
  //         url: `http://localhost:8800/api/scheduler/${eventId}`,
  //       });
  //       // const result = await res.json();
  //       const result = response;
  //       console.log(result?.data);
  //       setEventDetails(result?.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   // If clicked of specific event in the calender then getEventDetails function will be called
  //   if (eventId) {
  //     getEventDetails();
  //   }
  // }, []);

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        // patient: eventDetails ? eventDetails?.patient : null,
        patient: singleData?.data?.app_patient?.client_full_name,
        provider: eventDetails ? eventDetails?.provider : null,
        auth: eventDetails ? eventDetails?.auth : "Cigna Authorization", //this is for dummy data
        // check_date: date ? date.toLocaleDateString() : null,
        from_date: selectedDate
          ? selectedDate
          : eventDetails?.start?.split("T")[0],
        from_time: eventDetails ? eventDetails?.start?.split("T")[1] : null,
        to_time: eventDetails ? eventDetails?.end?.split("T")[1] : null,
      });
    }, 0);
  }, [reset, selectedDate, eventDetails, eventDetails?.patient]);

  const onSubmit = (data) => {
    //console.log(data);
    const title = "Jo Co: Fa Aa";
    const color = "#FEE9A6";
    const display = "background-inverse";
    const start = data?.from_date + "T" + data?.from_time;
    const end = data?.from_date + "T" + data?.to_time;
    //console.log(start, end);
    const final = { title, ...data, start, end, color, display };
    // console.log(JSON.stringify(final));
    // if (final && !eventId) {
    //   //sending product to DB through API

    //   // axios POST request
    //   const options = {
    //     url: "http://localhost:8800/api/scheduler/",
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json;charset=UTF-8",
    //     },
    //     data: final,
    //   };

    //   axios(options).then((response) => {
    //     console.log(response);

    //     if (response?.status === 200) {
    //       console.log("SUCCESS");
    //       refetch();
    //       handleClose();
    //     }
    //   });
    // }
    // reset();
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
        className="box rounded-xl"
        // onClose={handleClose}
        // aria-labelledby="responsive-dialog-title"
      >
        <div className="px-0 py-2 font-[poppins,sans-serif]">
          <div className="flex items-center justify-between px-3 py-2">
            <h1 className="text-lg text-left text-orange-400 ">
              Edit Appointment
            </h1>

            <div className="flex justify-between">
              <IoTrashOutline className="text-gray-600 text-2xl hover:text-red-600 mr-2" />
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="h-[513px] overflow-auto px-3 py-2">
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1 md:gap-2">
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Patient Name
                </span>
              </label>
              <select
                className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("patient")}
              >
                <option value="">Select</option>
                <option value="Mr.Anik chowdhary">Mr.Anik chowdhary</option>
                <option value="Duck duck">Duck duck</option>
                <option value="Ashni Soni">Ashni Soni</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Auth
                </span>
              </label>
              <select
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("auth")}
              >
                <option value="">Select</option>
                <option value="Cigna Authorization">Cigna Authorization</option>
                <option value="Baffa Authorization">Baffa Authorization</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Service
                </span>
              </label>
              <select
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("auth")}
              >
                <option value="">Select</option>
                <option value="Cigna Authorization">Cigna Authorization</option>
                <option value="Baffa Authorization">Baffa Authorization</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Provider Name
                </span>
              </label>
              <select
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("provider")}
              >
                <option value="">Select</option>
                <option value="ashni soni">ashni soni</option>
                <option value="Max Auto">Max Auto</option>
                <option value="Gomex twin">Gomex twin</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  From Date
                </span>
              </label>
              {/* <input
               className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full"
               type="date"
               disabled="disabled"
               {...register("from_date")}
             /> */}
              <input
                name="from_time"
                readOnly
                onClick={() => setOpencalender(!opencalender)}
                value={date ? date.toLocaleDateString() : "Select a Date"}
                className="col-span-2 modal-input-field ml-1 w-full px-2"
                {...register("from_time")}
              />
              {opencalender && (
                <Modal
                  open={opencalender}
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
                          <span className="text-xl">{days[date.getDay()]}</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <h1 className="text-8xl font-medium">
                            {currentDate}
                          </h1>
                          <h1 className="text-xl font-medium">{month}</h1>
                        </div>
                        <div className="flex justify-center items-end">
                          <h1 className="text-4xl font-medium mt-4">{year}</h1>
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
                            onClick={() => setOpencalender(false)}
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
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  From
                </span>
              </label>
              <input
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full"
                type="time"
                {...register("from_time")}
              />

              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  To
                </span>
              </label>
              <input
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full"
                type="time"
                {...register("to_time")}
              />
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Status
                </span>
              </label>
              <select
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("provider")}
              >
                <option value="">Select</option>
                <option value="ashni soni">ashni soni</option>
                <option value="Max Auto">Max Auto</option>
                <option value="Gomex twin">Gomex twin</option>
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
                <AddSessionNotes
                  sessionopen={sessionopen}
                  setSessionOpen={setSessionOpen}
                ></AddSessionNotes>
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
                  className="text-gray-600 text-2xl hover:text-primary"
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

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Add Appointment
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
};

export default CustomModal;
