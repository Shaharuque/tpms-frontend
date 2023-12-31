import React from "react";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";

const EmailAndSms = () => {
  return (
    <div className="p-2">
      <h1 className=" my-3 text-[16px] font-medium text-orange-400">
        SMS/Email Settings
      </h1>
      <div className="container width-fix  mx-auto mb-5 mt-1">
        <Nav appearance="tabs" justified className="mt-5 mb-5">
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-normal text-[14px]"
                : "rs-nav-item text-[14px] font-normal"
            }
            to={"email-setting"}
          >
            Email Settings
          </NavLink>
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-normal text-[14px]"
                : "rs-nav-item text-[14px] font-normal"
            }
            to={"sms-setting"}
          >
            SMS Settings
          </NavLink>
        </Nav>
        <Outlet />
      </div>
    </div>
  );
};

export default EmailAndSms;
