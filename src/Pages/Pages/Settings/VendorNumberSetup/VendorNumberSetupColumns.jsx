import VendorNumberSetup from "../VendorNumberSetup";

export const VendorNumberSetupData = [];

export const VendorNumberSetupColumns = [
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Services</div>;
    },
    accessor: "service", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Vendor No</div>;
    },
    accessor: "vendor_no",
  },
  {
    Header: () => {
      return <div className=" mt-5  min-w-[150px]">Service Code</div>;
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
