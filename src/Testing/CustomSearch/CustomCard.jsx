import React, { useState } from "react";
import "./CustomCard.css";
import { GiAirplaneDeparture, GiMeal } from "react-icons/gi";
import { RiArrowDownSLine, RiCloseFill } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const CustomCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="w-2/3 m-auto rounded-md bg-white card-div">
      <div className="px-6 py-2">
        <div className="flex justify-between items-center pb-2">
          {/*flight plane name */}
          <div className="flex gap-x-16 items-center">
            <div className="flex items-center gap-2">
              <GiAirplaneDeparture className="text-2xl"></GiAirplaneDeparture>
              <div>
                <p className="text-[13px]">Air India</p>
                <p className="text-[11px] color-[#999999]">A-887</p>
              </div>
            </div>
            {/* flight time duration */}
            <div className="flex gap-3 items-center">
              {/* start time */}
              <div>
                <h2 className="text-[16px] text-black font-bold">07:00</h2>
                <p className="text-[11px] color-[#999999] mt-[-5px]">
                  New Delhi
                </p>
              </div>
              <hr className="w-[64px] border border-[#cacaca] mt-[-12px]" />
              {/* end time */}
              <div>
                <h2 className="text-[16px] text-black font-bold">09:05</h2>
                <p className="text-[11px] color-[#999999] mt-[-5px]">Mumbai</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="border-[1px]"></div>
              <div>
                <h2 className="text-[12px] text-black font-bold mb-1">
                  2h 10m
                </h2>
                <p className="text-[11px] color-[#999999]">Non Stop</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <h1 className="text-[18px] font-bold text-[#000]">$6,480</h1>
            <button className="text-[#f34f4f] border-2 rounded border-[#f34f4f] px-[22px] py-[8px] text-sm font-bold hover:text-white hover:bg-[#f34f4f]">
              Book Now
            </button>
          </div>
        </div>
        <div className="border-t-[1px] border-[#e2e2e2]"></div>
        <div className="pt-[6px]">
          <div className="flex justify-between items-center">
            <div
              onClick={() => setShowDetails(true)}
              className="flex items-center gap-1 text-[#3691ca] text-xs"
            >
              <button>Flight Details </button>
              <RiArrowDownSLine className="text-[14px]"></RiArrowDownSLine>
            </div>
            <div className="flex gap-1 items-center">
              <div className="flex gap-1 items-center ">
                <GiMeal className="text-[14px] color-[#666666]"></GiMeal>
                <p className="text-[12px] color-[#666666]">Free Meal</p>
                <div className="border-[1px] h-3"></div>
              </div>
              <div className="flex gap-1 items-center ">
                <p className="text-[12px] color-[#666666]">Emissions:</p>
                <p className="text-[12px] color-[#666666]">309 Kg CO2</p>
                <div className="border-[1px] h-3"></div>
              </div>
              <div className="flex items-center">
                <button className="border text-xs rounded-l p-[1px]">
                  eCash
                </button>
                <button className="text-xs rounded-r p-[1px] border-[#ffd302] bg-[#ffd302] ">
                  $250
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#301b41] py-3 flex justify-between items-center">
            <h1 className=" pl-[20px] text-white text-base font-bold">
              Flight Details
            </h1>
            <div className="text-white text-base font-bold pr-[15px]">
              <RiCloseFill></RiCloseFill>
            </div>
          </div>
          {/* full details */}
          <div className="pt-5 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <GiAirplaneDeparture className="text-2xl"></GiAirplaneDeparture>
                <div>
                  <p className="text-[13px]">Air India, AI-814(Economy)</p>
                  <p className="text-[11px] color-[#999999]">Airbus A320-212</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GiMeal></GiMeal>
                <AiOutlineWifi></AiOutlineWifi>
                <AiOutlineWifi></AiOutlineWifi>
                <AiOutlineWifi></AiOutlineWifi>
              </div>
            </div>
            <div className="border-b-[1px] w-full py-[6px] border-[#f2f2f2]"></div>
            <div className="flex justify-between items-center py-[15px]">
              <div>
                <p className="text-[15px]">New Delhi (DEL)</p>
                <p className="font-bold">20:00</p>
                <p className="text-xs font-bold">Mon, 5 Sep 2022</p>
                <p className="text-xs color-[#333333]">Indira Gandhi,T-3</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs">
                  <BiTimeFive></BiTimeFive>
                  <p>2h 10m</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border-b-[2px] w-full py-[6px] border-[#9c9c9c]"></div>
                  <GiAirplaneDeparture className="text-2xl"></GiAirplaneDeparture>
                </div>
                <p className="text-xs pt-[6px]">Non Stop</p>
              </div>
              <div>
                <p className="text-[15px]">Mumbai (BOM)</p>
                <p className="font-bold">22:10</p>
                <p className="text-xs font-bold">Mon, 5 Sep 2022</p>
                <p className="text-xs color-[#333333]">Chatrapati Shivaji</p>
              </div>
            </div>
            <div className="flex justify-evenly bg-[#f9f9f9] text-xs">
              <div className="flex items-center">
                <p>Checkin Baggage:</p>
                <p> 25 kgs</p>
              </div>
              <div className="flex items-center gap-1">
                <GiMeal></GiMeal>
                <p>Free Meal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#48305A]"></div>
      </div>
    </div>
  );
};

export default CustomCard;
