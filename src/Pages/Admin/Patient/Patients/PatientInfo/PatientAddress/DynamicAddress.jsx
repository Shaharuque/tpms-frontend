import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const DynamicAddress = ({ adData }) => {
  const { fields, register, remove } = adData;
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
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
                placeholder="Street"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register(`address.${index}.street`, {
                  // validation
                })}
                defaultValue={field.street}
              />
              <button
                onClick={() => remove(index)}
                className="bg-red-500 text-white p-[4px] "
              >
                <RiDeleteBin6Line />
              </button>
            </div>
            <div className="mb-2">
              <input
                type="text"
                placeholder="more city"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                // {...register(`more_City_${index}`)}
                // {...register(`extraDetails.${index}.city`)}
                defaultValue={field.city}
                {...register(`address.${index}.city`, {
                  // required: true
                })}
              />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-1">
              <div>
                <select
                  className="input-border input-font  w-full focus:outline-none"
                  defaultValue={field.country}
                  // {...register(`extraDetails.${index}.country`)}
                  {...register(`address.${index}.country`, {
                    // required: true
                  })}
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
                  defaultValue={field.zip}
                  {...register(`address.${index}.zip`)}
                />
              </div>
              <div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicAddress;
