//react big-calender ar jaigae react-scheduler use kora hoisey
import React from "react";
import { Scheduler } from "@aldabil/react-scheduler";

const CalendarView = () => {
  const fetchRemote = async (query) => {
    console.log("Query: ", query);
    /**Simulate fetching remote data */
    return new Promise((res) => {
      setTimeout(() => {
        res(EVENTS);
      }, 3000);
    });
  };

  const handleConfirm = async (event, action) => {
    console.log(event, action);
    if (action === "edit") {
      /** PUT event to remote DB */
    } else if (action === "create") {
      /**POST event to remote DB */
    }
    /**
     * Make sure to return 4 mandatory fields:
     * event_id: string|number
     * title: string
     * start: Date|string
     * end: Date|string
     * ....extra other fields depend on your custom fields/editor properties
     */
    // Simulate http request: return added/edited event
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          ...event,
          event_id: event.event_id || Math.random(),
        });
      }, 3000);
    });
  };

  const handleDelete = async (deletedId) => {
    // Simulate http request: return the deleted id
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 3000);
    });
  };

  const EVENTS = [
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2021 5 2 09:30"),
      end: new Date("2021 5 2 10:30"),
      admin_id: 1,
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2021 5 4 10:00"),
      end: new Date("2021 5 4 11:00"),
      admin_id: 2,
    },
    {
      event_id: 3,
      title: "Event 3",
      start: new Date("2021 4 27 09:00"),
      end: new Date("2021 4 28 10:00"),
      admin_id: 1,
    },
    {
      event_id: 4,
      title: "Event 4",
      start: new Date("2021 5 4 9:00"),
      end: new Date("2021 5 4 10:36"),
      admin_id: 2,
    },
    {
      event_id: 5,
      title: "Event 5",
      start: new Date("2021 5 1 10:00"),
      end: new Date("2021 5 18 11:00"),
      admin_id: 2,
    },
    {
      event_id: 6,
      title: "Event 6",
      start: new Date("2021 5 2 11:00"),
      end: new Date("2021 5 2 12:00"),
      admin_id: 2,
    },
    {
      event_id: 7,
      title: "Event 7",
      start: new Date("2021 5 1 12:00"),
      end: new Date("2021 5 1 13:00"),
      admin_id: 3,
    },
    {
      event_id: 8,
      title: "Event 8",
      start: new Date("2021 5 1 13:00"),
      end: new Date("2021 5 1 14:00"),
      admin_id: 3,
    },
    {
      event_id: 9,
      title: "Event 11",
      start: new Date("2021 5 5 10:00"),
      end: new Date("2021 5 6 17:00"),
      admin_id: 1,
    },
    {
      event_id: 10,
      title: "Event 9",
      start: new Date("2021 5 6  15:00"),
      end: new Date("2021 5 6 16:00"),
      admin_id: 2,
    },
    {
      event_id: 11,
      title: "Event 10",
      start: new Date("2021 5 6 14:00"),
      end: new Date("2021 5 6 15:00"),
      admin_id: 2,
    },
  ];
  return (
    <div>
      <Scheduler
        view="month"
        events={EVENTS}
        selectedDate={new Date(2022, 4, 5)}
      />
    </div>
  );
};

export default CalendarView;
