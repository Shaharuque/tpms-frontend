import React from "react";
import { DateRangePicker } from "react-date-range";

// date range year

const CustomDateRange = ({ setRange, range, handleCancelDate, setOpen }) => {
  const handleLastYearClick = () => {
    const startDate = new Date(this.state.startDate);
    startDate.setFullYear(startDate.getFullYear() - 1);
    const endDate = new Date(this.state.endDate);
    endDate.setFullYear(endDate.getFullYear() - 1);
    this.setState({ startDate, endDate, customRangeLabel: "Last Year" });
  };

  const handleNextYearClick = () => {
    const startDate = new Date(this.state.startDate);
    startDate.setFullYear(startDate.getFullYear() + 1);
    const endDate = new Date(this.state.endDate);
    endDate.setFullYear(endDate.getFullYear() + 1);
    this.setState({ startDate, endDate, customRangeLabel: "Next Year" });
  };
  return (
    <div className="absolute z-10 shadow-xl">
      <div>
        <DateRangePicker
          onChange={(item) => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          rangeColors={["#0AA1B2"]}
          months={2}
          direction="horizontal"
          className="border-gray-600 shadow-xl"
        />
      </div>
      <div className="text-right bg-[#26818F] rounded-b-sm range-date-ok py-0 shadow-xl">
        <button
          className="px-4 m-1 text-white border border-white rounded hover:border-red-700 hover:bg-red-700"
          type="submit"
          onClick={handleCancelDate}
        >
          Cancel
        </button>
        <button
          className="px-4 m-1 text-secondary border border-white bg-white rounded"
          type="submit"
          onClick={() => setOpen(false)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomDateRange;
