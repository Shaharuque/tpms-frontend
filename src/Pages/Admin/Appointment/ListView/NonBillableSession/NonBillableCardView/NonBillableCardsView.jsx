import React from "react";
import NonBillableCardView from "./NonBillableCardView";

const NonBillableCardsView = ({ schedules, stuffs, posData }) => {
  console.log(stuffs);
  return (
    <div className="">
      {schedules?.map((appointment) => (
        <NonBillableCardView
          key={appointment?.id}
          data={appointment}
          stuffs={stuffs}
          posData={posData}
        ></NonBillableCardView>
      ))}
    </div>
  );
};

export default NonBillableCardsView;
