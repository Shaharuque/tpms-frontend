import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../util";
import CalendarHeader from "../CalendarComponent/CalendarHeader";
import Month from "../CalendarComponent/Month";
import GlobalContext from "../CalendarContext/GlobalContext";
import EventModal from "../CalendarComponent/EventModal";
function SchedulerCalender() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="flex flex-wrap justify-between items-center mb-6 mt-1 v">
        <p className="text-[#FF9800]">Manage Appointement</p>
        <div className="flex flex-wrap items-center">
          <button className="bg-gradient-to-r from-[#d84a45] to-[#f26361] py-1 px-2 mr-2 rounded text-white text-xs">
            Filter
          </button>
          <button>
            <img
              src="https://app.therapypms.com/assets/dashboard/images/google.png"
              alt="google calendar"
              style={{ width: "33px" }}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col border rounded-3xl border-[#089bab] p-2">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SchedulerCalender;
