import React from "react";
import {
  ProcessedEvent,
  Scheduler,
  SchedulerHelpers,
} from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import { Button } from "@mui/material";
import CustomEditor from "./CustomEditor";

const CalendarView = () => {
  const fetchRemote = async (query) => {
    console.log("Query: ", query);
    /**Simulate fetchin remote data */
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
      EVENTS.push(...EVENTS, event);
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
  return (
    <div className="h-[100vh]">
      <Scheduler
        // events={EVENTS}
        remoteEvents={fetchRemote}
        view="month"
        deletable={false}
        customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
        onConfirm={handleConfirm}
        onDelete={handleDelete}
        // fields={[
        //   {
        //     name: "user_id",
        //     type: "select",
        //     // Should provide options with type:"select"
        //     options: [
        //       { id: 1, text: "John", value: 1 },
        //       { id: 2, text: "Mark", value: 2 },
        //     ],
        //     config: {
        //       label: "User",
        //       required: true,
        //       errMsg: "Plz Select User",
        //     },
        //   },
        //   {
        //     name: "Description",
        //     type: "input",
        //     default: "Default Value...",
        //     config: { label: "Details", multiline: true, rows: 4 },
        //   },
        //   {
        //     name: "anotherdate",
        //     type: "date",
        //     config: {
        //       label: "Other Date",
        //       md: 6,
        //       modalVariant: "dialog",
        //       type: "datetime",
        //     },
        //   },
        // ]}
      />
    </div>
  );
};

export default CalendarView;
