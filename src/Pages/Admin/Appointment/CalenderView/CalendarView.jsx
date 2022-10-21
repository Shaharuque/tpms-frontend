import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./custom.css";

import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../Loading/Loading";

const Events = [
  {
    // this object will be "parsed" into an Event Object
    title: "Mrs.Shanarun", // a property!
    // start: "2022-10-12T12:30:00",
    // end: "2022-10-12T13:30:00",
    date: new Date(),
    // startTime: "10:45:00",
    // endTime: "12:45:00",
    color: "red",
  },
  {
    // this object will be "parsed" into an Event Object
    title: "The Title2", // a property!
    start: "2022-10-15T12:30:00", // a property!
    end: "2022-10-16T14:00:00", // a property! ** see important note below about 'end' **
    color: "green",
  },
  {
    // this object will be "parsed" into an Event Object
    title: "The Title3", // a property!
    start: "2022-10-15T15:30:00", // a property!
    end: "2022-10-15T18:00:00",
    color: "purple",
  },
];
const CalenderView = () => {
  // const {
  //   isLoading,
  //   data: calenderEvents,
  //   refetch,
  // } = useQuery(["availbleEvents"], () =>
  //   // heruko site boshbey
  //   fetch("http://localhost:8800/api/hotels/", {
  //     method: "GET",
  //   }).then((res) => res.json())
  // );
  // console.log(calenderEvents);

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <div>
      <FullCalendar
        initialView="dayGridMonth"
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

export default CalenderView;
