import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../Assets/bg.png";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import ParticlesBg from "./ParticlesBg";
import SmallLoader from "../../Loading/SmallLoader";
import { GoAlert } from "react-icons/go";

const NewPassSet = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password === data.confirm_password) {
      setMessage("New Password Confirmed");
      navigate("/admin");
    } else {
      setMessage("Password Didn't Matched");
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
      <div className="px-7 login-form sm:px-10 py-7 sm:py-11 bg-white m-4 sm:m-5 shadow-xl border-8 border-secondary rounded-[35px] absolute top-28 right-28">
        <div div className="">
          <img src={logo} alt="TPMS-logo" className="mx-auto mb-3" />
          <form onSubmit={handleSubmit(onSubmit)}>
            {message ? (
              <div className="text-red-500 red-box  border border-gray-300 rounded-md px-3 font-medium py-[10px] mx-1 text-xs w-full flex items-center gap-2">
                <GoAlert className=" text-red-500" /> {message}
              </div>
            ) : null}
            {/* Password */}
            <div className="">
              <label className="label">
                <span className="label-text font-medium text-xs text-gray-600 text-left">
                  New Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="border rounded-md px-3 py-[5px] mx-1 text-xs w-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Enter Password",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters",
                  },
                })}
              />
            </div>

            <label className="label">
              <span className="label-text-alt">
                {errors.password?.type === "required" && (
                  <p className=" text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </span>
            </label>

            {/*Confirm password */}
            <div className="">
              <label className="label flex justify-between items-end">
                <span className="label-text text-xs font-medium text-gray-600 text-left">
                  Confirm Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                className="border rounded-md px-3 py-[5px] mx-1 text-xs w-full"
                {...register("confirm_password", {
                  required: {
                    value: true,
                    message: "Enter Password Again",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters",
                  },
                })}
              />
            </div>

            <label className="label">
              <span className="label-text-alt">
                {errors.confirm_password?.type === "required" && (
                  <p className=" text-xs text-red-500">
                    {errors.confirm_password.message}
                  </p>
                )}
                {errors.confirm_password?.type === "minLength" && (
                  <p className=" text-xs text-red-500">
                    {errors.confirm_password.message}
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

export default NewPassSet;
