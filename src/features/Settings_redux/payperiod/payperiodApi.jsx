//payperiod related apis will be handled here
import { apiSlice } from "../../api/apiSlice";

export const payPeriodApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //handle auth endpoint here
    payperiods: builder.query({
      query: ({ token, page }) => ({
        url: `inadmin/setting/list/pay/period`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ page }),
      }),
      providesTags: ["Payperiods"],
    }),
    //add payperiod api
    addPayperiod: builder.mutation({
      query: ({ token, data }) => ({
        url: `inadmin/setting/pay/period/add`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Payperiods"],
    }),
    //update payperiod
    updatePayperiod: builder.mutation({
      query: ({ token, data }) => ({
        url: `inadmin/setting/pay/period/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Payperiods"],
    }),
    //bulkdelete payperiod
    bulkDeletePayperiod: builder.mutation({
      query: ({ token, data }) => ({
        url: `inadmin/setting/pay/period/bulk/delete`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Payperiods"],
    }),
    //single payperiod delete
    deletePayperiod: builder.mutation({
      query: ({ token, data }) => ({
        url: `inadmin/setting/pay/period/delete`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Payperiods"],
    }),
  }),
});

export const { usePayperiodsQuery, useAddPayperiodMutation, useUpdatePayperiodMutation, useBulkDeletePayperiodMutation, useDeletePayperiodMutation } =
  payPeriodApi;
