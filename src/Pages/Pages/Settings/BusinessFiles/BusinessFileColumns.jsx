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
      return <div className=" mt-5 min-w-[120px]">Description</div>;
    },
    accessor: "description", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Uploaded On</div>;
    },
    accessor: "date",
  },
  {
    Header: () => {
      return <div className=" mt-5  min-w-[150px]">Creator</div>;
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
