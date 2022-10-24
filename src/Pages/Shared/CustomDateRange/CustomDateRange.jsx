import React from "react";
import { DateRangePicker } from "react-date-range";

const CustomDateRange = ({ setRange, range, handleCancelDate, setOpen }) => {
  return (
    <div>
      <div>
        <DateRangePicker
          onChange={(item) => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          rangeColors={[]}
          months={2}
          direction="horizontal"
          className="border-2 border-gray-100"
        />
      </div>
      <div className="text-right bg-[#26818F] border-r-2 rounded-b-lg range-date-ok py-0">
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
