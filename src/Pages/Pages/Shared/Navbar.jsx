import React from "react";
import { BsDownload, BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="mx-10 py-1 shadow-lg rounded-3xl">
      <div className="navbar">
        {/* part-1  */}
        <div className="flex-1">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=33791"
                alt="pic"
              />
            </div>
          </label>
          <p className="btn btn-ghost normal-case text-xl">
            ABC Behavioral Therapy Center
          </p>
        </div>

        {/* part-2  */}
        <div className="flex-none">
          <div>
            <h1 className="mx-3 text-xl">
              <BsArrowsFullscreen />
            </h1>
          </div>
          <div class="dropdown">
            <label tabindex="0" class="">
              <h1 className="mx-3 text-2xl">
                <AiOutlinePlus />
              </h1>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu mt-3 shadow bg-base-100 text-sm w-32"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <div>
                  <h1 className="text-2xl">
                    <HiOutlineSpeakerphone />
                  </h1>
                </div>

                <span className="badge round-full bg-red-700 text-white p-2 badge-sm indicator-item">
                  8
                </span>
              </div>
            </label>
            <div
              tabindex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mx-3 text-xl">
              <BsDownload />
            </h1>
          </div>

          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt="pic"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
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
  );
};

export default Navbar;
