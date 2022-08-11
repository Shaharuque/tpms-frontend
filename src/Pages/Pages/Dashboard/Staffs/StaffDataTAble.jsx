import PendingStatus from "./VacationAction/PendingStatus";
import VacationAction from "./VacationAction/VacationAction";

export const VacationPendingApprovalData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const VacationPendingApprovalColumn = [
  {
    Header: () => {
      return <span className="">Staff Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Staff First Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Holiday Date</span>;
    },
    accessor: "Dos",
  },
  {
    Header: () => {
      return <span className="">Description</span>;
    },
    accessor: "CPT",
  },

  {
    Header: "Status",
    Cell: ({ row }) => {
      return <PendingStatus row={row}></PendingStatus>;
    },
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      return <VacationAction row={row}></VacationAction>;
    },
  },
];
// Missing Credentials
export const MissingCredentialsData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const MissingCredentialsColumn = [
  {
    Header: () => {
      return <span className=""> Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className=""> First Name</span>;
    },
    accessor: "provider",
  },
];
// CredentialsToExpire;
export const CredentialsToExpireData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const CredentialsToExpireColumn = [
  {
    Header: () => {
      return <span className=""> Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className=""> First Name</span>;
    },
    accessor: "provider",
  },
];
// SignatureNotLoaded;
export const SignatureNotLoadedData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const SignatureNotLoadedColumn = [
  {
    Header: () => {
      return <span className=""> Dos</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className=""> Provider Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className=""> Patient Name</span>;
    },
    accessor: "patient_name",
  },
  {
    Header: () => {
      return <span className=""> Session Name</span>;
    },
    accessor: "session_name",
  },
  {
    Header: () => {
      return <span className=""> Service & Hrs.</span>;
    },
    accessor: "service",
  },
  {
    Header: () => {
      return <span className=""> Patient Signature </span>;
    },
    accessor: "patient_signature",
  },
  {
    Header: () => {
      return <span className=""> Provider Signature</span>;
    },
    accessor: "provider_signature",
  },
];
