import { Switch, TimePicker } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import Calendar from "react-calendar";
// import "./CutomCSS/calenderDesign.css";
import { Modal } from "antd";
import AppoinmentMultiSelection from "../../../Shared/CustomComponents/AppoinmentMultiSelection";
import "../../../Style/SingleCalendar.css";

const CreateAppointment = ({ handleClose, clicked }) => {
  // console.log(handleClose, clicked);
  const [billable, setBillable] = useState(true);
  const [recurrence, setRecurrence] = useState(false);
  const [daily, setDaily] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();

  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // // testing single calendar
  // const [date, setDate] = useState(new Date());
  // const [openCalendar, setOpenCalendar] = useState(false);
  // const changeDate = (date) => {
  //   setDate(date);
  // };
  // console.log(date);

  // const month = date ? date.getMonth() + 1 : null;
  // const day = date ? date.getDate() : null;
  // const year = date ? date.getFullYear() : null;

  // const handleCancelDate = () => {
  //   // setOpenCalendar(false);
  //   setDate(null);
  // };
  const month = date ? date.toLocaleString("en-us", { month: "long" }) : null;
  const currentDate = date ? date.getDate() : null;
  const year = date ? date.getFullYear() : null;

  const handleClearDate = () => {
    setOpen(false);
    setDate(null);
  };
  const handleCancelDate = () => {
    setOpen(false);
    setDate(new Date());
  };

  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        check_date: date ? date.toLocaleDateString() : null,
      });
    }, 0);
    // }, [date.toLocaleDateString()]);
  }, [date, reset]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // --------------------------------------------------Multi-Select-------------------------------
  // const [value, setValue] = useState([]);
  // const data = ["Eugenia", "Bryan", "Linda", "Eugenia", "Bryan", "Linda"].map(
  //   (item) => ({
  //     label: item,
  //     value: item,
  //   })
  // );
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
            <h1 className="text-lg text-left text-orange-400 ">
              Add Appointment
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1 md:gap-2">
              <span className="modal-label-name ml-1">Active Patient</span>
              <div className="col-span-2 ml-1">
                <Switch
                  defaultChecked
                  size="small"
                  onClick={() => {
                    setBillable(!billable);
                  }}
                />
                <label
                  className="form-check-label inline-block font-medium ml-2 text-[12px] text-gray-600"
                  htmlFor="flesmwitchCheckDefault"
                >
                  {billable ? "Billable" : "Non-Billable"}
                </label>
              </div>

              <label className="label">
                <span className="modal-label-name">Patient Name</span>
              </label>
              <select
                className="col-span-2 modal-input-field ml-1 w-full"
                {...register("patients")}
              >
                <option value=""></option>
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
              <label className="label">
                <span className="modal-label-name">Auth</span>
              </label>
              <select
                className="col-span-2 modal-input-field ml-1 w-full"
                {...register("Auth")}
              >
                <option value=""></option>
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
              <label className="label">
                <span className="modal-label-name">Service</span>
              </label>
              <select
                className="col-span-2 modal-input-field ml-1 w-full"
                {...register("service")}
              >
                <option value=""></option>
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
              <label className="label">
                <span className="modal-label-name">Provider Name</span>
              </label>
              {billable ? (
                <select
                  className="col-span-2 modal-input-field ml-1 w-full"
                  {...register("provider")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              ) : (
                <div className="col-span-2 ml-1">
                  <AppoinmentMultiSelection />
                </div>
              )}
              <label className="label">
                <span className="modal-label-name">POS</span>
              </label>
              <select
                className="col-span-2 modal-input-field ml-1 w-full"
                {...register("pos")}
              >
                <option value=""></option>
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
              {/* calender */}
              <label className="label">
                <span className="modal-label-name">From Date</span>
              </label>
              <input
                name="check_date"
                readOnly
                onClick={() => setOpen(!open)}
                value={date ? date.toLocaleDateString() : "Select a Date"}
                className="col-span-2 modal-input-field ml-1 w-full px-2"
                {...register("check_date")}
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
                          <span className="text-2xl">
                            {days[date.getDay()]}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <h1 className="text-8xl font-medium">
                            {currentDate}
                          </h1>
                          <h1 className="text-2xl font-medium">{month}</h1>
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
                          className="text-[12px] text-red-400"
                        >
                          CLEAR
                        </button>
                        <div>
                          <button
                            onClick={() => handleCancelDate()}
                            className="text-[12px] text-[#0AA7B8]"
                          >
                            CANCEL
                          </button>
                          <button
                            onClick={() => setOpen(false)}
                            className="text-[12px] ml-2 text-[#0AA7B8]"
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
              {/* <label className="label">
                <span className="modal-label-name">
                  From Date
                </span>
              </label>
              <input
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[2px] mx-1 text-[12px] w-full"
                type="date"
                {...register("check_Date")}
              /> */}
              <label className="label">
                <span className="modal-label-name">From Time</span>
              </label>
              <div className="grid col-span-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pl-1 gap-1">
                <TimePicker
                  className="modal-input-field"
                  use12Hours
                  format="h:mm A"
                  onChange={onChange}
                />
                <div className="modal-label-name mt-2 mx-auto">To Time</div>
                <TimePicker
                  className="modal-input-field"
                  use12Hours
                  format="h:mm A"
                  onChange={onChange}
                />
              </div>
              <label className="label">
                <span className="modal-label-name">Status</span>
              </label>
              <select
                className="col-span-2 modal-input-field ml-1 w-full"
                {...register("status")}
              >
                <option value=""></option>
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-5 mr-2 gap-1">
              <div className="">
                <Switch
                  size="small"
                  onClick={() => {
                    setRecurrence(!recurrence);
                  }}
                />
                <label
                  className="modal-label-name ml-2"
                  htmlFor="flesmwitchCheckDefault"
                >
                  Recurrence Pattern?
                </label>
              </div>
              <div>
                {recurrence && (
                  <input
                    className="px-2 modal-input-field ml-1 w-full"
                    type="date"
                    {...register("check_Date")}
                  />
                )}
              </div>
              {recurrence && (
                <>
                  <div>
                    <Switch
                      size="small"
                      onClick={() => {
                        setDaily(!daily);
                      }}
                    />
                    <label
                      className="modal-label-name ml-2 "
                      htmlFor="flesmwitchCheckDefault"
                    >
                      Daily
                    </label>
                  </div>
                  {daily && (
                    <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-1">
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-[12px] ml-1 text-gray-600 font-normal">
                          SU
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-[12px] ml-1 text-gray-600 font-normal">
                          MO
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-[12px] ml-1 text-gray-600 font-normal">
                          TU
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-[12px] ml-1 text-gray-600 font-normal">
                          WE
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-[12px] ml-1 text-gray-600 font-normal">
                          TH
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-[12px] ml-1 text-gray-600 font-normal">
                          FR
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-[12px] ml-1 text-gray-600 font-normal">
                          SA
                        </span>
                      </div>
                    </div>
                  )}
                </>
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

export default CreateAppointment;
