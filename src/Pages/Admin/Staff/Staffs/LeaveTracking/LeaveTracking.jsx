import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Table } from "antd";
import TextArea from "antd/lib/input/TextArea";

const LeaveTracking = () => {
  const [tableData, setTableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/StaffLeaveTracking.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        console.log(tableData, "tableData");
        // setLoading2(false);
      });
  }, []);

  const column = [
    {
      title: "Date of Holiday",
      dataIndex: "history_date",
      key: "history_date",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.history_date || null,
      onFilter: (value, record) => record.history_date.includes(value),
      sorter: (a, b) => {
        return a.history_date > b.history_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "history_date" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Description",
      key: "description",
      dataIndex: "description",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      //   sorter is for sorting asc or dsc purdescription
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 80,
      filters: [
        {
          text: "Hold",
          value: "Hold",
        },
        {
          text: "Pending",
          value: "Pending",
        },
      ],
      render: (_, { status, id }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-center items-center">
            {status === "Hold" && (
              <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Pending" && (
              <button className="bg-teal-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Scheduled" && (
              <button className="bg-red-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
          </div>
        );
      },
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      //   sorter is for sorting asc or dsc purdescription
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      width: 30,
      render: (_, { client_first_name, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-center">
            <button className="text-red-500">
              <AiOutlineDelete />
            </button>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const [note, setNote] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [timeOpen, setTimeOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    console.log(note);
    reset();
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
    <div className="h-[100vh]">
      <div className="flex items-center justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">
          Leaves
        </h1>
        <button onClick={clearFilters} className="pms-clear-button">
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
          onChange={handleChange}
        />
      </div>
      <button onClick={() => setTimeOpen(true)} className="pms-button">
        Add Time Off
      </button>

      {timeOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="divider"></div>
          <h1 className="text-sm  font-medium mb-3">Add Time Off</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="modal-label-name">Description</span>
                </label>
                <TextArea
                  rows={4}
                  placeholder="description"
                  size="middle"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("date")}
                />
              </div>
              <div className="mt-8">
                <button className="mr-2 pms-button" type="submit">
                  Save
                </button>
                <button
                  className="pms-close-button"
                  autoFocus
                  onClick={() => setTimeOpen(false)}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default LeaveTracking;
