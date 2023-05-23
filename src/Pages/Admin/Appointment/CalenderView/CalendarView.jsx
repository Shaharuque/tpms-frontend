import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomModal from "./CustomModal";
import "./custom.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { useQuery } from "@tanstack/react-query";
import googleCalendar from "../../../Assets/google-calendar.png";
import Loading from "../../../../Loading/Loading";
import { Link } from "react-router-dom";
import EventDetails from "./EventDetails";

const Events = [
  {
    _id: "6354484605294b189f07d93a",
    title: "Jk Mo:Co Ja",
    patient: "Mr.Anik chowdhary",
    provider: "ashni soni",
    treatment: "Mental therapy",
    start: "2023-06-05T12:30:00",
    end: "2023-06-05T14:30:00",
    color: "#FEE9A6",
    display: "background-inverse",
    createdAt: "2023-06-05T19:45:10.483Z",
    updatedAt: "2023-06-05T20:27:12.243Z",
    __v: 0,
  },
  {
    _id: "6354488605294b189f07d93d",
    title: "Jk Mo:Du Duck",
    patient: "Mr.Anik asik",
    provider: "ashni soni",
    treatment: "Mental therapy",
    start: "2022-10-13T12:30:00",
    end: "2022-10-13T14:30:00",
    color: "#089BAB",
    display: "background-inverse",
    createdAt: "2022-10-22T19:46:14.925Z",
    updatedAt: "2022-10-22T20:26:34.064Z",
    __v: 0,
  },
  {
    _id: "6354497805294b189f07d941",
    title: "Co Ja: Sh At",
    patient: "James cook",
    provider: "ashni soni",
    treatment: "Mental therapy",
    start: "2022-10-13T13:00:00",
    end: "2022-10-13T13:30:00",
    color: "#E87121",
    display: "background-inverse",
    createdAt: "2022-10-22T19:50:16.545Z",
    updatedAt: "2022-10-22T19:50:16.545Z",
    __v: 0,
  },
  {
    _id: "635449c205294b189f07d945",
    title: "So As: Sh At",
    patient: "James Duck",
    provider: "ashni soni",
    treatment: "Mental therapy",
    start: "2022-10-13T16:00:00",
    end: "2022-10-13T16:30:00",
    color: "#E87121",
    display: "background-inverse",
    createdAt: "2022-10-22T19:51:30.081Z",
    updatedAt: "2022-10-22T19:51:30.081Z",
    __v: 0,
  },
  {
    _id: "63544a0305294b189f07d947",
    title: "Bl Eo: Sh At",
    patient: "DUck Duck",
    provider: "ashni soni",
    treatment: "Sound therapy",
    start: "2022-10-13T17:00:00",
    end: "2022-10-13T17:30:00",
    color: "#089BAB",
    display: "background-inverse",
    createdAt: "2022-10-22T19:52:35.307Z",
    updatedAt: "2022-10-22T19:52:35.307Z",
    __v: 0,
  },
  {
    _id: "63544a7c05294b189f07d94c",
    title: "Bl Jo: Sh Ao",
    patient: "DUck Duck2",
    provider: "Jomes gomez",
    treatment: "Sound therapy",
    start: "2022-10-14T17:00:00",
    end: "2022-10-14T17:30:00",
    color: "#089BAB",
    display: "background-inverse",
    createdAt: "2022-10-22T19:54:36.538Z",
    updatedAt: "2022-10-22T19:54:36.538Z",
    __v: 0,
  },
  {
    _id: "63544aab05294b189f07d950",
    title: "Bl Jo: Sh Ao",
    patient: "DUck Duck23",
    provider: "Jomes gomez",
    treatment: "Sound therapy",
    start: "2022-10-14T13:00:00",
    end: "2022-10-14T17:30:00",
    color: "#FBCBC7",
    display: "background-inverse",
    createdAt: "2022-10-22T19:55:23.244Z",
    updatedAt: "2022-10-22T19:55:23.244Z",
    __v: 0,
  },
];
const CalenderView = () => {
  const calendarRef = useRef(null);
  const events = [];
  const [selectedDate, setSelectedDate] = useState();
  const [open, setOpen] = useState(false);
  const [eventId, setEventId] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  // For creating new event
  const createEvent = (selectInfo) => {
    console.log(selectInfo);
    setOpen(!open);
    setSelectedDate(selectInfo?.startStr);
    if (eventId) {
      setEventId(null);
    }
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

  // for showing clicked event details basedon id using same CustomModal.jsx
  const showEventDetails = (id) => {
    console.log("Clicked event id", id);
    setEventId(id);
    setSelectedDate();
    setOpen(!open);
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
  console.log(calenderEvents?.events);

  // FOr hovering
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const handleEventHover = (event) => {
    console.log("data of hovered event", event.event.title);
    setHoveredEvent(event.event);
  };

  const handleEventLeave = () => {
    setHoveredEvent(null);
  };
  //-------------------------------Showing month date(auto) -------------------

  useEffect(() => {
    const calendarApi = calendarRef?.current?.getApi();
    const view = calendarApi?.view;

    // const viewStartDate = view?.currentStart;
    // const viewEndDate = view?.currentEnd;

    var start = new Date(view?.activeStart);
    //start = Math.floor(start.getTime() / 1000);
    var end = new Date(view?.activeEnd);
    //end = Math.floor(end.getTime() / 1000);

    console.log("View Start Date:", start);
    console.log("View End Date:", end);

    // You can perform additional actions or render the view start and end dates as needed
  }, []);

  // useEffect(() => {
  //   const calendarApi = calendarRef?.current?.getApi();

  //   const handleDatesSet = () => {
  //     const view = calendarApi?.view;
  //     const start = new Date(view?.activeStart);
  //     const end = new Date(view?.activeEnd);

  //     console.log("View Start Date:", start);
  //     console.log("View End Date:", end);

  //     // You can perform additional actions or render the view start and end dates as needed
  //   };

  //   calendarApi?.on("datesSet", handleDatesSet);

  //   return () => {
  //     calendarApi?.off("datesSet", handleDatesSet);
  //   };
  // }, []);
  const handleDatesSet = (arg) => {
    const viewStartDate = new Date(arg.view.currentStart);
    const viewEndDate = new Date(arg.view.currentEnd);

    const start = Math.floor(viewStartDate?.getTime() / 1000);
    const end = Math.floor(viewEndDate?.getTime() / 1000);

    console.log("View Start Date:", viewStartDate);
    console.log("View End Date:", viewEndDate);

    //calculated in milli second format
    console.log("View Start Date:", start);
    console.log("View End Date:", end);

    // You can perform additional actions or render the view start and end dates as needed
  };
  //-------------------------------------end--------------------
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="flex items-center flex-wrap md:justify-between pb-4">
        <h1 className="text-lg my-2 text-orange-500">Manage Appointment</h1>
        <div className="flex items-center justify-end">
          <button className="py-[5px] px-3 text-[12px] font-normal bg-gradient-to-r from-red-700 to-red-400 hover:to-red-700 text-white rounded-sm">
            Filter
          </button>
          <Link to="/admin">
            <img src={googleCalendar} alt="Google Calendar" style={{ width: "32px" }} />
          </Link>
          <button className=" py-[5px] font-normal px-3 mr-1 text-[12px]  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
            Print
          </button>
        </div>
      </div>
      <div className="border border-[#089bab] rounded-2xl p-2">
        <FullCalendar
          ref={calendarRef}
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
          eventClick={(arg) => {
            console.log(arg.event.extendedProps._id);
            showEventDetails(arg.event.extendedProps._id); //jei event a click korbo tar id showEvent func a pass[callback method]
          }}
          // eventClick={()=>showEvent(arg)}
          displayEventTime={true}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short",
          }}
          // For showing the calender month and date (autometically)(format 30 days(1-01-2023 to 31-01-2023))
          datesSet={handleDatesSet}
          // for hovering
          // eventContent={(info) => {
          //   return (
          //     <div
          //       onMouseEnter={() => handleEventHover(info)}
          //       onMouseLeave={handleEventLeave}
          //     >
          //       {info.event.title}
          //     </div>
          //   );
          // }}
          eventMouseEnter={handleEventHover}
          eventMouseLeave={handleEventLeave}
        />
        {/* {hoveredEvent && (
          <EventDetails className="event-wrapper" event={hoveredEvent} />
        )} */}

        {hoveredEvent && <EventDetails event={hoveredEvent} />}
        {open ? (
          <CustomModal
            selectedDate={selectedDate}
            handleClose={handleClose}
            clicked={open}
            eventId={eventId ? eventId : null}
            refetch={refetch}
            event={hoveredEvent}
          ></CustomModal>
        ) : null}
      </div>
    </div>
  );
};

export default CalenderView;
