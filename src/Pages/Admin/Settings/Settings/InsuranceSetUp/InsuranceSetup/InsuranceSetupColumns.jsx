import CmsInput from "./CmsInput";
import InsuranceEdit from "./InsuranceEdit";
import IsElectronic from "./IsElectronic";

export const InsuranceSetupData = [
  {
    insurance: "Anthem Blue C",
    id: "21",
  },
  {
    insurance: "Health Net",
    id: "212",
  },
  {
    insurance: "Cigna Behavioral Health",
    id: "41",
  },
  {
    insurance: "Southern Illinoi",
    id: "51",
  },
  {
    insurance: "Blue Cross Blue Shield TX",
    id: "81",
  },
];

export const InsuranceSetupColumn = [
  {
    Header: () => {
      return <span className="">Insurance</span>;
    },
    accessor: "insurance", // accessor is the "key" in the data
  },
  {
    Header: "Is Electronic",
    Cell: ({ row }) => {
      // console.log(row);
      return <IsElectronic row={row}></IsElectronic>;
    },
  },
  {
    Header: "Cms1500 31",
    Cell: ({ row }) => {
      // console.log(row);
      return <CmsInput row={row}></CmsInput>;
    },
  },
  {
    Header: "Cms1500 32a",
    Cell: ({ row }) => {
      // console.log(row);
      return <CmsInput row={row}></CmsInput>;
    },
  },
  {
    Header: "Cms1500 32b",
    Cell: ({ row }) => {
      // console.log(row);
      return <CmsInput row={row}></CmsInput>;
    },
  },
  {
    Header: "Cms1500 33a",
    Cell: ({ row }) => {
      // console.log(row);
      return <CmsInput row={row}></CmsInput>;
    },
  },
  {
    Header: "Cms1500 33b",
    Cell: ({ row }) => {
      // console.log(row);
      return <CmsInput row={row}></CmsInput>;
    },
  },
  {
    Header: "Active",
    Cell: ({ row }) => {
      // console.log(row);
      return <IsElectronic row={row}></IsElectronic>;
    },
  },
];
