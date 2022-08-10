export const ExpiringAuthorizationData = [
  {
    patient: "Tushar",
  },
];

export const ExpiringAuthorizationColumn = [
  {
    Header: () => {
      return <span className="">Patient Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Patient First Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Supervisor</span>;
    },
    accessor: "Dos",
  },
  {
    Header: () => {
      return <span className="">Insurance</span>;
    },
    accessor: "CPT",
  },

  {
    Header: () => {
      return <span className="">Authorization Number</span>;
    },
    accessor: "date_billed",
  },
  {
    Header: () => {
      return <span className="">Date Authorization Expires</span>;
    },
    accessor: "allwd",
  },
];

// SelfPayClients

export const SelfPayClientsData = [
  {
    patient: "Tushar",
  },
];

export const SelfPayClientsColumn = [
  {
    Header: () => {
      return <span className="">Patient Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Patient First Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Supervisor</span>;
    },
    accessor: "Dos",
  },
];

// AuthorizationNotRequired
export const AuthorizationNotRequiredData = [
  {
    patient: "Tushar",
  },
];

export const AuthorizationNotRequiredColumn = [
  {
    Header: () => {
      return <span className="">Patient Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Patient First Name</span>;
    },
    accessor: "provider",
  },
];

// Co Pay Today
export const CoPayForTodayData = [
  {
    patient: "Tushar",
  },
];

export const CoPayForTodayColumn = [
  {
    Header: () => {
      return <span className="">Region</span>;
    },
    accessor: "region",
  },
  {
    Header: () => {
      return <span className="">Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">First Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Supervisor</span>;
    },
    accessor: "supervisor",
  },
  {
    Header: () => {
      return <span className="">Date</span>;
    },
    accessor: "date",
  },
  {
    Header: () => {
      return <span className="">CoPay</span>;
    },
    accessor: "copay",
  },
];

// AuthPlaceHolders;

export const AuthPlaceHoldersData = [
  {
    patient: "Tushar",
  },
];

export const AuthPlaceHoldersColumn = [
  {
    Header: () => {
      return <span className="">Patient Last Name</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Patient First Name</span>;
    },
    accessor: "provider",
  },
  {
    Header: () => {
      return <span className="">Supervisor</span>;
    },
    accessor: "supervisor",
  },
  {
    Header: () => {
      return <span className="">Authorization</span>;
    },
    accessor: "authorization",
  },
];
