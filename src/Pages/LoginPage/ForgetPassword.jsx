import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../Assets/bg.png";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import ParticlesBg from "./ParticlesBg";
import SmallLoader from "../../Loading/SmallLoader";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  //testing data
  const email = "admin@admin.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    //console.log(data);
    if (data.email === email) {
      navigate("/code-check");
    } else {
      setErrMessage("Invalid ID");
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
      <div className="px-7 sm:px-16 py-5 sm:py-11 bg-white m-4 sm:m-5 shadow-xl border-8 border-secondary rounded-[35px] absolute top-28 right-28">
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
                  Please enter the email you created your account with.
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="border rounded-md px-3 py-[5px] mx-1 text-xs w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Enter Email",
                  },
                  pattern: {
                    value: /@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
            </div>

            <label className="label">
              <span className="label-text-alt">
                {errors.email?.type === "required" && (
                  <p className=" text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className=" text-xs text-red-500">
                    {errors.email.message}
                  </p>
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

export default ForgetPassword;
