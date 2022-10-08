import React, { useState } from "react";
import { useForm } from "react-hook-form";
import person from "../../../../Assets/favicon.png";

const Logo = () => {
  // image uploding code
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const { handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex text-sm gap-6">
          <div>
            <label className="label">
              <span className="label-text text-lg text-gray-600 text-left">
                Browse Logo
              </span>
            </label>
            <div className="div-img">
              <div>
                <div className="my-3">
                  <input
                    className="form-control text-sm border border-gray-300 w-[100px] lg:w-full "
                    type="file"
                    id="formFile"
                    onChange={handleChange}
                  />
                </div>
                <div className="p-5 border border-gray-500">
                  <img
                    src={file || person}
                    className=" h-52 w-52 border-2 border-black rounded"
                    alt="alt"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-5">
            {/* <input type="submit" /> */}
            <input
              type="submit"
              value={"Upload"}
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
      </form>
    </div>
  );
};

export default Logo;
