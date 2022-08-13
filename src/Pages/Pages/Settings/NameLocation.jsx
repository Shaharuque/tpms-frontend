import React, { useEffect, useState } from "react";
import NameLocationTable from "./NameLocation/NameLocationTable";
import NameLocationTable32 from "./NameLocation/NameLocationTable32";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getsettings } from "../../../features/Settings_redux/settingSlice";
import Loading from "../../../Loading/Loading";

const NameLocation = () => {
  const [Table33Open, setTable33Open] = useState(true);
  const [table32Open, setTable32Open] = useState(false);
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
  }, [dispatch]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleTableOpen = () => {
    setTable33Open(!Table33Open);
  };

  const handleTableOpen32 = () => {
    setTable32Open(!table32Open);
    setTable33Open(!Table33Open);
  };

  return (
    <div className="p-2 ">
      <h1 className=" text-orange-500">Facility Setup</h1>
      <NameLocationTable
        Table33Open={Table33Open}
        handleTableOpen={handleTableOpen}
        time={working_hours}
        data={box_no_33}
      ></NameLocationTable>
      <NameLocationTable32
        handleTableOpen32={handleTableOpen32}
        table32Open={table32Open}
        Table33Open={Table33Open}
        handleTableOpen={handleTableOpen}
        data={box_no_32}
      ></NameLocationTable32>
    </div>
  );
};

export default NameLocation;
