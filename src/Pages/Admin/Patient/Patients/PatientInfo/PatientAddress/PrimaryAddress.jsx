import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const PrimaryAddress = ({ btnclick, rg }) => {
  //   //console.log(rg);
  //   const { register } = useForm({
  //     defaultValues: {
  //       test: [{ firstName: "", lastName: "" }],
  //       address: [{ street: "", city: "", country: "" }],
  //     },
  //   });

  return (
    <>
      <label className="label">
        <span className=" flex items-center label-font">
          Address
          <AiOutlineQuestionCircle className="text-sm" />
          <span className="text-red-500">*</span>
        </span>
      </label>
      <div className="mb-2 flex items-center gap-2">
        <input
          type="text"
          placeholder="Street"
          id="streetval"
          defaultValue={"America"}
          className="input-border input-font py-[1px] w-full focus:outline-none"
          {...rg("Street")}
        />
        <button // onClick={() => setOpen(true)}
          onClick={btnclick}
          className="bg-secondary text-white p-[4px]"
        >
          <FaPlus />
        </button>
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="City"
          className="input-border input-font py-[1px] w-full focus:outline-none"
          //   defaultValue={"Buffalo"}
          {...rg("City")}
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-2">
        <div>
          <select
            className="input-border input-font  w-full focus:outline-none"
            defaultValue={"NY"}
            {...rg("country")}
          >
            <option value="NY">NY</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Zip"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...rg("zip")}
          />
        </div>
      </div>
    </>
  );
};

export default PrimaryAddress;
