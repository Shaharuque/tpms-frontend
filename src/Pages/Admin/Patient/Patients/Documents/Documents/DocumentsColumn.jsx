import DocumentsAction from "./DocumentsAction";

export const DocumentsColumnData = [
  {
    description: "Obcaecati officia do",
    upload_date: "01/17/2022",
    created_by: "Admin Admin",
  },
  {
    description: "Doloremque possimus",
    upload_date: "01/17/2022",
    created_by: "Admin Admin",
  },
  {
    description: "",
    upload_date: "06/25/2022",
    created_by: "Admin Admin",
  },
];

export const DocumentsColumnColumns = [
  {
    Header: () => {
      return <span className="">Description</span>;
    },
    accessor: "description",
  },
  {
    Header: () => {
      return <span className="">File Name</span>;
    },
    accessor: "file_name",
  },
  {
    Header: () => {
      return <span className="">Uploaded On</span>;
    },
    accessor: "upload_date",
  },
  {
    Header: () => {
      return <span className="">Created By</span>;
    },
    accessor: "created_by",
  },
  {
    Header: () => {
      return <span className="">Expire upload_date</span>;
    },
    accessor: "expire_upload_date",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      return <DocumentsAction row={row}></DocumentsAction>;
    },
  },
];
