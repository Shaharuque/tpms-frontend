import React from "react";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";

const ArLedger = () => {
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
            to={"ar-leader-claim-wish"}
          >
            Claim Wise
            <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
              Option-1
            </span>
          </NavLink>

          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"ar-leader-session-wish"}
          >
            CPT Wise
            <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
              Option-2
            </span>
          </NavLink>
        </Nav>

        <Outlet />
      </div>
    </>
  );
};

export default ArLedger;
