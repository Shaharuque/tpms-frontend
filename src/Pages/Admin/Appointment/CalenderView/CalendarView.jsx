import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomModal from "./CustomModal";
import "./custom.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import googleCalendar from "../../../Assets/google-calendar.png";
import Loading from "../../../../Loading/Loading";
import { Link } from "react-router-dom";
import EventDetails from "./EventDetails";
// import useToken from "../../../../../CustomHooks/useToken";
import useToken from "../../../../../src/CustomHooks/useToken";
import $ from "jquery";
import { useGetCalendarEventApiQuery } from "../../../../features/Appointment_redux/Calendar/CalendarApi";
import moment from "moment";

const CalenderView = () => {
  const tooltipRef = useRef(null);
  const { token } = useToken();
  const calendarRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState();
  const [open, setOpen] = useState(false);
  const [eventId, setEventId] = useState();
  const [startdate, setStartDate] = useState("");
  const [enddate, setendDate] = useState("");
  const [dynamicID, setdynamicId] = useState("");

  // hovering data show all funch

  const handleClose = () => {
    setOpen(false);
  };

  const handleDatesSet = (arg) => {
    // console.log("data of hovered event", arg.view);
    // const viewStartDate = new Date(arg.view.currentStart);
    // const viewEndDate = new Date(arg.view.currentEnd);

    // const start = Math.floor(viewStartDate?.getTime() / 1000);
    // const end = Math.floor(viewEndDate?.getTime() / 1000);

    // console.log("View Start Date:", viewStartDate);
    // console.log("View End Date:", viewEndDate);

    const calendarApi = arg?.view?.calendar;
    const view = calendarApi?.view;

    let start = new Date(view?.activeStart);
    // const startmin = Math.floor(start.getTime() / 1000);
    let end = new Date(view?.activeEnd);
    // const endmin = Math.floor(end.getTime() / 1000);

    // calculated in milli second format
    //     const date = moment(dateString);

    // const formattedDate = date.format('YYYY-MM-DD');
    setStartDate(moment(start).format("YYYY-MM-DD"));
    setendDate(moment(end).format("YYYY-MM-DD"));
    console.log("View Start Date:", moment(start).format("YYYY-MM-DD"));
    console.log("View End Date:", moment(end).format("YYYY-MM-DD"));

    // You can perform additional actions or render the view start and end dates as needed

    // let start = moment(view?.activeStart);
    // let end = moment(view?.activeEnd);

    // console.log("View Start Date:", start.format());
    // console.log("View End Date (GMT+3):", end.format());

    // const usTimeZone = "America/New_York";
    // const usStandardEnd = end.tz(usTimeZone).format();

    // console.log("View End Date (US Standard Time):", usStandardEnd);
    // console.log("mili secound", Math.floor(usStandardEnd / 1000));
  };

  // const calander event api call
  // console.log("startdate and enddate  ", startdate, enddate);

  const {
    isLoading,
    data: calenderEvents,
    isSuccess,
    refetch,
  } = useGetCalendarEventApiQuery({
    token,
    payload: {
      page: 1,
      // start_data: "2023-05-01",
      // end_date: "2023-05-31",
      start_data: startdate,
      end_date: enddate,
    },
  });

  useEffect(() => {
    function handleEventMouseEnter(info) {
      //
      const tooltip = document.createElement("div");
      tooltip.className = "tooltipevent ";

      // const tooltipContent = `
      //   <div class="tooltip-container">
      //     <div class="tooltip-content">
      //       ${info.el.innerText}
      //     </div>
      //   </div>
      // `;
      const x = info?.el?.fcSeg?.eventRange?.def?.publicId;
      const datamodifyed = calenderEvents?.data?.data.find((item) => item.id === x);
      console.log("datamodifyed------", datamodifyed, "id", x);

      console.log("elid------", info?.el?.fcSeg?.eventRange?.def?.publicId);
      const tooltipContent = `
        <div class="calendar-tooltip-container tooltipevent bg-white shadow-md rounded p-5">
        <div class="grid grid-cols-2 gap-4 mb-2">
          <div>
            <label class="text-primary text-sm font-bold">Client Name</label>
            <h5 class=" font-normal">${datamodifyed?.app_patient?.client_full_name}</h5>
          </div>
          <div>
            <label class="text-primary text-sm font-bold">DOB</label>
            <h5 className=" font-normal">${datamodifyed?.app_provider?.full_name}</h5>
          </div>
          
          
          
        </div>
  
        
        
        <div class="mb-2">
          <label class="text-primary text-sm font-bold	">Email</label>
          <h5 class=" font-normal">${"Jakir@gmail.com"}</h5>
        </div>
        <div class="mb-2">
          <label class="text-primary text-sm font-bold">Service</label>
          <h5 class=" font-normal">${datamodifyed?.id}</h5>
        </div>
        <div class="mb-2">
          <label class="text-primary text-sm font-bold">Session Time</label>
          <h5 class=" font-normal">${"serssion time"}</h5>
        </div>
        <div class="mb-2">
        <label class="text-primary text-sm font-bold">Status</label>
        <h5 class=" font-normal">${"Status"}</h5>
      </div>
      
        <div class="mb-2">
        <span class="bg-[#089bab] text-white text-[9px] font-medium mr-2 px-2.5 py-0.5 rounded ">Canceled By Provider</span>
  
  
        </div>
        </div>
      `;

      console.log("info ", info);

      tooltip.innerHTML = tooltipContent;

      //----------------------
      // tooltip.className = "tooltipevent";
      // tooltip.style.width = "300px";
      // tooltip.style.height = "250px";
      // tooltip.style.background = "#ccc";

      // tooltip.style.zIndex = 10001;

      // tooltip.innerText = info.el.innerText;
      // tooltip.innerText = "helo";
      // if (open === null) {
      //   tooltip.style.position = "absolute";
      //   console.log("modal view", open);
      // }

      document.body.appendChild(tooltip);

      info.el.style.zIndex = 10000;
      $(tooltip).fadeIn(500);
      $(tooltip).fadeTo(10, 1.9);

      const handleMouseMove = (e) => {
        tooltip.style.top = e.pageY + 10 + "px";
        tooltip.style.left = e.pageX + 20 + "px";
      };

      document.addEventListener("mousemove", handleMouseMove);

      info.el.addEventListener("mouseleave", () => {
        info.el.style.zIndex = 8;
        tooltip.remove();

        document.removeEventListener("mousemove", handleMouseMove);
      });

      info.el.addEventListener("click", () => {
        setdynamicId(x);
        info.el.style.zIndex = 8;
        tooltip.remove();

        document.removeEventListener("mousemove", handleMouseMove);
      });

      tooltipRef.current = tooltip;
    }

    function handleEventMouseLeave() {
      if (tooltipRef.current) {
        tooltipRef.current.remove();
        tooltipRef.current = null;
      }
    }

    $(document).on("mouseenter", ".fc-event", function () {
      handleEventMouseEnter({ el: this });
    });

    $(document).on("mouseleave", ".fc-event", handleEventMouseLeave);

    return () => {
      $(document).off("mouseenter", ".fc-event");
      $(document).off("mouseleave", ".fc-event");
      handleEventMouseLeave();
    };
  }, [calenderEvents?.data?.data]);

  // const maindata = async () => {
  //   const fetchpostTest = await PostfetchData({
  //     endPoint: "/calender/list",
  //     payload: {
  //       page: 1,
  //       start_data: startdate,
  //       end_date: enddate,
  //     },
  //     token,
  //   });
  // };

  // useEffect(() => {
  //   const dm = maindata();

  //   console.log("----main func useffect call", dm);
  // }, []);

  // const maindata = async () => {
  //   try {
  //     const fetchpostTest = await PostfetchData({
  //       endPoint: "/calender/list",
  //       payload: {
  //         page: 1,
  //         start_data: startdate,
  //         end_date: enddate,
  //       },
  //       token,
  //     });

  //     return fetchpostTest;
  //   } catch (error) {
  //     console.error("Error in maindata:", error);
  //     throw error;
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await maindata();
  //       console.log("API response:", data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [maindata]);

  console.log("--------", calenderEvents?.data?.data);
  //  curren time datae

  // useEffect(() => {
  //   // const modifyDatamap = calenderEvents?.data?.data.map((item) => {
  //   //   const title = item?.app_provider?.last_name + item?.app_provider?.first_name;
  //   //   const start = item?.from_time;
  //   //   const end = item?.to_time;
  //   //   const id = item?.id;
  //   //   return {
  //   //     title,
  //   //     color: "#089BAB",
  //   //     display: "background-inverse",
  //   //     end,
  //   //     start,
  //   //     id,
  //   //   };
  //   // });

  //   // setdynamicEvent(modifyDatamap);
  //   // console.log("event data modify-----", modifyDatamap);

  //   const fetchCalendarEvents = async () => {
  //     try {
  //       const modifyDatamap = calenderEvents?.data?.data.map((item) => {
  //         const title = item?.app_provider?.last_name + item?.app_provider?.first_name;
  //         const start = item?.from_time;
  //         const end = item?.to_time;
  //         const id = item?.id;
  //         return {
  //           title,
  //           color: "#089BAB",
  //           display: "background-inverse",
  //           end,
  //           start,
  //           id,
  //         };
  //       });

  //       setdynamicEvent(modifyDatamap);
  //     } catch (error) {
  //       console.error("Error fetching calendar events:", error);
  //     }
  //   };

  //   fetchCalendarEvents();
  // }, [calenderEvents?.data?.data]);

  //current

  // workable code

  // workable code-------------

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

  console.log("api data rtk", calenderEvents);
  const modifyDatamap = calenderEvents?.data?.data.map((item) => {
    const title = item?.app_provider?.last_name + item?.app_provider?.first_name;
    const start = item?.from_time;
    const end = item?.to_time;
    const id = item?.id;
    return {
      title,
      color: "#089BAB",
      display: "background-inverse",
      end,
      start,
      id,
    };
  });

  // setdynamicEvent(modifyDatamap);
  console.log("event data modify-----", modifyDatamap);

  //-------------------------------------end--------------------

  console.log("dynamicID", dynamicID);
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
        {/* {hoveredEvent && (
          <EventDetails className="event-wrapper" event={hoveredEvent} />
        )} */}

        {/* {hoveredEvent && <EventDetails event={hoveredEvent} />} */}
        {open ? (
          <CustomModal
            selectedDate={selectedDate}
            handleClose={handleClose}
            clicked={open}
            eventId={dynamicID ? dynamicID : null}
            refetch={refetch}
            event={hoveredEvent}
          ></CustomModal>
        ) : null}

        <FullCalendar
          ref={calendarRef}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prevYear,prev,next,nextYear today",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // events={calenderEvents?.events}
          // events={Events}
          events={modifyDatamap}
          // initialEvents={allData}
          // initialEvents={modifyDatamap}
          editable={false}
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
          // editable={false}
          // droppable={false}
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
          // eventMouseEnter={handleEventHover}
          // eventMouseLeave={handleEventLeave}
          //
          // eventMouseEnter={handleEventMouseEnter}
          // eventMouseLeave={handleEventMouseLeave}
        />
      </div>
    </div>
  );
};

export default CalenderView;
