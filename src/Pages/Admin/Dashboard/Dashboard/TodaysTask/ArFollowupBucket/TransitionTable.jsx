import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { TransitionTableColumn } from "../TodaysTaskTableData";
import axios from "axios";
import UseTable from "../../../../../../Utilities/UseTable";
import { Table } from "antd";

const TransitionTable = () => {
  const [transData, SetTransData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // fakeDb call
  useEffect(() => {
    axios("../../All_Fake_Api/TransitionTable.json")
      .then((response) => {
        SetTransData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(transData);

  const globalFilter = (value) => {
    //console.log(value);
    const filteredData = transData?.filter(
      (each) =>
        each?.patient?.toLowerCase().includes(value.toLowerCase()) ||
        each?.date_billed?.toLowerCase().includes(value) ||
        each?.adj?.toLowerCase().includes(value.toLowerCase()) ||
        each?.instrument_no?.toLowerCase().includes(value) ||
        each?.posted_date?.toLowerCase().includes(value.toLowerCase())
    );
    SetTransData(filteredData);

    if (!value) {
      axios("../../All_Fake_Api/TransitionTable.json")
        .then((response) => {
          console.log("calling");
          SetTransData(response?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  //Individual filtering [tagging feature]
  const deleteIdTag = (tag) => {
    console.log(tag);
    const patient_array = filteredInfo?.patient?.filter((item) => item !== tag);
    setFilteredInfo({
      patient: patient_array,
      date_billed: filteredInfo?.date_billed,
      adj: filteredInfo?.adj,
      instrument_no: filteredInfo?.instrument_no,
      posted_date: filteredInfo?.posted_date,
    });
  };
  const deleteAmountTag = (tag) => {
    console.log(tag);
    const date_billed_array = filteredInfo?.date_billed?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      patient: filteredInfo?.patient,
      date_billed: date_billed_array,
      adj: filteredInfo?.adj,
      instrument_no: filteredInfo?.instrument_no,
      posted_date: filteredInfo?.posted_date,
    });
  };
  const deleteAdjustmentTag = (tag) => {
    console.log(tag);
    const adj_array = filteredInfo?.adj?.filter((item) => item !== tag);
    setFilteredInfo({
      patient: filteredInfo?.patient,
      date_billed: filteredInfo?.date_billed,
      adj: adj_array,
      instrument_no: filteredInfo?.instrument_no,
      posted_date: filteredInfo?.posted_date,
    });
  };
  const deleteInstrumentNoTag = (tag) => {
    console.log(tag);
    const instrument_no_array = filteredInfo?.instrument_no?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      patient: filteredInfo?.patient,
      date_billed: filteredInfo?.date_billed,
      adj: filteredInfo?.adj,
      instrument_no: instrument_no_array,
      posted_date: filteredInfo?.posted_date,
    });
  };
  const deletePostedDateTag = (tag) => {
    console.log(tag);
    const posted_date_array = filteredInfo?.posted_date?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      patient: filteredInfo?.patient,
      date_billed: filteredInfo?.date_billed,
      adj: filteredInfo?.adj,
      instrument_no: filteredInfo?.instrument_no,
      posted_date: posted_date_array,
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [
        { text: "Luis Pocknell", value: "Luis Pocknell" },
        { text: "Benedetta Kindread", value: "Benedetta Kindread" },
        {
          text: `Lorenzo Kembley`,
          value: "Lorenzo Kembley",
        },
        {
          text: `Galvin Crus`,
          value: "Galvin Crus",
        },
        {
          text: "Luther Demicoli",
          value: "Luther Demicoli",
        },
        {
          text: "Cirilo Pattillo",
          value: "Cirilo Pattillo",
        },
        {
          text: "Tansy Belchamp",
          value: "Tansy Belchamp",
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
      title: "Dos",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      // filters: [
      //   { text: "Luis Pocknell", value: "Luis Pocknell" },
      //   { text: "Benedetta Kindread", value: "Benedetta Kindread" },
      //   {
      //     text: `Lorenzo Kembley`,
      //     value: "Lorenzo Kembley",
      //   },
      //   {
      //     text: `Galvin Crus`,
      //     value: "Galvin Crus",
      //   },
      //   {
      //     text: "Luther Demicoli",
      //     value: "Luther Demicoli",
      //   },
      //   {
      //     text: "Cirilo Pattillo",
      //     value: "Cirilo Pattillo",
      //   },
      //   {
      //     text: "Tansy Belchamp",
      //     value: "Tansy Belchamp",
      //   },
      // ],
      // filteredValue: filteredInfo.provider || null,
      // onFilter: (value, record) => record.provider.includes(value),
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // providers, id, key=>each row data(object) property value can be accessed.
      render: (_, { provider, id, key }) => {
        //console.log("tags : ", provider, id, key);
        return (
          <div>
            <h1>{provider}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Code",
      dataIndex: "Dos",
      key: "Dos",
      width: 100,
      // filters: [
      //   { text: "Luis Pocknell", value: "Luis Pocknell" },
      //   { text: "Benedetta Kindread", value: "Benedetta Kindread" },
      //   {
      //     text: `Lorenzo Kembley`,
      //     value: "Lorenzo Kembley",
      //   },
      //   {
      //     text: `Galvin Crus`,
      //     value: "Galvin Crus",
      //   },
      //   {
      //     text: "Luther Demicoli",
      //     value: "Luther Demicoli",
      //   },
      //   {
      //     text: "Cirilo Pattillo",
      //     value: "Cirilo Pattillo",
      //   },
      //   {
      //     text: "Tansy Belchamp",
      //     value: "Tansy Belchamp",
      //   },
      // ],
      // filteredValue: filteredInfo.Dos || null,
      // onFilter: (value, record) => record.Dos.includes(value),
      sorter: (a, b) => {
        return a.Dos > b.Dos ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Dos" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // Dos, id, key=>each row data(object) property value can be accessed.
      render: (_, { Dos, id, key }) => {
        //console.log("tags : ", Dos, id, key);
        return (
          <div>
            <h1>{Dos}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "M1",
      dataIndex: "CPT",
      key: "CPT",
      width: 100,
      // filters: [
      //   { text: "Luis Pocknell", value: "Luis Pocknell" },
      //   { text: "Benedetta Kindread", value: "Benedetta Kindread" },
      //   {
      //     text: `Lorenzo Kembley`,
      //     value: "Lorenzo Kembley",
      //   },
      //   {
      //     text: `Galvin Crus`,
      //     value: "Galvin Crus",
      //   },
      //   {
      //     text: "Luther Demicoli",
      //     value: "Luther Demicoli",
      //   },
      //   {
      //     text: "Cirilo Pattillo",
      //     value: "Cirilo Pattillo",
      //   },
      //   {
      //     text: "Tansy Belchamp",
      //     value: "Tansy Belchamp",
      //   },
      // ],
      // filteredValue: filteredInfo.CPT || null,
      // onFilter: (value, record) => record.CPT.includes(value),
      sorter: (a, b) => {
        return a.CPT > b.CPT ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "CPT" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // CPT, id, key=>each row data(object) property value can be accessed.
      render: (_, { CPT, id, key }) => {
        //console.log("tags : ", CPT, id, key);
        return (
          <div>
            <h1>{CPT}</h1>
          </div>
        );
      },
      ellipsis: true,
    },

    {
      title: "Amount",
      dataIndex: "date_billed",
      key: "date_billed",
      width: 100,
      filters: [
        { text: "$5.77", value: "$5.77" },
        { text: "$5.88", value: "$5.88" },
        {
          text: `$0.20`,
          value: "$0.20",
        },
        {
          text: `$6.29`,
          value: "$6.29",
        },
        {
          text: "$9.98",
          value: "$9.98",
        },
        {
          text: "$4.31",
          value: "$4.31",
        },
        {
          text: "$6.38",
          value: "$6.38",
        },
      ],
      filteredValue: filteredInfo.date_billed || null,
      onFilter: (value, record) => record.date_billed.includes(value),
      sorter: (a, b) => {
        return a.date_billed > b.date_billed ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "date_billed" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // date_billed, id, key=>each row data(object) property value can be accessed.
      render: (_, { date_billed, id, key }) => {
        //console.log("tags : ", date_billed, id, key);
        return (
          <div>
            <h1>{date_billed}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Payment",
      dataIndex: "allwd",
      key: "allwd",
      width: 100,
      // filters: [
      //   { text: "Luis Pocknell", value: "Luis Pocknell" },
      //   { text: "Benedetta Kindread", value: "Benedetta Kindread" },
      //   {
      //     text: `Lorenzo Kembley`,
      //     value: "Lorenzo Kembley",
      //   },
      //   {
      //     text: `Galvin Crus`,
      //     value: "Galvin Crus",
      //   },
      //   {
      //     text: "Luther Demicoli",
      //     value: "Luther Demicoli",
      //   },
      //   {
      //     text: "Cirilo Pattillo",
      //     value: "Cirilo Pattillo",
      //   },
      //   {
      //     text: "Tansy Belchamp",
      //     value: "Tansy Belchamp",
      //   },
      // ],
      // filteredValue: filteredInfo.allwd || null,
      // onFilter: (value, record) => record.allwd.includes(value),
      sorter: (a, b) => {
        return a.allwd > b.allwd ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "allwd" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // allwd, id, key=>each row data(object) property value can be accessed.
      render: (_, { allwd, id, key }) => {
        //console.log("tags : ", allwd, id, key);
        return (
          <div>
            <h1>{allwd}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
      width: 100,
      // filters: [
      //   { text: "Luis Pocknell", value: "Luis Pocknell" },
      //   { text: "Benedetta Kindread", value: "Benedetta Kindread" },
      //   {
      //     text: `Lorenzo Kembley`,
      //     value: "Lorenzo Kembley",
      //   },
      //   {
      //     text: `Galvin Crus`,
      //     value: "Galvin Crus",
      //   },
      //   {
      //     text: "Luther Demicoli",
      //     value: "Luther Demicoli",
      //   },
      //   {
      //     text: "Cirilo Pattillo",
      //     value: "Cirilo Pattillo",
      //   },
      //   {
      //     text: "Tansy Belchamp",
      //     value: "Tansy Belchamp",
      //   },
      // ],
      // filteredValue: filteredInfo.paid || null,
      // onFilter: (value, record) => record.paid.includes(value),
      sorter: (a, b) => {
        return a.paid > b.paid ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "paid" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // paid, id, key=>each row data(object) property value can be accessed.
      render: (_, { paid, id, key }) => {
        //console.log("tags : ", paid, id, key);
        return (
          <div>
            <h1>{paid}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Adjustment",
      dataIndex: "adj",
      key: "adj",
      width: 100,
      filters: [
        { text: "Neophron percnopterus", value: "Neophron percnopterus" },
        { text: "Cacatua tenuirostris", value: "Cacatua tenuirostris" },
        {
          text: `Vanessa indica`,
          value: "Vanessa indica",
        },
        {
          text: `Amphibolurus barbatus`,
          value: "Amphibolurus barbatus",
        },
        {
          text: "Anser anser",
          value: "Anser anser",
        },
        {
          text: "Zenaida asiatica",
          value: "Zenaida asiatica",
        },
        {
          text: "Mazama gouazoubira",
          value: "Mazama gouazoubira",
        },
      ],
      filteredValue: filteredInfo.adj || null,
      onFilter: (value, record) => record.adj.includes(value),
      sorter: (a, b) => {
        return a.adj > b.adj ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "adj" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // adj, id, key=>each row data(object) property value can be accessed.
      render: (_, { adj, id, key }) => {
        //console.log("tags : ", adj, id, key);
        return (
          <div>
            <h1>{adj}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Who paid",
      dataIndex: "whopaid",
      key: "whopaid",
      width: 100,
      // filters: [
      //   { text: "Neophron percnopterus", value: "Neophron percnopterus" },
      //   { text: "Cacatua tenuirostris", value: "Cacatua tenuirostris" },
      //   {
      //     text: `Vanessa indica`,
      //     value: "Vanessa indica",
      //   },
      //   {
      //     text: `Amphibolurus barbatus`,
      //     value: "Amphibolurus barbatus",
      //   },
      //   {
      //     text: "Anser anser",
      //     value: "Anser anser",
      //   },
      //   {
      //     text: "Zenaida asiatica",
      //     value: "Zenaida asiatica",
      //   },
      //   {
      //     text: "Mazama gouazoubira",
      //     value: "Mazama gouazoubira",
      //   },
      // ],
      // filteredValue: filteredInfo.whopaid || null,
      // onFilter: (value, record) => record.whopaid.includes(value),
      sorter: (a, b) => {
        return a.whopaid > b.whopaid ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "whopaid" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // whopaid, id, key=>each row data(object) property value can be accessed.
      render: (_, { whopaid, id, key }) => {
        //console.log("tags : ", whopaid, id, key);
        return (
          <div>
            <h1>{whopaid}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Instrument No",
      dataIndex: "instrument_no",
      key: "instrument_no",
      width: 100,
      filters: [
        { text: "9428975621", value: "9428975621" },
        { text: "9428975621", value: "9428975621" },
        {
          text: `2135260894`,
          value: "2135260894",
        },
        {
          text: `2004648732`,
          value: "2004648732",
        },
        {
          text: "0604183747",
          value: "0604183747",
        },
        {
          text: "3852310040",
          value: "3852310040",
        },
        {
          text: "1892477408",
          value: "1892477408",
        },
      ],
      filteredValue: filteredInfo.instrument_no || null,
      onFilter: (value, record) => record.instrument_no.includes(value),
      sorter: (a, b) => {
        return a.instrument_no > b.instrument_no ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "instrument_no" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // instrument_no, id, key=>each row data(object) property value can be accessed.
      render: (_, { instrument_no, id, key }) => {
        //console.log("tags : ", instrument_no, id, key);
        return (
          <div>
            <h1>{instrument_no}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Posted Date",
      dataIndex: "posted_date",
      key: "posted_date",
      width: 100,
      filters: [
        { text: "8/12/2022", value: "8/12/2022" },
        { text: "9/8/2021", value: "9/8/2021" },
        {
          text: `12/22/2021`,
          value: "12/22/2021",
        },
        {
          text: `8/22/2022`,
          value: "8/22/2022",
        },
        {
          text: "11/17/2021",
          value: "11/17/2021",
        },
        {
          text: "2/17/2022",
          value: "2/17/2022",
        },
        {
          text: "11/29/2021",
          value: "11/29/2021",
        },
      ],
      filteredValue: filteredInfo.posted_date || null,
      onFilter: (value, record) => record.posted_date.includes(value),
      sorter: (a, b) => {
        return a.posted_date > b.posted_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "posted_date" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // posted_date, id, key=>each row data(object) property value can be accessed.
      render: (_, { posted_date, id, key }) => {
        //console.log("tags : ", instrument_no, id, key);
        return (
          <div>
            <h1>{posted_date}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
  ];

  return (
    <div>
      <div className="my-5">
        {/* filtering tag showing part */}
        {filteredInfo?.patient?.length > 0 ||
        filteredInfo?.date_billed?.length > 0 ||
        filteredInfo?.adj?.length > 0 ||
        filteredInfo?.instrument_no?.length > 0 ||
        filteredInfo?.posted_date?.length > 0 ? (
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
                          Id:
                        </span>
                        {tag}
                      </div>
                      <div>
                        <div
                          className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                          onClick={() => deleteIdTag(tag)}
                        >
                          X
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                        Amount:
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deleteAmountTag(tag)}
                      >
                        X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {filteredInfo?.adj?.length > 0 && (
              <div className="flex mb-2 gap-1">
                {filteredInfo?.adj?.map((tag, index) => (
                  <div
                    className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                    key={index}
                  >
                    <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                      <span className="text-secondary text-[15px] font-medium mr-1  ">
                        Adjustment:
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deleteAdjustmentTag(tag)}
                      >
                        X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {filteredInfo?.instrument_no?.length > 0 && (
              <div className="flex mb-2 gap-1">
                {filteredInfo?.instrument_no?.map((tag, index) => (
                  <div
                    className="text-gray-700  shadow-sm font-medium  rounded-sm pl-1 bg-white flex items-center"
                    key={index}
                  >
                    <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                      <span className="text-secondary text-[15px] font-medium mr-1  ">
                        Instrument No:
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deleteInstrumentNoTag(tag)}
                      >
                        X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {filteredInfo?.posted_date?.length > 0 && (
              <div className="flex mb-2 gap-1">
                {filteredInfo?.posted_date?.map((tag, index) => (
                  <div
                    className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                    key={index}
                  >
                    <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                      <span className="text-secondary text-[15px] font-medium mr-1  ">
                        Posted Date:
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deletePostedDateTag(tag)}
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
            dataSource={transData} //Which data chunk you want to show in table
            // For fixed header table at top
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TransitionTable;
