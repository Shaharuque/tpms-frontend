import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const NameLocationTableAddButton = ({ fieldD, register, errors, remove }) => {
  console.log("comming fields", fieldD);
  return (
    <div>
      {fieldD.map((field, index) => {
        return (
          <div key={field.id}>
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-2">
                {/* {/ name  /} */}
                <div>
                  <span className="label-font">Region Name</span>

                  <label className="label"></label>
                  <input
                    type="text"
                    placeholder="Main Zone"
                    defaultValue={field?.zone_name}
                    name="zone_name"
                    className="input-border input-font w-full focus:outline-none"
                    {...register(`box32.${index}.zone_name`)}
                  />
                </div>
                {/* {/ facility name /} */}
                <div>
                  <label className="label">
                    <span className="label-font">Facility Name</span>
                  </label>
                  <input
                    defaultValue={field?.facility_name_two}
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="facility_name_three"
                    className="input-border input-font w-full focus:outline-none"
                    {...register(`box32.${index}.facility_name_three`)}
                  />
                </div>
                {/* address */}
                <div>
                  <label className="label">
                    <span className="label-font">Address</span>
                  </label>
                  <input
                    defaultValue={field?.address}
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="address"
                    className="input-border input-font w-full focus:outline-none"
                    {...register(`box32.${index}.address`)}
                  />
                </div>
                {/* {/ city  /} */}
                <div>
                  <label className="label">
                    <span className="label-font">City</span>
                  </label>
                  <input
                    defaultValue={field?.city}
                    type="text"
                    placeholder="New Jersy"
                    name="city"
                    ref={register}
                    className="input-border input-font w-full focus:outline-none"
                    {...register(`box32.${index}.city`)}
                  />
                </div>
                {/* state  */}
                <div>
                  <label className="label">
                    <span className="label-font">State</span>
                  </label>
                  <select
                    defaultValue={field?.state}
                    className="input-border input-font w-full focus:outline-none"
                    {...register(`box32.${index}.state`)}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                {/* zip */}
                <div>
                  <label className="label">
                    <span className="label-font">Zip</span>
                  </label>
                  <input
                    defaultValue={field?.zip}
                    type="number"
                    placeholder="zip"
                    name="zip"
                    className="input-border input-font w-full focus:outline-none"
                    {...register(`box32.${index}.zip`)}
                  />
                </div>
                {/* phone */}
                <div>
                  <label className="label">
                    <span className="label-font">Phone</span>
                  </label>
                  <input
                    defaultValue={field?.phone_one}
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    className="input-border input-font w-full focus:outline-none"
                    {...register(`box32.${index}.phone`)}
                  />
                </div>

                {/* npi */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div>
                      <label className="label">
                        <span className="label-font">NPI</span>
                      </label>
                      <input
                        defaultValue={field?.npi}
                        type="text"
                        placeholder="1234"
                        name="npi"
                        className="input-border input-font w-full focus:outline-none"
                        {...register(`box32.${index}.npi`)}
                      />
                    </div>

                    <div
                      onClick={() => remove(index)}
                      className="bg-rose-600 text-white mt-[26px] p-[6px]"
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
                {/* done */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NameLocationTableAddButton;
