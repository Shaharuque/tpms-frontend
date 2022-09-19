import React, { useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { headers } from "../../../Misc/BaseClient";
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerTableTet from "../../../Pages/Pages/Settings/SettingComponents/ShimmerTableTet";
import { TiDelete } from "react-icons/ti";

const TableApi = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [allData, setAllData] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);
  const navigate = useNavigate();

  // fetch data
  // React.useEffect(() => {
  //   fetch("All_Fake_Api/Fakedb.json")
  //     .then((res) => res.json())
  //     .then((d) => {
  //       setAllData(d);
  //     });
  // }, []);
  // console.log(allData);

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

  const patientDetails = (id) => {
    //console.log(id);
    navigate(`/admin/patient/patient-info/${id}`);
  };
  const columns = [
    {
      title: "Patient",
      dataIndex: "client_first_name",
      key: "client_first_name",
      width: 200,
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
          <div>
            <h1 onClick={() => patientDetails(id)} style={{ color: "teal" }}>
              {client_first_name}
            </h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Contact Info",
      dataIndex: "phone_number",
      key: "phone_number",
      width: 200,
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
      width: 200,
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
      width: 200,
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
      width: 200,
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
      width: 200,
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
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      width: 100,
      render: (_, { Status }) => {
        //console.log("Status : ", Status);
        return (
          <div>
            {Status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {Status}
              </button>
            )}
            {Status === "Rendered" && (
              <button className="bg-green-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {Status}
              </button>
            )}
            {Status === "hold" && (
              <button className="bg-red-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {Status}
              </button>
            )}
          </div>
        );
      },
      filters: [
        {
          text: "hold",
          value: "hold",
        },
        {
          text: "Rendered",
          value: "Rendered",
        },
        {
          text: "Scheduled",
          value: "Scheduled",
        },
      ],
      filteredValue: filteredInfo.Status || null,
      onFilter: (value, record) => record.Status.includes(value),
    },
  ];
  return (
    <div>
      <>
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={clearFilters}>Clear filters</Button>
        </Space>

        {/* filtering tag showing part */}
        <div className="bg-gray-300 flex mb-4 text-xs">
          {/* {filteredInfo?.client_first_name?.map((tag, index) => (
            <h1 className="text-red-600 border-black mr-2" key={index}>
              {tag}
            </h1>
          ))} */}
          <div className="border border-[#34A7B8] bg-gray-200 p-2 rounded ">
            <div className="flex mb-2">
              <span className="border-black font-bold mr-2 flex items-center">
                Patient:
              </span>
              {filteredInfo?.client_first_name?.map((tag, index) => (
                <h1
                  className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                  key={index}
                >
                  {tag}
                  <TiDelete
                    className="cursor-pointer text-lg"
                    onClick={() => deleteFirstNameTag(tag)}
                  ></TiDelete>
                </h1>
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
