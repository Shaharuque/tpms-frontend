import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CreateAppointmentAvailability from "./NavigationBar/AdditionFeatures/CreateAppointmentAvailability/CreateAppointmentAvailability";

const Test = () => {
  const [availability, setAvailability] = useState(true);

  const availabilityHandler = () => {
    setAvailability(true);
  };
  const handleClose = () => {
    setAvailability(false);
  };
  return (
    <>
      {" "}
      <div className="ml-24 mt-24">
        <button
          className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
          onClick={() => availabilityHandler()}
        >
          <AiOutlinePlus className="text-sm" /> Add Note
        </button>
      </div>
      {availability && (
        <CreateAppointmentAvailability
          handleClose={handleClose}
          open={availability}
        ></CreateAppointmentAvailability>
      )}
    </>
  );
};

export default Test;
