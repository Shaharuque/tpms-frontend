import React, { useEffect, useMemo, useState } from "react";
import { ArFollowupBucketColumn } from "./TodaysTaskTableData";

import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TransitionTable from "./ArFollowupBucket/TransitionTable";
import AddNote from "./ArFollowupBucket/AddNote";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
import axios from "axios";
import { FiDownload } from "react-icons/fi";
import { DateRangePicker } from "rsuite";
import UseTable from "../../../../../Utilities/UseTable";
import { Table } from "antd";

const ArFollowupBucket = () => {
  const [select, setSelect] = useState("");
  const [tableOpen, setTableOpen] = useState(false);
  const [flowUpData, SetFlowUpData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //getting data from public folder(fakedata)
  // fakeApi call
  useEffect(() => {
    axios("../../All_Fake_Api/FollowupBucket.json")
      .then((response) => {
        SetFlowUpData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(flowUpData);

  // const globalFilter = (value) => {
  //   //console.log(value);
  //   const filteredData = flowUpData?.filter(
  //     (each) =>
  //       each?.patient?.toLowerCase().includes(value.toLowerCase()) ||
  //       each?.provider?.toLowerCase().includes(value.toLowerCase()) ||
  //       each?.date_billed?.toLowerCase().includes(value.toLowerCase()) ||
  //       each?.paid?.toLowerCase().includes(value) ||
  //       each?.balance?.toLowerCase().includes(value)
  //   );
  //   SetFlowUpData(filteredData);

  //   if (!value) {
  //     axios("../../All_Fake_Api/FollowupBucket.json")
  //       .then((response) => {
  //         console.log("calling");
  //         SetFlowUpData(response?.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  //Individual filtering [tagging feature] pore eikhane bosabo
  const deletePatientTag = (tag) => {
    console.log(tag);
    const patient_array = filteredInfo?.patient?.filter((item) => item !== tag);
    setFilteredInfo({
      patient: patient_array,
      provider: filteredInfo?.provider,
      date_billed: filteredInfo?.date_billed,
      paid: filteredInfo?.paid,
      balance: filteredInfo?.balance,
    });
  };
  const deleteProviderTag = (tag) => {
    console.log(tag);
    const provider_array = filteredInfo?.provider?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      patient: filteredInfo?.patient,
      provider: provider_array,
      date_billed: filteredInfo?.date_billed,
      paid: filteredInfo?.paid,
      balance: filteredInfo?.balance,
    });
  };
  const deleteDateBilledTag = (tag) => {
    console.log(tag);
    const date_billed_array = filteredInfo?.date_billed?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      patient: filteredInfo?.patient,
      provider: filteredInfo?.provider,
      date_billed: date_billed_array,
      paid: filteredInfo?.paid,
      balance: filteredInfo?.balance,
    });
  };
  const deletePaidTag = (tag) => {
    console.log(tag);
    const paid_array = filteredInfo?.paid?.filter((item) => item !== tag);
    setFilteredInfo({
      patient: filteredInfo?.patient,
      provider: filteredInfo?.provider,
      date_billed: filteredInfo?.date_billed,
      paid: paid_array,
      balance: filteredInfo?.balance,
    });
  };
  const deleteBalanceTag = (tag) => {
    console.log(tag);
    const balance_array = filteredInfo?.balance?.filter((item) => item !== tag);
    setFilteredInfo({
      patient: filteredInfo?.patient,
      provider: filteredInfo?.provider,
      date_billed: filteredInfo?.date_billed,
      paid: filteredInfo?.paid,
      balance: balance_array,
    });
  };

  const columns = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [
        { text: "Annalie Woolam", value: "Annalie Woolam" },
        { text: "murdehh uuiihkjForge", value: "murdehh uuiihkjForge" },
        {
          text: `Molly Wolvey`,
          value: "Molly Wolvey",
        },
        {
          text: `Karla Mirfin`,
          value: "Karla Mirfin",
        },
        {
          text: "Marcellus Patifield",
          value: "Marcellus Patifield",
        },
        {
          text: "Hilton Ganforthe",
          value: "Hilton Ganforthe",
        },
        {
          text: "Eddy Buston",
          value: "Eddy Buston",
        },
      ],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // client_first_name, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <button className="text-secondary">{patient}</button>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Provider(24J)",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.provider || null,
      onFilter: (value, record) => record.provider.includes(value),
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // client_first_name, id, key=>each row data(object) property value can be accessed.
      render: (_, { provider, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <button className="text-secondary">{provider}</button>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "DOS",
      dataIndex: "Dos",
      key: "Dos",
      width: 40,
      // filters: [
      //   {
      //     text: `	$2.97`,
      //     value: "	$2.97",
      //   },
      //   {
      //     text: "$6.13",
      //     value: "$6.13",
      //   },
      // ],
      // filteredValue: filteredInfo.Dos || null,
      // onFilter: (value, record) => record.Dos.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Dos > b.Dos ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Dos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "CPT",
      dataIndex: "CPT",
      key: "CPT",
      width: 170,
      // filters: [
      //   {
      //     text: `	$2.97`,
      //     value: "	$2.97",
      //   },
      //   {
      //     text: "$6.13",
      //     value: "$6.13",
      //   },
      // ],
      // filteredValue: filteredInfo.CPT || null,
      // onFilter: (value, record) => record.CPT.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.CPT > b.CPT ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "CPT" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date Billed",
      dataIndex: "date_billed",
      key: "date_billed",
      width: 50,
      // filters: [
      //   {
      //     text: `	$2.97`,
      //     value: "	$2.97",
      //   },
      //   {
      //     text: "$6.13",
      //     value: "$6.13",
      //   },
      // ],
      // filteredValue: filteredInfo.date_billed || null,
      // onFilter: (value, record) => record.date_billed.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.date_billed > b.date_billed ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "date_billed" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Billed Amt",
      dataIndex: "billed_Amt",
      key: "billed_Amt",
      width: 50,
      // filters: [
      //   {
      //     text: `	$2.97`,
      //     value: "	$2.97",
      //   },
      //   {
      //     text: "$6.13",
      //     value: "$6.13",
      //   },
      // ],
      // filteredValue: filteredInfo.billed_Amt || null,
      // onFilter: (value, record) => record.billed_Amt.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.billed_Amt > b.billed_Amt ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "billed_Amt" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
      width: 50,
      filters: [
        {
          text: `	$4.41`,
          value: "$4.41",
        },
        {
          text: "$3.87",
          value: "$3.87",
        },
        {
          text: "$9.63",
          value: "$9.63",
        },
        {
          text: "	$3.62",
          value: "$3.62",
        },
        {
          text: "$7.66",
          value: "$7.66",
        },
        {
          text: "$9.58",
          value: "$9.58",
        },
      ],
      filteredValue: filteredInfo.paid || null,
      onFilter: (value, record) => record.paid.includes(value),
      // sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.paid > b.paid ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "paid" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Adj",
      dataIndex: "adj",
      key: "adj",
      width: 100,
      // filters: [
      //   {
      //     text: `	$4.41`,
      //     value: "$4.41",
      //   },
      //   {
      //     text: "$3.87",
      //     value: "$3.87",
      //   },
      //   {
      //     text: "$9.63",
      //     value: "$9.63",
      //   },
      //   {
      //     text: "	$3.62",
      //     value: "$3.62",
      //   },
      //   {
      //     text: "$7.66",
      //     value: "$7.66",
      //   },
      //   {
      //     text: "$9.58",
      //     value: "$9.58",
      //   },
      // ],
      // filteredValue: filteredInfo.adj || null,
      // onFilter: (value, record) => record.adj.includes(value),
      // sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.adj > b.adj ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "adj" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      width: 50,
      filters: [
        {
          text: `	$4.41`,
          value: "$4.41",
        },
        {
          text: "$3.87",
          value: "$3.87",
        },
        {
          text: "$9.63",
          value: "$9.63",
        },
        {
          text: "	$3.62",
          value: "$3.62",
        },
        {
          text: "$7.66",
          value: "$7.66",
        },
        {
          text: "$9.58",
          value: "$9.58",
        },
      ],
      filteredValue: filteredInfo.balance || null,
      onFilter: (value, record) => record.balance.includes(value),
      // sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.balance > b.balance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "balance" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setTableOpen(true);
    console.log(data);
    reset();
  };
  return (
    <div className={!tableOpen ? "h-[100vh]" : ""}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg my-1 text-orange-500">Follow Up Bucket</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary  font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-3 mr-2 gap-x-2 gap-y-1">
          {/* select  */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Select
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("select")}
            >
              <option value="name"></option>
              <option value="Today">Today's follow up</option>
              <option value="UK">Lost 7 days</option>
              <option value="15">Lost 15 days</option>
              <option value="15">Lost 30 days</option>
              <option value="15">30 days & over</option>
            </select>
          </div>
          {/* patients */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Patients
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("patients")}
            >
              <option value="name"></option>
              <option value="Today">Today's follow up</option>
              <option value="UK">Lost 7 days</option>
              <option value="15">Lost 15 days</option>
              <option value="15">Lost 30 days</option>
              <option value="15">30 days & over</option>
            </select>
          </div>
          {/* Insurance */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Insurance
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("insurance")}
            >
              <option value="name"></option>
              <option value="Today">Today's follow up</option>
              <option value="UK">Lost 7 days</option>
              <option value="15">Lost 15 days</option>
              <option value="15">Lost 30 days</option>
              <option value="15">30 days & over</option>
            </select>
          </div>
          {/* CPT codes */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                CPT Codes
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("cpt")}
            >
              <option value="name"> </option>
              <option value="Today">Today's follow up</option>
              <option value="UK">Lost 7 days</option>
              <option value="15">Lost 15 days</option>
              <option value="15">Lost 30 days</option>
              <option value="15">30 days & over</option>
            </select>
          </div>
          {/* aging status */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Aging Status
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("aging")}
            >
              <option value="name"> </option>
              <option value="Today">Today's follow up</option>
              <option value="UK">Lost 7 days</option>
              <option value="15">Lost 15 days</option>
              <option value="15">Lost 30 days</option>
              <option value="15">30 days & over</option>
            </select>
          </div>
          {/* Selected Date */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Selected Date
              </span>
            </label>
            <div className="ml-1">
              <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                <DateRangePicker
                  onChange={(date) => {
                    console.log(date);
                  }}
                  placeholder="Select Date"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex  mt-8 items-center">
              <input
                type="checkbox"
                // checked={value ? true : false}
                name="patient"
                // onClick={() => {
                //   setValue(!value);
                // }}
              />
              <span className="text-xs ml-1 text-gray-600 font-normal">
                Zero Paid
              </span>
            </div>
            <button
              className=" py-[4px] mt-7 px-2 ml-2 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
              type="submit"
            >
              View
            </button>
          </div>
        </div>
      </form>
      {tableOpen && (
        <>
          <div className="my-5">
            {/* filtering tag showing part */}
            {filteredInfo?.patient?.length > 0 ||
            filteredInfo?.provider?.length > 0 ||
            filteredInfo?.date_billed?.length > 0 ||
            filteredInfo?.paid?.length > 0 ||
            filteredInfo?.balance?.length > 0 ? (
              // <div className="border border-secondary bg-gray-100 flex mb-4 text-xs ">
              <div className="my-5 flex flex-wrap items-center gap-2">
                {filteredInfo?.patient?.length > 0 && (
                  <div className=" ">
                    <div className="flex mb-2 gap-1">
                      {filteredInfo?.patient?.map((tag, index) => (
                        <div
                          className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                          key={index}
                        >
                          <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                            <span className="text-secondary text-[15px] font-medium mr-1  ">
                              Patient:
                            </span>
                            {tag}
                          </div>
                          <div>
                            <div
                              className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                              onClick={() => deletePatientTag(tag)}
                            >
                              X
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {filteredInfo?.provider?.length > 0 && (
                  <div className="flex mb-2 gap-1">
                    {filteredInfo?.provider?.map((tag, index) => (
                      <div
                        className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                        key={index}
                      >
                        <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                          <span className="text-secondary text-[15px] font-medium mr-1  ">
                            Provider(24J):
                          </span>
                          {tag}
                        </div>
                        <div>
                          <div
                            className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                            onClick={() => deleteProviderTag(tag)}
                          >
                            X
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {filteredInfo?.date_billed?.length > 0 && (
                  <div className="flex mb-2 gap-1">
                    {filteredInfo?.date_billed?.map((tag, index) => (
                      <div
                        className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                        key={index}
                      >
                        <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                          <span className="text-secondary text-[15px] font-medium mr-1  ">
                            Date Billed:
                          </span>
                          {tag}
                        </div>
                        <div>
                          <div
                            className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                            onClick={() => deleteDateBilledTag(tag)}
                          >
                            X
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {filteredInfo?.paid?.length > 0 && (
                  <div className="flex mb-2 gap-1">
                    {filteredInfo?.paid?.map((tag, index) => (
                      <div
                        className="text-gray-700  shadow-sm font-medium  rounded-sm pl-1 bg-white flex items-center"
                        key={index}
                      >
                        <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                          <span className="text-secondary text-[15px] font-medium mr-1  ">
                            Paid:
                          </span>
                          {tag}
                        </div>
                        <div>
                          <div
                            className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                            onClick={() => deletePaidTag(tag)}
                          >
                            X
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {filteredInfo?.balance?.length > 0 && (
                  <div className="flex mb-2 gap-1">
                    {filteredInfo?.balance?.map((tag, index) => (
                      <div
                        className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                        key={index}
                      >
                        <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                          <span className="text-secondary text-[15px] font-medium mr-1  ">
                            Balance:
                          </span>
                          {tag}
                        </div>
                        <div>
                          <div
                            className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                            onClick={() => deleteBalanceTag(tag)}
                          >
                            X
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : // </div>
            null}
            {/* className=" overflow-scroll" used for responsive scrolling But if you use InfiniteScroll don't need overflow-scroll class */}
            <div className=" overflow-scroll">
              <Table
                rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                className=" text-xs font-normal"
                columns={columns}
                dataSource={flowUpData} //Which data chunk you want to show in table
                // For fixed header table at top
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <h1 className="text-xs mb-2 ml-1 ">Select Insurance</h1>
            <select
              onChange={(e) => setSelect(e.target.value)}
              name="post"
              className="border border-gray-300 rounded-sm px-2 py-[6px] mx-1 text-xs "
            >
              <option value="h"></option>
              <option value="view_transition">View Transition</option>
              <option value="add_note">Add Note</option>
            </select>
          </div>
          {select === "view_transition" ? (
            <TransitionTable></TransitionTable>
          ) : select === "add_note" ? (
            <AddNote></AddNote>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default ArFollowupBucket;
