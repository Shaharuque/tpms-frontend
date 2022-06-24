import React from "react";
import NameLocationTable from "./NameLocation/NameLocationTable";

const NameLocation = () => {
  return (
    <div className="p-2">
      <h1 className=" text-orange-500">Facility Setup</h1>
      <NameLocationTable></NameLocationTable>
      <NameLocationTable></NameLocationTable>
    </div>
  );
};

export default NameLocation;
