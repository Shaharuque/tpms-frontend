import PlaceOfServicesAction from "./PlaceOfServicesAction";

export const ServiceColumnData = [
  {
    place_of_Service: "new one pos",
    service_code: "44",
  },
  {
    place_of_Service: "new pos",
    service_code: "33",
  },
  {
    place_of_Service: "Telehealth in Home",
    service_code: "10",
  },
  {
    place_of_Service: "Community Mental Health Center",
    service_code: "53",
  },
  {
    place_of_Service: "Telehealth",
    service_code: "02",
  },
  {
    place_of_Service: "Others",
    service_code: "99",
  },
  {
    place_of_Service: "Home",
    service_code: "12",
  },
  {
    place_of_Service: "Office",
    service_code: "11",
  },
  {
    place_of_Service: "School",
    service_code: "03",
  },
];

export const ServiceColumn = [
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Place Of Services</div>;
    },
    accessor: "place_of_Service", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <div className=" mt-5 min-w-[120px]">Place of Service Code</div>;
    },
    accessor: "service_code",
  },

  {
    Header: "Action",
    Cell: ({ row }) => {
      // the value is 'this is a test'
      // console.log(row);
      return <PlaceOfServicesAction row={row}></PlaceOfServicesAction>;
    },
  },
];
