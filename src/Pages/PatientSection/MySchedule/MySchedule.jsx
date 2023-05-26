import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Table, Typography } from "antd";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const MySchedule = () => {
  const [table, setTable] = useState(false);
  const [value, setValue] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const [allData, setAllData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { Text } = Typography;

  const navigation = useNavigate();
  const calenderClicked = () => {
    navigation("/patient/calender");
  };

  //   fetch data
  React.useEffect(() => {
    fetch("../../../All_Fake_Api/patientLeadger.json")
      .then((res) => res.json())
      .then((d) => {
        setAllData(d);
        // setLoading2(false);
      });
  }, []);

  console.log(allData);

  const column = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { patient }) => {
        return (
          <div>
            <Link className="font-normal text-secondary" to={"/admin/patient-List"}>
              {patient}
            </Link>
          </div>
        );
      },
    },
    {
      index: 2,
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      filters: [
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.provider || null,
      onFilter: (value, record) => record.provider.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "DOS",
      key: "dos",
      dataIndex: "dos",
      width: 80,
      filters: [{}],
      filteredValue: filteredInfo.dos || null,
      onFilter: (value, record) => record.dos.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.dos > b.dos ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "dos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "CPT",
      key: "cpt",
      dataIndex: "cpt",
      width: 80,
      filters: [{}],
      filteredValue: filteredInfo.cpt || null,
      onFilter: (value, record) => record.cpt.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.cpt > b.cpt ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Unit",
      key: "unit",
      dataIndex: "unit",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.unit || null,
      onFilter: (value, record) => record.unit.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.unit > b.unit ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "unit" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date Billed",
      key: "date_billed",
      dataIndex: "date_billed",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.date_billed || null,
      onFilter: (value, record) => record.date_billed.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.date_billed > b.date_billed ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "date_billed" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Billed Amount",
      key: "billed_amount",
      dataIndex: "billed_amount",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.billed_amount || null,
      onFilter: (value, record) => record.billed_amount.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.billed_amount > b.billed_amount ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "billed_amount" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { billed_amount }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{billed_amount}</div>;
      },
    },
    {
      title: "Allowed Amount",
      key: "allowed_amount",
      dataIndex: "allowed_amount",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.allowed_amount || null,
      onFilter: (value, record) => record.allowed_amount.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.allowed_amount > b.allowed_amount ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "allowed_amount" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { allowed_amount }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{allowed_amount}</div>;
      },
    },

    {
      title: "Paid",
      key: "paid",
      dataIndex: "paid",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.paid || null,
      onFilter: (value, record) => record.paid.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.paid > b.paid ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "paid" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { paid }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{paid}</div>;
      },
    },
    {
      title: "Adj",
      key: "adj",
      dataIndex: "adj",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.adj || null,
      onFilter: (value, record) => record.adj.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.adj > b.adj ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "adj" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { adj }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{adj}</div>;
      },
    },
    {
      title: "Balance",
      key: "balance",
      dataIndex: "balance",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.balance || null,
      onFilter: (value, record) => record.balance.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.balance > b.balance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "balance" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { balance }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{balance}</div>;
      },
    },
    {
      title: "Insurance Name",
      key: "insurance_name",
      dataIndex: "insurance_name",
      width: 110,
      filters: [{}],
      filteredValue: filteredInfo.insurance_name || null,
      onFilter: (value, record) => record.insurance_name.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.insurance_name > b.insurance_name ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "insurance_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Claim No",
      key: "claim_no",
      dataIndex: "claim_no",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.claim_no || null,
      onFilter: (value, record) => record.claim_no.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.claim_no > b.claim_no ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "claim_no" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "NT",
      key: "nt",
      dataIndex: "nt",
      width: 60,
      filters: [{}],
      filteredValue: filteredInfo.nt || null,
      onFilter: (value, record) => record.nt.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.nt > b.nt ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "nt" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { nt }) => {
        return (
          <div className="mx-auto">
            {nt === true ? (
              <span className="font-normal flex justify-center items-center text-green-600">
                <BsFileEarmarkPlusFill />
              </span>
            ) : (
              <span className="font-normal flex justify-center items-center text-gray-500">
                <BsFileEarmarkPlusFill />
              </span>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        return <h1>Test</h1>;
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
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

  // table config --------------------------------

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setTable(true);
  };

  //Date converter function [yy-mm-dd]
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <div className={table ? "" : "h-[100vh]"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h1 className="text-[16px] mt-2 text-orange-500">Manage Sessions</h1>
          <button onClick={calenderClicked} className="pms-button flex">
            <SlCalender className="mr-2" />
            Calender View
          </button>
        </div>
        {/* <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 my-5 mr-2 gap-4"> */}
        <div className=" flex flex-wrap items-center gap-3">
          <div>
            <label className="label">
              <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">Search By</span>
            </label>
            <select className="input-border text-gray-600 rounded-sm text-[14px] font-medium ml-1 w-[150px] focus:outline-none" {...register("patient")}>
              <option value=""></option>
              <option value="1">Today</option>
              <option value="2">Tomorrow</option>
              <option value="3">Yesterday</option>
              <option value="4">Next 7 days</option>
              <option value="5">Date Range</option>
              <option value="7">Last 15 days</option>
              <option value="8">Next 15 days</option>
              <option value="9">Last 30 days</option>
              <option value="10">Next 30 days</option>
            </select>
          </div>

          <div className="mt-[26px] flex items-center sm:col-span-2">
            <div>
              {/* submit  */}
              <button className="pms-button">Go</button>
            </div>
          </div>
        </div>
      </form>
      {table && (
        <div className="my-2">
          <div className="flex justify-end items-center mr-2">
            <button
              onClick={clearFilters}
              className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>

          <div className=" overflow-scroll py-3">
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              bordered
              className=" text-xs font-normal "
              columns={column}
              dataSource={allData}
              rowSelection={{
                ...rowSelection,
              }}
              scroll={{
                y: 700,
              }}
              onChange={handleChange}
              summary={(pageData) => {
                let totalBill = 0;
                let totalAllowed = 0;
                let totalPaid = 0;
                let totalBalance = 0;
                let totalAdj = 0;
                pageData.forEach(({ billed_amount, allowed_amount, paid, adj, balance }) => {
                  totalBill += billed_amount;
                  totalAllowed += allowed_amount;
                  totalPaid += paid;
                  totalBalance += balance;
                  totalAdj += adj;
                });
                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={2} colSpan={7}>
                        <span className="text-black font-bold flex justify-end mx-5 "> Total</span>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={8}>
                        <Text className="text-black font-bold flex justify-end">{totalBill}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold flex justify-end">{totalAllowed}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold flex justify-end">{totalPaid}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold flex justify-end">{totalAdj}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold flex justify-end">{totalBalance}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2} colSpan={4}></Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MySchedule;
