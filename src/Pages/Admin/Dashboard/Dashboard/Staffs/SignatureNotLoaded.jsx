import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from "antd";

const SignatureNotLoaded = () => {
  const [SignatureData, SetSignatureData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // fakedb call
  useEffect(() => {
    axios("../../All_Fake_Api/Signature.json")
      .then((response) => {
        SetSignatureData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(SignatureData);

  const { register, handleSubmit, reset } = useForm();
  const [tableOpen, setTableOpen] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setTableOpen(true);
    reset();
  };

  // ---------------------------------Table Data-------------------------
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Provider Name",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{patient}</h1>
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
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.provider || null,
      onFilter: (value, record) => record.provider.includes(value),
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { provider, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{provider}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
      width: 200,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.patient_name || null,
      onFilter: (value, record) => record.patient_name.includes(value),
      sorter: (a, b) => {
        return a.patient_name > b.patient_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "patient_name" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient_name, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient_name, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{patient_name}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Session Name",
      dataIndex: "session_name",
      key: "session_name",
      width: 100,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.session_name || null,
      onFilter: (value, record) => record.session_name.includes(value),
      sorter: (a, b) => {
        return a.session_name > b.session_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "session_name" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { session_name, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{session_name}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Signature",
      dataIndex: "provider_signature",
      key: "provider_signature",
      width: 100,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.provider_signature || null,
      onFilter: (value, record) => record.provider_signature.includes(value),
      sorter: (a, b) => {
        return a.provider_signature > b.provider_signature ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "provider_signature" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { provider_signature, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{provider_signature}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
  ];

  return (
    <div className={!SignatureData ? "h-[100vh]" : ""}>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Signature Not Uploaded</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Provider
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("again_status")}
            >
              <option value="name"> Payor </option>
              <option value="name"> Client </option>
            </select>
          </div>

          <button
            className="w-1/2  py-2 mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Go
          </button>
        </div>
      </form>
      <div>
        {tableOpen && (
          <div className="my-2">
            <div className=" overflow-scroll">
              <Table
                rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                className=" text-xs font-normal text-center"
                columns={columns}
                dataSource={SignatureData} //Which data chunk you want to show in table
                // For fixed header table at top
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignatureNotLoaded;
