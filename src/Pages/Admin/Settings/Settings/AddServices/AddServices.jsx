import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import useToken from "../../../../../CustomHooks/useToken";
import { fetchServices } from "../../../../../features/Settings_redux/settingServicesList";
import { getUnique } from "../../../../../Utilities/getUniqueElement";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import AddServicesActionModal from "./AddServices/AddServicesActionModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useGetAllSelectedTreatmentsQuery } from "../../../../../features/Settings_redux/addTreatment/addTreatmentApi";

const AddServices = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recordData, setRecordData] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { token } = useToken();

  const allService = useSelector((state) => state?.serviceInfo);
  console.log(allService);
  const data = allService?.result?.data?.data || [];
  const totalPage = allService?.result?.data?.lastPage || 0;
  console.log(data);

  useEffect(() => {
    // For sending multiple parameter to createAsync Thunk we need to pass it as object
    dispatch(fetchServices({ page, token }));
  }, [page, dispatch, token]);

  //Getting All Selected Treatment Data
  const {
    data: selectedTreatmentData,
    isSuccess: selectedTreatmentSuccess,
    isLoading: selectedTreatmentLoading,
  } = useGetAllSelectedTreatmentsQuery({ token: token });

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
  };

  // Handle open modal to Add or Edit
  const handleClickOpen = (record) => {
    setRecordData(record);
    setOpenAddModal(true);
  };
  // Handle Delete
  const handleDelete = async (service_id) => {
    console.log(service_id);

    if (service_id) {
      const payload = { service_id };
      try {
        let res = await axios({
          method: "post",
          url: "https://stagapi.therapypms.com/api/internaladmin/setting/delete/setting/service",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token,
          },
          data: payload,
        });
        if (res?.data?.status === "success") {
          toast.success(<h1 className="text-[12px]">Successfully Deleted</h1>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          dispatch(fetchServices({ page, token }));
          handleClose();
        }
        //else res?.data?.status === "error" holey
        else {
          toast.error(<h1 className="text-[12px]">{res?.data?.message}</h1>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } catch (error) {
        toast.warning(<h1 className="text-[12px]">{error?.message}</h1>, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(error?.message); // this is the main part. Use the response property from the error object
      }
    }
  };

  const handleClose = () => {
    setOpenAddModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  //this funtion to get dynamic filter value-text
  const tx_type_search = () => {
    let treatmentNameArray = data?.map(
      (d) => d?.treatment_type?.treatment_name
    );
    const resultArray = getUnique(treatmentNameArray);

    let newArray = [];
    for (let x of resultArray) {
      if (x) {
        newArray.push({ text: x, value: x });
      }
    }
    return newArray;
  };

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Tx Type",
      dataIndex: "tx_type",
      key: "tx_type",
      width: 100,
      filters: tx_type_search(),
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className="text-secondary flex justify-start">
            {
              selectedTreatmentData?.data?.find(
                (treatment) =>
                  treatment?.treatment_id === record?.facility_treatment_id
              )?.treatment_name
            }
          </div>
        );
      },
      filteredValue: filteredInfo.tx_type || null,
      onFilter: (value, record) =>
        record?.treatment_type?.treatment_name?.includes(value),
      sorter: (a, b) => {
        return a.tx_type > b.tx_type ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "tx_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service Type",
      dataIndex: "type",
      key: "type",
      width: 100,

      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary flex justify-start">
            <h1>{record?.type === 2 ? "Billable" : "UnBillable"}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.type > b.type ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service",
      dataIndex: "description",
      key: "description",
      width: 100,
      filters: [
        {
          text: `Inspection`,
          value: "Inspection",
        },
      ],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary flex justify-start">
            <h1>{record?.service}</h1>
          </div>
        );
      },
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description?.toLowerCase() > b.description?.toLowerCase()
          ? -1
          : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: 60,
      filters: [
        {
          text: `Inspection Assessment`,
          value: "Inspection Assessment",
        },
      ],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-black flex justify-center">
            <h1>{record?.duration}</h1>
          </div>
        );
      },
      filteredValue: filteredInfo.duration || null,
      onFilter: (value, record) => record.duration.includes(value),
      sorter: (a, b) => {
        return Number(a.duration) > Number(b.duration) ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "duration" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Milegae",
      dataIndex: "mileage",
      key: "mileage",
      width: 60,
      filters: [
        {
          text: `Inspection Assessment`,
          value: "Inspection Assessment",
        },
      ],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-black flex justify-center">
            <h1>{record?.mileage ? record?.mileage : "Not Set"}</h1>
          </div>
        );
      },
      filteredValue: filteredInfo.mileage || null,
      onFilter: (value, record) => record.mileage.includes(value),
      sorter: (a, b) => {
        return Number(a.mileage) > Number(b.mileage) ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "mileage" ? sortedInfo.order : null,
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
                onClick={() => handleClickOpen(record)}
                className="text-secondary"
              >
                <FiEdit />
              </button>
              <div className="mx-2">|</div>
              <button
                onClick={() => handleDelete(record?.id)}
                className="text-sm mx-1  text-red-500"
              >
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
    <div className="p-2">
      <div>
        <div>
          <h1>Click on each Service name to edit</h1>
          <p className=" text-xs font-medium text-gray-500 my-3">
            Service Descriptions are shown throughout the SimplePractice
            platform internally, in some client communications and in Super
            bills.
          </p>
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button onClick={handleClickOpen} className=" pms-button mr-2">
                Add new Service
              </button>
            </label>
          </div>
        </div>
      </div>
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Services</h1>

        <div className="flex justify-end items-end my-2">
          <button onClick={clearFilters} className="pms-clear-button border">
            Clear filters
          </button>
        </div>
      </div>
      <div>
        <>
          {allService?.loading ? (
            <ShimmerTableTet></ShimmerTableTet>
          ) : (
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className="table-striped-rows text-xs font-normal"
              columns={columns}
              dataSource={data}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          )}
        </>

        {totalPage > 0 && (
          <div className="flex justify-end">
            {" "}
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
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
        <AddServicesActionModal
          record={recordData}
          handleClose={handleClose}
          open={openAddModal}
          page={page}
          token={token}
        ></AddServicesActionModal>
      )}
    </div>
  );
};

export default AddServices;
