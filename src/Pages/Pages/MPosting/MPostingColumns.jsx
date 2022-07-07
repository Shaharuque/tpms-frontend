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
      return <span className="">Deposit Date</span>;
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
export const DepositDetailsColumnsData = [];

export const DepositDetailsColumnsColumn = [
  {
    Header: () => {
      return <span className="">Check Date</span>;
    },
    accessor: "check_date", // accessor is the "key" in the data
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
      return <span className="">Patient</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">DOS</span>;
    },
    accessor: "dos",
  },
  {
    Header: () => {
      return <span className="">Code</span>;
    },
    accessor: "code",
  },
  {
    Header: () => {
      return <span className="">M1</span>;
    },
    accessor: "M1",
  },
  {
    Header: () => {
      return <span className="">Amount</span>;
    },
    accessor: "amount",
  },
  {
    Header: () => {
      return <span className="">Payment</span>;
    },
    accessor: "payment",
  },
  {
    Header: () => {
      return <span className="">Adjustment</span>;
    },
    accessor: "adjustment",
  },
  {
    Header: () => {
      return <span className="">Reason</span>;
    },
    accessor: "reason",
  },
  {
    Header: () => {
      return <span className="">Status</span>;
    },
    accessor: "status",
  },
  {
    Header: () => {
      return <span className="">M2</span>;
    },
    accessor: "m2",
  },
  {
    Header: () => {
      return <span className="">M3</span>;
    },
    accessor: "m3",
  },
  {
    Header: () => {
      return <span className="">M4</span>;
    },
    accessor: "m4",
  },
  {
    Header: () => {
      return <span className="">Created Data</span>;
    },
    accessor: "created_data",
  },
  {
    Header: () => {
      return <span className="">Create By</span>;
    },
    accessor: "create_by",
  },
];
