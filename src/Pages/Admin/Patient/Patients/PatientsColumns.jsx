import PatientAuthAction from "./Authorization/Authorization/PatientAuthAction";
import PatientName from "./PatientName";
import PatientStatusAction from "./PatientStatusAction";
import PatientAuthorizationsTableActionModal from "./PatientAuthorizationsTableModal";
import { ColumnFilter } from "../../../Shared/CustomComponents/FilterBox";

export const PatientsColumnsColumn = [
  {
    Header: "Patient",
    Cell: ({ row }) => {
      return <PatientName row={row}></PatientName>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">Contact Info</span>;
    },
    accessor: "client_full_name",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">DOB</span>;
    },
    accessor: "client_dob",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">Gender</span>;
    },
    accessor: "client_gender",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">SUPV. Provider</span>;
    },
    accessor: "supervisor_name",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">POS</span>;
    },
    accessor: "location",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">Insurance</span>;
    },
    accessor: "insurance",
    Filter: ColumnFilter,
  },
  {
    Header: "Auth",
    Cell: ({ row }) => {
      return <PatientAuthAction row={row}></PatientAuthAction>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Status",
    Cell: ({ row }) => {
      return <PatientStatusAction row={row}></PatientStatusAction>;
    },
    Filter: ColumnFilter,
  },
];
