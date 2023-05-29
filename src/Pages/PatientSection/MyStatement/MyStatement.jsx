import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Typography } from "antd";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { patientIp } from "../../../Misc/BaseClient";
import axios from "axios";
import useToken from "../../../CustomHooks/useToken";
import {
  useMyPaidStatementMutation,
  useMyStatementGetDataMutation,
  useMyUnpaidStatementMutation,
} from "../../../features/PatientPortal/MyStatement_redux/myStatementApi";
import ShimmerTableTet from "../../Pages/Settings/SettingComponents/ShimmerTableTet";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";

const MyStatement = () => {
  const [table, setTable] = useState(false);
  const [value, setValue] = useState("1");
  const [info, setInfo] = useState(null);
  const [allData, setAllData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { Text } = Typography;
  const { token } = useToken();
  const [statement, setStatement] = useState([]);

  //paid statement api
  const [myPaidStatement, { data: paidData, isLoading: paidDataLoading }] = useMyPaidStatementMutation(token);
  //unpaid statement api
  const [myUnpaidStatement, { data: unPaidData, isLoading: unPaidDataLoading }] = useMyUnpaidStatementMutation(token);

  const [myStatementGetData, { data: getData, isLoading: getDataLoading }] = useMyStatementGetDataMutation(token);

  //Paid Amount Api
  useEffect(() => {
    const getPaid = async () => {
      const res = await axios({
        method: "POST",
        url: `${patientIp}/my/statement/due`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      console.log("paid amount", res?.data);
      const data = res?.data;
      setInfo(data);
    };
    getPaid();
  }, [token]);

  useEffect(() => {
    if (value === "1") {
      myPaidStatement(token);
    }
    if (value === "2") {
      myUnpaidStatement(token);
    }
    if (value === "3") {
      myStatementGetData(token);
    }
  }, [value, myPaidStatement, myUnpaidStatement, myStatementGetData, token]);

  useEffect(() => {
    if (!paidDataLoading) {
      setStatement(paidData?.paidData);
    }
  }, [paidDataLoading, paidData?.paidData]);

  useEffect(() => {
    if (!unPaidDataLoading) {
      setStatement(unPaidData?.unpaidData);
    }
  }, [unPaidDataLoading, unPaidData?.unpaidData]);

  useEffect(() => {
    if (!getDataLoading) {
      setStatement(getData?.clientStatements);
    }
  }, [getDataLoading, getData?.clientStatements]);

  const column = [
    {
      title: "Service Date",
      dataIndex: "service_date",
      key: "service_date",
      width: 100,
      sorter: (a, b) => {
        return a.service_date > b.service_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patieservice_datent" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { service_date }) => {
        return (
          <div>
            <Link className="font-normal text-secondary">{dateConverter(service_date)}</Link>
          </div>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "activity",
      key: "activity",
      width: 100,
      render: (_, { activity_id }) => {
        return <div>{activity_id}</div>;
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.activity > b.activity ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "activity" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Copay",
      key: "co_pay",
      dataIndex: "co_pay",
      width: 80,
      render: (_, { co_pay }) => {
        return <h1>{co_pay?.toFixed(2)}</h1>;
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.co_pay > b.co_pay ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "co_pay" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Coins",
      key: "coins",
      dataIndex: "coins",
      width: 80,
      render: (_, { coins }) => {
        return <h1>{coins?.toFixed(2)}</h1>;
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.coins > b.coins ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "coins" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Deductible",
      key: "ded",
      dataIndex: "ded",
      width: 100,
      render: (_, { ded }) => {
        return <h1>{ded?.toFixed(2)}</h1>;
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.ded > b.ded ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "ded" ? sortedInfo.order : null,
      ellipsis: true,
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

  const handleOptionChange = (optionVal) => {
    setValue(optionVal);
    // setTable(true);
  };
  console.log("Value : ", value);

  return (
    <div className={statement?.length === 0 ? "h-[100vh]" : "h-[150vh]"}>
      <h1 className="text-lg my-2 text-orange-500">Statement</h1>
      <div>
        <div className="flex justify-between bg-[#36ADBF] rounded-md px-4 py-6">
          <div className="flex items-center">
            <h1 className="text-[14px] text-white">Sr Sr Tusher</h1>
            <select onChange={(e) => handleOptionChange(e.target.value)} className="bg-white rounded-sm ml-2 text-[14px] focus:outline-none px-3 py-2">
              <option value="1">Paid Statement</option>
              <option value="2">UnPaid Statement</option>
              <option value="3">Paid/Pending Posting Statement</option>
            </select>
          </div>
          <h1 className="text-[14px] text-white">Total Due Amount = {info?.totalSum}</h1>
        </div>
      </div>
      {!paidDataLoading ? (
        <div className="my-2">
          <div className=" overflow-scroll py-3">
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              bordered
              className=" text-xs font-normal "
              columns={column}
              dataSource={statement}
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
      ) : (
        <ShimmerTableTet></ShimmerTableTet>
      )}

      {value === "2" && (
        <div>
          <button className="bg-teal-500 rounded-md p-2 text-white text-[13px]">Pay {info?.totalSum?.toFixed(2)}$</button>
        </div>
      )}
    </div>
  );
};

export default MyStatement;
