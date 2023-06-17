import React, { useState, useEffect } from "react";


const ProviderClockIn = () => {
  const [time, setTime] = useState(new Date());
  const [punchTime, setPunchTime] = useState(null);
  const [isPunchedIn, setIsPunchedIn] = useState(false);
const currentDate=new Date();
const options={
  year:"numeric",
  month:"long",
  day:"numeric",
}
const FormattedDate=currentDate.toLocaleDateString(undefined,options);
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
      setPunchTime({ punchIn: punchTime.punchIn, punchOut: time.toLocaleTimeString() });
      setIsPunchedIn(false);
    } else {
      setPunchTime({ punchIn: time.toLocaleTimeString(), punchOut: null });
      setIsPunchedIn(true);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="shadow-lg shadow-slate-500 mx-2 sm:mx-[100px] p-4 rounded-lg">
      <h1 className="text-[13px] text-gray-400 mb-4">{FormattedDate}</h1>
      <h1 className="text-4xl font-bold mb-4">{time.toLocaleTimeString()}</h1>
      {punchTime && <p className="text-lg">{isPunchedIn ? `Punch In: ${punchTime.punchIn}` : `Punch Out: ${punchTime.punchOut || "-"}`}</p>}
      <button className="bg-orange-300 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-[80px] rounded-full mt-4" onClick={handlePunch}>
        {isPunchedIn ? "Punch Out" : "Punch In"}
      </button>
      <div className="grid grid-cols-2 mt-6">
        <h1 className="flex justify-start text-sm text-[#74788d]">Punched at:</h1>

        <div className="flex flex-col items-start text-sm text-[#74788d] gap-3">
          <h1>IP Address:</h1>
          <h1>Location</h1>
        </div>

      </div>
      </div>
      
    </div>
  );
};

export default ProviderClockIn;
