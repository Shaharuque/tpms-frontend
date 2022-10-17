import AddServiceSubTypeTabActive from "./AddServiceSubTypeTabActive";
import AddServiceSubTypeTabEdit from "./AddServiceSubTypeTabEdit";

export const AddServiceSubTypeTabColumn = [
  {
    Header: () => {
      return <span className="">Description</span>;
    },
    accessor: "place_of_Service", // accessor is the "key" in the data
  },

  {
    Header: "Action",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return (
        <AddServiceSubTypeTabActive row={row}></AddServiceSubTypeTabActive>
      );
    },
  },
  {
    Header: "Edit",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return <AddServiceSubTypeTabEdit row={row}></AddServiceSubTypeTabEdit>;
    },
  },
];
