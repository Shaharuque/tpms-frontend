import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import $ from "jquery";
import moment from "moment";
import useToken from "../../../CustomHooks/useToken";
import Loading from "../../../Loading/Loading";
import { RiUserAddLine } from "react-icons/ri";
import { DiffOutlined } from "@ant-design/icons";
import { useGetProviderCalenderEventsQuery } from "../../../features/ProviderPortal/ProviderCalender_redux/providerCalenderApi";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";
import EditEventModal from "./EditEventModal";

const ProviderCalender = () => {
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
    const calendarApi = arg?.view?.calendar;
    const view = calendarApi?.view;

    let start = new Date(view?.activeStart);
    let end = new Date(view?.activeEnd);
    setStartDate(moment(start).format("YYYY-MM-DD"));
    setendDate(moment(end).format("YYYY-MM-DD"));
    // console.log("View Start Date:", moment(start).format("YYYY-MM-DD"));
    // console.log("View End Date:", moment(end).format("YYYY-MM-DD"));
  };

  //Get All Calender Events(According to date range)
  const {
    isLoading,
    data: calenderEvents,
    isSuccess: eventGetSuccess,
    refetch,
  } = useGetProviderCalenderEventsQuery(
    {
      token,
      payload: {
        start_date: startdate,
        end_date: enddate,
      },
    },
    {
      skip: !startdate && true,
    }
  );

  // Mouse Hovering Data Get
  useEffect(() => {
    function handleEventMouseEnter(info) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltipevent ";
      const x = info?.el?.fcSeg?.eventRange?.def?.publicId;
      const datamodifyed = calenderEvents?.data.find((item) => item.id === x);
      console.log("datamodifyed------", datamodifyed, "id", x);
      console.log("elid------", info?.el?.fcSeg?.eventRange?.def?.publicId);
      const tooltipContent = `
        <div class="calendar-tooltip-container tooltipevent bg-white shadow-md rounded p-5">
          <div class="individual-div mb-2">
              <svg
                fill="green"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
                {...props}
              >
              <path d="M6 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              <path
                fillRule="evenodd"
                d="M13.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V8h-1.5a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"
                />
            </svg>
            <p class=" font-bold ml-2">${datamodifyed?.patientName}</p>
          </div>
          <div class="individual-div mb-2">
            <svg
              viewBox="0 0 24 24"
              fill="#3788D8"
              height="1.5em"
              width="1.5em"
              {...props}
            >
              <path d="M17 4h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 112 0v1h6V3a1 1 0 012 0v1zm-2 2H9v1a1 1 0 11-2 0V6H5v4h14V6h-2v1a1 1 0 01-2 0V6zm4 6H5v8h14v-8z" />
            </svg>
            <h5 class=" font-bold ml-2">${datamodifyed?.patientDOB}</h5>
          </div>
          <div class="individual-div mb-2">
              <svg
                viewBox="0 0 24 24"
                fill="#FBC02D"
                height="1.5em"
                width="1.5em"
                {...props}
              >
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 01-.9 0L4 9.62V18h16V9.62z" />
              </svg>
            <h5 class=" font-bold ml-2">${datamodifyed?.patientEmail}</h5>
          </div>
          <div class="individual-div mb-2">
             <svg
                viewBox="0 0 512 512"
                fill="teal"
                height="1.5em"
                width="1.5em"
                {...props}
              >
              <path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z" />
              <path d="M400 144 A112 112 0 0 1 288 256 A112 112 0 0 1 176 144 A112 112 0 0 1 400 144 z" />
              <path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
            </svg>
            <h5 class=" font-bold ml-2">${datamodifyed?.providerName || "Not Selected"}</h5>
          </div>
          <div class='individual-div mb-2'>
            <svg
              viewBox="0 0 24 24"
              fill="black"
              height="1.5em"
              width="1.5em"
              {...props}
            >
              <path d="M17 7h2.25c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H8.75C7.78 21 7 20.22 7 19.25V17H4.75C3.78 17 3 16.22 3 15.25V4.75C3 3.78 3.78 3 4.75 3h10.5c.97 0 1.75.78 1.75 1.75V7zm-2 0V5H5v10h2V8.75C7 7.78 7.78 7 8.75 7H15zM9 9v10h10V9H9z" />
            </svg>
            <h5 class=" font-bold ml-2">${datamodifyed?.id}</h5>
          </div>
          <div class="individual-div mb-2">
             <svg
              viewBox="0 0 24 24"
              fill="gray"
              height="1.5em"
              width="1.5em"
              {...props}
            >
              <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm0 9a1 1 0 01-1-1V8a1 1 0 012 0v4a1 1 0 01-1 1zm0 4a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            <h5 class=" font-bold ml-2">${dateConverter(datamodifyed?.schedule_date)}</h5>
          </div>
          <div class="individual-div mb-2">
             <svg
                viewBox="0 0 24 24"
                fill="red"
                height="1.5em"
                width="1.5em"
                {...props}
              >
                <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-8.41l2.54 2.53a1 1 0 01-1.42 1.42L11.3 12.7a1 1 0 01-.3-.7V8a1 1 0 012 0v3.59z" />
            </svg>
            <h5 class=" font-bold ml-2">${datamodifyed?.start_time} - ${datamodifyed?.end_time}</h5>
          </div>
          <div class="individual-div mb-2">
            ${
              datamodifyed?.status === "deleted"
                ? `<p class="bg-[#a083c5] text-white text-[9px] font-medium px-2.5 py-0.5 rounded ">${datamodifyed?.status}</p>`
                : `<p class="bg-[#089bab] text-white text-[9px] font-medium px-2.5 py-0.5 rounded ">${datamodifyed?.status}</p>`
            }
            
          </div>
        </div>
      `;

      console.log("info ", info);
      tooltip.innerHTML = tooltipContent;
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
  }, [calenderEvents?.data]);

  // For creating new event
  const createEvent = (selectInfo) => {
    console.log(selectInfo);
    setOpen(!open);
    setSelectedDate(selectInfo?.startStr);
    if (eventId) {
      setEventId(null);
    }
  };

  // for showing clicked event details basedon id using same CustomModal.jsx
  const showEventDetails = (info) => {
    console.log("Clicked event id", info?.event?.id);
    setEventId(info?.event?.id);
    setOpen(!open);
  };

  // For hovering
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const handleEventHover = (event) => {
    console.log("data of hovered event", event.event.title);
    setHoveredEvent(event.event);
  };
  const handleEventLeave = () => {
    setHoveredEvent(null);
  };

  //Event data modify
  const eventData = calenderEvents?.data?.map((item) => {
    const start = item?.start;
    const end = item?.end;
    const id = item?.id;
    const title = item?.title;
    const color = item?.eventBackgroundColor;
    const textColor = item?.eventTextColor;
    const display = item?.display;
    return {
      title,
      color,
      display,
      end,
      start,
      id,
      textColor,
    };
  });

  // setdynamicEvent(eventData);
  console.log("event data modify", eventData);

  //-------------------------------------end--------------------

  console.log("dynamicID", dynamicID);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="flex items-center flex-wrap md:justify-between pb-4">
        <h1 className="text-lg my-2 text-orange-500">Manage Appointment</h1>
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
          timeZone="UTC" //global tinme zone
          events={eventData}
          editable={false}
          selectable={true}
          select={createEvent}
          eventClick={showEventDetails}
          displayEventTime={true}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short",
          }}
          // For showing the calender month and date (autometically)(format 30 days(1-01-2023 to 31-01-2023))
          datesSet={handleDatesSet}
        />
      </div>
      {open ? <EditEventModal selectedDate={selectedDate} handleClose={handleClose} clicked={open} eventId={eventId}></EditEventModal> : null}
    </div>
  );
};

export default ProviderCalender;
