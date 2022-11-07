import React, { useState } from "react";
import { AiOutlineIdcard, AiOutlineUserAdd } from "react-icons/ai";
import CreateAppointment from "./AdditionFeatures/CreateAppointment";
import CreatePatient from "./AdditionFeatures/CreatePatient";

const Add = () => {
  const [clicked, setClicked] = useState(false);
  const [patientClicked, setPatientClicked] = useState(false);

  const handleAppointment = () => {
    setClicked(!clicked);
  };
  const handlePatient = () => {
    setPatientClicked(!patientClicked);
  };
  return (
    <>
      <div className="  p-2  border drop-box rounded-sm bg-white w-52">
        <button
          onClick={handlePatient}
          className="text-[14px] text-secondary  px-[20px] py-2  rounded-sm clink flex items-center font-semibold gap-2"
        >
          <AiOutlineUserAdd className="text-lg font-bold " />
          <div>Create Patient</div>
        </button>

        <button className="text-[14px] text-secondary  px-[15px] py-2  rounded-sm clink flex items-center font-semibold gap-2">
          <AiOutlineIdcard className="text-lg font-bold" />
          <div onClick={handleAppointment}>Create Appointment</div>
        </button>
      </div>
      {clicked && (
        <div>
          <CreateAppointment
            handleClose={handleAppointment}
            clicked={clicked}
          ></CreateAppointment>
        </div>
      )}
      {patientClicked && (
        <div>
          <CreatePatient
            handleClose={handlePatient}
            patientClicked={patientClicked}
          ></CreatePatient>
        </div>
      )}
    </>
  );
};

export default Add;
