import AddServiceSubTypeTabActive from "./AddServiceSubTypeTabActive";
import AddServiceSubTypeTabEdit from "./AddServiceSubTypeTabEdit";

export const AddServiceSubTypeTabData = [
  {
    place_of_Service: "new one pos",
  },
  {
    place_of_Service: "new pos",
  },
  {
    place_of_Service: "Telehealth in Home",
  },
  {
    place_of_Service: "Community Mental Health Center",
  },
  {
    place_of_Service: "Telehealth",
  },
  {
    place_of_Service: "Others",
  },
  {
    place_of_Service: "Home",
  },
  {
    place_of_Service: "Office",
  },
  {
    place_of_Service: "School",
  },
];

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
