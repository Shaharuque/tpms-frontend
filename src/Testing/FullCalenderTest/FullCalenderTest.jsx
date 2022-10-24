import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const Events = [
  {
    // this object will be "parsed" into an Event Object
    title: "The Title1", // a property!
    start: "2022-10-12T12:30:00",
    end: "2022-10-12T13:30:00",
    color: "red",
  },
  {
    // this object will be "parsed" into an Event Object
    title: "The Title2", // a property!
    start: "2022-10-01", // a property!
    end: "2022-10-02", // a property! ** see important note below about 'end' **
    color: "green",
  },
  {
    // this object will be "parsed" into an Event Object
    title: "The Title3", // a property!
    start: "2022-10-01", // a property!
    end: "2022-10-02", // a property! ** see important note below about 'end' **
    color: "purple",
  },
];
const FullCalenderTest = () => {
  return (
    <div>
      <FullCalendar
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={Events}
      />
    </div>
  );
};

export default FullCalenderTest;
