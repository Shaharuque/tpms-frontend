import React from "react";
import { Nav } from "rsuite";
import ReactDOM from "react-dom";
import { NavLink, Outlet } from "react-router-dom";

const BillingManager = () => {
  return (
    <div className="container mx-auto mb-5 mt-5">
      <Nav appearance="tabs" justified className="mt-5 mb-5">
        <NavLink
          className={(navinfo) =>
            navinfo.isActive
              ? "rs-nav-item rs-nav-item-active font-normal text-xs"
              : "rs-nav-item text-xs font-normal"
          }
          to={"proces-Clims"}
        >
          Processing Claim(s)
          <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
            step-1
          </span>
        </NavLink>
        <NavLink
          className={(navinfo) =>
            navinfo.isActive
              ? "rs-nav-item rs-nav-item-active font-normal text-xs"
              : "rs-nav-item text-xs font-normal"
          }
          to={"Batching-climbs"}
        >
          Batching Claim(s)
          <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
            step-2
          </span>
        </NavLink>
          
        <NavLink
          className={(navinfo) =>
            navinfo.isActive
              ? "rs-nav-item rs-nav-item-active font-normal text-xs"
              : "rs-nav-item text-xs font-normal"
          }
          to={"Manage-claims"}
        >
          Manage claim(s)
          <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
            step-3
          </span>
        </NavLink>
      </Nav>
      {/* <hr className="mb-5"></hr>*/}
      <Outlet />
    </div>
  );
};

export default BillingManager;
