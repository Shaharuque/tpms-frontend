//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const addTreatmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //All Treatment Api
    getAllTreatments: builder.query({
      query: ({ token }) => ({
        url: `setting/get/all/treatment`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["AllTreatments"],
    }),
    //Facility Selected Treatment Api
    getAllSelectedTreatments: builder.query({
      query: ({ token }) => ({
        url: `setting/get/all/facility/treatment`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["selectedTreatments"],
    }),
    //add payperiod api
    // addPayperiod: builder.mutation({
    //   query: ({ token, data }) => ({
    //     url: `admin/ac/setting/pay/period/save`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   invalidatesTags: ["Payperiods"],
    // }),
    // //update payperiod
    // updatePayperiod: builder.mutation({
    //   query: ({ token, data }) => ({
    //     url: `admin/ac/setting/pay/period/update`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   invalidatesTags: ["Payperiods"],
    // }),
    // //bulkdelete payperiod
    // bulkDeletePayperiod: builder.mutation({
    //   query: ({ token, data }) => ({
    //     url: `admin/ac/setting/pay/period/delete/bulk`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   invalidatesTags: ["Payperiods"],
    // }),
    // //single payperiod delete
    // deletePayperiod: builder.mutation({
    //   query: ({ token, data }) => ({
    //     url: `admin/ac/setting/pay/period/delete`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   invalidatesTags: ["Payperiods"],
    // }),
  }),
});

export const { useGetAllTreatmentsQuery, useGetAllSelectedTreatmentsQuery } =
  addTreatmentApi;
