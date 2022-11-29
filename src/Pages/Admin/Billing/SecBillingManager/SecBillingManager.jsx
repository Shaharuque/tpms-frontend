import React from "react";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";

const SecBillingManager = () => {
  return (
    <>
      <div className="container width-fix  mx-auto mb-5 mt-5">
        <Nav appearance="tabs" justified className="mt-5 mb-5">
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"pending-secondary-Claims"}
          >
            Pending Secondary claim(s)
            <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
              step-1
            </span>
          </NavLink>

          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"manage-secondary-claims"}
          >
            Manage Secondary claim(s)
            <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
              step-2
            </span>
          </NavLink>
        </Nav>
        <Outlet />
      </div>
    </>
  );
};

export default SecBillingManager;
