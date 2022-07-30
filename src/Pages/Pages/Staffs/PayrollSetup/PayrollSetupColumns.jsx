export const PayrollSetupColumnsData = [
  {
    id: "12",
    service: "fdifgdsfu ehehu",
  },
  {
    id: "13",
    service: "fdifgehu",
  },
  {
    id: "14",
    service: "ehehu",
  },
];

export const PayrollSetupColumnsColumn = [
  {
    Header: () => {
      return <span className="">Service</span>;
    },
    accessor: "service",
  },
  {
    Header: () => {
      return <span className="">Hourly rate</span>;
    },
    accessor: "hourly_rate",
  },
  {
    Header: () => {
      return <span className="">Milage Rate</span>;
    },
    accessor: "milage_rate",
  },
  {
    Header: () => {
      return <span className="">Billable</span>;
    },
    accessor: "billable",
  },
];
