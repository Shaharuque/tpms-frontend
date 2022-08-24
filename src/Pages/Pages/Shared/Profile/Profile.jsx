import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../CustomLink";

const Profile = () => {
  return (
    <div className="h-[100vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-0 gap-y-1">
        <CustomLink
          to={"/admin/profile/profile-information"}
          className="flex gap-1 justify-center items-center hover:text-white  hover:bg-primary py-3 text-sm font-normal border"
        >
          <span className="">Personal Information</span>
        </CustomLink>
        <CustomLink
          to={"/admin/profile/password-change"}
          className="flex gap-1 justify-center border items-center hover:text-white hover:bg-primary py-3 text-sm font-normal"
        >
          Change Password
        </CustomLink>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
