import MPostingAction from "./MPostingAction";

export const MPostingColumnsData = [
  {
    id: "11",
    deposit_date: "10/31/2021",
    check_date: "10/31/2021",
    check_no: "5418",
    payee_name: "Daisy Duck",
    payee_type: "client",
    allocate_check: "1001",
    unallocate_check: "0.24",
    pay_type: "EFT",
    description: ".....",
    file: "No File",
  },
  {
    id: "2",
    deposit_date: "10/31/2021",
    check_date: "10/31/2021",
    check_no: "5418",
    payee_name: "Daisy Duck",
    payee_type: "client",
    allocate_check: "1001",
    unallocate_check: "0.24",
    description: ".....",
    file: "No File",
    pay_type: "EFT",
  },
  {
    id: "3",
    deposit_date: "10/31/2021",
    check_date: "10/31/2021",
    check_no: "5418",
    payee_name: "Daisy Duck",
    payee_type: "client",
    allocate_check: "1001",
    unallocate_check: "0.24",
    description: ".....",
    file: "No File",
    pay_type: "EFT",
  },
];

export const MPostingColumnsColumn = [
  {
    Header: () => {
      return <span className="">Deposit Data</span>;
    },
    accessor: "deposit_date", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <span className="">Check No</span>;
    },
    accessor: "check_no",
  },
  {
    Header: () => {
      return <span className="">Check Date</span>;
    },
    accessor: "check_date",
  },
  {
    Header: () => {
      return <span className="">Payee Name</span>;
    },
    accessor: "payee_name",
  },
  {
    Header: () => {
      return <span className="">Payee Type</span>;
    },
    accessor: "payee_type",
  },
  {
    Header: () => {
      return <span className="">Allocated Check mt</span>;
    },
    accessor: "allocate_check",
  },
  {
    Header: () => {
      return <span className="">unallocated Check</span>;
    },
    accessor: "unallocate_check",
  },
  {
    Header: () => {
      return <span className="">Pay Type</span>;
    },
    accessor: "pay_type",
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
