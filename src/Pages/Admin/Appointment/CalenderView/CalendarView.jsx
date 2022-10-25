import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./custom.css";

import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../Loading/Loading";
import CustomModal from "./CustomModal";
import CreateAppointment from "../../../Shared/NavigationBar/AdditionFeatures/CreateAppointment";
import axios from "axios";

const Events = [
  {
    // this object will be "parsed" into an Event Object
    title: "Mrs.Shanarun", // a property!
    start: "2022-10-12T12:30:00",
    end: "2022-10-12T13:30:00",
    // date: new Date(),
    color: "red",
    display: "background-inverse",
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
  {
    // this object will be "parsed" into an Event Object
    title: "The Title56", // a property!
    start: "Oct 2022 FridayT11:30:00", // a property!
    end: "Oct 2022 FridayT18:00:00",
    color: "teal",
    display: "background-inverse",
  },
];
const CalenderView = () => {
  const events = [];
  const [selectedDate, setSelectedDate] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const createEvent = (selectInfo) => {
    console.log(selectInfo);
    setOpen(!open);
    setSelectedDate(selectInfo?.startStr);
    // // const event = {
    // //   id: 1, // You must use a custom id generator
    // //   title: "new Event",
    // //   // start: startDate,
    // //   // allDay: endDate ? endDate : true, // If there's no end date, the event will be all day of start date
    // //   start: "2022-10-21T15:30:00", // a property!
    // //   end: "2022-10-21T18:00:00",
    // //   color: "black",
    // //   display: "background-inverse",
    // let title = prompt("Enter a title: ");
    // let time1 = prompt("Enter time1: ");
    // let time2 = prompt("Enter time2: ");
    // let startDate = selectInfo?.startStr;
    // let calendarApi = selectInfo.view.calendar;
    // console.log(calendarApi);
    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     title,
    //     color: "teal",
    //     display: "background-inverse",
    //     start: startDate + time1,
    //     end: startDate + time2,
    //     //allDay: selectInfo.allDay,
    //   });
    // }

    //Events.push(event);
  };
  //console.log(Events);

  const showEvent = () => {
    alert("Clicked");
  };

  const {
    isLoading,
    data: calenderEvents,
    refetch,
  } = useQuery(["availbleEvents"], () =>
    // heruko site boshbey
    fetch("http://localhost:8800/api/scheduler/", {
      method: "GET",
    }).then((res) => res.json())
  );
  console.log(calenderEvents);

  if (isLoading) {
    return <Loading></Loading>;
  }
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
          events={calenderEvents?.events}
          //events={allData}
          // initialEvents={allData}
          editable={true}
          selectable={true}
          select={createEvent}
          eventClick={showEvent}
          displayEventTime={true}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short",
          }}
        />
        {open && (
          <CustomModal
            selectedDate={selectedDate}
            handleClose={handleClose}
            clicked={open}
            refetch={refetch}
          ></CustomModal>
        )}
      </div>
    </div>
  );
};

export default CalenderView;
