import React from "react";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";

const AdminAccess = () => {
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
            to={"page-access"}
          >
            Page Access
          </NavLink>

          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"admin-create-user"}
          >
            Create User
          </NavLink>
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"admin-delete-user"}
          >
            Delete User
          </NavLink>
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"admin-unlock-user"}
          >
            UnLock User
          </NavLink>
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"admin-switch-user"}
          >
            Switch User(Staff to Provider)
          </NavLink>
        </Nav>
        <Outlet />
      </div>
    </>
  );
};

export default AdminAccess;
