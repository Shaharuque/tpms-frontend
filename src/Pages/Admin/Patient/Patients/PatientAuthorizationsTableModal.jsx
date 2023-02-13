import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Table } from "antd";
import { Link } from "react-router-dom";
import Loading from "../../../../Loading/Loading";
//Ant Design modal used here[to solve table data filtering issue]
import { Modal } from "antd";
import { useGetPatientAuthorizationQuery } from "../../../../features/Patient_redux/authorization/authorizationApi";
import useToken from "../../../../CustomHooks/useToken";

const PatientAuthorizationsTableModal = ({
  patient_id,
  modalOpen,
  setModalOpen,
}) => {
  const [tableData, setTableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { token } = useToken();
  console.log("clicked patient Id", patient_id);

  //get patient authorization api
  const { data: authorizationData, isLoading: authorizationloading } =
    useGetPatientAuthorizationQuery({
      token,
      payload: {
        client_id: patient_id,
      },
    });
  // console.log(
  //   "All patient Authorization",
  //   authorizationData?.client_authorization?.data
  // );
  const clientAuthorizationData =
    authorizationData?.client_authorization?.data || [];

  //   fetch data
  useEffect(() => {
    setLoading(true);
    fetch("../../../All_Fake_Api/PatientAuthorization.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        setLoading(false);
      });
  }, []);
  console.log(tableData, "tableData");

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 120,
      filters: [
        {
          text: "Realcube",
          value: "Realcube",
        },
        {
          text: "Mycat",
          value: "Mycat",
        },
        {
          text: "Donovan",
          value: "Donovan",
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
      title: "Onset Date",
      dataIndex: "onset_date",
      key: "onset_date",
      width: 100,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.onset_date || null,
      onFilter: (value, record) => record.onset_date.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.onset_date > b.onset_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "onset_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      width: 100,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.end_date || null,
      onFilter: (value, record) => record.end_date.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.end_date > b.end_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "end_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Insurance",
      dataIndex: "insurance",
      key: "insurance",
      width: 150,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      render: (_, { authorization_name }) => {
        if (authorization_name) {
          return <h1>{authorization_name.split(" ")[0]}</h1>;
        }
      },
      filteredValue: filteredInfo.insurance || null,
      onFilter: (value, record) => record.insurance.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.insurance > b.insurance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "insurance" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Ins. ID",
      dataIndex: "uci_id",
      key: "uci_id",
      width: 150,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.uci_id || null,
      onFilter: (value, record) => record.uci_id.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.uci_id > b.uci_id ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "uci_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Auth No.",
      dataIndex: "authorization_number",
      key: "authorization_number",
      width: 150,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.authorization_number || null,
      onFilter: (value, record) => record.authorization_number.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.authorization_number > b.authorization_number ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "authorization_number"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
  ];

  return (
    <div>
      <div>
        <Modal
          centered
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          width={1200}
          className="p-5 box rounded-lg"
          footer={[
            <div className=" flex items-end justify-end mt-2">
              <Link
                to={`/admin/patient/patient-authorization/${patient_id}`}
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
              >
                Add New Auth
              </Link>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                autoFocus
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>,
          ]}
        >
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                All Authorizations
              </h1>

              <IoCloseCircleOutline className="text-gray-600 font-semibold  text-2xl hover:text-primary " />
            </div>
            <div className="bg-gray-200 py-[1px] mt-3 "></div>
            <div className="flex items-center justify-between gap-2 my-2">
              <h1 className="text-sm text-gray-600 text-left font-semibold ">
                Auth List
              </h1>
            </div>

            {loading ? (
              <Loading></Loading>
            ) : (
              <div className=" overflow-scroll">
                <Table
                  sortDirections={["ascend", "descend"]}
                  pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                  size="small"
                  className=" text-xs font-normal mt-5"
                  columns={columns}
                  bordered
                  rowKey={(record) => record.id} //record is kind of whole one data object and here we are
                  dataSource={clientAuthorizationData}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PatientAuthorizationsTableModal;
