import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { providerIp } from "../../../Misc/BaseClient";
import useToken from "../../../CustomHooks/useToken";
import axios from "axios";
const ProviderClockIn = () => {
  const [time, setTime] = useState(new Date());
  const [punchTime, setPunchTime] = useState(null);
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const currentDate = new Date();
  const { token } = useToken();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const FormattedDate = currentDate.toLocaleDateString(undefined, options);

  //punch in/out api calling
  // useEffect(() => {
  //   const punch = async () => {
  //     try {
  //       const payload = {
  //         punch_check,
  //         current_time,
  //         current_date,
  //       };

  //       const response = await axios({
  //         method: "post",
  //         url: `${providerIp}/clock/punch`,
  //         headers: {
  //           "content-type": "Application/json",
  //           "x-auth-token": token,
  //         },
  //         data: payload,
  //       });

  //       const result = response?.data;
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   punch();
  // }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePunch = () => {
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
  };
  return (
    <div className="h-[100vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello Aso Soni</h1>

        <h4 className="text-[17px] text-gray-400 inline-block mr-2">Current Status:</h4>
        <button className="bg-orange-300 hover:bg-orange-400 text-white text-md font-bold p-2 rounded-lg " onClick={handlePunch}>
          {isPunchedIn ? " Out" : "In"}
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
            Punched at: {punchTime && <p className="text-sm text-orange-300">{isPunchedIn ? `${punchTime.punchIn}` : `${punchTime.punchOut || "-"}`}</p>}
          </h1>

          <div className="flex flex-col items-start text-xs text-[#74788d] gap-3">
            <h1>IP Address:</h1>
            <h1>Location:</h1>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className=" text-orange-300">Clock In Requests</h2>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="" className="block text-[14px] font-normal mt-2 mb-2">
                Choose Payroll Period
              </label>
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
            <div className="text-2xl text-[#089bab]">
              {" "}
              <AiOutlineDownload></AiOutlineDownload>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderClockIn;
