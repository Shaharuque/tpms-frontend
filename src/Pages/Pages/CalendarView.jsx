import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarView = () => {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    { start: new Date(), end: new Date(), title: "special event" },
  ];
  return (
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 1200 }}
    />
  );
};

export default CalendarView;
