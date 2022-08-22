import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MySchedule = () => {
  const navigation = useNavigate();
  const calenderClicked = () => {
    navigation("/patient/calender");
  };
  return (
    <div>
      <h1>My Schedule Component</h1>
      <button onClick={calenderClicked} className="bg-red-700 rounded">
        Calender
      </button>
      <Outlet></Outlet>
    </div>
  );
};

export default MySchedule;
