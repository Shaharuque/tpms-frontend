import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Table, Typography } from "antd";
import { Toggle } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import PatientLedgerAction from "./PatientLedger/PatientLedgerAction";

//for date range picker calendar
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsArrowRight } from "react-icons/bs";

const PatientLedger = () => {
  const { id } = useParams();
  console.log("patient Ledger", id);
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

  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

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
      width: 120,
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
            <Link
              className="font-normal text-secondary"
              to={"/admin/patient-List"}
            >
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
      width: 130,
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
      sortOrder:
        sortedInfo.columnKey === "date_billed" ? sortedInfo.order : null,
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
      sortOrder:
        sortedInfo.columnKey === "billed_amount" ? sortedInfo.order : null,
      ellipsis: true,
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
      sortOrder:
        sortedInfo.columnKey === "allowed_amount" ? sortedInfo.order : null,
      ellipsis: true,
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
      sortOrder:
        sortedInfo.columnKey === "insurance_name" ? sortedInfo.order : null,
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
        return <PatientLedgerAction></PatientLedgerAction>;
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
  // date range picker calendar
  const startDate = range[0]?.startDate;
  const endDate = range[0]?.endDate;
  const startMonth = startDate.toLocaleString("en-us", { month: "short" });
  const endMonth = endDate.toLocaleString("en-us", { month: "short" });
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  // const startYear = startDate.getFullYear();
  // const endYear = endDate.getFullYear();

  return (
    <div className="h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-lg mt-2 text-orange-500">Patient Ar Ledger</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Patient
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("patient")}
            >
              <option value="name"> </option>
              <option value="name"> Abcd </option>
              <option value="name"> abcd </option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Selected date
              </span>
            </label>
            <div className="ml-1">
              <div className="flex flex-wrap justify-between items-center text-gray-600 input-border text-gray-600 rounded-sm px-1 mx-1 w-full">
                <input
                  value={`${startDay} ${startMonth}`}
                  readOnly
                  onClick={() => setOpen((open) => !open)}
                  className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                />
                <BsArrowRight
                  onClick={() => setOpen((open) => !open)}
                  className="w-1/3 text-gray-600 text-[14px] font-medium"
                ></BsArrowRight>
                <input
                  value={`${endDay} ${endMonth}`}
                  readOnly
                  onClick={() => setOpen((open) => !open)}
                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* CPT Code  */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                CPT Code
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("CPT_Code")}
            >
              <option value="name"></option>
              <option value="name">EFT</option>
              <option value="name">rounded-sm</option>
              <option value="name">EFT</option>
              <option value="name">EFT</option>
            </select>
          </div>

          {/*Aging Status  */}
          <div>
            <label className="label">
              <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                Aging Status
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("aging_status")}
            >
              <option value="name">EFT</option>
            </select>
          </div>
          <div className="mt-[35px] flex sm:col-span-2">
            <div>
              <Toggle
                checkedChildren={<CheckIcon />}
                unCheckedChildren={<CloseIcon />}
                checked={value ? true : false}
                size="sm"
                onClick={() => {
                  setValue(!value);
                }}
              />
              <span className="text-xs text-gray-500 mr-3"> Zero to Paid</span>
            </div>
            <div>
              {/* submit  */}
              <button className="py-[5px]  px-3 text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
                View
              </button>
            </div>
          </div>
        </div>
        <div className="absolute z-10 lg:ml-[8%] xl:ml-[12%] 2xl:ml-[15]">
          {open && (
            <div>
              <div>
                <DateRangePicker
                  onChange={(item) => setRange([item.selection])}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={2}
                  direction="horizontal"
                  className="border-2 border-gray-100"
                />
              </div>
              <div className="text-right bg-white border-r-2 border-b-2 border-l-2 border-r-gray-100 border-b-gray-100 border-l-gray-100 range-date-ok">
                <button
                  className="py-[5px] px-2.5 m-2 text-white rounded-md bg-gradient-to-r from-[#0db5c8] to-[#089bab]"
                  type="submit"
                  onClick={() => setOpen(false)}
                >
                  Ok
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
      {table && (
        <div className="my-2">
          <div className="flex justify-end items-center mr-2">
            <button
              onClick={clearFilters}
              className="px-2 py-2 bg-white from-primary text-xs hover:to-secondary text-secondary border border-secondary rounded-sm"
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
              onChange={handleChange}
              summary={(pageData) => {
                let totalBill = 0;
                let totalAllowed = 0;
                let totalPaid = 0;
                let totalBalance = 0;
                let totalAdj = 0;
                pageData.forEach(
                  ({ billed_amount, allowed_amount, paid, adj, balance }) => {
                    totalBill += billed_amount;
                    totalAllowed += allowed_amount;
                    totalPaid += paid;
                    totalBalance += balance;
                    totalAdj += adj;
                  }
                );
                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={2} colSpan={7}>
                        <span className="text-black font-bold flex justify-end mx-5 ">
                          {" "}
                          Total
                        </span>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={8}>
                        <Text className="text-black font-bold">
                          {totalBill}
                        </Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold">
                          {totalAllowed}
                        </Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold">
                          {totalPaid}
                        </Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold">{totalAdj}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold">
                          {totalBalance}
                        </Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell
                        index={2}
                        colSpan={4}
                      ></Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </div>

          <div className="flex item-center flex-wrap my-5">
            <div>
              <select
                onChange={handleSortBy}
                name="type"
                className="border border-gray-300 rounded-sm py-[5px] font-normal px-2 w-36 text-xs "
              >
                <option value=""></option>
                <option value="Specific_Date">Specific Date</option>
                <option value="Date_Range">Provider</option>
              </select>
            </div>
            <button className="  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
              Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientLedger;
