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

    // add
    addTreatment: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/add/treatment/facility`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["AllTreatments", "selectedTreatments"],
    }),

    //  delete
    deleteTreatment: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/remove/treatment/facility/`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["AllTreatments", "selectedTreatments"],
    }),
  }),
});

export const {
  useGetAllTreatmentsQuery,
  useGetAllSelectedTreatmentsQuery,
  useAddTreatmentMutation,
  useDeleteTreatmentMutation,
} = addTreatmentApi;
