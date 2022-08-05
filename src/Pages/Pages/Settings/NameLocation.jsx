import React from "react";
import NameLocationTable from "./NameLocation/NameLocationTable";
import NameLocationTable32 from "./NameLocation/NameLocationTable32";

const NameLocation = () => {
  // Parent
  return (
    <div className="p-2 lg:h-[100vh]">
      <h1 className=" text-orange-500">Facility Setup name</h1>
      <NameLocationTable></NameLocationTable>
      <NameLocationTable32></NameLocationTable32>
    </div>
  );
};

export default NameLocation;
