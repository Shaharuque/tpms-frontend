import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://stagapi.therapypms.com/api/internaladmin/",
    baseUrl: "http://localhost:8080/api/v1/internaladmin/",
    // prepareHeaders: (headers, { getState, endpoint }) => {
    //   const token = getState()?.authInfo?.accessToken;
    //   console.log(token);
    //   if (token) {
    //     headers.set("Authorization", token);
    //   }

    //   return headers;
    // },
  }),
  tagTypes: [
    "Payperiods",
    "StuffTable",
    "ContactInfo",
    "Staff",
    "Credentials",
    "Clearence",
    "Qualification",
    "Payroll",
    "LeaveTrack",
    "Staff_SubActivity",
    "PatientExclusion",
    "Insurance",
    "PatientAuthorization",
    "PatientAuthorizationTable",
    "PatientAuthorizationActivity",
    "IndividualActivity",
    "ManageSession",
    "Documents",
    "OtherSetup",
  ],
  endpoints: (builder) => ({}),
});
