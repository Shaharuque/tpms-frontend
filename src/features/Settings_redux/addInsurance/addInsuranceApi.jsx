//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const addInsurancApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // search treatment
    InsuranceSearch: builder.query({
      query: ({ token, data }) => ({
        url: `setting/get/all/treatment/search`,
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
    getAllInsurance: builder.query({
      query: ({ token }) => ({
        url: `setting/get/all/treatment`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["AllInsurance"],
    }),

    //Facility Selected Treatment Api
    getAllSelectedInsurance: builder.query({
      query: ({ token }) => ({
        url: `setting/get/all/facility/treatment`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["selectedInsurance"],
    }),

    // add
    addInsurance: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/add/treatment/facility`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["AllInsurance", "selectedInsurance", "SearchInsurance"],
    }),

    //  delete
    deleteInsurance: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/remove/treatment/facility/`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["AllInsurance", "selectedInsurance", "SearchInsurance"],
    }),
  }),
});

export const {
  useAddInsuranceMutation,
  useDeleteInsuranceMutation,
  useGetAllSelectedInsuranceQuery,
  useGetAllInsuranceQuery,
  useInsuranceSearchQuery,
} = addInsurancApi;
