import React, { useState } from "react";
import { Table, Typography } from "antd";
import { DatabaseDateConverter, dateConverter } from "../../../../../Shared/Dateconverter/DateConverter";

const ManageClaimTransactions = ({ allTransactions }) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectOption, setSelectOption] = useState("");
  const { Text } = Typography;
  console.log(allTransactions);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "Claim",
      dataIndex: "claim_id",
      key: "claim_id",
      width: 50,
      render: (_, { claim_id }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{claim_id}</div>;
      },
      sorter: (a, b) => {
        return a.claim_id > b.claim_id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "claim_id" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Pt.Name",
      dataIndex: "patient",
      key: "patient",
      width: 50,
      render: (_, { pri_mngclmtrn_patient }) => {
        return <div className=" text-secondary">{pri_mngclmtrn_patient?.client_full_name}</div>;
      },
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Ins",
      dataIndex: "ins",
      key: "ins",
      width: 70,
      render: (_, { pri_mngclmtrn_payor }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{pri_mngclmtrn_payor?.payor_name}</div>;
      },
      sorter: (a, b) => {
        return a.ins > b.ins ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "ins" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Service Date",
      key: "schedule_date",
      dataIndex: "schedule_date",
      width: 50,
      render: (_, record) => {
        return <h1>{dateConverter(record?.schedule_date)}</h1>;
      },
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.schedule_date > b.schedule_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "schedule_date" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "CPT",
      dataIndex: "cpt",
      key: "cpt",
      width: 50,
      render: (_, { pri_mngclmtrn_prcclm }) => {
        return <h1>{pri_mngclmtrn_prcclm?.cpt}</h1>;
      },
      sorter: (a, b) => {
        return a.pri_mngclmtrn_prcclm?.cpt > b.pri_mngclmtrn_prcclm?.cpt ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M1",
      dataIndex: "m1",
      key: "m1",
      width: 50,
      render: (_, { pri_mngclmtrn_prcclm }) => {
        return <h1>{pri_mngclmtrn_prcclm?.m1}</h1>;
      },
      sorter: (a, b) => {
        return a.pri_mngclmtrn_prcclm.m1 > b.pri_mngclmtrn_prcclm.m1 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "m1" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M2",
      dataIndex: "m2",
      key: "m2",
      width: 50,
      render: (_, { pri_mngclmtrn_prcclm }) => {
        return <h1>{pri_mngclmtrn_prcclm?.m2}</h1>;
      },
      sorter: (a, b) => {
        return a.pri_mngclmtrn_prcclm?.m2 > b.pri_mngclmtrn_prcclm?.m2 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "m2" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M3",
      dataIndex: "m3",
      key: "m3",
      width: 50,
      render: (_, { pri_mngclmtrn_prcclm }) => {
        return <h1>{pri_mngclmtrn_prcclm?.m3}</h1>;
      },
      sorter: (a, b) => {
        return a.pri_mngclmtrn_prcclm?.m3 > b.pri_mngclmtrn_prcclm?.m3 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "m3" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M4",
      dataIndex: "m4",
      key: "m4",
      width: 50,
      render: (_, { pri_mngclmtrn_prcclm }) => {
        return <h1>{pri_mngclmtrn_prcclm?.m4}</h1>;
      },
      sorter: (a, b) => {
        return a.pri_mngclmtrn_prcclm?.m4 > b.pri_mngclmtrn_prcclm?.m4 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "m4" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Unit",
      dataIndex: "units",
      key: "units",
      width: 50,
      render: (_, { pri_mngclmtrn_prcclm }) => {
        return <h1>{pri_mngclmtrn_prcclm?.units?.toFixed(2)}</h1>;
      },
      sorter: (a, b) => {
        return a.pri_mngclmtrn_prcclm?.units > b.pri_mngclmtrn_prcclm?.units ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "units" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Total Charge",
      dataIndex: "total",
      key: "total",
      width: 50,
      render: (_, { pri_mngclmtrn_prcclm }) => {
        return <div className=" text-secondary">{parseFloat(pri_mngclmtrn_prcclm?.units * pri_mngclmtrn_prcclm?.rate)?.toFixed(2)}</div>;
      },
      sorter: (a, b) => {
        return a.total > b.total ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
      },
      sortOrder: sortedInfo.columnKey === "total" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 50,
      render: (_, { createdAt }) => {
        return <h1>{DatabaseDateConverter(createdAt)}</h1>;
      },
      sorter: (a, b) => {
        return a.createdAt > b.createdAt ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "createdAt" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Paid",
      key: "L_billed",
      dataIndex: "L_billed",
      width: 50,
      sorter: (a, b) => {
        return a.L_billed > b.L_billed ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "L_billed" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  //get rows id to do some action on them
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  console.log("selected Insurance Setup : ", selectedRowKeys);
  return (
    <div className="my-5 overflow-scroll h-[100vh]">
      <Table
        rowKey={(record) => record.id}
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        size="small"
        bordered
        className=" text-xs font-normal "
        columns={columns}
        dataSource={allTransactions?.data}
        rowSelection={rowSelection}
        onChange={handleChange}
        summary={(pageData) => {
          console.log("pageData", pageData);
          let totalAllowed = pageData?.length;
          let totalUnit = 0;
          let totalBalance = 0;
          pageData.forEach(({ pri_mngclmtrn_prcclm }) => {
            let total;
            total = pri_mngclmtrn_prcclm?.rate * pri_mngclmtrn_prcclm?.units;

            totalBalance = parseFloat(totalBalance) + total;
            totalUnit = parseFloat(totalUnit) + pri_mngclmtrn_prcclm?.units;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={2} colSpan={3}>
                  <span className="text-black font-bold flex justify-end mx-5 "> Total Transactions</span>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text className="text-black font-bold flex justify-center">{totalAllowed}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6} colSpan={6}>
                  <Text className="text-black font-bold flex justify-center">Total Amount</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text className="text-black font-bold flex justify-center">{totalUnit?.toFixed(2)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text className="text-black font-bold flex justify-center">{totalBalance?.toFixed(2)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} colSpan={2}></Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
      <div className=" flex flex-wrap items-center gap-2 mt-6">
        <div>
          <select onChange={(e) => setSelectOption(e.target.value)} name="type" className="border rounded-sm px-2 w-36 py-2 text-xs text-[#495057]">
            <option value=""></option>
            <option value="1">HCFA with background</option>
            <option value="2">HCFA without background</option>
            <option value="3">Push Ability SFTP</option>
            <option value="4">Show Detail(s)</option>
            <option value="5">Create Secondary Claim</option>
            <option value="6">Generate 837 File</option>
            <option value="7">Codes Bulk Update</option>
          </select>
        </div>
        <button className=" py-2  px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">Ok</button>
        <button className=" py-2   px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md" type="submit">
          Save
        </button>
      </div>
    </div>
  );
};

export default ManageClaimTransactions;
