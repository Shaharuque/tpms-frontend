import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Table } from "antd";
import { Link } from "react-router-dom";

const PatientAuthorizationsTableModal = ({ handleClose, open, patient_id }) => {
  const [tableData, setTableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/PatientAuthorization.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        console.log(tableData, "tableData");
        // setLoading2(false);
      });
  }, []);

  const column = [
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.Description || null,
      onFilter: (value, record) => record.Description.includes(value),
      sorter: (a, b) => {
        return a.Description > b.Description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "Description" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Onset Date",
      key: "Onset_Date",
      dataIndex: "Onset_Date",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.Onset_Date || null,
      onFilter: (value, record) => record.Onset_Date.includes(value),
      //   sorter is for sorting asc or dsc purOnset_Datee
      sorter: (a, b) => {
        return a.Onset_Date > b.Onset_Date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Onset_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "End Date",
      key: "End_Date",
      dataIndex: "End_Date",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.End_Date || null,
      onFilter: (value, record) => record.End_Date.includes(value),
      //   sorter is for sorting asc or dsc purOnset_Datee
      sorter: (a, b) => {
        return a.End_Date > b.End_Date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "End_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Primary_insurance",
      key: "Primary_insurance",
      dataIndex: "Primary_insurance",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.Primary_insurance || null,
      onFilter: (value, record) => record.Primary_insurance.includes(value),
      //   sorter is for sorting asc or dsc purOnset_Datee
      sorter: (a, b) => {
        return a.Primary_insurance > b.Primary_insurance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Primary_insurance" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Treatment_type",
      key: "Treatment_type",
      dataIndex: "Treatment_type",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.Treatment_type || null,
      onFilter: (value, record) => record.Treatment_type.includes(value),
      //   sorter is for sorting asc or dsc purOnset_Datee
      sorter: (a, b) => {
        return a.Treatment_type > b.Treatment_type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Treatment_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "uci",
      key: "uci",
      dataIndex: "uci",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.uci || null,
      onFilter: (value, record) => record.uci.includes(value),
      //   sorter is for sorting asc or dsc purOnset_Datee
      sorter: (a, b) => {
        return a.uci > b.uci ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "uci" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "id",
      dataIndex: "id",
      width: 100,
      render: (_, { id }) => {
        //console.log("Status : ", Status);
        return (
          <Link
            to={`/admin/patient/patient-authorization/${patient_id}`}
            className="text-secondary font-medium"
          >
            Go To Auth
          </Link>
        );
      },
    },
  ];

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

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  return (
    <div>
      <div>
        <Dialog
          maxWidth="xl"
          open={open}
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
            <div className="flex items-center justify-between gap-2 my-2">
              <h1 className="text-sm text-gray-600 text-left font-semibold ">
                Auth List
              </h1>
              <button
                onClick={clearFilters}
                className="px-2  py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
              >
                Clear filters
              </button>
            </div>

            <div className=" overflow-scroll">
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                className=" text-xs font-normal mt-5"
                columns={column}
                bordered
                rowKey={(record) => record.id} //record is kind of whole one data object and here we are
                dataSource={tableData}
                rowSelection={{
                  ...rowSelection,
                }}
                onChange={handleChange}
              />
            </div>

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

export default PatientAuthorizationsTableModal;
