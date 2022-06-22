import React, { useState } from "react";
import { BsDownload, BsArrowsFullscreen } from "react-icons/bs";
import {
  AiOutlinePlus,
  AiOutlineNotification,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import admin from "../../Assets/user.png";
import company from "../../Assets/company.jpg";
import { motion } from "framer-motion";

const NavigationBar = () => {
  let [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="shadow-md resp ml-[5.2rem] md:ml-[5rem] lg:ml-[5.2rem] navi mt-2 rounded-lg fixed top-0"
    >
      <div className="md:flex items-center justify-between bg-white py-2 rounded-3xl md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <div className="flex-1">
            <label tabIndex="0" className="flex gap-0 md:gap-2 items-center">
              <div className="w-10 mr-1 rounded-full">
                <img className=" rounded-full" src={company} alt="pic" />
              </div>
              <div>
                <p className="   md:text-xl text-sm">
                  ABC Behavioral Therapy Center
                </p>
              </div>
            </label>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-3 top-4 cursor-pointer md:hidden"
        >
          <p className="">{open ? <AiOutlineClose /> : <FaBars />}</p>
        </div>

        <div
          className={`md:flex md:items-center md:pt-0 pt-10 md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-18 " : "top-[-490px]"
          }`}
        >
          <div>
            <h1 className="mx-5 md:my-0 my-2 text-lg font-bold text-secondary">
              <BsArrowsFullscreen />
            </h1>
          </div>
          {/* adding  */}
          <div className=" md:mt-1 mt-6">
            <div className="dropdown md:dropdown-end">
              <label tabIndex="0" className="">
                <h1 className="mx-4 text-xl font-bold text-secondary">
                  <AiOutlinePlus />
                </h1>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content w-60 md:w-[25rem] menu mt-1 shadow bg-base-100 text-sm "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          {/* notify  */}
          <div className="md:my-0 my-2 p-1">
            <div className="dropdown md:dropdown-end">
              <div className="mx-2">
                <label tabIndex="0" className="">
                  <div className="relative">
                    <div>
                      <h1 className=" text-2xl text-secondary">
                        <AiOutlineNotification />
                      </h1>
                      <span className=" absolute top-0 right-[-8px] bg-red-700 text-white badge-xs rounded-full">
                        8
                      </span>
                    </div>
                  </div>
                </label>
              </div>
              <div
                tabIndex="0"
                className="mt-1 dropdown-content w-60 md:w-[25rem] bg-base-100 shadow"
              >
                <div className="card-body">
                  <h4 className=" text-center">Latest Changes</h4>
                  <hr />
                  <span className="text-info">
                    <span className="badge badge-primary">new</span>
                    Subtotal: $999 Subtotal: $99 Subtotal: $99 Subtotal: $99
                  </span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* download  */}
          <div>
            <h1 className="mx-5 text-lg font-bold text-secondary">
              <BsDownload />
            </h1>
          </div>
          {/* admin part  */}
          <div className="my-5 md:my-0">
            <div className="dropdown md:dropdown-end">
              <label tabIndex="0" className="flex gap-2 items-center">
                <div className="w-10 mr-1 rounded-full">
                  <img className="avatar rounded-full" src={admin} alt="pic" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Admin</h4>
                  <h5 className="text-secondary font-medium text-xs">
                    admin@admin.com
                  </h5>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content w-60 md:w-[25rem] mt-3 p-2 shadow bg-base-100 "
              >
                <li>
                  <a href="google.com" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationBar;
