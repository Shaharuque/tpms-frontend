import React, { useState } from "react";
import NameLocationTable from "./NameLocation/NameLocationTable";
import NameLocationTable32 from "./NameLocation/NameLocationTable32";
import Loading from "../../../../../Loading/Loading";
import useToken from "../../../../../CustomHooks/useToken";
import { useGetNameLocationQuery } from "../../../../../features/Settings_redux/nameLocation/nameLocationApi";

const NameLocation = () => {
  const [box33Open, setbox33Open] = useState(true); //Here: box33=>NameLocationTable
  const [table32Open, setTable32Open] = useState(false); //Here: table32=>NameLocationTable32
  const { token } = useToken();
  //Name Location Api
  const { data: nameLocation, isLoading: dataLaoding } = useGetNameLocationQuery(token);
  console.log("nameLocation", nameLocation);

  //Some Important data showing below
  const box_no_32 = nameLocation?.box_32main || [];
  const box_no_33 = nameLocation?.setting_name_location;
  const working_hours = nameLocation?.setting_working_hour;
  // console.log(working_hours);

  console.log("bx32 check", box_no_32);

  const handleTableOpen = () => {
    setbox33Open(!box33Open);
    setTable32Open(false);
  };

  const handleTableOpen32 = () => {
    setTable32Open(!table32Open);
    setbox33Open(false);
  };

  //console.log("box_no_33", box_no_33);

  return (
    <div className="px-2  mb-2">
      {dataLaoding ? (
        <Loading></Loading>
      ) : (
        <div>
          <NameLocationTable box33Open={box33Open} handleTableOpen={handleTableOpen} time={working_hours} box_no_33={box_no_33}></NameLocationTable>

          <NameLocationTable32
            data={box_no_32}
            // primaryData={box_32main}
            handleTableOpen32={handleTableOpen32}
            table32Open={table32Open}
            loading={dataLaoding}
          />
        </div>
      )}
    </div>
  );
};

export default NameLocation;
