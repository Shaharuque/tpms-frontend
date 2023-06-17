import React, { useState, useEffect } from "react";

const ProviderClockIn = () => {
  const [time, setTime] = useState(new Date());
  const [punchTime, setPunchTime] = useState(null);
  const [isPunchedIn, setIsPunchedIn] = useState(false);

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
      <h1 className="text-4xl font-bold mb-4">{time.toLocaleTimeString()}</h1>
      {punchTime && <p className="text-lg">{isPunchedIn ? `Punch In: ${punchTime.punchIn}` : `Punch Out: ${punchTime.punchOut || "-"}`}</p>}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handlePunch}>
        {isPunchedIn ? "Punch Out" : "Punch In"}
      </button>
    </div>
  );
};

export default ProviderClockIn;
