//payperiod related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const payPeriodApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //handle auth endpoint here
    payperiods: builder.query({
      query: ({ token, page }) => ({
        url: `admin/ac/setting/pay/period/get?page=${page}`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Payperiods"],
    }),
    //add payperiod api
    addPayperiod: builder.mutation({
      query: ({ token, data }) => ({
        url: `admin/ac/setting/pay/period/save`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Payperiods"],
    }),
    //update payperiod
    updatePayperiod: builder.mutation({
      query: ({ token, data }) => ({
        url: `/admin/ac/setting/pay/period/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Payperiods"],
    }),
  }),
});

export const {
  usePayperiodsQuery,
  useAddPayperiodMutation,
  useUpdatePayperiodMutation,
} = payPeriodApi;
