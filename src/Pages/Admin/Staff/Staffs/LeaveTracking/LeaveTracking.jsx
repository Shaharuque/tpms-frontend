import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Table } from "antd";

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
      title: "Holiday Date",
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
      title: "Action",
      dataIndex: "id",
      key: "id",
      width: 160,
      render: (_, { client_first_name, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <button className="text-red-500">
              <AiOutlineDelete />
            </button>
          </div>
        );
      },
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
          onChange={handleChange}
        />
      </div>
      <button
        onClick={() => setTimeOpen(true)}
        className="px-3 flex items-center py-1 bg-gradient-to-r from-secondary to-primary text-xs font-thin hover:to-secondary text-white rounded-sm"
      >
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
                  <span className="label-text text-xs text-gray-600 text-left">
                    Description
                  </span>
                </label>
                <textarea
                  onChange={(e) => setNote(e.target.value)}
                  name="comment"
                  className="border text-sm p-1  ml-1 h-24 w-full"
                ></textarea>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Date
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("date")}
                />
              </div>
              <div className="mt-8">
                <button
                  className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className=" py-[5px]  px-4 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
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
