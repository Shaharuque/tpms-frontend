import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-prod.therapypms.com/api/v1/",
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
  ],
  endpoints: (builder) => ({}),
});
