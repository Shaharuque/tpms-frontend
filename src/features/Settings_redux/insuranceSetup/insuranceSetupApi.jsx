//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const insuranceSetupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //All Treatment Api
    getAllInsuranceSetup: builder.query({
      query: ({ token, data }) => ({
        url: `setting/get/all/insurance/details`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      providesTags: ["insuranceSetup"],
    }),

    //get selected individual insurance details
    getPayorSetupDetails: builder.query({
      query: ({ token, data }) => ({
        url: `/setting/get/insurance/setup/details`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      providesTags: ["individualInsuranceSetupDetails"],
      invalidatesTags: ["insuranceSetup"],
    }),

    updateBox33InsuranceSetup: builder.mutation({
      query: ({ token, data }) => ({
        url: `/setting/payorsetup/box33/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["insuranceSetup", "individualInsuranceSetupDetails"],
    }),

    updateBox32InsuranceSetup: builder.mutation({
      query: ({ token, data }) => ({
        url: `/setting/payorsetup/box32/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["insuranceSetup", "individualInsuranceSetupDetails"],
    }),

    updateInsuranceTable: builder.mutation({
      query: ({ token, data }) => ({
        url: `/setting/update/insurance/table/data`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["insuranceSetup", "individualInsuranceSetupDetails"],
    }),

    // update

    payorSetupDetailsUpdate: builder.mutation({
      query: ({ token, data }) => ({
        url: `/setting/payor/setup/details/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["insuranceSetup", "individualInsuranceSetupDetails"],
    }),

    // //  delete
    // deleteTreatment: builder.mutation({
    //   query: ({ token, data }) => ({
    //     url: `setting/remove/treatment/facility/`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       "x-auth-token": token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   invalidatesTags: ["AllTreatments", "selectedTreatments"],
    // }),
  }),
});

export const {
  useGetAllInsuranceSetupQuery,
  usePayorSetupDetailsUpdateMutation,
  useGetPayorSetupDetailsQuery,
  useUpdateBox33InsuranceSetupMutation,
  useUpdateBox32InsuranceSetupMutation,
  useUpdateInsuranceTableMutation,
} = insuranceSetupApi;
