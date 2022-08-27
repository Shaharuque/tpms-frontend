import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RiDeleteBin6Line } from "react-icons/ri";

const NameLocationTableAddButton = ({ register, setAdd }) => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-2">
        {/* name  */}
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              Region Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Main Zone"
            name="zone_name"
            ref={register}
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
            {...register("zone_name")}
          />
        </div>
        {/* address 1 */}
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              Facility Name
            </span>
          </label>
          <input
            type="text"
            placeholder="ABC Behavioral Therapy Center"
            name="facility_name_three"
            ref={register}
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
            {...register("facility_name_three")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              Address
            </span>
          </label>
          <input
            type="text"
            placeholder="ABC Behavioral Therapy Center"
            name="address"
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
            {...register("address")}
          />
        </div>
        {/* city  */}
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              City
            </span>
          </label>
          <input
            type="text"
            placeholder="New Jersy"
            name="city"
            ref={register}
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
            {...register("city")}
          />
        </div>
        {/* state  */}
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              State
            </span>
          </label>
          <select
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
            {...register("state")}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
        </div>
        {/* Zip  */}
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              Zip
            </span>
          </label>
          <input
            type="number"
            placeholder="ABC Behavioral Therapy Center"
            name="zip"
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
            {...register("zip")}
          />
        </div>
        {/* phone  */}
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              Phone
            </span>
          </label>
          <input
            type="number"
            placeholder="ABC Behavioral Therapy Center"
            name="phone"
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
            {...register("phone")}
          />
        </div>

        {/* NPI */}
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-500 text-left">
              NPI
            </span>
          </label>
          <div className="mb-2 flex items-center gap-2">
            <input
              type="number"
              placeholder="ABC Behavioral Therapy Center"
              name="NPI"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("NPI")}
            />
            <div
              onClick={() => setAdd(false)}
              className="bg-red-500 text-white p-[6px]"
            >
              <RiDeleteBin6Line />
            </div>
          </div>
        </div>
        {/* done  */}
      </div>
    </div>
  );
};

export default NameLocationTableAddButton;
