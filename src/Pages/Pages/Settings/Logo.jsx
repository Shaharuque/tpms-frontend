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
        <div className="sm:flex  text-sm">
          <div className=" ">
            <label className="label">
              <span className="text-sm ml-2 mb-2 mt-[-2px]">Upload File</span>
            </label>
            <input
              type="file"
              className=" border bg-white rounded-sm  mx-3 text-xs"
              {...register("fileName")}
            />
          </div>
          <div className="modal-action">
            {/* <input type="submit" /> */}
            <input
              type="submit"
              value={"SAVE"}
              className="px-5  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            />
            <input
              type="submit"
              value={"DELETE"}
              className="px-5  bg-gradient-to-r from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
            />
          </div>
        </div>
        <div className="divider"></div>
      </form>
    </div>
  );
};

export default Logo;
