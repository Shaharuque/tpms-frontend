import React from "react";
import Medicalgif from "../Pages/Assets/output-onlinegiftools.gif";
import { AiOutlineArrowRight } from "react-icons/ai";
import found from "../Pages/Assets/rsz_404.png";
import { useNavigate } from "react-router-dom";

// not found page
const NotFound = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div>
      {/** */}
      <div className="flex flex-col  lg:flex-row justify-center items-center gap-4 h-screen">
        <div className="rounded-full">
          <img src={Medicalgif} alt="" />
        </div>
        <div className=" ">
          <div className="flex items-center justify-center mb-5 ">
            <img src={found} alt="" />
          </div>
          <div className="text-center ">
            
            <h1 className="text-2xl font-extrabold  ">
              Oops! Page Not Found!!!!
            </h1>
            <p className="text-xs mb-2">
              You might have entered wrong url or link might be broken
            </p>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class=" px-6 py-2.5 mb-1 bg-blue-600 mx-auto gap-1 flex justify-center items-center text-white font-medium text-sm leading-tight rounded-3xl shadow-md bg-gradient-to-r from-secondary to-primary  hover:to-secondary transition duration-150 ease-in-out"
              onClick={backToHome}
            >
              <AiOutlineArrowRight className="border-white text-lg"></AiOutlineArrowRight>
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
