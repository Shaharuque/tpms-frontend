import { Dropdown, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

const ProcessingClaim = () => {
  const [insurance, setInsurance] = useState(false);
  const [active, setActive] = useState(false);
  const [insuranceSelect, setInsuranceSelect] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [TData, setTData] = useState([]);

  // table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [tableopen, settableopen] = useState(false)


  // calling fake db
  useEffect(() => {
    axios("../../All_Fake_Api/ProcessingClaims.json")
      .then((response) => {
        setTData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    

    {
      title: "Patients",
      dataIndex: "Patients",
      key: "Patients",
      width: 40,
      render: (_, { Patients }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Patients}</div>;
      },
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Dos",
      dataIndex: "Dos",
      key: "Dos",
      width: 30,
      render: (_, { Dos }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Dos}</div>;
      },
      sorter: (a, b) => {
        return a.Dos > b.Dos ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Dos" ? sortedInfo.order : null,
      ellipsis: true,
    },


    {
      title: "Service & Hrs",
      dataIndex: "ServiceHrs",
      key: "ServiceHrs",
      width: 30,
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.ServiceHrs > b.ServiceHrs ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "ServiceHrs" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Tx Provider",
      key: "TxProvider",
      dataIndex: "TxProvider",
      width: 40,
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.TxProvider > b.TxProvider ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "TxProvider" ? sortedInfo.order : null,
      ellipsis: true,
     
    },
    {
      title: "Cpt",
      dataIndex: "Cpt",
      key: "Cpt",
      width: 40,
      sorter: (a, b) => {
        return a.Cpt> b.Cpt ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
      },
      sortOrder:
        sortedInfo.columnKey === "Cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      dataIndex: "Pos",
      key: "Pos",
      width: 50,
      sorter: (a, b) => {
        return a.Pos > b.Pos ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "Pos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M1",
      key: "M1",
      dataIndex: "M1",
      width: 40,
      sorter: (a, b) => {
        return a.M1 > b.M1 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M1" ? sortedInfo.order : null,
      ellipsis: true,
    },
    
    {
      title: "M2",
      key: "M2",
      dataIndex: "M2",
      width: 50,
      sorter: (a, b) => {
        return a.M2 > b.M2 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M2" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M3",
      key: "M3",
      dataIndex: "M3",
      width: 50,
      sorter: (a, b) => {
        return a.M3 > b.M3 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M3" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M4",
      key: "M4",
      dataIndex: "M4",
      width: 30,
      sorter: (a, b) => {
        return a.M4 > b.M4 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M4" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Units",
      key: "Units",
      dataIndex: "Units",
      width: 30,
      sorter: (a, b) => {
        return a.Units > b.Units ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "Units" ? sortedInfo.order : null,
      ellipsis: true,
    },
 
    {
      title: "Rate",
      key: "Rate",
      dataIndex: "Rate",
      width: 30,
      sorter: (a, b) => {
        return a.Rate > b.Rate ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "Rate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rendering24-j",
      key: "Rendering24",
      dataIndex: "Rendering24",
      width: 30,
      sorter: (a, b) => {
        return a.Rendering24 > b.Rendering24 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "Rendering24" ? sortedInfo.order : null,
      ellipsis: true,
    },


  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  // -------------------


  const handleGO = () => {
    setInsurance(true);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setActive(true);
  };
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    reset();
  };
  return (
    <div className="">
      <h1 className="text-lg text-orange-400">Processing Claim(s)</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-wrap items-center gap-2">
            <div>
              {" "}
              <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  To Date<span className="text-red-500">*</span>
                </span>
              </label>
              <input
               
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                type="date"
                {...register("date")}
              />
            </div>
            {/* go*/}
            <button
              onClick={handleGO}
              className=" py-1 mt-8 w-14 text-sm bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Go
            </button>
            {insurance && (
              <>

                

                {/* insurance  */}
                <div>
                  <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Insurance<span className="text-red-500">*</span>
                </span>
                  </label>
                  <select
                    onChange={(e) => setInsuranceSelect(e.target.value)}
                    name="type"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                {/* Sort By  */}
                <div>
                  <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Sort By<span className="text-red-500">*</span>
                </span>
                  </label>
                  <select
                    onChange={handleSortBy}
                    name="type"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                {active && (
                  <>
                    {" "}
                    <div>
                      <label className="label">
                      <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Service Type </span>
                      </label>
                      <select
                        // onChange={(e) => setInsuranceSelect(e.target.value)}
                        name="type"
                        className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                      >
                        <option value="all">All</option>
                        <option value="patient">Patient</option>
                        <option value="provider">Provider</option>
                      </select>
                    </div>
                    {/* Sort By  */}
                    <div>
                      <label className="label">
                      <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Sort By</span>
                      </label>
                      <select
                        onChange={handleSortBy}
                        name="type"
                        className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                      >
                        <option value="all">All</option>
                        <option value="patient">Patient</option>
                        <option value="provider">Provider</option>
                      </select>
                    </div>
                    {active && (
                      <>
                        {" "}
                        <div>
                          <label className="label">
                          <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                          Tx Provider</span>
                          </label>
                          <select
                            // onChange={(e) => setInsuranceSelect(e.target.value)}
                            name="type"
                            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                          >
                            <option value="all">All</option>
                            <option value="patient">Patient</option>
                            <option value="provider">Provider</option>
                          </select>
                        </div>
                      </>
                    )}
                  </>
                )}
                {/* submit  */}
                <button
                  className=" py-1 mt-8 w-16 text-sm bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  type="submit"
                  onClick={()=>{settableopen(true)}}
                >
                  Run
                </button>
                <button className=" py-1 mt-8 w-16 text-sm bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>

{ tableopen &&
      <div className="my-5">
                <div className="overflow-scroll">
                  <>
                    <Table
                      pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                      rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                      size="small"
                      bordered
                      className=" text-xs font-normal mt-5"
                      columns={columns}
                      dataSource={TData}
                      rowSelection={{
                        ...rowSelection,
                      }}
                      scroll={{
                        y: 650,
                      }}
                      onChange={handleChange}
                    />
                  </>
                </div>
              </div>
}
    </div>

  );
};

export default ProcessingClaim;
