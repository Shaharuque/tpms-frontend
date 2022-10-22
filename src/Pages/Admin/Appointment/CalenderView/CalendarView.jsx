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
    end: "2022-10-15T14:00:00", // a property! ** see important note below about 'end' **
    color: "green",
    display: "background-inverse",
  },
  {
    // this object will be "parsed" into an Event Object
    title: "The Title3", // a property!
    start: "2022-10-15T15:30:00", // a property!
    end: "2022-10-15T18:00:00",
    color: "purple",
    display: "background-inverse",
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
  // let set = 0;
  // const handleEventClick = () => {
  //   console.log(set++);
  // };

  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo);
    let title = prompt("Enter a title: ");
    let calendarApi = selectInfo.view.calendar;
    console.log(calendarApi);
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        backgroundInverse: "teal",
        start: "2022-10-15T12:30:00",
        end: "2022-10-15T12:30:00",
        // allDay: selectInfo.allDay,
      });
    }
  };
  return (
    <div>
      <div className="flex items-center flex-wrap justify-between pb-4">
        <h1 className="text-lg my-2 text-orange-500">Manage Appointment</h1>
        <div className="flex items-center gap-3">
          <button>filter, cal and print Button Here</button>
        </div>
      </div>
      <div className="border border-[#089bab] rounded-2xl p-2">
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prevYear,prev,next,nextYear today",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={Events}
          editable={true}
          selectable={true}
          select={handleDateSelect}
        />
      </div>
    </div>
  );
};

export default CalenderView;
