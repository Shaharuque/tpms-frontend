import React from "react";

const vobAction = () => {
  return (
    <div>
      <div className=" bg-white py-2 border shadow-xl flex flex-col items-center z-30  w-[130px] rounded-sm">
        <div>
          <button
            className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
            // onClick={() => addNoteHandler()}
          >
            {/* <AiOutlinePlus className="text-sm" />  */}
            Add Note
          </button>
          <button
            className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
            // onClick={viewNoteHandler}
          >
            {/* <AiOutlineEye className="text-sm" />  */}
            View Note
          </button>
          <button
            className="text-xs text-secondary px-2 py-1 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
            // onClick={editSessionHandler}
          >
            {/* <MdOutlineModeEditOutline className="text-sm" />  */}
            Edit Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default vobAction;
