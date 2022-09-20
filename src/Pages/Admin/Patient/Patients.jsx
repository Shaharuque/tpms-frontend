import React, { useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { headers } from "../../../Misc/BaseClient";
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerTableTet from "../../../Pages/Pages/Settings/SettingComponents/ShimmerTableTet";
import { FaRegAddressCard } from "react-icons/fa";
import PatientAuthorizationsTableModal from "./Patients/PatientAuthorizationsTableModal";
import PatientStatusAction from "./Patients/PatientStatusAction";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";

const TableApi = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);
  const [openEditModal, setOpenEditModal] = useState(false);
  //console.log(row);
  const handleClose = () => {
    setOpenEditModal(false);
  };

  // get data from API + data fetch from api while scrolling
  useEffect(() => {
    const getComments = async () => {
      const res = await axios({
        method: "get",
        url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=1`,
        headers: headers,
      });
      // const result = await res.json();
      const data = res.data?.clients?.data;
      //console.log(data)
      setItems(data);
    };
    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await axios({
      method: "get",
      url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=${page}`,
      headers: headers,
    });
    const data = res.data?.clients?.data;
    console.log(data);
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    console.log(commentsFormServer);
    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  //console.log(items)

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  //Individual filtering [tagging feature]
  const deleteFirstNameTag = (tag) => {
    console.log(tag);
    const client_first_name_array = filteredInfo?.client_first_name?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      client_first_name: client_first_name_array,
      client_gender: filteredInfo?.client_gender,
      client_dob: filteredInfo?.client_dob,
      location: filteredInfo?.location,
    });
  };
  const deleteDobTag = (tag) => {
    console.log(tag);
    const client_dob_array = filteredInfo?.client_dob?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      client_first_name: filteredInfo?.client_first_name,
      client_gender: filteredInfo?.client_gender,
      client_dob: client_dob_array,
      location: filteredInfo?.location,
    });
  };
  const deleteGenderTag = (tag) => {
    console.log(tag);
    const client_gender_array = filteredInfo?.client_gender?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      client_first_name: filteredInfo?.client_first_name,
      client_gender: client_gender_array,
      client_dob: filteredInfo?.client_dob,
      location: filteredInfo?.location,
    });
  };
  const deletelocationTag = (tag) => {
    console.log(tag);
    const location_array = filteredInfo?.location?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      client_first_name: filteredInfo?.client_first_name,
      client_gender: filteredInfo?.client_gender,
      client_dob: filteredInfo?.client_dob,
      location: location_array,
    });
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };
  console.log(filteredInfo?.client_first_name);
  const columns = [
    {
      title: "Patient",
      dataIndex: "client_first_name",
      key: "client_first_name",
      width: 160,
      filters: [
        {
          text: `Jamey`,
          value: "Jamey",
        },
        {
          text: `Minnie`,
          value: "Minnie",
        },
        {
          text: "Donald",
          value: "Donald",
        },
        {
          text: "Burke Beard",
          value: "Burke Beard",
        },
        {
          text: "Hector Moses",
          value: "Hector Moses",
        },
      ],
      filteredValue: filteredInfo.client_first_name || null,
      onFilter: (value, record) => record.client_first_name.includes(value),
      sorter: (a, b) => {
        return a.client_first_name > b.client_first_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "client_first_name" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // client_first_name, id, key=>each row data(object) property value can be accessed.
      render: (_, { client_first_name, id, key }) => {
        console.log("tags : ", client_first_name, id, key);
        return (
          <Link
            to={`/admin/patient/patient-info/${id}`}
            className="text-secondary"
          >
            {client_first_name}
          </Link>
        );
      },
      ellipsis: true,
    },
    {
      title: "Contact Info",
      dataIndex: "phone_number",
      key: "phone_number",
      width: 120,
      // filters: [
      //   {
      //     text: "(940)-234-0329",
      //     value: "(940)-234-0329",
      //   },
      //   {
      //     text: "(124)-996-5455",
      //     value: "(124)-996-5455",
      //   },
      //   {
      //     text: "(972)-202-5007",
      //     value: "(972)-202-5007",
      //   },
      // ],
      // filteredValue: filteredInfo.phone_number || null,
      // onFilter: (value, record) => record.phone_number.includes(value),
      sorter: (a, b) => {
        return a.phone_number > b.phone_number ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "phone_number" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      render: (_, { phone_number }) => {
        return (
          <div>
            <h1>{phone_number ? phone_number : "No Data"}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "DOB",
      dataIndex: "client_dob",
      key: "client_dob",
      width: 100,
      filters: [
        {
          text: `1986-08-28`,
          value: "1986-08-28",
        },
        {
          text: "2021-04-06",
          value: "2021-04-06",
        },
      ],
      filteredValue: filteredInfo.client_dob || null,
      onFilter: (value, record) => record.client_dob.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.client_dob > b.client_dob ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "client_dob" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Gender",
      dataIndex: "client_gender",
      key: "client_gender",
      width: 100,
      filters: [
        {
          text: `Male`,
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      filteredValue: filteredInfo.client_gender || null,
      onFilter: (value, record) => record.client_gender.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.client_gender > b.client_gender ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "client_gender" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "POS",
      dataIndex: "location",
      key: "location",
      width: 100,
      filters: [
        {
          text: `Main Office`,
          value: "Main Office",
        },
        {
          text: "Telehealth",
          value: "Telehealth",
        },
        {
          text: "Home",
          value: "Home",
        },
      ],
      filteredValue: filteredInfo.location || null,
      onFilter: (value, record) => record.location.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.location > b.location ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Insurance",
      dataIndex: "insurance",
      key: "insurance",
      width: 100,
      filters: [
        {
          text: `Male`,
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      filteredValue: filteredInfo.insurance || null,
      onFilter: (value, record) => record.insurance.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.insurance > b.insurance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "insurance" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Auth",
      key: "id",
      dataIndex: "id",
      width: 50,
      render: (_, { id }) => {
        // console.log("patient_id = ", id);
        return (
          <>
            <button
              onClick={() => {
                setOpenEditModal(true);
              }}
            >
              <FaRegAddressCard className="text-sm mx-auto text-secondary" />
            </button>
            {openEditModal && (
              <PatientAuthorizationsTableModal
                patient_id={id}
                handleClose={handleClose}
                open={openEditModal}
              ></PatientAuthorizationsTableModal>
            )}
          </>
        );
      },
    },
    {
      title: "Status",
      key: "is_active_client",
      dataIndex: "is_active_client",
      width: 60,
      render: (_, { is_active_client }) => {
        //console.log("Status : ", Status);
        return (
          <PatientStatusAction status={is_active_client}></PatientStatusAction>
        );
      },
      filters: [],
      filteredValue: filteredInfo.Status || null,
      onFilter: (value, record) => record.Status.includes(value),
    },
  ];
  return (
    <div>
      <>
        <div className="flex items-center justify-between gap-2 my-2">
          <h1 className="text-lg text-orange-500 text-left font-semibold ">
            Patient
          </h1>
          <button
            onClick={clearFilters}
            className="px-2  py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
          >
            Clear filters
          </button>
        </div>
        {/* filtering tag showing part */}
        <div className="border border-secondary bg-gray-100 flex-wrap flex mb-4 text-xs ">
          {/* {filteredInfo?.client_first_name?.map((tag, index) => (
            <h1 className="text-red-600 border-black mr-2" key={index}>
              {tag}
            </h1>
          ))} */}
          <div className="p-2 rounded ">
            <div className="flex mb-2 flex-wrap gap-1">
              <span className="text-secondary text-[15px] font-semibold mr-2 flex items-center">
                Patient:
              </span>
              {filteredInfo?.client_first_name?.map((tag, index) => (
                <div
                  className="text-gray-700 shadow-sm font-medium border border-primary  rounded-sm pl-1 bg-white flex items-center"
                  key={index}
                >
                  <div className=" text-sm">{tag}</div>
                  <div>
                    <div
                      className="cursor-pointer text-sm text-white ml-3 bg-primary px-1"
                      onClick={() => deleteFirstNameTag(tag)}
                    >
                      X
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex mb-2">
              <span className="border-black font-bold mr-2 flex items-center">
                DOB:
              </span>
              {filteredInfo?.client_dob?.map((tag, index) => (
                <h1
                  className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                  key={index}
                >
                  {tag}
                  <TiDelete
                    className="cursor-pointer text-lg"
                    onClick={() => deleteDobTag(tag)}
                  ></TiDelete>
                </h1>
              ))}
            </div>
            <div className="flex mb-2">
              <span className="border-black font-bold mr-2 flex items-center">
                Gender:
              </span>
              {filteredInfo?.client_gender?.map((tag, index) => (
                <h1
                  className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                  key={index}
                >
                  {tag}
                  <TiDelete
                    className="cursor-pointer text-lg"
                    onClick={() => deleteGenderTag(tag)}
                  ></TiDelete>
                </h1>
              ))}
            </div>
            <div className="flex mb-2">
              <span className="border-black font-bold mr-2 flex items-center">
                POS:
              </span>
              {filteredInfo?.location?.map((tag, index) => (
                <h1
                  className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                  key={index}
                >
                  {tag}
                  <TiDelete
                    className="cursor-pointer text-lg"
                    onClick={() => deletelocationTag(tag)}
                  ></TiDelete>
                </h1>
              ))}
            </div>
          </div>
        </div>

        <InfiniteScroll
          dataLength={items.length} //items is basically all data here
          next={fetchData}
          hasMore={hasMore}
          loader={<ShimmerTableTet></ShimmerTableTet>}
          // loader={<h1 className="text-teal-800 font-bold text-center">Loading...</h1>}
        >
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            dataSource={items}
            onChange={handleChange}
          />
        </InfiniteScroll>
      </>
    </div>
  );
};

export default TableApi;
