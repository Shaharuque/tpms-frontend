import PatientLedgerAction from "./PatientLedgerAction";

export const PatientLedgerColumnsData = [
  {
    id: "1200245453244",
    tx_type: "125",
  },
];

export const PatientLedgerColumnsColumn = [
  {
    Header: () => {
      return <span className="">Patient</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Provider</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">DOS</span>;
    },
    accessor: "Dos",
  },
  {
    Header: () => {
      return <span className="">CPT</span>;
    },
    accessor: "CPT",
  },
  {
    Header: () => {
      return <span className="">Unit</span>;
    },
    accessor: "unit",
  },
  {
    Header: () => {
      return <span className="">Date Billed</span>;
    },
    accessor: "date_billed",
  },
  {
    Header: () => {
      return <span className="">Billed Amt</span>;
    },
    accessor: "billed",
  },
  {
    Header: () => {
      return <span className="">Allowed Amt</span>;
    },
    accessor: "allowed",
  },
  {
    Header: () => {
      return <span className="">Paid</span>;
    },
    accessor: "paid",
  },
  {
    Header: () => {
      return <span className="">Adj</span>;
    },
    accessor: "adj",
  },
  {
    Header: () => {
      return <span className="">Balance</span>;
    },
    accessor: "balance",
  },
  {
    Header: () => {
      return <span className="">Insurance Name</span>;
    },
    accessor: "insurance_name",
  },
  {
    Header: () => {
      return <span className="">Claim No</span>;
    },
    accessor: "claim_no",
  },
  {
    Header: () => {
      return <span className="">NT</span>;
    },
    accessor: "nt",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      return <PatientLedgerAction row={row}></PatientLedgerAction>;
    },
  },
];
