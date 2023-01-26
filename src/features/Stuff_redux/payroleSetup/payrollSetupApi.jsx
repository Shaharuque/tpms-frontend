//payrold crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const payrollApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //staff payroll get
    getPayrolls: builder.query({
      query: ({ token, page, id }) => ({
        url: `admin/ac/staff/payroll/get/${id}?page=${page}`,
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
    //get staff payroll table individual data
    getpayrollinfo: builder.query({
      query: ({ token, id, payload }) => ({
        url: `admin/ac/staff/payroll/single/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["Payroll"],
    }),
    //Update staff credential info
    updatePayroll: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/payroll/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Payroll"],
    }),
    //Delete payroll (individual)
    deletePayroll: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/payroll/delete",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Payroll"],
    }),
    //Delete payroll (Bulk Delete)
    bulkDeletePayroll: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/payroll/bulk/delete",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Payroll"],
    }),
  }),
});

export const {
  useGetPayrollsQuery,
  useAddPayrollMutation,
  useGetpayrollinfoQuery,
  useUpdatePayrollMutation,
  useDeletePayrollMutation,
  useBulkDeletePayrollMutation,
} = payrollApi;