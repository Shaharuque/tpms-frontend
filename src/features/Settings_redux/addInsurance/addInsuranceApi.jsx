//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const addInsurancApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // search treatment
    AllInsurance: builder.query({
      query: ({ token, data }) => ({
        url: `setting/get/all/insurance/search`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      providesTags: ["AllInsunrace"],
    }),

    //All Treatment Api
    facilityselectedInsurance: builder.query({
      query: ({ token, data }) => ({
        url: `setting/get/facility/selected/insurance`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      providesTags: ["SELECTEDINSURANCE"],
    }),

    //Facility Selected Treatment Api
    // getAllSelectedInsurance: builder.query({
    //   query: ({ token }) => ({
    //     url: `setting/get/all/facility/treatment`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       "x-auth-token": token,
    //     },
    //   }),
    //   providesTags: ["selectedInsurance"],
    // }),

    // add
    addInsurance: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/add/insurance/facility`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["SELECTEDINSURANCE", "AllInsunrace"],
    }),

    //  delete
    deleteInsurance: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/delete/insurance/facility`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["SELECTEDINSURANCE", "AllInsunrace"],
    }),

    //  insurance Details
    insuranceDetail: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/all/insurance/details`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      // invalidatesTags: ["SELECTEDINSURANCE", "AllInsunrace"],
      // providesTags: ["InsuranceDetail"],
    }),

    facilityInsuranceDetails: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/get/payor/selected/facility/details`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["SELECTEDINSURANCE", "AllInsunrace"],
    }),
  }),
});

export const {
  useAllInsuranceQuery,
  useFacilityselectedInsuranceQuery,
  useAddInsuranceMutation,
  useDeleteInsuranceMutation,
  useInsuranceDetailMutation,
  useFacilityInsuranceDetailsMutation,
} = addInsurancApi;
