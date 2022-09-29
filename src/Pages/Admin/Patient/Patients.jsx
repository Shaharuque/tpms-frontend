import React, { useState, useEffect } from "react";
import { Button, Input, Space, Table } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
  const [patientId, setPatientId] = useState();
  const [data, setData] = useState([]);
  //For ANTd Modal
  const [modalOpen, setModalOpen] = useState(false);
  //for global filtering
  const [serachText, setSearchText] = useState();
  console.log(serachText);

  const navigate = useNavigate();
  //console.log(row);
  const handleClose = () => {
    setOpenEditModal(false);
  };

  //Auth click event handler
  const handleAuthClick = (id) => {
    console.log(id);
    //setOpenEditModal(true);
    setModalOpen(true);
    setPatientId(id);
  };

  //getting data from public folder(fakedata)
  // fakeApi call
  useEffect(() => {
    axios("../../All_Fake_Api/Patients.json")
      .then((response) => {
        console.log("calling");
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const globalFilter = (value) => {
    //console.log(value);
    const filteredData = data?.filter(
      (each) =>
        each?.client_first_name?.toLowerCase().includes(value.toLowerCase()) ||
        each?.client_gender?.toLowerCase().includes(value.toLowerCase()) ||
        each?.client_dob?.toLowerCase().includes(value.toLowerCase()) ||
        each?.location?.toLowerCase().includes(value.toLowerCase()) ||
        each?.insurance?.toLowerCase().includes(value)
    );
    setData(filteredData);

    if (!value) {
      axios("../../All_Fake_Api/Patients.json")
        .then((response) => {
          console.log("calling");
          setData(response?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //console.log(data);
  // END

  // get data from API + data fetch from api while scrolling[Important]
  // useEffect(() => {
  //   const getComments = async () => {
  //     const res = await axios({
  //       method: "get",
  //       url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=1`,
  //       headers: headers,
  //     });
  //     // const result = await res.json();
  //     const data = res.data?.clients?.data;
  //     //console.log(data)
  //     setItems(data);
  //   };
  //   getComments();
  // }, []);

  // const fetchComments = async () => {
  //   const res = await axios({
  //     method: "get",
  //     url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=${page}`,
  //     headers: headers,
  //   });
  //   const data = res.data?.clients?.data;
  //   console.log(data);
  //   return data;
  // };

  // const fetchData = async () => {
  //   const commentsFormServer = await fetchComments();
  //   console.log(commentsFormServer);
  //   setItems([...items, ...commentsFormServer]);
  //   if (commentsFormServer.length === 0) {
  //     sethasMore(false);
  //   }
  //   setpage(page + 1);
  // };
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
      insurance: filteredInfo?.insurance,
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
      insurance: filteredInfo?.insurance,
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
      insurance: filteredInfo?.insurance,
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
      insurance: filteredInfo?.insurance,
    });
  };
  const deleteInsuranceTag = (tag) => {
    console.log(tag);
    const insurance_array = filteredInfo?.insurance?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      client_first_name: filteredInfo?.client_first_name,
      client_gender: filteredInfo?.client_gender,
      client_dob: filteredInfo?.client_dob,
      location: filteredInfo?.location,
      insurance: insurance_array,
    });
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  //console.log("flited-info", filteredInfo);

  const patientDetails = (id) => {
    //console.log(id);
    navigate(`/admin/patient/patient-info/${id}`);
  };
  const columns = [
    {
      title: "Patient",
      dataIndex: "client_first_name",
      key: "client_first_name",
      width: 100,
      filters: [
        { text: "Milissent", value: "Milissent" },
        { text: "Timmy", value: "Timmy" },
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
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <button
              onClick={() => patientDetails(id)}
              className="text-secondary"
            >
              {client_first_name}
            </button>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Contact Info",
      dataIndex: "phone_number",
      key: "phone_number",
      width: 100,
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
      width: 80,
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
      width: 80,
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
      width: 120,
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
      width: 80,
      filters: [
        { text: "6780496111", value: "6780496111" },
        {
          text: "1261739329",
          value: "1261739329",
        },
        { text: "5614267557", value: "5614267557" },
        { text: "8136767092", value: "8136767092" },
        { text: "813676700092", value: "813676700092" },
      ],
      render: (_, { insurance }) => {
        return <div className="flex justify-end px-1">{insurance}</div>;
      },
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
      width: 40,
      render: (_, { id }) => {
        return (
          <div className="flex justify-center">
            <button
              onClick={() => {
                handleAuthClick(id);
              }}
              className="flex justify-center"
            >
              <FaRegAddressCard className="text-sm  text-secondary" />
            </button>
          </div>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 60,
      render: (_, { status }) => {
        //console.log("Status : ", Status);
        return <PatientStatusAction status={status}></PatientStatusAction>;
      },
      filters: [],
      filteredValue: filteredInfo.Status || null,
      onFilter: (value, record) => record.Status.includes(value),
    },
  ];
  return (
    <div
      className={
        filteredInfo?.client_first_name ||
        filteredInfo?.client_dob ||
        filteredInfo?.client_gender ||
        filteredInfo?.location
          ? "h-[100vh]"
          : ""
      }
    >
      <>
        <div className="flex items-center justify-between gap-2 my-2">
          <h1 className="text-lg text-orange-500 text-left font-semibold ">
            Patient
          </h1>
          <div>
            <input
              placeholder="Search here..."
              className="px-2 w-52 mr-2 py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
              onChange={(e) => globalFilter(e.target.value)}
            />

            <button
              onClick={clearFilters}
              className="px-2  py-2 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>
        </div>

        {/* filtering tag showing part */}
        {filteredInfo?.client_first_name?.length > 0 ||
        filteredInfo?.client_dob?.length > 0 ||
        filteredInfo?.client_gender?.length > 0 ||
        filteredInfo?.location?.length > 0 ||
        filteredInfo?.insurance?.length > 0 ? (
          // <div className="border border-secondary bg-gray-100 flex mb-4 text-xs ">
          <div className="my-5 flex items-center gap-2">
            {filteredInfo?.client_first_name?.length > 0 && (
              <div className=" ">
                <div className="flex mb-2 gap-1">
                  {filteredInfo?.client_first_name?.map((tag, index) => (
                    <div
                      className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                      key={index}
                    >
                      <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                        <span className="text-secondary text-[15px] font-medium mr-1  ">
                          Patient:
                        </span>
                        {tag}
                      </div>
                      <div>
                        <div
                          className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                          onClick={() => deleteFirstNameTag(tag)}
                        >
                          X
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {filteredInfo?.client_dob?.length > 0 && (
              <div className="flex mb-2 gap-1">
                {filteredInfo?.client_dob?.map((tag, index) => (
                  <div
                    className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                    key={index}
                  >
                    <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                      <span className="text-secondary text-[15px] font-medium mr-1  ">
                        DOB:
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deleteDobTag(tag)}
                      >
                        X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {filteredInfo?.client_gender?.length > 0 && (
              <div className="flex mb-2 gap-1">
                {filteredInfo?.client_gender?.map((tag, index) => (
                  <div
                    className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                    key={index}
                  >
                    <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                      <span className="text-secondary text-[15px] font-medium mr-1  ">
                        Gender:
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deleteGenderTag(tag)}
                      >
                        X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {filteredInfo?.location?.length > 0 && (
              <div className="flex mb-2 gap-1">
                {filteredInfo?.location?.map((tag, index) => (
                  <div
                    className="text-gray-700  shadow-sm font-medium  rounded-sm pl-1 bg-white flex items-center"
                    key={index}
                  >
                    <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                      <span className="text-secondary text-[15px] font-medium mr-1  ">
                        Pos:
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deletelocationTag(tag)}
                      >
                        X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {filteredInfo?.insurance?.length > 0 && (
              <div className="flex mb-2 gap-1">
                {filteredInfo?.insurance?.map((tag, index) => (
                  <div
                    className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                    key={index}
                  >
                    <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                      <span className="text-secondary text-[15px] font-medium mr-1  ">
                        Insurance :
                      </span>
                      {tag}
                    </div>
                    <div>
                      <div
                        className="cursor-pointer text-sm text-white bg-primary py-[3.2px] px-2"
                        onClick={() => deleteInsuranceTag(tag)}
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
        {/* <InfiniteScroll
          dataLength={items.length} //items is basically all data here
          next={fetchData}
          hasMore={hasMore}
          loader={<ShimmerTableTet></ShimmerTableTet>}
          // loader={<h1 className="text-teal-800 font-bold text-center">Loading...</h1>}
        > */}

        {/* className=" overflow-scroll" used for responsive scrolling But if you use InfiniteScroll don't need overflow-scroll class */}
        <div className=" overflow-scroll">
          <Table
            rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            dataSource={data} //Which data chunk you want to show in table
            onChange={handleChange}
            scroll={{
              y: 700,
            }}
          />
        </div>
        {/* </InfiniteScroll> */}

        {/* PatientAuthorizationTableModal component render and particular patient id also passed to the PatientAuthorizationTableModal component*/}
        {/* {openEditModal && (
          <PatientAuthorizationsTableModal
            patient_id={patientId}
            handleClose={handleClose}
            open={openEditModal}
          ></PatientAuthorizationsTableModal>
        )} */}
        {modalOpen && (
          <PatientAuthorizationsTableModal
            patient_id={patientId}
            handleClose={handleClose}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          ></PatientAuthorizationsTableModal>
        )}
      </>
    </div>
  );
};

export default TableApi;
