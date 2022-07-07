export const PatientStatementColumnData = [
  {
    first_Name: "Jamey",
    last_name: "Cook",
    dob: "04/06/2021",
    guarantor: "Peter Brows",
  },
  {
    first_Name: "Minnie",
    last_name: "Mouse",
    dob: "04/06/2021",
    guarantor: "Mathew Greg",
  },
  {
    first_Name: "Minnie",
    last_name: "Mouse",
    dob: "04/06/2021",
    guarantor: "Mathew Greg",
  },
  {
    first_Name: "Minnie",
    last_name: "Mouse",
    dob: "04/06/2021",
    guarantor: "Mathew Greg",
  },
  {
    first_Name: "Minnie",
    last_name: "Mouse",
    dob: "04/06/2021",
    guarantor: "Mathew Greg",
  },
];

export const PatientStatementColumnColumn = [
  {
    Header: () => {
      return <span className="">First Name</span>;
    },
    accessor: "first_Name", // accessor is the "key" in the data
  },
  {
    Header: () => {
      return <span className="">Last Name</span>;
    },
    accessor: "last_name",
  },
  {
    Header: () => {
      return <span className="">DOB</span>;
    },
    accessor: "dob",
  },
  {
    Header: () => {
      return <span className="">Guarantor</span>;
    },
    accessor: "guarantor",
  },
];
