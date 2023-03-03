import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";

const ClaimWishComments = () => {
  return (
    <div>
      <div className="flex items-center gap-2 my-2 ">
        <div>
          <FaRegCommentDots className="text-2xl text-secondary m-5 rounded-full " />

          {/* lomba design ekhane hobe  */}
        </div>

        <div className="border border-secondary rounded-md p-2 bg-[#fff] w-full">
          <IoMdArrowDropleft className="text-3xl text-secondary ml-[-27px] absolute" />

          <div className="flex items-center justify-between mb-5">
            <span className=" text-xs py-[4px] bg-gray-500 text-white px-2 rounded-md">
              Comment
            </span>
            <div>
              <h5 className="text-xs text-gray-400 ">(09/09/2021 6:09 PM)</h5>
            </div>
          </div>
          <div className="bg-gray-200 py-[1px] mt-1"></div>
          <div className="my-4">
            <h2>Comment</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimWishComments;
