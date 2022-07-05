import React from "react";
import { NavLink } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink";

const SettingNav = ({ s }) => {
  const { name, link, icon } = s;
  return (
    <div className=" p-1 font-medium  text-sm setting-nav-child hover:text-white">
      <CustomLink className="flex gap-1 items-center" to={link}>
        <span className="text-sm ml-2 ">{icon}</span>
        <h1 className="ml-1 mt-1">{name}</h1>
      </CustomLink>
    </div>
  );
};

export default SettingNav;
