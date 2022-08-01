import React from "react";
import { useForm } from "react-hook-form";

const Logo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex text-sm">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Upload File
              </span>
            </label>
            <input
              type="file"
              className=" py-[5px] mx-1 text-xs w-full"
              {...register("fileName")}
            />
          </div>
          <div className="mt-1">
            {/* <input type="submit" /> */}
            <input
              type="submit"
              value={"SAVE"}
              className=" py-[5px] mt-7 px-3  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            ></input>
            <label
              htmlFor="pay-box"
              className="py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
            >
              Delete
            </label>
          </div>
        </div>
        <div className="divider"></div>
      </form>
    </div>
  );
};

export default Logo;
