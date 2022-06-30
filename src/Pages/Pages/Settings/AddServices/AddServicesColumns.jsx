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
      return <span className="">Tx Type</span>;
    },
    accessor: "tx_type", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <span className="">Service Type</span>;
    },
    accessor: "service_type",
  },
  {
    Header: () => {
      return <span className="">Service</span>;
    },
    accessor: "service",
  },
  {
    Header: () => {
      return <span className="">Duration</span>;
    },
    accessor: "duration",
  },
  {
    Header: () => {
      return <span className="">Mileage</span>;
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
