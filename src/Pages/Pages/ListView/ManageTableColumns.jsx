export const ManageTableColumnsData = [];

export const ManageTableColumnsColumn = [
  {
    Header: "Lock",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      // return <CreateServiceComponent row={row}></CreateServiceComponent>;
    },
  },
  {
    Header: () => {
      return <span className="">Notes</span>;
    },
    accessor: "notes",
  },
  {
    Header: () => {
      return <span className="">Patients</span>;
    },
    accessor: "patients",
  },
  {
    Header: () => {
      return <span className="">Service &and; Hrs.</span>;
    },
    accessor: "service",
  },
  {
    Header: () => {
      return <span className="">Provider</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">POS</span>;
    },
    accessor: "pos",
  },
  {
    Header: () => {
      return <span className="">Scheduled Date</span>;
    },
    accessor: "date",
  },
  {
    Header: () => {
      return <span className="">Hours</span>;
    },
    accessor: "hours",
  },
  {
    Header: "Status",
    Cell: ({ row }) => {
      // console.log(row);
      //   return <IsElectronic row={row}></IsElectronic>;
    },
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // console.log(row);
      //   return <IsElectronic row={row}></IsElectronic>;
    },
  },
];