import React, { useState } from "react";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";
import ReferringProviderActionModal from "../ReferringProvider/ReferringProvider/ReferringProviderActionModal";
import SFTPModal from "./SFTPModal";

const EraManager = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recordData, setRecordData] = useState();

  const handleClickOpen2 = (record) => {
    setOpenAddModal(true);
    setRecordData(record);
  };
  const handleClose2 = () => {
    setOpenAddModal(false);
  };

  return (
    <>
      <div className="md:flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">OA Files</h1>
        <div className=" md:flex items-center">
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button
                onClick={handleClickOpen2}
                className="pms-close-button mr-2"
              >
                Fetch SFTP
              </button>
            </label>
          </div>
        </div>
      </div>
      <div className="container width-fix  mx-auto mb-5 mt-5">
        <Nav appearance="tabs" justified className="mt-5 mb-5">
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"era-files"}
          >
            ERA Files
          </NavLink>

          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"file-277"}
          >
            277 Files
          </NavLink>
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"file-999"}
          >
            999 Files
          </NavLink>
          <NavLink
            className={(navinfo) =>
              navinfo.isActive
                ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                : "rs-nav-item text-[14px] font-medium"
            }
            to={"edi-status-files"}
          >
            Edi Status Files
          </NavLink>
        </Nav>
        <Outlet />
      </div>
      {openAddModal && (
        <SFTPModal
          handleClose={handleClose2}
          open={openAddModal}
          recordData={recordData}
        ></SFTPModal>
      )}
    </>
  );
};

export default EraManager;
