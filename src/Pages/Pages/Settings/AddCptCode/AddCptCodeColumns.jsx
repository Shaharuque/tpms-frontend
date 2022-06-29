import AddCptCodeAction from "./AddCptCodeAction";

export const AddCptCodeData = [
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Physical Therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Physical Therapy",
    cpt_code: "92507",
  },
  {
    tx_type: "Physical Therapy",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Not Set",
    cpt_code: "001",
  },
  {
    tx_type: "Physical Therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Physical Therapy",
    cpt_code: "92507",
  },
  {
    tx_type: "Physical Therapy",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
  {
    tx_type: "Behavioral therapy ",
    cpt_code: "92507",
  },
];

export const AddCptCodeColumn = [
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Tx Type</div>;
    },
    accessor: "tx_type", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Cpt Code</div>;
    },
    accessor: "cpt_code",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return <AddCptCodeAction row={row}></AddCptCodeAction>;
    },
  },
];
