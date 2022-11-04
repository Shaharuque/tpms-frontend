import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import InfiniteScroll from "react-infinite-scroll-component";
import { headers } from "../../../../../Misc/BaseClient";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import PlaceOfServicesActionAddModal from "./PlaceOfServices/PlaceOfServicesActionAddModal";

const PlaceOfServices = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recordData, setRecordData] = useState();
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);

  //get data from API + data fetch from api while scrolling[Important]
  useEffect(() => {
    const getPatientsData = async () => {
      const res = await axios({
        method: "get",
        url: `https://app.therapypms.com/api/v1/admin/ac/setting/get/pos?page=1`,
        headers: headers,
      });
      // const result = await res.json();
      const result = res?.data?.pos_data?.data;
      //console.log(result);
      setItems(result);
    };
    getPatientsData();
  }, []);

  const fetchPatients = async () => {
    const res = await axios({
      method: "GET",
      url: `https://app.therapypms.com/api/v1/admin/ac/setting/get/pos?page=${page}`,
      headers: headers,
    });
    const result = res?.data?.pos_data?.data;
    return result;
  };

  const fetchData = async () => {
    const patientsFromServer = await fetchPatients();
    console.log(patientsFromServer);
    setItems([...items, ...patientsFromServer]);
    if (patientsFromServer.length === 0) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  console.log(items);

  //get data from API + data fetch from api while scrolling[Important]
  // useEffect(() => {
  //   fetch("https://app.therapypms.com/api/v1/admin/ac/setting/get/pos", {
  //     method: "GET",
  //     headers: headers,
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("Success:", data);
  //     });
  // }, []);

  const handleClickOpen2 = (record) => {
    setOpenAddModal(true);
    setRecordData(record);
  };
  console.log(recordData);

  const handleClose2 = () => {
    setOpenAddModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState([]);
  useEffect(() => {
    axios("../../../All_Fake_Api/Holiday.json")
      .then((response) => {
        //console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Place of Service",
      dataIndex: "pos_name",
      key: "pos_name",
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
      render: (_, { pos_name }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{pos_name}</div>;
      },
      filteredValue: filteredInfo.pos_name || null,
      onFilter: (value, record) => record.pos_name.includes(value),
      sorter: (a, b) => {
        return a.pos_name > b.pos_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "pos_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Place of Service Code",
      dataIndex: "pos_code",
      key: "pos_code",
      width: 150,
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
      filteredValue: filteredInfo.pos_code || null,
      onFilter: (value, record) => record.pos_code.includes(value),
      sorter: (a, b) => {
        return a.pos_code > b.pos_code ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "pos_code" ? sortedInfo.order : null,
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
            <div className="flex justify-center">
              <button
                onClick={() => handleClickOpen2(record)}
                className="text-secondary"
              >
                <FiEdit />
              </button>
              <div className="mx-2">|</div>
              <button className="text-sm mx-1  text-red-500">
                <AiOutlineDelete />
              </button>
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

  const clearFilters = () => {
    setFilteredInfo({});
  };
  return (
    <div>
      <div className="md:flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Place of Service</h1>

        <div className=" md:flex items-center">
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button
                onClick={handleClickOpen2}
                className="px-2 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm mr-2"
              >
                Add Place of Service
              </button>
            </label>
          </div>
          <div className="md:flex justify-end items-end my-2">
            <button
              onClick={clearFilters}
              className="px-2  py-1 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>
        </div>
      </div>
      <div>
        <InfiniteScroll
          dataLength={items.length} //items is basically all data here
          next={fetchData}
          hasMore={hasMore}
          loader={<ShimmerTableTet></ShimmerTableTet>}
        >
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
            size="small"
            bordered
            className=" text-xs font-normal"
            columns={columns}
            dataSource={items}
            scroll={{
              y: 650,
            }}
            onChange={handleChange}
          />
        </InfiniteScroll>
      </div>

      {openAddModal && (
        <PlaceOfServicesActionAddModal
          handleClose={handleClose2}
          open={openAddModal}
          recordData={recordData}
        ></PlaceOfServicesActionAddModal>
      )}
    </div>
  );
};

export default PlaceOfServices;
