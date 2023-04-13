import { Switch, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";

const AllClientTable = () => {
  const [tableData, settableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { Text } = Typography;

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/PatientStatement.json")
      .then((res) => res.json())
      .then((d) => {
        settableData(d);
        console.log(d, "d");
        // setLoading2(false);
      });
  }, []);

  console.log(tableData);
  console.log("table");
  const column = [
    {
      title: "Service Date",
      key: "dob",
      dataIndex: "dob",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.dob || null,
      onFilter: (value, record) => record.dob.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.dob > b.dob ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "dob" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "gurantor",
      key: "gurantor",
      dataIndex: "gurantor",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.gurantor || null,
      onFilter: (value, record) => record.gurantor.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.gurantor > b.gurantor ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "gurantor" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Copay",
      key: "",
      dataIndex: "",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.gurantor || null,
      onFilter: (value, record) => record.gurantor.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.gurantor > b.gurantor ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "gurantor" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Coins",
      key: "",
      dataIndex: "",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.gurantor || null,
      onFilter: (value, record) => record.gurantor.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.gurantor > b.gurantor ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "gurantor" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Deductible",
      key: "",
      dataIndex: "",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.gurantor || null,
      onFilter: (value, record) => record.gurantor.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.gurantor > b.gurantor ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "gurantor" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Others",
      key: "",
      dataIndex: "",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.gurantor || null,
      onFilter: (value, record) => record.gurantor.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.gurantor > b.gurantor ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "gurantor" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Submitted",
      dataIndex: "operation",
      key: "operation",
      width: 100,
      render: (_, record) => {
        return (
          <>
            <div className="flex justify-center gap-2">
              <Switch
                size="small"
                // onClick={() => {
                //   setSubmited(!submited);
                // }}
              />{" "}
              No
            </div>
          </>
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
  return (
    <div>
      <div className=" overflow-scroll">
        <Table
          bordered
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className="table-striped-rows text-xs font-normal mt-5"
          columns={column}
          dataSource={tableData}
          rowSelection={{
            ...rowSelection,
          }}
          onChange={handleChange}
          summary={(pageData) => {
            let totalBill = 0;

            pageData.forEach(({ billed_amount }) => {
              totalBill += billed_amount;
            });
            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={2} colSpan={3}>
                    <span className="text-black font-bold flex justify-end mx-5 ">
                      Total
                    </span>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={8}>
                    <Text className="text-black font-bold flex justify-end">
                      {totalBill}
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
    </div>
  );
};

export default AllClientTable;
