import { useEffect, useState } from "react";
import usePatient from "../../../CustomHooks/usePatient";
import { ColumnFilter } from "../Settings/SettingComponents/FilterBox";
import PatientAuthAction from "./PatientAuthAction";
import PatientAuthorizationsTableActionModal from "./PatientAuthorizationsTableActionModal";
import PatientName from "./PatientName";
import PatientStatusAction from "./PatientStatusAction";
import { useQuery } from "@tanstack/react-query";

export const TableQuery = () => {
  const [tableData, setTableData] = useState(null);

  const {
    isLoading,
    error,
    data: patients,
  } = useQuery(["patientsData"], () =>
    fetch("https://ovh.therapypms.com/api/v1/admin/ac/patient", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYzhkOTM0NTUwYWI2Mzk0OTgzMmM4MDA4MTJjODIyYmNlMTNhNzkwYjdmZGZhMzhkYmQyNzllYTJmY2ZhZmRkNjNjNmQ1MTZiZTkyMTJkMjIiLCJpYXQiOjE2NTk2MDMwMDMuMjU5MDIzOTA0ODAwNDE1MDM5MDYyNSwibmJmIjoxNjU5NjAzMDAzLjI1OTAyNzAwNDI0MTk0MzM1OTM3NSwiZXhwIjoxNjkxMTM5MDAzLjI1NzkyOTA4NjY4NTE4MDY2NDA2MjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.UMDDJuxIwkgK3vYtcfKoRmcn4pj9tq3vBiaf0m2zz7ndkYsLVAWS5o6IXCnYZCwMV93u7tankgRn7Ap8nLs4Cl5vAQevBQlYF8EoU8e267uP0xyJrEfiGzhM6BzpeSQ3FAG-8o0kQQcadMpyceBmDKfpqfXbHmKR2UcGH0dYqoxOS7HbMEAKmdJmhLuau4vwZqRszk0_thCgSV3ingOG5GZx9aGO4heEPau1WKlvIfmhid2mf4ea9Aa7mvzh_zGsAXvzxKP85gcwlw_N0ZvY8yDGEiphEHkrVHCzgUjZKFT6tk_YYHRBDJSIXQ1RLNOVoZGsxQxHf_Au9yB06Ps-9tpH_64bpXf3ubm1gzO7d9mcZpe0I-_uCVRIKZ_nlgmiolBrkPIc31ZClUs5cGcV-UCHJX21kEkCnXKeie4tCwK9Solb0Fqm5n1gmsgNniCj4rsmRFVuplUJsBneCn0EFawcWDEcroITS6I2AyJtCtW8Ycx35jBC0blnRz3j0EcXYcJPTmbXiCzLLn-J3R-fx9v_2BTPLTexTA71BWqQhK_zBNs4qQAcrjBA0BuxabWmlvLNiEVwAi4heikxcd_sB148DYNWCxuwV3op2EvN1ImdDZEVaW9YemIzQSdL53ZEnWsfmIJSsoodE-tHv1zeCPEVSI3DjSpHOeTOl0Vy-c4",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      })
  );

  useEffect(() => {
    setTableData(patients?.clients?.data);
  }, [patients]);
  console.log("tableData", tableData);
};
export const PatientsColumnsData = [
  {
    id: "12",
    Patient: "April TestP",
    contact_info: "(987)-654-3210",
    provider: "ana",
  },
  {
    id: "13",
    Patient: "Hello goodbye",
    contact_info: "(987)-654-3210",
    provider: "jhiuyuy",
  },
  {
    id: "14",
    Patient: "Mickey Mouse",
    contact_info: "(987)-654-3210",
    provider: "ZZxxzcsaase",
  },
];

export const PatientsColumnsColumn = [
  {
    Header: "Patient",
    Cell: ({ row }) => {
      return <PatientName row={row}></PatientName>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">Contact Info</span>;
    },
    accessor: "client_full_name",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">DOB</span>;
    },
    accessor: "client_dob",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">Gender</span>;
    },
    accessor: "client_gender",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">SUPV. Provider</span>;
    },
    accessor: "supervisor_name",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">POS</span>;
    },
    accessor: "location",
    Filter: ColumnFilter,
  },
  {
    Header: () => {
      return <span className="">Insurance</span>;
    },
    accessor: "insurance",
    Filter: ColumnFilter,
  },
  {
    Header: "Auth",
    Cell: ({ row }) => {
      return <PatientAuthAction row={row}></PatientAuthAction>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Status",
    Cell: ({ row }) => {
      return <PatientStatusAction row={row}></PatientStatusAction>;
    },
    Filter: ColumnFilter,
  },
];
export const PatientsAuthorizationsTableData = [
  {
    id: "12",
    description: "April TestP",
    contact_info: "(987)-654-3210",
    treatment_type: "ana",
  },
  {
    id: "13",
    description: "Hello goodbye",
    contact_info: "(987)-654-3210",
    treatment_type: "jhiuyuy",
  },
  {
    id: "14",
    description: "Mickey Mouse",
    contact_info: "(987)-654-3210",
    treatment_type: "ZZxxzcsaase",
  },
];

export const PatientsAuthorizationsTableColumn = [
  {
    Header: () => {
      return <span className="">Description</span>;
    },
    accessor: "description",
  },
  {
    Header: () => {
      return <span className="">Onset Date</span>;
    },
    accessor: "onset_date",
  },
  {
    Header: () => {
      return <span className="">End Date</span>;
    },
    accessor: "end_date",
  },
  {
    Header: () => {
      return <span className="">Primary Insurance</span>;
    },
    accessor: "primary_insurance",
  },
  {
    Header: () => {
      return <span className="">Treatment Type</span>;
    },
    accessor: "treatment_type",
  },
  {
    Header: () => {
      return <span className="">UCI</span>;
    },
    accessor: "uci",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      return (
        <PatientAuthorizationsTableActionModal
          row={row}
        ></PatientAuthorizationsTableActionModal>
      );
    },
  },
];
