import React, { useEffect } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const DynamicAddress = ({ adData }) => {
  console.log("hello");
  const {
    index,
    addressHandleRemove,
    register,
    item,
    reset,
    restData,
    setRestData,
    addressRendomValue,
  } = adData;

  useEffect(() => {
    // setTimeout(() => {
    //console.log("addressRendomValue: ", addressRendomValue);
    // console.log("item", item);
    setRestData((prev) => {
      return {
        ...prev,
        [`extraDetails.${index}.street`]: item?.street,
        // [`street_${index}`]: item?.street,
        [`extraDetails.${index}.city`]: item?.city,
        [`extraDetails.${index}.country`]: item?.country,
      };
    });

    //console.log("restdata", restData);
    reset(restData);
    // }, 0);
  }, [
    index,
    item?.city,
    item?.country,
    item?.street,
    reset,
    addressRendomValue,
  ]);

  console.log("resetData", restData);
  //console.log("item", item);
  return (
    <div>
      <>
        <label className="label">
          <span className=" flex items-center label-font ">
            Address
            <AiOutlineQuestionCircle className="text-sm" />
            <span className="text-red-500">*</span>
          </span>
        </label>
        <div className="mb-2 flex items-center gap-2">
          <input
            type="text"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...register(`extraDetails.${index}.street`)}

            //   {...register(`street_${index}`)}

            // {...register(`Permanent_Street_${index}`)}
          />
          <div // onClick={() => setOpen(false)}
            onClick={() => {
              addressHandleRemove(index);
            }}
            className="bg-red-500 text-white p-[4px]"
          >
            <RiDeleteBin6Line />
          </div>
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="more city"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            // {...register(`more_City_${index}`)}
            {...register(`extraDetails.${index}.city`)}
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-1">
          <div>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register(`extraDetails.${index}.country`)}
            >
              <option defaultValue>select</option>
              <option value="NY">NY</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div>
            {/* <input
              type="text"
              className="input-border input-font py-[1px] w-full focus:outline-none"
              {...register(`more_zip${index}`)}
            /> */}
          </div>
        </div>
      </>
    </div>
  );
};

export default DynamicAddress;
