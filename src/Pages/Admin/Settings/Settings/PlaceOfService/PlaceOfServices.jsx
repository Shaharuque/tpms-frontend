import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BiLeftArrow } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import useToken from "../../../../../CustomHooks/useToken";
import { fetchPOS } from "../../../../../features/Settings_redux/placeOfServiceSlice";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import PlaceOfServicesActionAddModal from "./PlaceOfServices/PlaceOfServicesActionAddModal";

const PlaceOfServices = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recordData, setRecordData] = useState();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { token } = useToken();
  const endPoint = "admin/ac/setting/get/pos";

  const pos = useSelector((state) => state?.posInfo);
  console.log(pos);
  const data = pos?.posData?.pos_data?.data ? pos?.posData?.pos_data?.data : [];
  const totalPage = pos?.posData?.pos_data?.last_page
    ? pos?.posData?.pos_data?.last_page
    : 0;
  console.log(data);

  useEffect(() => {
    // For sending multiple parameter to createAsync Thunk we need to pass it as object
    dispatch(fetchPOS({ endPoint, page, token }));
  }, [page, dispatch, token]);

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", typeof selectedPage);
    setPage(selectedPage + 1);
  };

  //get data from API + data fetch from api while scrolling[Important]
  // useEffect(() => {
  //   const getPatientsData = async (page) => {
  //     const res = await axios({
  //       method: "get",
  //       url: `https://ovh.therapypms.com/api/v1/admin/ac/setting/get/pos?page=${page}`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         Authorization: localStorage.getItem("adminToken") || null,
  //       },
  //     });
  //     // const result = await res.json();
  //     const result = res?.data?.pos_data?.data;
  //     setItems(result);
  //     // cacheData[`user-${page}`] = result;
  //     setTotalPage(res?.data?.pos_data?.last_page);
  //   };
  //   getPatientsData(page);
  // }, [page]);

  // const fetchPatients = async () => {
  //   const res = await axios({
  //     method: "GET",
  //     url: `https://ovh.therapypms.com/api/v1/admin/ac/setting/get/pos?page=${page}`,
  //     headers: headers,
  //   });
  //   const result = res?.data?.pos_data?.data;
  //   return result;
  // };

  // const fetchData = async () => {
  //   const patientsFromServer = await fetchPatients();
  //   console.log(patientsFromServer);
  //   setItems([...items, ...patientsFromServer]);
  //   if (patientsFromServer.length === 0) {
  //     sethasMore(false);
  //   }
  //   setpage(page + 1);
  // };
  // console.log(items);

  const handleClickOpen2 = (record) => {
    setOpenAddModal(true);
    setRecordData(record);
  };
  // console.log(recordData);

  const handleClose2 = () => {
    setOpenAddModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

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
              <button onClick={handleClickOpen2} className=" pms-button mr-2">
                Add Place of Service
              </button>
            </label>
          </div>
          <div className="md:flex justify-end items-end my-2">
            <button
              onClick={clearFilters}
              className="border hover:border-[#b91c1c] pms-clear-button"
            >
              Clear filters
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=" overflow-scroll">
          {pos?.loading ? (
            <ShimmerTableTet></ShimmerTableTet>
          ) : (
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className=" text-xs font-normal"
              columns={columns}
              dataSource={data}
              onChange={handleChange}
            />
          )}
        </div>

        {totalPage > 0 && (
          <div className="flex items-center justify-start">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              // previousLabel={"🡰"}
              // nextLabel={"🡲"}
              pageCount={Number(totalPage)}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination_Link"}
              nextLinkClassName={"pagination_Link"}
              activeClassName={"pagination_Link-active"}
              disabledClassName={"pagination_Link-disabled"}
            ></ReactPaginate>
          </div>
        )}
      </div>

      {openAddModal && (
        <PlaceOfServicesActionAddModal
          handleClose={handleClose2}
          open={openAddModal}
          recordData={recordData}
          page={page}
          token={token}
          endPoint={endPoint}
        ></PlaceOfServicesActionAddModal>
      )}
    </div>
  );
};

export default PlaceOfServices;
