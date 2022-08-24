import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../Assets/bg.png";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import ParticlesBg from "./ParticlesBg";
import SmallLoader from "../../Loading/SmallLoader";

const ForgetPasswordCodeCheck = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const Code = "1222";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.code === Code) {
      navigate("/new-password");
    } else {
      setErrMessage("Invalid ");
    }

    reset();
  };
  return (
    <div
      style={{
        background: `url(${bg})`,
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
    >
      <div className="px-7 sm:px-16 py-7 sm:py-11 bg-white m-4 sm:m-5 shadow-xl border-8 border-secondary rounded-[35px] absolute top-28 right-28">
        <div div className="">
          <img src={logo} alt="TPMS-logo" className="mx-auto mb-3" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {errMessage ? (
                <input
                  className="text-red-600 border border-gray-300 rounded-md px-3 py-[10px] mx-1 text-xs w-full"
                  defaultValue={errMessage}
                  disabled
                ></input>
              ) : null}
              <label className="label">
                <span className="label-text font-medium text-xs text-gray-600 text-left">
                  Please enter your verification code which you've received in
                  your registered email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Code"
                name="code"
                className="border rounded-md px-3 py-[5px] mx-1 text-xs w-full"
                {...register("code", {
                  required: {
                    value: true,
                    message: "Enter Code",
                  },
                  pattern: {
                    value: Number,
                    message: "Provide a valid Code", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
            </div>

            <label className="label">
              <span className="label-text-alt">
                {errors.code?.type === "required" && (
                  <p className=" text-xs text-red-500">{errors.code.message}</p>
                )}
                {errors.code?.type === "pattern" && (
                  <p className=" text-xs text-red-500">{errors.code.message}</p>
                )}
              </span>
            </label>
            {/* submit  */}
            <div className="flex items-center justify-end mt-2 mb-6">
              {!loading ? (
                <button
                  className=" py-2 px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <div className="flex justify-center">
                  <SmallLoader></SmallLoader>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <ParticlesBg></ParticlesBg>
    </div>
  );
};

export default ForgetPasswordCodeCheck;
