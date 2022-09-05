import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../CalendarContext/GlobalContext";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from "react-icons/ai";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, yearIndex, setYearIndex } =
    useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handlePrevYear = () => {
    setYearIndex(yearIndex - 1);
  };
  const handleNextYear = () => {
    setYearIndex(yearIndex + 1);
  };
  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <section className="pb-[18px] flex flex-wrap justify-between  items-center">
      <div className="flex items-center">
        <button
          onClick={handlePrevYear}
          className="px-2 py-[5px] text-white bg-[#1e88e5]"
        >
          <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
        </button>
        <button
          onClick={handlePrevMonth}
          className="mx-[1px] px-2 py-[5px] text-white bg-[#4caf50]"
        >
          <AiOutlineLeft></AiOutlineLeft>
        </button>
        <button
          onClick={handleNextMonth}
          className="px-2 py-[5px] text-white bg-[#4caf50]"
        >
          <AiOutlineRight></AiOutlineRight>
        </button>
        <button
          onClick={handleNextYear}
          className="px-2 py-[5px] ml-[1px] text-white bg-[#1e88e5]"
        >
          <AiOutlineDoubleRight></AiOutlineDoubleRight>
        </button>
        <button
          onClick={handleReset}
          className="text-xs px-2 py-[4px] ml-[9px] text-white bg-[#0aa6b7] opacity-60"
        >
          Today
        </button>
      </div>

      <div>
        <h2 className="text-xl text-[#495057] font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>

      <div>
        <button className="px-2 py-[5px] text-xs text-white bg-[#fbc02d]">
          Day
        </button>
        <button className="px-2 py-[5px] text-xs text-white mx-[1px] bg-[#4caf50]">
          Week
        </button>
        <button className="px-2 py-[5px] text-xs text-white bg-[#1e88e5]">
          Month
        </button>
      </div>
    </section>
  );
}
