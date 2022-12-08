import React from "react";
import CustomLink from "../../../../Pages/Shared/CustomLink";

const SettingNav = ({ s }) => {
  const { name, link, icon } = s;
  return (
    <div className="my-[6px]">
      <CustomLink
        className="flex gap-1 py-1 clink text-secondary  items-center"
        to={link}
      >
        <span className="text-2xl ml-2 ">{icon}</span>
        <h1 className="ml-1 font-medium  flex items-center text-[15px] gap-1 ">
          {/* <h1 className="text-sm lg:text-[10px] xl:text-[14px] font-medium"> */}
          {name}
        </h1>
      </CustomLink>
    </div>
  );
};

export default SettingNav;
