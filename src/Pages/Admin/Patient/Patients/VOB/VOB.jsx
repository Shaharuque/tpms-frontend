import { Table } from "antd";
import React, { useState } from "react";

const VOB = () => {
  const [allData, setAllData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

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
            {/* <Link
              className="font-normal text-secondary"
              to={"/admin/patient-List"}
            >
              {patient}
            </Link> */}
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
      sortOrder:
        sortedInfo.columnKey === "allowed_amount" ? sortedInfo.order : null,
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
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        // return <PatientLedgerAction></PatientLedgerAction>;
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
      <h1 className="text-lg mt-2 text-orange-500">Patient Ar Ledger</h1>
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
          />
        </div>
      </div>
    </div>
  );
};

export default VOB;
