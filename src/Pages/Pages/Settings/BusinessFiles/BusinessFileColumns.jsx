import BusinessComponent from "./BusinessComponent";

export const BusinessColumnsData = [
  {
    description: "Obcaecati officia do",
    date: "01/17/2022",
    creator: "Admin Admin",
  },
  {
    description: "Doloremque possimus",
    date: "01/17/2022",
    creator: "Admin Admin",
  },
  {
    description: "",
    date: "06/25/2022",
    creator: "Admin Admin",
  },
];

export const BusinessColumns = [
  {
    Header: () => {
      return <span className="">Description</span>;
    },
    accessor: "description", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <span className="">Uploaded On</span>;
    },
    accessor: "date",
  },
  {
    Header: () => {
      return <span className="">Creator</span>;
    },
    accessor: "creator",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return <BusinessComponent row={row}></BusinessComponent>;
    },
  },
];
