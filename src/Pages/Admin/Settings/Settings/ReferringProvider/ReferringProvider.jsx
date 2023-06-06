import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReferringProviderActionModal from "./ReferringProvider/ReferringProviderActionModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchReferringProvider } from "../../../../../features/Settings_redux/referringProviderApi";
import useToken from "../../../../../CustomHooks/useToken";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import ReactPaginate from "react-paginate";
import { baseIp } from "../../../../../Misc/BaseClient";
import { toast } from "react-toastify";

const ReferringProvider = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recordData, setRecordData] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { token } = useToken();

  //List of all referring provider
  const allReferrringProviderData = useSelector(
    (state) => state?.referringProviderInfo
  );
  const data =
    allReferrringProviderData?.referringProviderData?.referringProvider?.data ||
    [];
  console.log("All data", data);
  const totalPage =
    allReferrringProviderData?.referringProviderData?.referringProvider
      ?.lastPage || 0;
  //console.log(totalPage);

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
  };

  useEffect(() => {
    dispatch(fetchReferringProvider({ page, token }));
  }, [page, dispatch, token]);

  const handleClickOpen2 = (record) => {
    setOpenAddModal(true);
    setRecordData(record);
  };

  const handleClose2 = () => {
    setOpenAddModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  //Delete The Referring Provider from the list
  const handleDeleteReferringProvider = async (del_id) => {
    if (del_id) {
      const payload = { referring_id: del_id };
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/delete/referring/provider`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token,
          },
          data: payload,
        });
        if (res?.data?.status === "success") {
          toast.success("Successfully Deleted", {
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
          dispatch(fetchReferringProvider({ page, token }));
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
        console.log(error?.message);
      }
    }
  };

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Provider First Name",
      dataIndex: "provider_name",
      key: "provider_name",
      width: 100,
      render: (_, record) => {
        return (
          <div className=" flex justify-center items-center">
            <h1>{record?.provider_name}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.provider_name > b.provider_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "provider_name" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Provider Last Name",
      dataIndex: "provider_last_name",
      key: "provider_last_name",
      width: 100,
      render: (_, record) => {
        return (
          <div className=" flex justify-center items-center">
            <h1>{record?.provider_last_name}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.provider_last_name > b.provider_last_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "provider_last_name" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "NPI",
      dataIndex: "npi",
      key: "npi",
      width: 80,
      sorter: (a, b) => {
        return a.npi > b.npi ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "npi" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "ID Qualifier",
      dataIndex: "id_qual",
      key: "id_qual",
      width: 80,
      sorter: (a, b) => {
        return a.id_qual > b.id_qual ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id_qual" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "ID",
      dataIndex: "upin",
      key: "upin",
      width: 80,
      sorter: (a, b) => {
        return a.upin > b.upin ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "upin" ? sortedInfo.order : null,
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
              <button
                onClick={() => handleDeleteReferringProvider(record?.id)}
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
      <div className="md:flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Referring Provider</h1>

        <div className=" md:flex items-center">
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button onClick={handleClickOpen2} className="pms-button mr-2">
                Add Referring Provider
              </button>
            </label>
          </div>
          <div className="md:flex justify-end items-end my-2">
            <button onClick={clearFilters} className="pms-clear-button">
              Clear filters
            </button>
          </div>
        </div>
      </div>
      <div>
        <>
          {allReferrringProviderData.loading ? (
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
        <ReferringProviderActionModal
          handleClose={handleClose2}
          open={openAddModal}
          recordData={recordData}
          page={page}
        ></ReferringProviderActionModal>
      )}
    </div>
  );
};

export default ReferringProvider;
