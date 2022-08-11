export const ArFollowupBucketData = [
  {
    id: "1200245453244",
    patient: "mr Smith",
  },
];

export const ArFollowupBucketColumn = [
  {
    Header: () => {
      return <span className="">Patient</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Provider(24J)</span>;
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
      return <span className="">Date Billed</span>;
    },
    accessor: "date_billed",
  },
  {
    Header: () => {
      return <span className="">Billed Amt</span>;
    },
    accessor: "allwd",
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
];

export const TransitionTableData = [];

export const TransitionTableColumn = [
  {
    Header: () => {
      return <span className="">Id</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Dos</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Code</span>;
    },
    accessor: "Dos",
  },
  {
    Header: () => {
      return <span className="">M1</span>;
    },
    accessor: "CPT",
  },

  {
    Header: () => {
      return <span className="">Amount</span>;
    },
    accessor: "date_billed",
  },
  {
    Header: () => {
      return <span className="">Payment</span>;
    },
    accessor: "allwd",
  },
  {
    Header: () => {
      return <span className="">Paid</span>;
    },
    accessor: "paid",
  },
  {
    Header: () => {
      return <span className="">Adjustment</span>;
    },
    accessor: "adj",
  },
  {
    Header: () => {
      return <span className="">Who Paid</span>;
    },
    accessor: "balance",
  },
  {
    Header: () => {
      return <span className="">Instrument No</span>;
    },
    accessor: "instrument_no",
  },
  {
    Header: () => {
      return <span className="">Posted Date</span>;
    },
    accessor: "posted_date",
  },
];
