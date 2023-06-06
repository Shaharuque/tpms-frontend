import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { Table, Switch } from "antd";
import InsuranceModal from "./InsuranceSetup/InsuranceModal";
import {
  useGetAllInsuranceSetupQuery,
  useUpdateInsuranceTableMutation,
} from "../../../../../features/Settings_redux/insuranceSetup/insuranceSetupApi";
import useToken from "../../../../../CustomHooks/useToken";
import ReactPaginate from "react-paginate";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import { toast } from "react-toastify";
import IsElectronicStatus from "./InsuranceTableStatusHandler/IsElectronicStatus";
import IsActive from "./InsuranceTableStatusHandler/IsActive";

const InsuranceSetup = () => {
  const [dataSource, setDataSource] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [page, setPage] = useState(1);
  const { token } = useToken();

  const { data: allInsuranceSetup, isLoading: insuranceSetupLoading } =
    useGetAllInsuranceSetupQuery({
      token,
      data: {
        page,
      },
    });
  console.log("all insurance setup data", allInsuranceSetup);
  const totalPage = allInsuranceSetup?.data?.lastPage;

  // Update Insurance setup table
  const [updateInsuranceTable, { isSuccess: insuranceUpdateTableSuccess }] =
    useUpdateInsuranceTableMutation();

  useEffect(() => {
    if (allInsuranceSetup?.data?.data?.length > 0) {
      setDataSource(allInsuranceSetup?.data?.data);
    }
  }, [allInsuranceSetup?.data?.data]);

  useEffect(() => {
    if (insuranceUpdateTableSuccess) {
      console.log(insuranceUpdateTableSuccess);
      setSelectedRowKeys([]);
      toast.success("Successfully Insurance Table Update", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [insuranceUpdateTableSuccess]);

  const handleClose = () => {
    setOpenEdit(false);
  };
  const handlePageClick = ({ selected: selectedPage }) => {
    setSelectedRowKeys([]);
    console.log("selected page", typeof selectedPage);
    setPage(selectedPage + 1);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Insurance",
      dataIndex: "insurance",
      key: "insurance",
      width: 120,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{record?.payor_name}</div>;
      },
      sorter: (a, b) => {
        return a.insurance > b.insurance ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "insurance" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: <h1 className="text-center">Is Electronic</h1>,
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            {/* <Switch
              size="small"
              defaultChecked={record?.is_electronic}
              onChange={() =>
                isEletronicChange(record?.is_electronic, record?.id)
              }
            /> */}
            <IsElectronicStatus
              id={record?.id}
              status={record?.is_electronic}
              dataSource={dataSource}
              setDataSource={setDataSource}
            ></IsElectronicStatus>
            <h1 className="ml-2 text-gray-500">Electronic</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: <h1 className="text-center">Cms1500 31</h1>,
      dataIndex: "cms_1500_31",
      key: "cms_1500_31",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.cms_1500_31}
            onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.cms_1500_31 > b.cms_1500_31 ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "cms_1500_31" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: <h1 className="text-center">Cms1500 32a</h1>,
      dataIndex: "cms_1500_32a",
      key: "cms_1500_32a",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.cms_1500_32a}
            onChange={(e) => handleCms1500_32a(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.cms_1500_32a > b.cms_1500_32a ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "cms_1500_32a" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: <h1 className="text-center">Cms1500 32b</h1>,
      dataIndex: "cms_1500_32b",
      key: "cms_1500_32b",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.cms_1500_32b}
            onChange={(e) => handleCms1500_32b(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.cms_1500_32b > b.cms_1500_32b ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "cms_1500_32b" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: <h1 className="text-center">Cms1500 33a</h1>,
      dataIndex: "cms_1500_33a",
      key: "cms_1500_33a",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.cms_1500_33a}
            onChange={(e) => handleCms1500_33a(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.cms_1500_33a > b.cms_1500_33a ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "cms_1500_33a" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: <h1 className="text-center">Cms1500 33b</h1>,
      dataIndex: "cms_1500_33b",
      key: "cms_1500_33b",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.cms_1500_33b}
            value={record?.cms_1500_33b}
            onChange={(e) => handleCms1500_33b(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.cms_1500_33b > b.cms_1500_33b ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "cms_1500_33b" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Is Active",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            <IsActive
              id={record?.id}
              status={record?.is_active}
              dataSource={dataSource}
              setDataSource={setDataSource}
            ></IsActive>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Edit",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: (_, { id }) => {
        return (
          <div className="flex justify-center text-teal-700 cursor-pointer">
            <div>
              <BiPencil
                onClick={() => {
                  setOpenEdit(true);
                  setEditId(id);
                }}
              />
            </div>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  //input box handler functions
  const handleCms1500_31 = (changed, id) => {
    console.log(id);
    const indexOfRecord = dataSource.findIndex((item) => id === item.id);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(indexOfRecord, 1, {
      is_electronic: dataSource[indexOfRecord].is_electronic,
      cms_1500_31: changed,
      cms_1500_32a: dataSource[indexOfRecord].cms_1500_32a,
      cms_1500_32b: dataSource[indexOfRecord].cms_1500_32b,
      cms_1500_33a: dataSource[indexOfRecord].cms_1500_33a,
      cms_1500_33b: dataSource[indexOfRecord].cms_1500_33b,
      is_active: dataSource[indexOfRecord].is_active,
      id,
    });
    setDataSource(updatedDataSource);
  };
  const handleCms1500_32a = (changed, id) => {
    const indexOfRecord = dataSource.findIndex((item) => id === item.id);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(indexOfRecord, 1, {
      is_electronic: dataSource[indexOfRecord].is_electronic,
      cms_1500_31: dataSource[indexOfRecord].cms_1500_31,
      cms_1500_32a: changed,
      cms_1500_32b: dataSource[indexOfRecord].cms_1500_32b,
      cms_1500_33a: dataSource[indexOfRecord].cms_1500_33a,
      cms_1500_33b: dataSource[indexOfRecord].cms_1500_33b,
      is_active: dataSource[indexOfRecord].is_active,
      id,
    });
    setDataSource(updatedDataSource);
  };

  const handleCms1500_32b = (changed, id) => {
    const indexOfRecord = dataSource.findIndex((item) => id === item.id);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(indexOfRecord, 1, {
      is_electronic: dataSource[indexOfRecord].is_electronic,
      cms_1500_31: dataSource[indexOfRecord].cms_1500_31,
      cms_1500_32a: dataSource[indexOfRecord].cms_1500_32a,
      cms_1500_32b: changed,
      cms_1500_33a: dataSource[indexOfRecord].cms_1500_33a,
      cms_1500_33b: dataSource[indexOfRecord].cms_1500_33b,
      is_active: dataSource[indexOfRecord].is_active,
      id,
    });
    setDataSource(updatedDataSource);
  };

  const handleCms1500_33a = (changed, id) => {
    const indexOfRecord = dataSource.findIndex((item) => id === item.id);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(indexOfRecord, 1, {
      is_electronic: dataSource[indexOfRecord].is_electronic,
      cms_1500_31: dataSource[indexOfRecord].cms_1500_31,
      cms_1500_32a: dataSource[indexOfRecord].cms_1500_32a,
      cms_1500_32b: dataSource[indexOfRecord].cms_1500_32b,
      cms_1500_33a: changed,
      cms_1500_33b: dataSource[indexOfRecord].cms_1500_33b,
      is_active: dataSource[indexOfRecord].is_active,
      id,
    });
    setDataSource(updatedDataSource);
  };

  const handleCms1500_33b = (changed, id) => {
    const indexOfRecord = dataSource.findIndex((item) => id === item.id);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(indexOfRecord, 1, {
      is_electronic: dataSource[indexOfRecord].is_electronic,
      cms_1500_31: dataSource[indexOfRecord].cms_1500_31,
      cms_1500_32a: dataSource[indexOfRecord].cms_1500_32a,
      cms_1500_32b: dataSource[indexOfRecord].cms_1500_32b,
      cms_1500_33a: dataSource[indexOfRecord].cms_1500_33a,
      cms_1500_33b: changed,
      is_active: dataSource[indexOfRecord].is_active,
      id,
    });
    setDataSource(updatedDataSource);
  };

  // const isEletronicChange = (changed, id) => {
  //   console.log(!changed, id);
  // };

  console.log("dataSource : ", dataSource);

  //get rows id to do some action on them
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  console.log("selected Insurance Setup : ", selectedRowKeys);

  let finalSelected = [];
  const extractingData = () => {
    for (let i = 0; i < selectedRowKeys.length; i++) {
      finalSelected.push(
        dataSource?.find((each) => each.id === selectedRowKeys[i])
      );
    }
  };
  if (selectedRowKeys.length > 0) {
    extractingData();
  }

  console.log("finally selected for sending to server : ", finalSelected);

  //update insurance setup table data handle here
  const handleSave = () => {
    const edit_id = finalSelected?.map((item) => item.id);
    const cms_1500_31 = finalSelected?.map((item) => item.cms_1500_31);
    const cms_1500_32a = finalSelected?.map((item) => item.cms_1500_32a);
    const cms_1500_32b = finalSelected?.map((item) => item.cms_1500_32b);
    const cms_1500_33a = finalSelected?.map((item) => item.cms_1500_33a);
    const cms_1500_33b = finalSelected?.map((item) => item.cms_1500_33b);
    const is_active_data = finalSelected?.map((item) => {
      return item.is_active ? "1" : "0";
    });
    const is_electonic_data = finalSelected?.map((item) => {
      return item.is_electronic ? "1" : "0";
    });
    if (finalSelected?.length > 0) {
      const payload = {
        edit_id,
        cms_1500_31,
        cms_1500_32a,
        cms_1500_32b,
        cms_1500_33a,
        cms_1500_33b,
        is_electonic_data,
        is_active_data,
      };
      //console.log("payload : ", payload);
      updateInsuranceTable({ token, data: payload });
    }
  };

  return (
    <div>
      <div>
        <>
          {insuranceSetupLoading ? (
            <ShimmerTableTet></ShimmerTableTet>
          ) : (
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className=" text-xs font-normal"
              columns={columns}
              dataSource={allInsuranceSetup?.data?.data}
              rowSelection={rowSelection}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          )}
        </>

        {totalPage > 0 && (
          <div className="flex items-center justify-end">
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
        <button onClick={handleSave} className="pms-button my-5">
          Save Payer Setup
        </button>
      </div>
      {/* {insuranceEdit && (         
        <>
          <InsuranceEditComponent id={rowId}></InsuranceEditComponent
        </>
      )} */}
      {/* <InsuranceEditComponent id={rowId}></InsuranceEditComponent> */}
      {openEdit && (
        <>
          <InsuranceModal
            id={editId}
            handleClose={handleClose}
            open={openEdit}
          ></InsuranceModal>
        </>
      )}
    </div>
  );
};

export default InsuranceSetup;
