import { CssBaseline } from "@mui/material";
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import AddServicesActionModal from "../AddServices/AddServices/AddServicesActionModal";
import PayPeriodEnitModal from "./PayPeriod/PayPeriodEnitModal";

const PayPeriod = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/PayPeriod.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "From date",
      dataIndex: "from_date",
      key: "from_date",
      width: 150,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      render: (_, { from_date }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{from_date}</div>;
      },
      filteredValue: filteredInfo.from_date || null,
      onFilter: (value, record) => record.from_date.includes(value),
      sorter: (a, b) => {
        return a.from_date > b.from_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "from_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "To Data",
      dataIndex: "to_date",
      key: "to_date",
      width: 100,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.to_date || null,
      onFilter: (value, record) => record.to_date.includes(value),
      sorter: (a, b) => {
        return a.to_date > b.to_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "to_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Last Date",
      dataIndex: "last_date",
      key: "last_date",
      width: 100,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.last_date || null,
      onFilter: (value, record) => record.last_date.includes(value),
      sorter: (a, b) => {
        return a.last_date > b.last_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "last_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Check Date",
      dataIndex: "week_day",
      key: "week_day",
      width: 70,
      filteredValue: filteredInfo.week_day || null,
      onFilter: (value, record) => record.week_day.includes(value),
      sorter: (a, b) => {
        return a.week_day > b.week_day ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "week_day" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Week Date",
      dataIndex: "week_day",
      key: "week_day",
      width: 70,
      filteredValue: filteredInfo.week_day || null,
      onFilter: (value, record) => record.week_day.includes(value),
      sorter: (a, b) => {
        return a.week_day > b.week_day ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "week_day" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <button onClick={handleClickOpen} className="text-secondary ">
              <FiEdit />
            </button>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      ellipsis: true,
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
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Pay Period</h1>

        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <h1 className="px-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
              Create Pay Period
            </h1>
          </label>

          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id="pay-box" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box box">
              <label
                htmlFor="pay-box"
                className="btn btn-sm btn-circle hover:bg-primary hover:text-white absolute right-2 top-2"
              >
                ✕
              </label>
              <div>
                <h1 className="text-lg  text-left text-orange-400">
                  Create/Edit Pay Period
                </h1>
                <div className="divider"></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full text-sm">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 mr-2 gap-5">
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Select Pay Period length
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("Length")}
                        >
                          <option value="Mr">Bi Weekly</option>
                          <option value="Mrs">Yearly</option>
                          <option value="Miss">Miss</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Week Day
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("week_day")}
                        >
                          <option value="Mr">Sunday</option>
                          <option value="Mrs">Monday</option>
                          <option value="Miss">Tuesday</option>
                          <option value="Dr">Wednesday</option>
                        </select>
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Select Year
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("year")}
                        >
                          <option value="Mr">2019</option>
                          <option value="Mrs">2020</option>
                          <option value="Miss">2021</option>
                          <option value="Dr">2022</option>
                        </select>
                      </div>

                      {/* End Date  */}
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            End Date
                          </span>
                        </label>
                        <input
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          type="date"
                          {...register("date")}
                        />
                      </div>
                      {/* staff_number  */}
                      <div className="mt-[-15px]">
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            After how many days staff can't submit time sheet?
                          </span>
                        </label>
                        <input
                          type="number"
                          name="staff_number"
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("staff_number")}
                        />
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Check Date
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("week_day")}
                        >
                          <option value="Mr">Sunday</option>
                          <option value="Mrs">Monday</option>
                          <option value="Miss">Tuesday</option>
                          <option value="Dr">Wednesday</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="divider"></div>
                  {/* submit box  */}

                  {/* <input type="submit" /> */}

                  <div className="modal-week_day">
                    <input
                      type="submit"
                      value={"SAVE"}
                      className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                    ></input>
                    <label
                      htmlFor="pay-box"
                      className="py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                    >
                      Close
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CssBaseline />
      <div>
        <div className="flex justify-end items-end my-2">
          <button
            onClick={clearFilters}
            className="px-2  py-2 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
          >
            Clear filters
          </button>
        </div>
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className=" text-xs font-normal"
          columns={columns}
          dataSource={table}
          rowSelection={{
            ...rowSelection,
          }}
          scroll={{
            y: 650,
          }}
          onChange={handleChange}
        />
      </div>
      {openEditModal && (
        <PayPeriodEnitModal
          handleClose={handleClose}
          open={openEditModal}
        ></PayPeriodEnitModal>
      )}
    </div>
  );
};

export default PayPeriod;
