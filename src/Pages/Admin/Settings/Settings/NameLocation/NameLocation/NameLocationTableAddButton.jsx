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
            <span className="label-font">Region Name</span>
          </label>
          <input
            type="text"
            placeholder="Main Zone"
            name="zone_name"
            ref={register}
            className="input-border input-font w-full focus:outline-none"
            {...register("zone_name")}
          />
        </div>
        {/* address 1 */}
        <div>
          <label className="label">
            <span className="label-font">Facility Name</span>
          </label>
          <input
            type="text"
            placeholder="ABC Behavioral Therapy Center"
            name="facility_name_three"
            ref={register}
            className="input-border input-font w-full focus:outline-none"
            {...register("facility_name_three")}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-font">Address</span>
          </label>
          <input
            type="text"
            placeholder="ABC Behavioral Therapy Center"
            name="address"
            className="input-border input-font w-full focus:outline-none"
            {...register("address")}
          />
        </div>
        {/* city  */}
        <div>
          <label className="label">
            <span className="label-font">City</span>
          </label>
          <input
            type="text"
            placeholder="New Jersy"
            name="city"
            ref={register}
            className="input-border input-font w-full focus:outline-none"
            {...register("city")}
          />
        </div>
        {/* state  */}
        <div>
          <label className="label">
            <span className="label-font">State</span>
          </label>
          <select
            className="input-border input-font w-full focus:outline-none"
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
            <span className="label-font">Zip</span>
          </label>
          <input
            type="number"
            placeholder="ABC Behavioral Therapy Center"
            name="zip"
            className="input-border input-font w-full focus:outline-none"
            {...register("zip")}
          />
        </div>
        {/* phone  */}
        <div>
          <label className="label">
            <span className="label-font">Phone</span>
          </label>
          <input
            type="number"
            placeholder="ABC Behavioral Therapy Center"
            name="phone"
            className="input-border input-font w-full focus:outline-none"
            {...register("phone")}
          />
        </div>

        {/* NPI */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div>
              <label className="label">
                <span className="label-font">NPI</span>
              </label>
              <input
                type="text"
                placeholder="1234"
                name="npi"
                className="input-border input-font w-full focus:outline-none"
                {...register("npi")}
              />
            </div>

            <div
              onClick={() => setAdd(false)}
              className="bg-rose-600 text-white mt-[26px] p-[6px]"
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
