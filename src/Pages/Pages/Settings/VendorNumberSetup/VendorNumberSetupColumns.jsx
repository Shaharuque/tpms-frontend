import VendorNumberSetup from "../VendorNumberSetup";

export const VendorNumberSetupData = [
  {
    service: "afdhfudhuf",
  },
];

export const VendorNumberSetupColumns = [
  {
    Header: () => {
      return <span className="">Services</span>;
    },
    accessor: "service", // accessor is the "key" in the data
    width: 400,
  },
  {
    Header: () => {
      return <span className="">Vendor No</span>;
    },
    accessor: "vendor_no",
    maxWidth: 400,
    minWidth: 80,
    width: 300,
  },
  {
    Header: () => {
      return <span className="">Service Code</span>;
    },
    accessor: "service_code",
    width: 100,
  },
  {
    Header: "Action",
    width: 70,
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      // return <VendorNumberSetup row={row}></VendorNumberSetup>;
    },
  },
];
