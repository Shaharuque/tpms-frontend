import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "rsuite";

const AddServiceSubType = () => {
  return (
    <>
      <div className="container width-fix  mx-auto ">
        <Nav appearance="tabs" className=" mb-5">
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active  text-[14px]"
                : "rs-nav-item text-[14px]"
            }
            to={"SubTypeTab"}
          >
            Service/Activity Sub Types
            {/* <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
            step-1
          </span> */}
          </NavLink>
        </Nav>
        <Outlet />
      </div>
    </>
  );
};

export default AddServiceSubType;
