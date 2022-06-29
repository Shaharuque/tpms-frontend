import ReferringProviderAction from "./ReferringProviderAction";

export const ReferringProviderData = [
  {
    provider_first_name: "Cruz",
    provider_last_name: "Herman",
    npi: "111",
    upin: "1111",
  },
  {
    provider_first_name: "Harriet",
    provider_last_name: "Burris",
    npi: "11",
    upin: "11",
  },
  {
    provider_first_name: "Knox Hahn",
    provider_last_name: "Charles",
    npi: "123123213",
    upin: "123121",
  },
  {
    provider_first_name: "Michelle",
    provider_last_name: "Hardy",
    npi: "111",
    upin: "11",
  },
  {
    provider_first_name: "Harriet",
    provider_last_name: "Burris",
    npi: "11",
    upin: "11",
  },
  {
    provider_first_name: "Knox Hahn",
    provider_last_name: "Charles",
    npi: "123123213",
    upin: "123121",
  },
  {
    provider_first_name: "Michelle",
    provider_last_name: "Hardy",
    npi: "111",
    upin: "11",
  },
];

export const ReferringProviderColumn = [
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Provider First Name</div>;
    },
    accessor: "provider_first_name", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Provider Last Name</div>;
    },
    accessor: "provider_last_name",
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">NPI</div>;
    },
    accessor: "npi",
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">UPIN</div>;
    },
    accessor: "upin",
  },

  {
    Header: "Action",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return <ReferringProviderAction row={row}></ReferringProviderAction>;
    },
  },
];
