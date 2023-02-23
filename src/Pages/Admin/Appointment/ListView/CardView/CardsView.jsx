import React from "react";
import CardView from "./CardView";

const CardsView = ({ schedules, posData }) => {
  return (
    <div className="">
      {schedules?.map((appointment) => (
        <CardView
          key={appointment?.id}
          data={appointment}
          posData={posData}
        ></CardView>
      ))}
    </div>
  );
};

export default CardsView;
