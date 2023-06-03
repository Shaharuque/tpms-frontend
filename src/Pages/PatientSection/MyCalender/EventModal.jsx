import React, { useEffect, useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { useForm } from "react-hook-form";
import { Modal, Switch } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import Calendar from "react-calendar";
import { patientIp } from "../../../Misc/BaseClient";
import useToken from "../../../CustomHooks/useToken";
import Loading from "../../../Loading/Loading";

//To Convert Date YY/MM/DD(2022-10-21) to MM/DD/YY
const dateConverter = (date) => {
  const afterSplit = date?.split("-");
  console.log(afterSplit);
  if (afterSplit?.length > 0) {
    return `${afterSplit[1]}/${afterSplit[2]}/${afterSplit[0]}`;
  }
};

const EventModal = ({ selectedDate, handleClose, clicked, refetch, eventId }) => {
  console.log(eventId);
  const [eventDetails, setEventDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [open, setOpen] = useState(false);
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
  };
  const handleCancelDate = () => {
    setOpen(false);
    setOpencalender(false);
    setDate(new Date());
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
          url: `${patientIp}/my/calender/get/single/data`,
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
        patient: eventDetails ? eventDetails?.app_patient?.client_full_name : null,
        provider: eventDetails ? eventDetails?.app_provider?.full_name : null,
        auth: eventDetails ? eventDetails?.app_auth?.authorization_name : null,
        activity: eventDetails ? eventDetails?.app_activity?.activity_name : null,
        from_time: eventDetails ? eventDetails?.start?.split("T")[1] : null,
        to_time: eventDetails ? eventDetails?.end?.split("T")[1] : null,
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
        {loading ? (
          <Loading />
        ) : (
          <div className="px-5 py-2 font-[poppins,sans-serif]">
            <div className="flex items-center justify-between">
              {!eventId ? (
                <h1 className="text-lg text-left text-orange-400 ">Add Appointment</h1>
              ) : (
                <h1 className="text-lg text-left text-orange-400 ">Appoinment Details</h1>
              )}
              <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1">
                <label className="label">
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Patient Name</span>
                </label>
                <select disabled className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full" {...register("patient")}>
                  <option value="">Select</option>
                  <option value={eventDetails?.app_patient?.client_full_name}>{eventDetails?.app_patient?.client_full_name}</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Auth</span>
                </label>
                <select disabled className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full" {...register("auth")}>
                  <option value="">Select</option>
                  <option value={eventDetails?.app_auth?.authorization_name}>{eventDetails?.app_auth?.authorization_name}</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Service</span>
                </label>
                <select disabled className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full" {...register("activity")}>
                  <option value="">Select</option>
                  <option value={eventDetails?.app_activity?.activity_name}>{eventDetails?.app_activity?.activity_name}</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Provider Name</span>
                </label>
                <select disabled className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full" {...register("provider")}>
                  <option value="">Select</option>
                  <option value={eventDetails?.app_provider?.full_name}>{eventDetails?.app_provider?.full_name}</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">POS</span>
                </label>
                <select disabled className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full" {...register("provider")}>
                  <option value="">Select</option>
                  <option value={eventDetails?.app_provider?.full_name}>{eventDetails?.app_provider?.full_name}</option>
                </select>
                <label className="label">
                  <span className="modal-label-name text-[12px]">From Date</span>
                </label>
                <input
                  disabled
                  name="from_time"
                  readOnly
                  onClick={() => setOpen(!open)}
                  value={date ? date.toLocaleDateString() : "Select a Date"}
                  className="col-span-2 ml-1 w-full p-2 font-[poppings,sans-serif] text-[12px] border border-gray-300 rounded-sm"
                  {...register("from_time")}
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
                            <span className="text-xl">{days[date.getDay()]}</span>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <h1 className="text-8xl font-medium">{currentDate}</h1>
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
                          <button onClick={() => handleClearDate()} className="text-[12px] text-red-400 hover:bg-black hover:text-white p-2 rounded">
                            CLEAR
                          </button>
                          <div>
                            <button onClick={() => handleCancelDate()} className="text-[12px] text-[#0AA7B8] hover:bg-black hover:text-white p-2 rounded">
                              CANCEL
                            </button>
                            <button onClick={() => setOpen(false)} className="text-[12px] ml-2 text-[#0AA7B8] hover:bg-teal-500 hover:text-white p-2 rounded">
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
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">From</span>
                </label>
                <input className="border border-gray-300 col-span-2 rounded-sm p-2 py-[3px] mx-1 text-[12px] w-full" type="time" {...register("from_time")} />

                <label className="label">
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">To</span>
                </label>
                <input className="border border-gray-300 col-span-2 rounded-sm p-2 py-[3px] mx-1 text-[12px] w-full" type="time" {...register("to_time")} />
                <label className="label">
                  <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Status</span>
                </label>
                <select disabled className="border border-gray-300 col-span-2 rounded-sm p-2  mx-1 text-[12px] w-full" {...register("status")}>
                  <option value="">Select</option>
                  <option value={eventDetails?.status}>{eventDetails?.status}</option>
                </select>
              </div>

              <div className=" flex items-end justify-end mt-2">
                {/* <button className=" pms-button mr-2" type="submit">
                Add Appointment
              </button> */}

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

export default EventModal;
