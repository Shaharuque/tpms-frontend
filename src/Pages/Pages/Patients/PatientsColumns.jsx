import { ColumnFilter } from "../Settings/SettingComponents/FilterBox";
import PatientAuthAction from "./PatientAuthAction";
import PatientName from "./PatientName";
import PatientStatusAction from "./PatientStatusAction";

export const PatientsColumnsData = [
  {
    id: "12",
    Patient: "April TestP",
    contact_info: "(987)-654-3210",
    provider: "ana",
  },
  {
    id: "13",
    Patient: "Hello goodbye",
    contact_info: "(987)-654-3210",
    provider: "jhiuyuy",
  },
  {
    id: "14",
    Patient: "Mickey Mouse",
    contact_info: "(987)-654-3210",
    provider: "ZZxxzcsaase",
  },
];

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
    accessor: "contact_info",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">DOB</span>;
    },
    accessor: "dob",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">Gender</span>;
    },
    accessor: "Gender",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">SUPV. Provider</span>;
    },
    accessor: "provider",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">POS</span>;
    },
    accessor: "pos",
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
