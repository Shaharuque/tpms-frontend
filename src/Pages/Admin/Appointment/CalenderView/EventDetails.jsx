import React from "react";
import "./custom.css";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import moment from "moment/moment";

const EventDetails = ({ event, position }) => {
  return (
    <div className="card" style={{ position: "absolute", zIndex: 9999 }}>
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <p className="card-text">
          {moment(event.start).format("dddd, MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
