import React, { useState } from "react";
import AddCompanyDetails from "./Components/AddCompany/AddCompanyDetails";
import AddSubAdmin from "./Components/AddSubAdmin/AddSubAdmin";
import ExistingCompanyInfo from "./Components/ExistingCompanyInfo/ExistingCompanyInfo";

const CompaniesAndFacilities = () => {
  const [comp, setcomp] = useState();
  const [addFacilities, setAddFacilities] = useState(false);
  const [AddCompany, setAddCompany] = useState(false);
  const [subAdmin, setSubAdmin] = useState(false);

  const handleAddCompanyOpen = () => {
    setAddCompany(true);
  };
  const handleAddCompanyClose = () => {
    setAddCompany(false);
  };
  const handleSubAdminOpen = () => {
    setSubAdmin(true);
  };
  const handleSubAdminClose = () => {
    setSubAdmin(false);
  };

  return (
    <div className={addFacilities ? "" : "h-[100vh]"}>
      <div className="md:flex mb-2 items-center justify-between">
        <div className="flex items-center flex-wrap gap-2 mt-5">
          <label className="label">
            <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
              Company
            </span>
          </label>
          <form>
            <select
              onChange={(e) => {
                setcomp(e.target.value);
              }}
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-1  w-full focus:outline-none"
            >
              <option value="volvo">Volvo XC90</option>
              <option value="saab">Saab 95</option>
              <option value="mercedes adbsfs fdfgd">
                Mercedes SLK abababab
              </option>
              <option value="audi">Audi TT</option>
            </select>
          </form>
        </div>

        <div className=" flex items-center gap-3 flex-wrap">
          {/* <!-- The button to open modal --> */}

          <button onClick={handleAddCompanyOpen} className=" pms-button ">
            + Add New Company
          </button>
          <button onClick={handleSubAdminOpen} className=" pms-button ">
            + Create Sub-Admin
          </button>
        </div>
      </div>

      {/* Company details  */}
      {comp && (
        <div>
          <ExistingCompanyInfo
            setAddFacilities={setAddFacilities}
            addFacilities={addFacilities}
          ></ExistingCompanyInfo>
        </div>
      )}

      {AddCompany && (
        <AddCompanyDetails
          handleClose={handleAddCompanyClose}
          open={AddCompany}
        ></AddCompanyDetails>
      )}
      {subAdmin && (
        <AddSubAdmin
          handleClose={handleSubAdminClose}
          open={subAdmin}
        ></AddSubAdmin>
      )}
    </div>
  );
};

export default CompaniesAndFacilities;
