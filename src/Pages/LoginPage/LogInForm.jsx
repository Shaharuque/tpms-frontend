import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../Assets/bg.png";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
// import Swal from "sweetalert2";
import SmallLoader from "../../Loading/SmallLoader";
import { GoAlert } from "react-icons/go";

const LogInForm = () => {
  const [value, setValue] = useState(false);
  const navigate = useNavigate();
  // const Swal = require("sweetalert2");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://ovh.therapypms.com/api/v1/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //object k stringify korey server side a send kore lagey tai JSON.stringify korey
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        setLoading(false);
        //console.log(result);
        if (result.account_type === "admin") {
          localStorage.setItem("admin", result.access_token);
          localStorage.setItem("type", result.account_type);
          navigate("/admin"); //admin panel a redirect
        } else if (result.account_type === "patient") {
          navigate("/patient"); //patient panel a redirect
          localStorage.setItem("type", "patient");
        } else {
          setMessage("Invalid Credentials");
        }
      });
    reset();
  };

  const forgetPass = () => {
    navigate("/forget-password");
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
      <div className="px-7 sm:px-16 py-7 sm:py-11 bg-white m-4 sm:m-5 shadow-xl border-8 border-secondary rounded-[35px] absolute login-form">
        <div className="">
          <div div className="">
            <img src={logo} alt="TPMS-logo" className="mx-auto mb-3" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {message ? (
                  <div className="text-red-500 red-box  border border-gray-300 rounded-md px-3 font-medium py-[10px] mx-1 text-xs w-full flex items-center gap-2">
                    <GoAlert className=" text-red-500" /> {message}
                  </div>
                ) : null}
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    Email Address
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
              {/* password  */}
              {/* Password */}
              <div>
                <label className="label flex justify-between items-end">
                  <span className="label-text text-xs font-medium text-gray-600 text-left">
                    Password
                  </span>
                  <span
                    onClick={forgetPass}
                    className="label-text text-xs text-secondary font-medium cursor-pointer"
                  >
                    Forget Password ?
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
                      value: 6,
                      message: "Password must be 6 characters",
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

              {/* submit  */}
              <div className="flex items-center justify-between mt-2 mb-6">
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="text-xs ml-1 font-medium text-gray-600 ">
                    Remember Me
                  </span>
                </div>
                {!loading ? (
                  <button
                    className=" py-2 px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                    type="submit"
                  >
                    Sign In
                  </button>
                ) : (
                  <div className="flex justify-center">
                    <SmallLoader></SmallLoader>
                  </div>
                )}
              </div>
            </form>
            <p className="text-xs my-2 font-normal text-gray-400">
              Therapy PMS respects the privacy of our users and values their
              trust. Please read our{" "}
              <span className=" text-primary">privacy policy</span> carefully.
              If you do not agree with the terms of our privacy policy, then
              please do not access the site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
