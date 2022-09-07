import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../CalendarContext/GlobalContext";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-[#FFFADF] text-white"
      : "";
  };
  return (
    <div
      className={`border border-gray-200 flex flex-col ${getCurrentDayClass()}`}
      onClick={() => {
        setDaySelected(day);
        setShowEventModal(true);
      }}
    >
      <header className="flex flex-col">
        {rowIdx === 0 && (
          <p className="text-center text-[#74788d] text-sm mt-1 border-b border-gray-200">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p className={`text-xs p-1 my-1 text-right text-[#74788d] `}>
          {day.format("D")}
        </p>
      </header>

      <div className="flex-1 cursor-pointer">
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`items-center bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            <p>{evt.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
