import { Switch, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import useToken from "../../../../../../CustomHooks/useToken";
import { fetchServiceSubType } from "../../../../../../features/Settings_redux/selectedServiceSubTypesApi";
import Loading from "../../../../../../Loading/Loading";
import { fetchData, PostfetchData } from "../../../../../../Misc/Helper";
import ShimmerTableTet from "../../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import AddServiceSubTypeTabEditModal from "./AddServiceSubTypeTabEditModal";

const AddServiceSubTypeTab = () => {
  const { token } = useToken();
  const [txType, setTxType] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(true);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [recordData, setRecordData] = useState();
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [billType, setBillType] = useState([]);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [table, setTable] = useState(false);
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { serviceSubTypes, loading } =
    useSelector((state) => state.getServiceSubTypes) || {};
  const tableData = serviceSubTypes?.sub_activity?.data || [];
  console.log(serviceSubTypes);
  const totalPage = serviceSubTypes?.sub_activity?.last_page
    ? serviceSubTypes?.sub_activity?.last_page
    : 0;

  //getting all the selected treatment data for Tx type selection purpose
  useEffect(() => {
    const getAllTreatments = async () => {
      let response;
      response = await axios({
        url: "https://test-prod.therapypms.com/api/v1/internal/admin/ac/setting/subactivity/treatment/get/all",
        method: "POST",
        headers: {
          Accept: "application/json",
          "treatmentSelect-Type": "application/json;charset=UTF-8",
          Authorization: token,
        },
      });
      // const result = await res.json();
      const data = response?.data?.treatment_data;
      console.log("all treatments", data);
      setSelectedTreatments(data);
    };
    getAllTreatments();
  }, [token]);
  //console.log(selectedTreatments);

  useEffect(() => {
    const billType = () => {
      //tyType and txType==='Select' na hoy tahley e api tey hit korbey otherwise na
      if (txType && txType !== "Select") {
        PostfetchData({
          endPoint: "admin/ac/setting/subactivity/billable/type",
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
  //console.log(billType);

  const handleClickOpen = (record) => {
    setOpenEditModal(true);
    console.log(record);
    setRecordData(record);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleTxType = (e) => {
    setTxType(e.target.value);
    setType("");
    setServiceId("");
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const serviceOnchange = (e) => {
    console.log(e.target.value);
    setServiceId(e.target.value);
  };

  useEffect(() => {
    const getServices = async () => {
      let res;
      //if type is not selected then api will not be called
      if (type) {
        res = await axios({
          url: "https://test-prod.therapypms.com/api/v1/internal/admin/ac/setting/subactivity/service",
          method: "POST",
          headers: {
            Accept: "application/json",
            "treatmentSelect-Type": "application/json;charset=UTF-8",
            Authorization: token,
          },
          data: { treatment_id: txType, billable_type: type },
        });
      }
      // const result = await res.json();
      const data = res?.data?.bill_type;
      console.log("conditionally api calling to get services", data);
      // setTable(data);
      setServices(data);
    };
    getServices();
  }, [txType, type, token]);

  //Getting sub activity table data
  const subActivityEndPoint = "admin/ac/setting/subactivity/get/data";
  useEffect(() => {
    if (txType && serviceId) {
      dispatch(
        fetchServiceSubType({
          endPoint: subActivityEndPoint,
          page,
          token,
          data: { treatment_id: txType, service_id: serviceId },
        })
      );
    }
  }, [txType, serviceId, dispatch, page, token]);

  // Controlling pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", typeof selectedPage);
    setPage(selectedPage + 1);
  };

  let treatmentSelect = null;
  if (selectedTreatments?.length === 0) {
    treatmentSelect = <div className="text-red-700">Select Treatments</div>;
  } else if (selectedTreatments?.length > 0) {
    treatmentSelect = (
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

  let serviceSelect = null;
  if (services?.length === 0) {
    serviceSelect = <div className="text-red-700">Select Treatments</div>;
  } else if (services?.length > 0) {
    serviceSelect = (
      <>
        {services?.map((service) => {
          return (
            <option key={service?.id} value={service?.id}>
              {service?.description}
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
      dataIndex: "sub_activity",
      key: "sub_activity",
      width: 100,
      sorter: (a, b) => {
        return a.sub_activity > b.sub_activity ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "sub_activity" ? sortedInfo.order : null,
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
            {treatmentSelect}
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
              onChange={(e) => serviceOnchange(e)}
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
            >
              <option value="Select Tx type">Select Tx type</option>
              {serviceSelect}
            </select>
          </div>
        )}
      </div>
      {serviceId && (
        <div>
          <div className="md:flex justify-end items-end my-2">
            <button onClick={clearFilters} className="pms-clear-button border">
              Clear filters
            </button>
          </div>
          <div>
            <div className="overflow-scroll">
              {loading ? (
                <ShimmerTableTet></ShimmerTableTet>
              ) : (
                <div>
                  <Table
                    pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                    rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                    size="small"
                    bordered
                    className="table-striped-rows text-xs font-normal"
                    columns={columns}
                    dataSource={tableData}
                    scroll={{
                      y: 650,
                    }}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
            {/* If multiple-page found then show pagination otherwise not */}
            {totalPage > 1 && (
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
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button onClick={handleClickOpen} className="pms-button my-2">
                Add Service Sub Type
              </button>
            </label>
          </div>
          {openEditModal && (
            <AddServiceSubTypeTabEditModal
              handleClose={handleClose}
              open={openEditModal}
              row={recordData}
              txType={txType}
              serviceId={serviceId}
              billAbleId={type}
              subActivityEndPoint={subActivityEndPoint}
              page={page}
            ></AddServiceSubTypeTabEditModal>
          )}
        </div>
      )}
    </div>
  );
};

export default AddServiceSubTypeTab;
