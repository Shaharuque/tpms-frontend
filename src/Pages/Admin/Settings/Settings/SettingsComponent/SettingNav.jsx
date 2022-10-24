import React from "react";
import CustomLink from "../../../../Pages/Shared/CustomLink";

const SettingNav = ({ s }) => {
  const { name, link, icon } = s;
  return (
    <div className="  font-normal  text-xs setting-nav-child text-secondary hover:text-white">
      <CustomLink
        className="flex gap-2 py-1 hover:text-white  items-center"
        to={link}
      >
        <span className="text-2xl ml-2 ">{icon}</span>
        <h1 className="text-sm font-medium">{name}</h1>
      </CustomLink>
    </div>
  );
};

export default SettingNav;
