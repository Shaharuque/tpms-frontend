import React, { useState } from "react";
import {
  AiFillLock,
  AiFillUnlock,
  AiOutlineEye,
  AiOutlinePlus,
  AiOutlineWifi,
} from "react-icons/ai";
import { RiBillLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  MdOutlineMedicalServices,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { useOutsideAlerter } from "../../../../../CustomHooks/useDetectOutsideClick";
import "../../../../Style/ListView.css";
import EditSession from "../ListView/EditSession";
import SessionAddNote from "../ListView/SessionAddNote";
import SessionViewNote from "../ListView/SessionViewNote";
import { Fade } from "react-reveal";
import { timeConverter } from "../../../../Shared/TimeConverter/TimeConverter";

//To Convert Date YY-MM-DD(2022-10-21) to MM/DD/YY
const dateConverter = (date) => {
  const afterSplit = date?.split("-");
  if (afterSplit?.length > 0) {
    return `${afterSplit[1]}/${afterSplit[2]}/${afterSplit[0]}`;
  }
};
const CardView = ({ data, posData }) => {
  const [patientDetails, setPatientDetails] = useState(false);
  const [checkBox, setCheckBox] = useState([]);
  //console.log(checkBox);
  console.log("data", data);
  const {
    lock,
    is_locked,
    app_client,
    app_client_auth_act,
    schedule_date,
    status,
    app_provider,
    from_time,
    to_time,
    location,
  } = data;
  const [locked, setLocked] = useState(lock);

  const { ref, visible, setVisible } = useOutsideAlerter(false);
  const [openAddNote, setOpenAddNote] = useState(false);
  const [openViewNote, setOpenViewNote] = useState(false);
  const [editSession, setEditSession] = useState(false);
  //const [open, setOpen] = useState(false);

  const handleOpenAction = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const addNoteHandler = () => {
    setVisible(false);
    setOpenAddNote(true);
  };
  const viewNoteHandler = () => {
    setVisible(false);
    setOpenViewNote(true);
  };
  const editSessionHandler = () => {
    setVisible(false);
    setEditSession(true);
  };

  const handleClose = () => {
    setOpenAddNote(false);
    setOpenViewNote(false);
    setEditSession(false);
  };

  return (
    <div className="border shadow-md pt-3 z-0 card rounded-md bg-white">
      <div className="px-5">
        <div className=" grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7 gap-5 mb-2">
          <div className="flex items-center gap-2">
            {/* Checkbox Select Code */}
            {/* <input
              type="checkbox"
              // id={`custom-checkbox-${index}`}
              // name={name}
              // value={name}
              onChange={() => setCheckBox(data)}
            /> */}
            <label>
              {is_locked === 1 ? (
                <AiFillLock className="mx-auto text-lg font-medium text-red-600" />
              ) : (
                <AiFillUnlock className="text-lg font-medium text-secondary" />
              )}
            </label>
          </div>
          <div className="col-span-2">
            <div>
              <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                Patient Name
              </h1>
              <p className=" font-medium text-sm text-gray-900">
                {app_client?.client_full_name}
              </p>
            </div>
          </div>
          <div className="md:col-span-2 ">
            <div>
              <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                Scheduled Date
              </h1>
              <p className="text-sm font-medium text-gray-900">
                {dateConverter(schedule_date)}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex ">
            <div>
              <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                Status
              </h1>
              <div>
                {status === "Scheduled" && (
                  <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">
                    {status}
                  </button>
                )}
                {status === "Rendered" && (
                  <button className="bg-green-700 text-white text-[10px] py-[2px]  rounded w-14">
                    {status}
                  </button>
                )}
                {status === "Hold" && (
                  <button className="bg-gray-100 text-black text-[10px] py-[2px]  rounded w-14">
                    {status}
                  </button>
                )}
                {status === "No Show" && (
                  <button className="bg-rose-700 text-white text-[10px] py-[2px]  rounded w-14">
                    {status}
                  </button>
                )}
                {status === "Cancelled by Client" && (
                  <button className="bg-secondary text-white text-[10px] py-[2px]  rounded w-24">
                    {status}
                  </button>
                )}
                {status === "Cancelled by Provider" && (
                  <button className="bg-yellow-600 text-white text-[10px] py-[2px]  rounded w-28">
                    {status}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 py-[1px] mt-3"></div>
        <button
          onClick={() => {
            setPatientDetails(!patientDetails);
          }}
          className="flex items-center  my-2 text-secondary"
        >
          <span className="text-[11px] font-normal ">Patient Details</span>{" "}
          {!patientDetails ? (
            <IoIosArrowDown className="text-sm font-medium" />
          ) : (
            <IoIosArrowUp className="text-sm font-medium" />
          )}
        </button>
      </div>

      {/* patient details  */}

      {patientDetails && (
        <Fade>
          <h1 className="bg-secondary text-sm w-ful py-1 px-5 text-white font-medium">
            Patient Details
          </h1>
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
              <div className="col-span-2 px-5 py-4">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2">
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      Patient Name
                    </h1>
                    <p className=" font-medium text-sm text-gray-900">
                      {app_client?.client_full_name}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      POS
                    </h1>
                    <p className=" font-medium text-sm text-gray-900">
                      {
                        posData?.pos?.find(
                          (each) => each?.pos_code === location
                        )?.pos_name
                      }
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      Hours
                    </h1>
                    <p className=" font-medium text-sm text-primary">
                      {timeConverter(from_time?.split(" ")[1])} to{" "}
                      {timeConverter(to_time?.split(" ")[1])}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      Provider Name
                    </h1>
                    <p className=" font-medium text-sm text-gray-900">
                      {app_provider?.full_name}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                        Service & Hrs.
                      </h1>
                      <p className=" font-medium text-sm text-gray-900">
                        {app_client_auth_act?.activity_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary py-2">
                <div className="flex justify-center items-center">
                  <div>
                    <div>
                      <div className="flex items-center justify-around ">
                        <AiOutlineWifi className="text-lg font-semibold text-white" />
                        <MdOutlineMedicalServices className="text-lg font-semibold text-white" />
                        <RiBillLine className="text-lg font-semibold text-slate-300" />
                        <RiMoneyDollarBoxLine className="text-lg font-semibold text-white" />
                      </div>
                    </div>
                    <div className="py-3">
                      <div>
                        <button
                          className="text-xs text-white border px-[20px] py-1 mb-2 rounded-sm border-white hover:text-secondary hover:bg-white flex items-center font-semibold gap-2"
                          onClick={() => addNoteHandler()}
                        >
                          <AiOutlinePlus className="" /> Add Note
                        </button>

                        <button
                          className="text-xs text-white border px-[18px] py-1 mb-2 rounded-sm border-white hover:text-secondary hover:bg-white flex items-center font-semibold gap-2"
                          onClick={viewNoteHandler}
                        >
                          <AiOutlineEye /> View Note
                        </button>

                        <button
                          className="text-xs text-white border px-[14px] py-1 mb-2 rounded-sm border-white hover:text-secondary hover:bg-white flex items-center font-semibold gap-2"
                          onClick={editSessionHandler}
                        >
                          <MdOutlineModeEditOutline /> Edit Session
                        </button>
                      </div>

                      {openAddNote && (
                        <SessionAddNote
                          handleClose={handleClose}
                          open={openAddNote}
                          // editableRow={row}
                        ></SessionAddNote>
                      )}
                      {openViewNote && (
                        <SessionViewNote
                          handleClose={handleClose}
                          open={openViewNote}
                          // editableRow={row}
                        ></SessionViewNote>
                      )}
                      {editSession && (
                        <EditSession
                          handleClose={handleClose}
                          open={editSession}
                          // editableRow={row}
                        ></EditSession>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default CardView;
