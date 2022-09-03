// react calender testing
import { useState } from "react";
import Calendar from "react-calendar";
import "./TestingCSS/custom.css";

const Test = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <>
      <div className="flex">
        <input
          value={date.toLocaleDateString()}
          disabled
          className="border border-gray-300 col-span-2 rounded-sm px-2 py-[2px] mx-1 text-xs w-1/2"
        />
        <label for="my-modal-6" className="label">
          <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
            From Date
          </span>
        </label>
      </div>

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-middle">
        <div class="modal-box p-0">
          <div className="grid grid-cols-2">
            <div className="bg-teal-500 bold text-white text-center rounded-l-lg">
              <span className="">Selected Date:{date.toDateString()}</span>
            </div>
            <div>
              <div>
                <Calendar onChange={setDate} value={date} />
                <div className="flex justify-between px-2">
                  <button className="text-xs text-red-500">Clear</button>
                  <div modal-action>
                    <label for="my-modal-6" className="text-xs text-teal-500">
                      CANCEL
                    </label>
                    <label
                      for="my-modal-6"
                      className="text-xs ml-2 text-teal-500"
                    >
                      OK
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
