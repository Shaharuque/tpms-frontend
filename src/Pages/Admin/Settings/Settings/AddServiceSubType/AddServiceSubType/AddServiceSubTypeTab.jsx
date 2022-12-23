import { Switch, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import useToken from "../../../../../../CustomHooks/useToken";
import { useSelectedTreatmentsQuery } from "../../../../../../features/Settings_redux/selectedTreatmentsApi";
import Loading from "../../../../../../Loading/Loading";
import { fetchData, PostfetchData } from "../../../../../../Misc/Helper";
import AddServiceSubTypeTabEditModal from "./AddServiceSubTypeTabEditModal";

const AddServiceSubTypeTab = () => {
  const { token } = useToken();
  const [txType, setTxType] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(true);
  const [service, setService] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [recordData, setRecordData] = useState();
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [billType, setBillType] = useState([]);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [table, setTable] = useState(false);

  // //getting selected treatments using rtk query
  const {
    data: s_treatments,
    isLoading,
    isSuccess,
    error: apiError,
  } = useSelectedTreatmentsQuery();

  console.log("rtkQuery selected treatments", s_treatments);

  //getting all the selected treatment data for Tx type selection purpose
  useEffect(() => {
    fetchData("admin/ac/setting/get/selected/treatment", token).then((res) => {
      const result = res?.data?.selected_treatment;
      if (result?.length !== 0) {
        setSelectedTreatments(result);
      } else {
        setError("Please Add Treatment");
      }
    });
  }, [token]);
  console.log(selectedTreatments);

  useEffect(() => {
    const billType = () => {
      //tyType and txType==='Select' na hoy tahley e api tey hit korbey otherwise na
      if (txType && txType !== "Select") {
        PostfetchData({
          endPoint: "admin/ac/setting/sub-activity-treatment-billable-type",
          token,
          payload: { treatment_id: txType },
        }).then((res) => {
          const result = res?.bill_type;
          console.log(result);
          if (result?.length !== 0) {
            setBillType(result);
          } else {
            setErrorType("Noting Found");
          }
        });
      }
    };
    billType();
  }, [txType, token]);
  console.log(billType);

  const handleClickOpen = (record) => {
    setOpenEditModal(true);
    setRecordData(record);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleTxType = (e) => {
    setTxType(e.target.value);
    setType("");
  };
  console.log(txType);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  console.log(type);

  const serviceHandleOnchange = (e) => {
    console.log(e.target.value);
    setService(!service);
  };

  //calling data
  // useEffect(() => {
  //   const options = {
  //     url: "https://test-prod.therapypms.com/api/v1/admin/ac/setting/sub-activity-service-get",
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json;charset=UTF-8",
  //       Authorization: token,
  //     },
  //     data: { treatment_id: txType, bill_type: type },
  //   };

  //   axios(options).then((response) => {
  //     setTable(response?.data?.services);
  //   });
  // }, [txType, type, token]);

  useEffect(() => {
    const getServiceSubType = async () => {
      let res;
      //if type is not selected then api will not be called
      if (type) {
        res = await axios({
          url: "https://test-prod.therapypms.com/api/v1/admin/ac/setting/sub-activity-service-get",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: token,
          },
          data: { treatment_id: txType, bill_type: type },
        });
      }
      // const result = await res.json();
      const data = res?.data;
      console.log("testing using conditionally api calling", data);
      setTable(res?.data?.services);
    };
    getServiceSubType();
  }, [txType, type, token]);

  let content = null;
  if (selectedTreatments?.length === 0) {
    content = <div className="text-red-700">Select Treatments</div>;
  } else if (selectedTreatments?.length > 0) {
    content = (
      <>
        {selectedTreatments?.map((treatment) => {
          return (
            <option key={treatment?.id} value={treatment?.id}>
              {treatment?.treatment_name}
            </option>
          );
        })}
      </>
    );
  }

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  console.log(table);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Active",
      dataIndex: "action",
      key: "action",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="flex items-center ">
              <Switch
                size="small"
                checked={record?.type ? true : false}
                onClick={() => setValue(!record?.type)}
              />
              <span className="text-[14px] font-medium text-gray-500 mx-3">
                Active
              </span>
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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="flex justify-center">
              <button
                onClick={() => handleClickOpen(record)}
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
      <div className="">
        <h1 className="text-lg my-3 text-orange-400">Service Sub Types </h1>
      </div>
      {/* <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 my-3 mr-2 gap-x-3 gap-y-1 "> */}
      <div className="flex flex-wrap items-center gap-2">
        <div>
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
              Tx Type
            </span>
          </label>

          <select
            onChange={(e) => handleTxType(e)}
            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
          >
            <option>Select</option>
            {content}
          </select>
        </div>
        {/* type */}
        <div>
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
              Type
            </span>
          </label>
          <select
            value={type}
            onChange={(e) => handleTypeChange(e)}
            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
          >
            <option value="Select">Select</option>
            {billType?.map((t, index) => {
              return (
                <option key={index} value={t?.type}>
                  Billable
                </option>
              );
            })}
          </select>
        </div>

        {type && (
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Service
              </span>
            </label>
            <select
              onChange={(e) => serviceHandleOnchange(e)}
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
            >
              <option value="Select Tx type">Select Tx type</option>
              <option value="Behavior Therapy">Behavior Therapy</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Physical Therapy">Physical Therapy</option>
            </select>
          </div>
        )}
      </div>
      {service && (
        <div>
          <div className="md:flex justify-end items-end my-2">
            <button onClick={clearFilters} className="pms-clear-button border">
              Clear filters
            </button>
          </div>
          <div>
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className=" text-xs font-normal"
              columns={columns}
              dataSource={table}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button onClick={handleClickOpen} className="pms-button my-2">
                Add Place of Service
              </button>
            </label>
          </div>
          {openEditModal && (
            <AddServiceSubTypeTabEditModal
              handleClose={handleClose}
              open={openEditModal}
              row={recordData}
            ></AddServiceSubTypeTabEditModal>
          )}
        </div>
      )}
    </div>
  );
};

export default AddServiceSubTypeTab;
