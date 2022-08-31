import PaymentDepositAction from "./PaymentDeposite/PaymentDepositAction";

// Scheduled;
export const PaymentDepositsData = [
  {
    check_no: "123",
  },
];

export const PaymentDepositsColumn = [
  {
    Header: () => {
      return <span className="">Deposit Date </span>;
    },
    accessor: "deposit_date",
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
    accessor: "Check_Date",
  },
  {
    Header: () => {
      return <span className="">Payee Name</span>;
    },
    accessor: "Payee_Name",
  },
  {
    Header: () => {
      return <span className="">Payee Type</span>;
    },
    accessor: "Payee_Type",
  },
  {
    Header: () => {
      return <span className="">Allocated Amt.</span>;
    },
    accessor: "Allocated_Amt.",
  },
  {
    Header: () => {
      return <span className="">Unallocated</span>;
    },
    accessor: "Unallocated",
  },
  {
    Header: () => {
      return <span className="">Pay Type</span>;
    },
    accessor: "Pay_Type",
  },
  {
    Header: "POS",
    Cell: ({ row }) => {
      return <>eye</>;
    },
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // console.log(row);
      return <PaymentDepositAction row={row}></PaymentDepositAction>;
    },
  },
];
