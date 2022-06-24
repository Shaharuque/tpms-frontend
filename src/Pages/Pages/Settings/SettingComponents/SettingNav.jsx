import React from "react";
import { NavLink } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink";

const SettingNav = ({ s }) => {
  const { name, link, icon } = s;
  return (
    <div className=" p-2 font-medium  text-xs setting-nav-child">
      <CustomLink to={link}>
        <div className="flex items-center">
          <span className="text-sm">{icon}</span>
          <h1 className="ml-1">{name}</h1>
        </div>
      </CustomLink>
    </div>
  );
};

export default SettingNav;
