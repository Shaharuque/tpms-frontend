import EraManagerAction from "./EraManagerAction";

export const EraManagerColumnsData = [
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
  {
    file_name: "FS_HCFA_957151498_IN_C.txt",
    received_data: "05/28/2022",
    processed_data: "05/24/2022",
  },
];

export const EraManagerColumnsColumn = [
  {
    Header: () => {
      return <span className="">File Name</span>;
    },
    accessor: "file_name",
  },
  {
    Header: () => {
      return <span className="">Received Data</span>;
    },
    accessor: "received_data",
  },
  {
    Header: () => {
      return <span className="">Processed Date</span>;
    },
    accessor: "processed_data",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // console.log(row);
      return <EraManagerAction row={row}></EraManagerAction>;
    },
  },
];
