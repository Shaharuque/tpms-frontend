import { Modal, Switch } from "antd";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import FederalDays from "./FederalDays";
import useToken from "../../../../../../CustomHooks/useToken";
import { useGetAllHolidayQuery } from "../../../../../../features/Settings_redux/holidaySetup/holidaySetupApi";

const AddFederal = ({ handleClose, open }) => {
  const { token } = useToken();

  const { data: allHoliday, isLoading: holidayLoading } = useGetAllHolidayQuery(
    { token }
  );
  const [value, setValue] = useState(false);

  // const [val21, setVal21] = useState(false);
  // const [val21, setVal21] = useState(false);
  // const [val21, setVal21] = useState(false);
  const { jan1, feb21, may30, jun20, july4, sep5, oct10 } = allHoliday;
  const [valJan1, setValJan1] = useState(jan1?.fed);

  const handlSwitch = () => {
    setValJan1(!valJan1);
  };
  console.log(valJan1);
  return (
    <>
      {!holidayLoading && (
        <div>
          <Modal
            // fullScreen={fullScreen}
            open={open}
            centered
            width={600}
            footer={value}
            closable={value}
            bodyStyle={{ padding: "0" }}
            className="box rounded-md"
          >
            <div className="px-5 py-2 ">
              <div className="flex items-center justify-between">
                <h1 className="text-lg text-left text-orange-400 ">
                  Add Federal US holidays
                </h1>
                <IoCloseCircleOutline
                  onClick={handleClose}
                  className="text-gray-600 font-semibold  text-2xl hover:text-primary"
                />
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div>
                <div className="flex my-1 items-center ">
                  <Switch
                    size="small"
                    defaultChecked={jan1?.is_fed}
                    onClick={handlSwitch}
                  />
                  <span className="text-[14px] font-medium text-gray-500 mx-3">
                    {jan1?.description}
                    {/* <span className="text-green-500">(January 1)</span> */}
                  </span>
                </div>
                <FederalDays
                  value={value}
                  handlSwitch={handlSwitch}
                ></FederalDays>
                <FederalDays
                  value={true}
                  handlSwitch={handlSwitch}
                ></FederalDays>
                <FederalDays
                  value={value}
                  handlSwitch={handlSwitch}
                ></FederalDays>
                <FederalDays
                  value={value}
                  handlSwitch={handlSwitch}
                ></FederalDays>
                <FederalDays
                  value={value}
                  handlSwitch={handlSwitch}
                ></FederalDays>
                <FederalDays
                  value={value}
                  handlSwitch={handlSwitch}
                ></FederalDays>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default AddFederal;
