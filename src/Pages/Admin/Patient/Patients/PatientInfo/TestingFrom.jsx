import React from "react";
import { useEffect } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
// `test.${index}.firstName
// {index > 0 && (
//     <button type="button" onClick={() => remove(index)}>
//       Delete
//     </button>
//   )}
//   {index === 0 && (
//     <button
//       type="button"
//       onClick={() => {
//         append({ firstName: "appendBill", lastName: "appendLuo" });
//       }}
//     >
//       append
//     </button>
//   )}
const TestingFrom = ({ adData }) => {
  const {
    register,
    remove,
    append,
    fields,
    restData,
    setRestData,
    index,
    reset,
    item,
  } = adData;

  useEffect(() => {
    // setTimeout(() => {
    setRestData((prev) => {
      return {
        ...prev,
        [`extraDetails.${index}.street`]: item?.street,
        // [`street_${index}`]: item?.street,
        [`city_${index}`]: item?.city,
        [`country_${index}`]: item?.country,
      };
    });

    //console.log("restdata", restData);

    reset(restData);
    // }, 0);
  }, [index, item?.city, item?.country, item?.street, reset]);

  return (
    <div>
      {fields.map((item, index) => {
        return (
          <div>
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
                {...register(`test.${index}.street`)}

                //   {...register(`street_${index}`)}

                // {...register(`Permanent_Street_${index}`)}
              />

              <button
                type="button"
                onClick={() => {
                  append({ street: "", city: "", country: "", zip: "" });
                }}
              >
                Add
              </button>

              <div // onClick={() => setOpen(false)}
                onClick={() => remove(index)}
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
                {...register(`test.${index}.city`)}
              />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-1">
              <div>
                <select
                  className="input-border input-font  w-full focus:outline-none"
                  {...register(`test.${index}.country`)}
                >
                  <option defaultValue>select</option>
                  <option value="NY">NY</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register(`test.${index}.zip`)}
                />
              </div>
            </div>
          </div>
        );
      })}
      <section></section>

      {/* <input type="submit" /> */}
    </div>
  );
};

export default TestingFrom;
