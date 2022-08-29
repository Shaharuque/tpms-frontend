// SessionRendered;
export const SessionRenderedData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const SessionRenderedColumn = [
  {
    Header: () => {
      return <span className="">Insurance</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Patient Last Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Patient First Name</span>;
    },
    accessor: "adj",
  },
  {
    Header: () => {
      return <span className="">Activity Type</span>;
    },
    accessor: "CPT",
  },
  {
    Header: () => {
      return <span className="">Date of Service</span>;
    },
    accessor: "date_billed",
  },
];

// LastWeeksDeposits;

export const LastWeeksDepositsData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const LastWeeksDepositsColumn = [
  {
    Header: () => {
      return <span className="">Deposit Date</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Check No</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Check Date</span>;
    },
    accessor: "Dos",
  },
  {
    Header: () => {
      return <span className="">Payee Name</span>;
    },
    accessor: "CPT",
  },
  {
    Header: () => {
      return <span className="">Payee Type</span>;
    },
    accessor: "DOS",
  },
  {
    Header: () => {
      return <span className="">Allocated Check Amt.</span>;
    },
    accessor: "Act",
  },
  {
    Header: () => {
      return <span className="">Unallocated</span>;
    },
    accessor: "unallocated",
  },
  {
    Header: () => {
      return <span className="">Pay Type</span>;
    },
    accessor: "PT",
  },
  {
    Header: () => {
      return <span className="">Description</span>;
    },
    accessor: "description",
  },
  {
    Header: () => {
      return <span className="">File</span>;
    },
    accessor: "file",
  },
];
// LastMonthsStatements

export const LastMonthsStatementsData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const LastMonthsStatementsColumn = [
  {
    Header: () => {
      return <span className="">Patient Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Patient First Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Total</span>;
    },
    accessor: "Dos",
  },
];

// LastMonthBilledDates BilledTable;
export const BilledTableData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const BilledTableColumn = [
  {
    Header: () => {
      return <span className="">Batch No</span>;
    },
    accessor: "batch_no",
  },
  {
    Header: () => {
      return <span className="">Date</span>;
    },
    accessor: "date",
  },
  {
    Header: () => {
      return <span className="">Total</span>;
    },
    accessor: "total",
  },
];

// DetailTable;

export const DetailTableData = [
  {
    patient: "asd",
  },
  {
    patient: "mina",
  },
];

export const DetailTableColumn = [
  {
    Header: () => {
      return <span className="">Claim No.</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Payor</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Patient</span>;
    },
    accessor: "Dos",
  },
  {
    Header: () => {
      return <span className="">Service Date</span>;
    },
    accessor: "CPT",
  },
  {
    Header: () => {
      return <span className="">Cpt</span>;
    },
    accessor: "DOS",
  },
  {
    Header: () => {
      return <span className="">M1</span>;
    },
    accessor: "Act",
  },
  {
    Header: () => {
      return <span className="">M2</span>;
    },
    accessor: "unallocated",
  },
  {
    Header: () => {
      return <span className="">M3</span>;
    },
    accessor: "PT",
  },
  {
    Header: () => {
      return <span className="">M4</span>;
    },
    accessor: "description",
  },
  {
    Header: () => {
      return <span className="">Units</span>;
    },
    accessor: "file",
  },
  {
    Header: () => {
      return <span className="">Total Charge</span>;
    },
    accessor: "charge",
  },
  {
    Header: () => {
      return <span className="">Created Date</span>;
    },
    accessor: "created_date",
  },
  {
    Header: () => {
      return <span className="">Paid</span>;
    },
    accessor: "paid",
  },
];
