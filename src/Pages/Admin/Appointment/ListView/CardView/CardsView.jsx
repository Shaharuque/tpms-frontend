import React from "react";
import CardView from "./CardView";

const CardsView = ({ data }) => {
  return (
    <div className="">
      {data.map((a, i) => (
        <CardView key={i} data={a}></CardView>
      ))}
    </div>
  );
};

export default CardsView;
