import React, { useEffect } from "react";
import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineEye,
  AiOutlineHistory,
} from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { providerIp } from "../../../../../../Misc/BaseClient";
import useToken from "../../../../../../CustomHooks/useToken";
import axios from "axios";
import {
  minsToHours,
  timeConverter2,
} from "../../../../../Shared/TimeConverter/TimeConverter";
import moment from "moment";
import { CheckBox } from "@mui/icons-material";
import { toast } from "react-toastify";

const DayView = () => {
  const { id } = useParams();
  const { token } = useToken();
  const [dayViewData, setDayViewData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [time, setTime] = useState("");
  const [listLoading, setListLoading] = useState(false);
  console.log(time);

  //Api call
  useEffect(() => {
    const getDayView = async () => {
      setListLoading(true);
      const res = await axios({
        method: "GET",
        url: `${providerIp}/recurring-session/single/data/${id}`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      const data = res?.data;
      setDayViewData(data?.sessionScheduled);
      setListLoading(false);
    };
    getDayView();
  }, [token, id]);

  // console.log("dayViewData", dayViewData)

  const morning = [
    {
      time: "10:15 AM",
    },
    {
      time: "10:00 PM",
    },
    {
      time: "4:15AM",
    },
    {
      time: "11:15 AM",
    },
    {
      time: "9:15 AM",
    },
  ];

  //get rows id to do some action on them
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selected row-keys: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,

    //Billing is_locked===true then you can't chose that checkbox
    getCheckboxProps: (record) => {
      //console.log("record", record);
      const rowIndex = record?.is_locked;
      return {
        disabled: rowIndex === 1,
      };
    },
  };

  const [result, setResult] = useState([]);
  const [currentDay, setCurrentDay] = useState(null);
  console.log("clicked id", result);
  console.log("current day", currentDay);

  useEffect(() => {
    if (result.length === 0) {
      setCurrentDay(null);
    }
  }, [result.length]);

  return (
    <div className="">
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 2xl:grid-cols-7  mb-2 my-5 border border-[#F2EDFF]">
          <div className="">
            <h1 className="border border-white font-medium text-[12px] text-center py-1 bg-secondary text-white">
              Monday
            </h1>
            <div className="border grid grid-cols-1 mb-2 p-1 gap-1 shadow-sm">
              {
                dayViewData
                  .filter((each) => each?.week_day_name === "Monday")
                  .map((each) => (
                    <div className="flex items-center justify-center available-button border gap-3">
                      <input
                        checked={result.includes(each?.id) || false}
                        type="checkbox"
                        onChange={() => {
                          const optionWeekDay = 2;
                          const indexOfRecord = result.findIndex(
                            (item) => item === each?.id
                          ); //check if the record is already in the array
                          if (!currentDay) {
                            setCurrentDay(optionWeekDay);
                            setResult([...result, each?.id]);
                          } else {
                            if (currentDay === optionWeekDay) {
                              if (result[indexOfRecord] === each?.id) {
                                result.splice(indexOfRecord, 1); //if yes then remove it from the array
                                setResult([...result]);
                              } else {
                                setResult([...result, each?.id]);
                              }
                              setCurrentDay(2);
                            } else {
                              toast.error(
                                "You can't select more than one week day"
                              );
                            }
                          }
                        }}
                      />
                      <button key={each?.id}>
                        {moment(each?.from_time).format("Do MMMM YYYY, HH:mm A")}
                      </button>
                      <AiOutlineDelete className="text-red-400 text-[16px]"></AiOutlineDelete>
                    </div>

                  ))
              }
            </div>
          </div>
          <div className="">
            <h1 className="font-medium text-[12px] text-center py-1 bg-secondary text-white border border-white">
              Tuesday
            </h1>
            <div className="border grid grid-cols-1 mb-2 p-1 gap-1 shadow-sm">
              {dayViewData
                .filter((each) => each?.week_day_name === "Tuesday")
                .map((each) => (
                  <div className="flex items-center justify-center available-button border gap-3">
                    <input
                      checked={result.includes(each?.id) || false}
                      type="checkbox"
                      onChange={() => {
                        let optionWeekDay = 3;
                        const indexOfRecord = result.findIndex(
                          (item) => item === each?.id
                        ); //check if the record is already in the array

                        if (!currentDay) {
                          setCurrentDay(optionWeekDay);
                          setResult([...result, each?.id]);
                        } else {
                          if (currentDay === optionWeekDay) {
                            if (result[indexOfRecord] === each?.id) {
                              result.splice(indexOfRecord, 1); //if yes then remove it from the array
                              setResult([...result]);
                            } else {
                              setResult([...result, each?.id]);
                            }
                            setCurrentDay(3);
                          } else {
                            toast.error(
                              "You can't select more than one week day"
                            );
                          }
                        }
                      }}
                    />
                    <button key={each?.id}>
                      {moment(each?.from_time).format("Do MMMM YYYY, HH:mm A")}
                    </button>
                    <AiOutlineDelete className="text-red-400 text-[16px]"></AiOutlineDelete>
                  </div>
                ))}
            </div>
          </div>

          <div className="">
            <h1 className=" border border-white font-medium text-[12px] text-center py-1 bg-secondary text-white">
              Wednesday
            </h1>
            <div className="border grid grid-cols-1 mb-2 p-1 gap-1 shadow-sm">
              {dayViewData
                .filter((each) => each?.week_day_name === "Wednesday")
                .map((each) => (
                  <div className="flex items-center justify-center available-button border gap-3">
                    <input
                      checked={result.includes(each?.id) || false}
                      type="checkbox"
                      onChange={() => {
                        let optionWeekDay = 4;
                        const indexOfRecord = result.findIndex(
                          (item) => item === each?.id
                        ); //check if the record is already in the array

                        if (!currentDay) {
                          setCurrentDay(optionWeekDay);
                          setResult([...result, each?.id]);
                        } else {
                          if (currentDay === optionWeekDay) {
                            if (result[indexOfRecord] === each?.id) {
                              result.splice(indexOfRecord, 1); //if yes then remove it from the array
                              setResult([...result]);
                            } else {
                              setResult([...result, each?.id]);
                            }
                            setCurrentDay(4);
                          } else {
                            toast.error(
                              "You can't select more than one week day"
                            );
                          }
                        }
                      }}
                    />
                    <button key={each?.id}>
                      {moment(each?.from_time).format("Do MMMM YYYY, HH:mm A")}
                    </button>
                    <AiOutlineDelete className="text-red-400 text-[16px]"></AiOutlineDelete>
                  </div>
                ))}
            </div>
          </div>
          <div className="">
            <h1 className=" border border-white font-medium text-[12px] text-center py-1 bg-secondary text-white">
              Thursday
            </h1>
            <div className="border grid grid-cols-1 mb-2 p-1 gap-1 shadow-sm">
              {dayViewData
                .filter((each) => each?.week_day_name === "Thursday")
                .map((each) => (
                  <div className="flex items-center justify-center available-button border gap-3">
                    <input
                      checked={result.includes(each?.id) || false}
                      type="checkbox"
                      onChange={() => {
                        let optionWeekDay = 5;
                        const indexOfRecord = result.findIndex(
                          (item) => item === each?.id
                        ); //check if the record is already in the array

                        if (!currentDay) {
                          setCurrentDay(optionWeekDay);
                          setResult([...result, each?.id]);
                        } else {
                          if (currentDay === optionWeekDay) {
                            if (result[indexOfRecord] === each?.id) {
                              result.splice(indexOfRecord, 1); //if yes then remove it from the array
                              setResult([...result]);
                            } else {
                              setResult([...result, each?.id]);
                            }
                            setCurrentDay(5);
                          } else {
                            toast.error(
                              "You can't select more than one week day"
                            );
                          }
                        }
                      }}
                    />
                    <button key={each?.id}>
                      {moment(each?.from_time).format("Do MMMM YYYY, HH:mm A")}
                    </button>
                    <AiOutlineDelete className="text-red-400 text-[16px]"></AiOutlineDelete>
                  </div>
                ))}
            </div>
          </div>
          <div className="">
            <h1 className=" border border-white font-medium text-[12px] text-center py-1 bg-secondary text-white">
              Friday
            </h1>
            <div className="border grid grid-cols-1 mb-2 p-1 gap-1 shadow-sm">
              {dayViewData
                .filter((each) => each?.week_day_name === "Friday")
                .map((each) => (
                  <div className="flex items-center justify-center available-button border gap-3">
                    <input
                      checked={result.includes(each?.id) || false}
                      type="checkbox"
                      onChange={() => {
                        let optionWeekDay = 6;
                        const indexOfRecord = result.findIndex(
                          (item) => item === each?.id
                        ); //check if the record is already in the array

                        if (!currentDay) {
                          setCurrentDay(optionWeekDay);
                          setResult([...result, each?.id]);
                        } else {
                          if (currentDay === optionWeekDay) {
                            if (result[indexOfRecord] === each?.id) {
                              result.splice(indexOfRecord, 1); //if yes then remove it from the array
                              setResult([...result]);
                            } else {
                              setResult([...result, each?.id]);
                            }
                            setCurrentDay(6);
                          } else {
                            toast.error(
                              "You can't select more than one week day"
                            );
                          }
                        }
                      }}
                    />
                    <button key={each?.id}>
                      {moment(each?.from_time).format("Do MMMM YYYY, HH:mm A")}
                    </button>
                    <AiOutlineDelete className="text-red-400 text-[16px]"></AiOutlineDelete>
                  </div>
                ))}
            </div>
          </div>
          <div className="">
            <h1 className=" border border-white font-medium text-[12px] text-center py-1 bg-secondary text-white">
              Saturday
            </h1>
            <div className="border grid grid-cols-1 mb-2 p-1 gap-1 shadow-sm">
              {dayViewData
                .filter((each) => each?.week_day_name === "Saturday")
                .map((each) => (
                  <div className="flex items-center justify-center available-button border gap-3">
                    <input
                      checked={result.includes(each?.id) || false}
                      type="checkbox"
                      onChange={() => {
                        let optionWeekDay = 7;
                        const indexOfRecord = result.findIndex(
                          (item) => item === each?.id
                        ); //check if the record is already in the array

                        if (!currentDay) {
                          setCurrentDay(optionWeekDay);
                          setResult([...result, each?.id]);
                        } else {
                          if (currentDay === optionWeekDay) {
                            if (result[indexOfRecord] === each?.id) {
                              result.splice(indexOfRecord, 1); //if yes then remove it from the array
                              setResult([...result]);
                            } else {
                              setResult([...result, each?.id]);
                            }
                            setCurrentDay(7);
                          } else {
                            toast.error(
                              "You can't select more than one week day"
                            );
                          }
                        }
                      }}
                    />
                    <button key={each?.id}>
                      {moment(each?.from_time).format("Do MMMM YYYY, HH:mm A")}
                    </button>
                    <AiOutlineDelete className="text-red-400 text-[16px]"></AiOutlineDelete>
                  </div>
                ))}
            </div>
          </div>
          <div className="">
            <h1 className=" border border-white font-medium text-[12px] text-center py-1 bg-secondary text-white">
              Sunday
            </h1>
            <div className="border grid grid-cols-1 mb-2 p-1 gap-1 shadow-sm">
              {dayViewData
                .filter((each) => each?.week_day_name === "Sunday")
                .map((each) => (
                  <div className="flex items-center justify-center available-button border gap-3">
                    <input
                      checked={result.includes(each?.id) || false}
                      type="checkbox"
                      onChange={() => {
                        let optionWeekDay = 8;
                        const indexOfRecord = result.findIndex(
                          (item) => item === each?.id
                        ); //check if the record is already in the array

                        if (!currentDay) {
                          setCurrentDay(optionWeekDay);
                          setResult([...result, each?.id]);
                        } else {
                          if (currentDay === optionWeekDay) {
                            if (result[indexOfRecord] === each?.id) {
                              result.splice(indexOfRecord, 1); //if yes then remove it from the array
                              setResult([...result]);
                            } else {
                              setResult([...result, each?.id]);
                            }
                            setCurrentDay(8);
                          } else {
                            toast.error(
                              "You can't select more than one week day"
                            );
                          }
                        }
                      }}
                    />
                    <button key={each?.id}>
                      {moment(each?.from_time).format("Do MMMM YYYY, HH:mm A")}
                    </button>
                    <AiOutlineDelete className="text-red-400 text-[16px]"></AiOutlineDelete>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <select className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-32 focus:outline-none z-0">
            <option value="" className="text-black">
              Select
            </option>
            <option value="Today" className="text-black">
              Bulk Delete
            </option>
          </select>
          <button className="pms-input-button mr-2">Go</button>
        </div>
      </div>
    </div>
  );
};

export default DayView;