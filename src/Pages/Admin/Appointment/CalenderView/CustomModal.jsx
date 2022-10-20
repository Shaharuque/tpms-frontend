import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const CustomModal = ({ handleClose, open, patient_id }) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  //   fetch data
  useEffect(() => {
    setLoading(true);
    fetch("../../../All_Fake_Api/PatientAuthorization.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        setLoading(false);
      });
  }, []);
  console.log(tableData, "tableData");

  return (
    <div>
      <div>
        <Dialog
          maxWidth="xl"
          open={true}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2 box sm:w-[1400px] ">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                All Authorizations
              </h1>

              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary "
              />
            </div>
            <div className="bg-gray-200 py-[1px] mt-3 "></div>

            <div className="modal-action">
              {/* <input type="submit" /> */}
              <button
                className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Save
              </button>

              <button
                className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                autoFocus
                onClick={handleClose}
              >
                CANCEL
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default CustomModal;
