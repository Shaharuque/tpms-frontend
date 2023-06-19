import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { providerIp } from "../../../Misc/BaseClient";
import useToken from "../../../CustomHooks/useToken";
import axios from "axios";
import { usePayrollTimeGetQuery } from "../../../features/ProviderPortal/ProviderTimesheet_redux/providerTimeSheetApi";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";
import moment from "moment";
import ClockInReqTable from "./ClockInReqTable";
const ProviderClockIn = () => {
  const [time, setTime] = useState(new Date());
  const [punchTime, setPunchTime] = useState(null);
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [option, setOption] = useState(null);
  const [clockInTable, setClockInTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const currentDate = new Date();
  const { token } = useToken();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const FormattedDate = currentDate.toLocaleDateString(undefined, options);

  //Get the time periods
  const { data: timePeriods, isLoading: timePeriodsLoading, isError: timePeriodError } = usePayrollTimeGetQuery(token);

  //Present  Day Clock In/Out
  useEffect(() => {
    const isClockIn = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${providerIp}/clock/specific/day/clock/in`,
          headers: {
            "content-type": "Application/json",
            "x-auth-token": token,
          },
        });

        const result = response?.data;
        console.log(result);
        if (result?.time_out === null) {
          setIsPunchedIn(true);
          setPunchTime({
            punchIn: moment.utc(result?.time_in).format("HH:mm:ss A"),
          });
        } else {
          setIsPunchedIn(false);
          setPunchTime({
            punchIn: "N/A",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    isClockIn();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePunch = (e) => {
    if (isPunchedIn) {
      setPunchTime({
        punchIn: punchTime.punchIn,
        punchOut: time.toLocaleTimeString(),
      });
      setIsPunchedIn(false);
    } else {
      setPunchTime({ punchIn: time.toLocaleTimeString(), punchOut: null });
      setIsPunchedIn(true);
    }
    setClicked(true);
  };

  useEffect(() => {
    console.log("punchTime", punchTime, isPunchedIn);
    console.log("date", FormattedDate);
    const punch = async () => {
      try {
        const payload = {
          punch_check: isPunchedIn ? "notfound" : "found",
          current_time: isPunchedIn ? punchTime?.punchIn : punchTime?.punchOut,
          current_date: FormattedDate,
        };

        const response = await axios({
          method: "post",
          url: `${providerIp}/clock/punch`,
          headers: {
            "content-type": "Application/json",
            "x-auth-token": token,
          },
          data: payload,
        });

        const result = response?.data;
        console.log(result);
        setClicked(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (clicked) {
      punch();
    }
  }, [punchTime, FormattedDate, token, isPunchedIn, clicked]);

  const handleGo = async () => {
    const payload = {
      period: option,
    };
    const response = await axios({
      method: "post",
      url: `${providerIp}/clock/get/clockin/reqs`,
      headers: {
        "content-type": "Application/json",
        "x-auth-token": token,
      },
      data: payload,
    });
    const result = response?.data;
    setTableData(result);
    setClockInTable(true);
  };

  return (
    <div className={clockInTable ? "" : "h-[100vh]"}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello Aso Soni</h1>

        <h4 className="text-[17px] text-gray-400 inline-block mr-2">Current Status:</h4>
        <button className="bg-orange-300 hover:bg-orange-400 text-white text-md font-bold p-2 rounded-lg " onClick={handlePunch}>
          {isPunchedIn ? <div className="text-green-500">In</div> : <div>Out</div>}
        </button>
      </div>

      <div className=" w-[600px] p-4 rounded-lg  px-20 py-16 text-center mx-auto my-10 shadow-2xl ">
        <h1 className="text-[13px] text-gray-400 mb-4">{FormattedDate}</h1>
        <h1 className="text-4xl font-bold mb-4">{time.toLocaleTimeString()}</h1>
        {/* {punchTime && <p className="text-lg">{isPunchedIn ? `Punch In: ${punchTime.punchIn}` : `Punch Out: ${punchTime.punchOut || "-"}`}</p>} */}
        <button
          className="bg-orange-300 hover:bg-orange-400 text-white hover:text-black text-4xl font-bold py-3 px-[80px] rounded-full mt-4"
          onClick={handlePunch}
        >
          {isPunchedIn ? "Punch Out" : "Punch In"}
        </button>
        <div className="grid grid-cols-2 mt-6">
          <h1 className="flex justify-start text-sm text-[#74788d] mr-2">
            Punched at: {punchTime && <p className="text-sm text-orange-300">{isPunchedIn ? `${punchTime.punchIn}` : `N/A`}</p>}
          </h1>

          <div className="flex flex-col items-start text-xs text-[#74788d] gap-3">
            <h1>IP Address:</h1>
            <h1>Location:</h1>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className=" text-orange-300 mt-3 text-[16px]">Clock In Requests</h2>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="" className="block text-[14px] mt-2 mb-2">
                Choose Payroll Period
              </label>
              <select
                onChange={(e) => setOption(e.target.value)}
                className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] focus:outline-none z-0"
              >
                <option value="">Select Payroll Period(s)</option>
                {timePeriods?.map((each) => {
                  return (
                    <option value={each?.id} key={each?.id}>
                      {dateConverter(each?.start_date)} - {dateConverter(each?.end_date)}
                    </option>
                  );
                })}
              </select>
              <button onClick={handleGo} className="pms-input-button mr-2">
                Go
              </button>
            </div>
            <div className="text-2xl text-[#089bab]">
              {" "}
              <AiOutlineDownload></AiOutlineDownload>
            </div>
          </div>
        </div>
      </div>

      {/* Clock In Request's Table */}
      <div>
        {clockInTable && (
          <div className="mt-5">
            <ClockInReqTable tableData={tableData}></ClockInReqTable>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderClockIn;
