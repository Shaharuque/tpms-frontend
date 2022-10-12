import React, { useEffect, useState } from "react";
import NameLocationTable from "./NameLocation/NameLocationTable";
import NameLocationTable32 from "./NameLocation/NameLocationTable32";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getsettings } from "../../../../../features/Settings_redux/settingSlice";
import Loading from "../../../../../Loading/Loading";

const NameLocation = () => {
  const [box33Open, setbox33Open] = useState(true); //Here: box33=>NameLocationTable
  const [table32Open, setTable32Open] = useState(false); //Here: table32=>NameLocationTable32
  const [test, setTest] = useState({});
  // Parent
  //Redux works will be done here
  const dispatch = useDispatch();

  //response from async action
  const data = useSelector((state) => state.settingInfo); //After action dispatched response can be received here

  //Some Important data showing below
  const loading = data?.loading;
  const settingDetails = data?.settingDetails;
  const box_no_32 = settingDetails?.box_no_32;
  const box_no_33 = settingDetails?.box_no_33;
  const pos = settingDetails?.pos;
  const working_hours = settingDetails?.working_hours;
  // console.log(working_hours);

  //getsettings action is dispatched [api calling]
  useEffect(() => {
    dispatch(getsettings());
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleTableOpen = () => {
    setbox33Open(!box33Open);
    setTable32Open(false);
  };

  const handleTableOpen32 = () => {
    setTable32Open(!table32Open);
    setbox33Open(false);
  };

  return (
    <div className="p-2 ">
      <h1 className="text-orange-500">Facility Setup</h1>
      <NameLocationTable
        box33Open={box33Open}
        handleTableOpen={handleTableOpen}
        time={working_hours}
        data={box_no_33}
      ></NameLocationTable>
      <NameLocationTable32
        data={box_no_32}
        handleTableOpen32={handleTableOpen32}
        table32Open={table32Open}
        loading={loading}
      />
    </div>
  );
};

export default NameLocation;