import { Modal } from "antd";
import { Switch } from "antd";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import useToken from "../../../../../../CustomHooks/useToken";
import {
  useGetAllHolidayQuery,
  useHolidayUpdateMutation,
} from "../../../../../../features/Settings_redux/holidaySetup/holidaySetupApi";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddFederal = ({ handleClose, open }) => {
  const { token } = useToken();

  const { data: allHoliday, isLoading: holidayLoading } = useGetAllHolidayQuery({ token });
  const [value, setValue] = useState(false);

  const [holidayUpdate, { data: holiddayupdatedata }] = useHolidayUpdateMutation();

  useEffect(() => {
    if (holiddayupdatedata?.status === "success") {
      toast.success(<h1 className="text-[12px]">{holiddayupdatedata?.message}</h1>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    console.log(holiddayupdatedata);
  }, [holiddayupdatedata]);

  console.log("all data come from api", allHoliday);
  const { register, handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    const custompayload = {
      jan_1: data?.jan_1 === true ? 1 : 0,
      jan_17: data?.jan_17 === true ? 1 : 0,
      feb_21: data?.feb_21 === true ? 1 : 0,
      may_30: data?.may_30 === true ? 1 : 0,
      jun_20: data?.jun_20 === true ? 1 : 0,
      july_4: data?.july_4 === true ? 1 : 0,
      sep_5: data?.sep_5 === true ? 1 : 0,
      oct_10: data?.oct_10 === true ? 1 : 0,
    };
    console.log("add feador data", custompayload);
    holidayUpdate({
      token,
      data: custompayload,
    });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-5 py-2 ">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg text-left text-orange-400 ">Add Federal US holidays</h1>
                  <IoCloseCircleOutline
                    onClick={handleClose}
                    className="text-gray-600 font-semibold  text-2xl hover:text-primary"
                  />
                </div>
                <div className="bg-gray-200 py-[1px] mt-3"></div>
                <div>
                  <div className="flex my-1 items-center ">
                    <Controller
                      name="jan_1"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.jan1?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      New Year's Day <span className="text-green-500">(January 1)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    {/* <Switch size="small" checked={value ? true : false} onClick={handlSwitch} /> */}
                    <Controller
                      name="jan_17"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.jan17?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Martin Luther King Jr. Day{" "}
                      <span className="text-green-500">(January 17)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    <Controller
                      name="feb_21"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.feb21?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      George Washington's Birthday{" "}
                      <span className="text-green-500">(February 21)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    <Controller
                      name="may_30"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.may30?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Memorial Day<span className="text-green-500">(May 30)</span>
                    </span>
                  </div>
                  <div className="flex my-1 items-center ">
                    <Controller
                      name="jun_20"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.jun20?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Juneteenth <span className="text-green-500">(June 19)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    <Controller
                      name="july_4"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.july4?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Independence Day <span className="text-green-500">(July 4)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    <Controller
                      name="sep_5"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.sep5?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Labor Day <span className="text-green-500">(September 4)</span>
                    </span>
                  </div>
                  <div className="flex my-1 items-center ">
                    <Controller
                      name="oct_10"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          size="small"
                          {...field}
                          defaultChecked={allHoliday?.oct10?.is_fed === 1 ? true : false}
                        />
                      )}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Columbus Day <span className="text-green-500">(October 10)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    {/* <Switch size="small" checked={value ? true : false} onClick={handlSwitch} /> */}
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Veterans Day<span className="text-green-500">(November 11)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    {/* <Switch size="small" checked={value ? true : false} onClick={handlSwitch} /> */}
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Thanksgiving <span className="text-green-500">(November 23)</span>
                    </span>
                  </div>

                  <div className="flex my-1 items-center ">
                    {/* <Switch size="small" checked={value ? true : false} onClick={handlSwitch} /> */}
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      Christmas Day <span className="text-green-500">(December 25)</span>
                    </span>
                  </div>
                </div>

                <div className=" flex items-center mt-5">
                  <button className=" pms-button mr-2" type="submit">
                    Save
                  </button>

                  <button onClick={handleClose} className="pms-close-button">
                    close
                  </button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
      )}
    </>
  );
};
export default AddFederal;
