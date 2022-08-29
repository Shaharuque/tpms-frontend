import VendorNumberSetup from "../VendorNumberSetup";

export const VendorNumberSetupData = [];

export const VendorNumberSetupColumns = [
  {
    Header: () => {
      return <span className="">Services</span>;
    },
    accessor: "service", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <span className="">Vendor No</span>;
    },
    accessor: "vendor_no",
  },
  {
    Header: () => {
      return <span className="">Service Code</span>;
    },
    accessor: "service_code",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return <VendorNumberSetup row={row}></VendorNumberSetup>;
    },
  },
];
