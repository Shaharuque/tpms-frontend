//payrold crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const payrollApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //staff payroll get
    getPayrolls: builder.query({
      query: ({ token, page = 3, id }) => ({
        url: `admin/ac/staff/payroll/get/${id}?page=1`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Payroll"],
    }),
    //Add staff payroll
    addPayroll: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/payroll/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Payroll"],
    }),
    // //get staff credential table individual data
    // getcredentialinfo: builder.query({
    //   query: ({ token, id }) => ({
    //     url: `admin/ac/staff/credential/info/${id}`,
    //     method: "GET",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //   }),
    //   providesTags: ["Credentials"],
    // }),
    // //Update staff credential info
    // updateCredential: builder.mutation({
    //   query: ({ token, payload }) => ({
    //     url: "admin/ac/staff/credential/update",
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(payload),
    //   }),
    //   invalidatesTags: ["Credentials"],
    // }),
  }),
});

export const { useGetPayrollsQuery, useAddPayrollMutation } = payrollApi;
