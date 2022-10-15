import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Switch, Table } from "antd";
import axios from "axios";

const InsuranceEditComponent = ({ id }) => {
  const [value, setValue] = React.useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/Scrubing.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Rule",
      dataIndex: "rule",
      key: "rule",
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
      filteredValue: filteredInfo.rule || null,
      onFilter: (value, record) => record.rule.includes(value),
      sorter: (a, b) => {
        return a.rule > b.rule ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rule" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Active",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="flex items-center ">
              <Switch
                size="small"
                checked={value ? true : false}
                onClick={() => setValue(!value)}
              />
              <span className="text-[14px] font-medium text-gray-500 mx-3">
                Active
              </span>
            </div>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="flex items-center ">
              <Switch
                size="small"
                checked={value ? true : false}
                onClick={() => setValue(!value)}
              />
              <span className="text-[14px] font-medium text-gray-500 mx-3">
                Active
              </span>
            </div>
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
      <div className=" my-5 edit-box shadow-lg rounded-sm">
        {/* <h1>{row.original.place_of_Service}</h1> */}
        <div className="border p-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 my-5 1D-2 gap-6">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CoPay Number {id}
                    </span>
                  </label>
                  <input
                    type="number"
                    name="co_pay_number"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("co_pay_number")}
                  />
                  {/* <label className="label">
                <span className="label-text-alt">
                  {" "}
                  {errors.name?.type === "required" && (
                    <p className=" text-red- 500 ">{errors.name.message}</p>
                  )}
                </span>  
              </label> */}
                </div>
                <div className="flex items-end ">
                  <Switch
                    size="small"
                    checked={value ? true : false}
                    onClick={() => setValue(!value)}
                  />
                  <span className="text-[14px] font-medium text-gray-500 mx-3">
                    Is Electronic
                  </span>
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      Cms1500 31
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_31"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_31")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      Cms1500 32a
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_32a"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_32a")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      Cms1500 32b
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_32b"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_32b")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      Cms1500 33a
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_33a"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_33a")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      Cms1500 33b
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_33b"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_33b")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      Provider NPI
                    </span>
                  </label>
                  <input
                    type="number"
                    name="provider_npi"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("provider_npi")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      TaxId
                    </span>
                  </label>
                  <input
                    type="number"
                    name="tax_id"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("tax_id")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      Main Taxonomy
                    </span>
                  </label>
                  <input
                    type="number"
                    name="main_taxonomy"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("main_taxonomy")}
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center ">
                    <Switch
                      size="small"
                      checked={value ? true : false}
                      onClick={() => setValue(!value)}
                    />
                    <span className="text-[12px] font-medium text-gray-500 mx-3">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center ">
                    <Switch
                      size="small"
                      checked={value ? true : false}
                      onClick={() => setValue(!value)}
                    />
                    <span className="text-[12px] font-medium text-gray-500 mx-3">
                      Is Fill Box-17
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mt-5">
                    <Switch
                      size="small"
                      checked={value ? true : false}
                      onClick={() => setValue(!value)}
                    />
                    <span className="text-[14px] font-medium text-gray-500 mx-3">
                      is time required Code
                    </span>
                  </div>
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 32 Address
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_address"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_32_address")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 32 City
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_city"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_32_city")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 32 State
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_state"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_32_state")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 32 Zip
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_zip"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_32_zip")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 33 Address
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_address"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_33_address")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 33 City
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_city"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_33_city")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 33 State
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_state"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_33_state")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[14px] py-[1px] font-medium text-[#9b9b9b] text-left">
                      CMS1500 33 Zip
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_zip"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("cms_1500_33_zip")}
                  />
                </div>
              </div>
              <div className="overflow-auto my-8">
                <div className="other-box my-5">
                  {/* <div className="">
            <h1 className="text-sm font-medium"></h1>

           
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
          </div> */}
                  <div className="flex items-center justify-around gap-2 mb-2 ">
                    <h3 className="text-xs font-medium w-80">Tax Type</h3>
                    <h3 className="text-xs font-medium w-80">Box 24J</h3>
                    <h3 className="text-xs font-medium w-80">ID Qualifier</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 ">
                    <h3 className="text-xs font-normal w-80">IF</h3>
                    <input
                      type="text"
                      name="max_day"
                      className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("max_day")}
                    />
                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("degree_level")}
                    >
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xs font-normal w-80">Mental Health</h3>
                    <input
                      type="text"
                      name="max_day"
                      className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("max_day")}
                    />
                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("degree_level")}
                    >
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xs font-normal w-80">
                      Behavioral therapy
                    </h3>
                    <input
                      type="text"
                      name="max_day"
                      className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("max_day")}
                    />
                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("degree_level")}
                    >
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xs font-normal w-80">MT</h3>
                    <input
                      type="text"
                      name="max_day"
                      className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("max_day")}
                    />
                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("degree_level")}
                    >
                      <option value="Speech Therapist">Speech Therapy</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xs font-normal w-80">MT</h3>
                    <input
                      type="text"
                      name="max_day"
                      className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("max_day")}
                    />
                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("degree_level")}
                    >
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xs font-normal w-80">
                      Physical Therapy
                    </h3>
                    <input
                      type="text"
                      name="max_day"
                      className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("max_day")}
                    />
                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register("degree_level")}
                    >
                      <option value="Speech Therapist">Speech Therapist</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  {/* <div className="">
            <h1 className="text-sm font-medium">Box 24J</h1>

            <input
              type="text"
              name="max_day"
                className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("max_day")}
            />
          </div> */}
                </div>
              </div>

              {/* submit  */}
              <div>
                <input
                  type="submit"
                  value={"SAVE"}
                  className="px-3  py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                />
                <button
                  className="px-3 ml-3 py-1 bg-gradient-to-r from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                  autoFocus
                >
                  CANCEL
                </button>
              </div>
            </form>
          </motion.div>
          <div className="bg-gray-200 py-[1px] my-3"></div>
          <div className="px-2">
            <div className="md:flex mb-2 items-center justify-between">
              <h1 className="text-lg my-2 text-orange-400">Scrubbing Rules</h1>

              <div className="md:flex justify-end items-end my-2">
                <button
                  onClick={clearFilters}
                  className="px-2  py-1 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
                >
                  Clear filters
                </button>
              </div>
            </div>

            <div>
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                size="small"
                bordered
                className=" text-xs font-normal"
                columns={columns}
                dataSource={table}
                scroll={{
                  y: 650,
                }}
                onChange={handleChange}
              />
            </div>
            <button className="px-3 my-2 py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceEditComponent;
