import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import VendorNumberSetupActionModal from "./VendorNumberSetup/VendorNumberSetupActionModal";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllSelectedTreatmentsQuery } from "../../../../../features/Settings_redux/addTreatment/addTreatmentApi";
import useToken from "../../../../../CustomHooks/useToken";
import { fetchVendorNumber } from "../../../../../features/Settings_redux/vendorNumberSlice";
import {
  useVendorNumberEssentialsQuery,
  useVendorNumberReginalCenterQuery,
} from "../../../../../features/Settings_redux/vendorNumberSetup/vendorNumberSetupApi";
import ReactPaginate from "react-paginate";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import { baseIp } from "../../../../../Misc/BaseClient";
import { toast } from "react-toastify";

const VendorNumberSetup = () => {
  const [open, setOpen] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [tableOpen, setTableOpen] = useState(false);
  const [recordData, setRecordData] = useState();
  const [txId, setTxId] = useState(null);
  const [regionalCenter, setRegionalCenter] = useState(null);
  const [page, setPage] = useState(1);
  const { token } = useToken();
  const dispatch = useDispatch();

  //List of all Vendor Number
  const allVendorNumber = useSelector((state) => state?.vendorNumberInfo);
  const data = allVendorNumber?.vendorData?.data?.data || [];
  const totalPage = allVendorNumber?.vendorData?.data?.lastPage || 0;
  console.log("All Vendor Data", allVendorNumber);

  //Getting Vendor Number Setup Essentials
  const {
    data: vendorEssentials,
    isSuccess,
    isLoading,
  } = useVendorNumberEssentialsQuery({
    token,
  });

  //Getting all regional center
  const {
    data: regionalCenters,
    isSuccess: getRegionalCenterSuccess,
    isLoading: getRegionalCenterLoading,
  } = useVendorNumberReginalCenterQuery({ token: token });

  //Getting All Selected Treatment Data
  const {
    data: selectedTreatmentData,
    isSuccess: selectedTreatmentSuccess,
    isLoading: selectedTreatmentLoading,
  } = useGetAllSelectedTreatmentsQuery({ token: token });
  console.log("Selected Treatements", selectedTreatmentData?.data);

  useEffect(() => {
    if (txId || regionalCenter) {
      dispatch(
        fetchVendorNumber({
          page,
          token,
          tx_id: txId || null,
          region_id: regionalCenter || null,
        })
      );
    }
  }, [txId, regionalCenter, token, dispatch, page]);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const handleModal = (record) => {
    console.log(record);
    setRecordData(record);
    setOpen(true);
  };

  const handleDeleteVendor = async (del_id) => {
    if (del_id) {
      const payload = { vendor_id: del_id };
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/delete/vendor/number`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token,
          },
          data: payload,
        });
        if (res?.data?.status === "success") {
          toast.success("successfully deleted vendor number", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: { fontSize: "12px" },
          });
          dispatch(
            fetchVendorNumber({
              page,
              token,
              tx_id: txId || null,
              region_id: regionalCenter || null,
            })
          );
        }
        //else res?.data?.status === "error" holey
        else {
          toast.error(res?.data?.message, {
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
        toast.warning(error?.message, {
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
    }
  };

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Service",
      dataIndex: "sevice",
      key: "sevice",
      width: 80,
      render: (_, record) => {
        //console.log("vendor : ", vendor);
        return (
          <div className="flex mt-1 justify-center items-center">
            <h1>
              {
                vendorEssentials?.data?.service?.find(
                  (ser) => parseInt(ser?.id) === record?.service_id
                )?.service
              }
              {/* {record?.service_id} */}
            </h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.sevice > b.sevice ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "sevice" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Vendor No",
      dataIndex: "vendor_no",
      key: "vendor_no",
      width: 50,
      render: (_, record) => {
        //console.log("vendor : ", vendor);
        return (
          <div className="flex mt-1 justify-center items-center">
            <input
              name="cms"
              className="page py-[6px]  focus:outline-none text-center"
              type="text"
              defaultValue={record.vendor_no}
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.vendor > b.vendor ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "vendor" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service Code",
      dataIndex: "service_code",
      key: "service_code",
      width: 50,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex mt-1 justify-center items-center">
            <input
              name="cms"
              className="page py-[6px]  focus:outline-none text-center"
              type="text"
              defaultValue={record.service_code}
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.service_code > b.service_code ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "service_code" ? sortedInfo.order : null,
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
                onClick={() => handleModal(record)}
                className="text-secondary"
              >
                <FiEdit />
              </button>
              <div className="mx-2">|</div>
              <button
                onClick={() => handleDeleteVendor(record?.id)}
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleTxType = (e) => {
    console.log(e.target.value);
    if (parseInt(e.target.value) > 0) {
      setTxId(e.target.value);
      setTableOpen(true);
      setPage(1);
    } else {
      setTableOpen(false);
    }
  };
  const handleRegionalCenter = (e) => {
    console.log(e.target.value);
    if (parseInt(e.target.value) > 0) {
      setRegionalCenter(e.target.value);
      setTableOpen(true);
      setPage(1);
    }
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
  };
  return (
    <div>
      <h1 className="text-lg my-2 text-orange-400">Vendor Number Setup</h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full text-sm">
          <div className="flex flex-wrap items-center my-3 mr-2 gap-x-6 gap-y-3 ">
            <div>
              <label className="label">
                <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                  Tx Type
                </span>
              </label>

              <select
                disabled={selectedTreatmentLoading ? true : false}
                name="tx_type"
                onChange={(e) => handleTxType(e)}
                className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none"
              >
                <option value={0}>Select Type Option</option>
                {selectedTreatmentData?.data?.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.treatment_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                  Regional Center
                </span>
              </label>
              <select
                onChange={(e) => handleRegionalCenter(e)}
                className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none"
              >
                <option value={0}>Select Regional Center</option>
                {regionalCenters?.data?.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.regional_center_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                variant="outlined"
                onClick={handleModal}
                className="pms-input-button mt-[30px]"
              >
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
      {tableOpen && (
        <div>
          <div className="flex justify-end my-2">
            <button
              onClick={clearFilters}
              className="px-2  py-1 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>

          <div>
            <>
              {allVendorNumber?.loading ? (
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

            {totalPage > 1 && (
              <div className="flex justify-end">
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
          <div>
            <button
              variant="outlined"
              className="px-5 mt-8 py-1 bg-gradient-to-r from-secondary
            to-primary hover:to-secondary text-white rounded-sm"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {open && (
        <VendorNumberSetupActionModal
          open={open}
          recordData={recordData}
          handleClose={handleClose}
          txId={txId}
          region_id={regionalCenter}
          page={page}
        ></VendorNumberSetupActionModal>
      )}
    </div>
  );
};

export default VendorNumberSetup;
