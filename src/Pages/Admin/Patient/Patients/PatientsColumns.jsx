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

// patient authorization
export const PatientsAuthorizationsTableData = [
  {
    id: "12",
    description: "April TestP",
    contact_info: "(987)-654-3210",
    treatment_type: "ana",
  },
  {
    id: "13",
    description: "Hello goodbye",
    contact_info: "(987)-654-3210",
    treatment_type: "jhiuyuy",
  },
  {
    id: "14",
    description: "Mickey Mouse",
    contact_info: "(987)-654-3210",
    treatment_type: "ZZxxzcsaase",
  },
];

export const PatientsAuthorizationsTableColumn = [
  {
    Header: () => {
      return <span className="">Description</span>;
    },
    accessor: "description",
  },
  {
    Header: () => {
      return <span className="">Onset Date</span>;
    },
    accessor: "onset_date",
  },
  {
    Header: () => {
      return <span className="">End Date</span>;
    },
    accessor: "end_date",
  },
  {
    Header: () => {
      return <span className="">Primary Insurance</span>;
    },
    accessor: "primary_insurance",
  },
  {
    Header: () => {
      return <span className="">Treatment Type</span>;
    },
    accessor: "treatment_type",
  },
  {
    Header: () => {
      return <span className="">UCI</span>;
    },
    accessor: "uci",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      return (
        <PatientAuthorizationsTableActionModal
          row={row}
        ></PatientAuthorizationsTableActionModal>
      );
    },
  },
];
