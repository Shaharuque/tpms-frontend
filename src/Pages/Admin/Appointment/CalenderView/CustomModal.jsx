import React, { useEffect, useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { useForm } from "react-hook-form";
import { Modal, Switch } from "antd";
import { IoCloseCircleOutline, IoTrashOutline, IoChatboxEllipsesOutline, IoFileTrayFullOutline, IoCopyOutline, IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import useToken from "../../../../../src/CustomHooks/useToken";

import Calendar from "react-calendar";
// import "./CutomCSS/calenderDesign.css";
import "../../../Style/SingleCalendar.css";
import { useSingleAppointmentApiQuery } from "../../../../features/Appointment_redux/Calendar/CalendarApi";

const CustomModal = ({ selectedDate, handleClose, clicked, refetch, eventId }) => {
  console.log("modal ----dynamicID", eventId);
  const [eventDetails, setEventDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //useSingleAppointmentApiQuery

  const [open, setOpen] = useState(false);
  const [opencalender, setOpencalender] = useState(false);
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const month = date ? date.toLocaleString("en-us", { month: "long" }) : null;
  const currentDate = date ? date.getDate() : null;
  const year = date ? date.getFullYear() : null;

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
        from_date: selectedDate ? selectedDate : eventDetails?.start?.split("T")[0],
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
        <div className="px-5 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">Add Appointment</h1>

            <h1 className="text-lg text-left text-orange-400 ">Edit Appointment</h1>

            <div className="flex justify-between">
              <IoTrashOutline className="text-gray-600 text-2xl hover:text-red-600 mr-2" />
              <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
            </div>
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1 md:gap-2">
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Patient Name</span>
              </label>
              <select className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("patient")}>
                <option value="">Select</option>
                <option value="Mr.Anik chowdhary">Mr.Anik chowdhary</option>
                <option value="Duck duck">Duck duck</option>
                <option value="Ashni Soni">Ashni Soni</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Auth</span>
              </label>
              <select className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("auth")}>
                <option value="">Select</option>
                <option value="Cigna Authorization">Cigna Authorization</option>
                <option value="Baffa Authorization">Baffa Authorization</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Service</span>
              </label>
              <select className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("auth")}>
                <option value="">Select</option>
                <option value="Cigna Authorization">Cigna Authorization</option>
                <option value="Baffa Authorization">Baffa Authorization</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Provider Name</span>
              </label>
              <select className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("provider")}>
                <option value="">Select</option>
                <option value="ashni soni">ashni soni</option>
                <option value="Max Auto">Max Auto</option>
                <option value="Gomex twin">Gomex twin</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">From Date</span>
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
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">From</span>
              </label>
              <input className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full" type="time" {...register("from_time")} />

              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">To</span>
              </label>
              <input className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full" type="time" {...register("to_time")} />
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Status</span>
              </label>
              <select className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("provider")}>
                <option value="">Select</option>
                <option value="ashni soni">ashni soni</option>
                <option value="Max Auto">Max Auto</option>
                <option value="Gomex twin">Gomex twin</option>
              </select>
            </div>
            <div className=" flex items-center justify-between mt-2">
              <button className="px-4 py-2 bg-[#089bab] text-white text-xs rounded  mr-2" onClick={() => setOpen(!open)}>
                <IoFileTrayFullOutline className="inline text-xl mr-1" /> Add Session Notes
              </button>
              {open && (
                <Modal
                  open={open}
                  centered
                  footer={null}
                  closable={false}
                  width={425}
                  bodyStyle={{
                    padding: "0px",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h1 className="text-lg text-left text-orange-400 ">Add Notes</h1>

                      <div className="flex justify-between">
                        <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
                      </div>
                    </div>
                    <div className="bg-gray-200 py-[1px] mt-3"></div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
                        <select className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("patient")}>
                          <option value="">Select</option>
                          <option value="Mr.Anik chowdhary">Mr.Anik chowdhary</option>
                          <option value="Duck duck">Duck duck</option>
                          <option value="Haider Akbar">hairder akbar</option>
                          <option value="Ashni Soni">Ashni Soni</option>
                        </select>
                      </div>

                      <div className="bg-gray-200 py-[1px] mt-3"></div>
                      <div className=" flex items-end justify-end mt-2">
                        <button className=" pms-button mr-2" type="submit">
                          Add Appointment
                        </button>

                        <button className="pms-close-button" onClick={() => handleCancelDate()}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              )}

              <button className=" px-4 py-2 bg-[#089bab] text-white text-xs rounded  mr-2" onClick={() => setOpen(!open)}>
                <IoCopyOutline className="inline text-xl mr-1" />
                Copy Notes
              </button>
              {open && (
                <Modal
                  open={open}
                  centered
                  footer={null}
                  closable={false}
                  className="box rounded-xl"
                  bodyStyle={{
                    padding: "0px",
                  }}
                >
                  <div className="px-5 py-2">
                    <div className="flex items-center justify-between">
                      <h1 className="text-lg text-left text-orange-400 ">Add Appointment</h1>

                      <div className="flex justify-between">
                        <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
                      </div>
                    </div>
                    <div className="bg-gray-200 py-[1px] mt-3"></div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1 md:gap-2">
                        <label className="label">
                          <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Patient Name</span>
                        </label>
                        <select className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("patient")}>
                          <option value="">Select</option>
                          <option value="Mr.Anik chowdhary">Mr.Anik chowdhary</option>
                          <option value="Duck duck">Duck duck</option>
                          <option value="Ashni Soni">Ashni Soni</option>
                        </select>
                      </div>

                      <div className="bg-gray-200 py-[1px] mt-3"></div>
                      <div className=" flex items-end justify-end mt-2">
                        <button className=" pms-button mr-2" type="submit">
                          Add Appointment
                        </button>

                        <button className="pms-close-button" onClick={() => handleCancelDate()}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              )}
              <button className=" px-4 py-2 bg-[#089bab] text-white text-xs rounded  mr-2" onClick={() => setOpen(!open)}>
                <IoEyeOutline className="inline text-xl mr-1" />
                view notes
              </button>
              {open && (
                <Modal
                  open={open}
                  centered
                  footer={null}
                  closable={false}
                  className="box rounded-xl"
                  bodyStyle={{
                    padding: "0px",
                  }}
                >
                  <div className="px-5 py-2">
                    <div className="flex items-center justify-between">
                      <h1 className="text-lg text-left text-orange-400 ">Add Appointment</h1>

                      <div className="flex justify-between">
                        <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
                      </div>
                    </div>
                    <div className="bg-gray-200 py-[1px] mt-3"></div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1 md:gap-2">
                        <label className="label">
                          <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">Patient Name</span>
                        </label>
                        <select className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full" {...register("patient")}>
                          <option value="">Select</option>
                          <option value="Mr.Anik chowdhary">Mr.Anik chowdhary</option>
                          <option value="Duck duck">Duck duck</option>
                          <option value="Ashni Soni">Ashni Soni</option>
                        </select>
                      </div>

                      <div className="bg-gray-200 py-[1px] mt-3"></div>
                      <div className=" flex items-end justify-end mt-2">
                        <button className=" pms-button mr-2" type="submit">
                          Add Appointment
                        </button>

                        <button className="pms-close-button" onClick={() => handleCancelDate()}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              )}
              <button>
                {" "}
                <IoChatboxEllipsesOutline className="text-gray-600 text-2xl hover:text-primary" onClick={() => setOpen(!open)} />
              </button>
              {open && (
                <Modal
                  open={open}
                  centered
                  footer={null}
                  closable={false}
                  className="box rounded-xl"
                  bodyStyle={{
                    padding: "0px",
                  }}
                >
                  <div className="px-5 py-2">
                    <div className="flex items-center justify-between">
                      <h1 className="text-lg text-left text-orange-400 ">Sticky Notes</h1>

                      <div className="flex justify-between">
                        <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
                      </div>
                    </div>
                    <div className="bg-gray-200 py-[1px] mt-3"></div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <h1 className="form-inner-head my-2">Sesion Sticky Notes:</h1>
                        <div className="mt-3 border-blue-600 border-2">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={5}
                            placeholder=" Notes"
                            size="large"
                            className=""
                            {...register(" task_list_item_covered")}
                          />
                        </div>
                        <h1 className="form-inner-head my-2">Sesion Sticky Notes:</h1>
                        <div className="mt-3 border-blue-600 border-2">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={5}
                            placeholder=" Notes"
                            size="large"
                            className=""
                            {...register(" task_list_item_covered")}
                          />
                        </div>
                      </div>

                      <div className="bg-gray-200 py-[1px] mt-3"></div>
                      <div className=" flex items-end justify-end mt-2">
                        <button className=" pms-button mr-2" type="submit">
                          Add Appointment
                        </button>

                        <button className="pms-close-button" onClick={() => handleCancelDate()}>
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
              )}
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
