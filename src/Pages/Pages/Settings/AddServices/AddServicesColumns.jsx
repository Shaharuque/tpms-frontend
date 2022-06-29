import AddServicesAction from "./AddServicesAction";

export const AddServicesData = [
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "15",
    milage: "1",
  },
  {
    tx_type: "Not Set",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "21",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "15",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
  {
    tx_type: "Physical Therapy",
    service_type: "Billable",
    cpt_code: "001",
    service: "ph 5",
    duration: "5",
    milage: "1",
  },
];

export const AddServiceColumn = [
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Tx Type</div>;
    },
    accessor: "tx_type", // accessor is the "key" in the data
    service_type: "Billable",
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Service Type</div>;
    },
    accessor: "service_type",
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Service</div>;
    },
    accessor: "service",
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Duration</div>;
    },
    accessor: "duration",
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Mileage</div>;
    },
    accessor: "milage",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return <AddServicesAction row={row}></AddServicesAction>;
    },
  },
];
