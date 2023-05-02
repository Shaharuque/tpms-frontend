//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const addInsurancApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // search treatment
    InsuranceSearch: builder.query({
      query: ({ token, data }) => ({
        url: `setting/get/all/insurance/search`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      providesTags: ["SearchInsurance"],
    }),

    //All Treatment Api
    selectedInsurance: builder.query({
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
      invalidatesTags: ["SELECTEDINSURANCE", "SearchInsurance"],
    }),

    //  delete
    // deleteInsurance: builder.mutation({
    //   query: ({ token, data }) => ({
    //     url: `setting/remove/treatment/facility/`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       "x-auth-token": token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   invalidatesTags: ["AllInsurance", "selectedInsurance", "SearchInsurance"],
    // }),
  }),
});

export const {
  useInsuranceSearchQuery,
  useSelectedInsuranceQuery,
  useAddInsuranceMutation,
} = addInsurancApi;
