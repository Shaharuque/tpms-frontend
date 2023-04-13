import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Contacts = () => {
  return (
    <div className="w-[20%] h-[100vh] border-r-[3px] border-cyan-600 p-2">
      <div className="flex">
        <input type="text" name="color" className="modal-input-field w-full " />
        <BiSearchAlt className="text-white bg-secondary text-[30px] p-[2px] ml-[-2px]" />
      </div>
    </div>
  );
};

export default Contacts;
