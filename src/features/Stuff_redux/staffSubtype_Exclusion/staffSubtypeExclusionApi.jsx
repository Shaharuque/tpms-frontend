//staff sub-type exclusions api
import { apiSlice } from "../../api/apiSlice";

const staffSubActivityExclusionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //  get all staff subtypes
    getAllSubActivity: builder.query({
      query: ({ token, payload }) => ({
        url: `/provider/all/service/subtype`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["serviceSubtype"],
    }),
    //  get all assigned sub-activity
    getAssignedSubtype: builder.query({
      query: ({ token, payload }) => ({
        url: `/provider/assigned/service/subtype`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["serviceSubtype"],
    }),

    // add staff sub-activity
    addServiceSubtype: builder.mutation({
      query: ({ token, payload }) => ({
        url: `/provider/add/service/subtype`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["serviceSubtype"],
    }),

    // Delete staff sub-activity type
    deleteServiceSubtype: builder.mutation({
      query: ({ token, payload }) => ({
        url: `/provider/remove/service/subtype`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["serviceSubtype"],
    }),
  }),
});

export const { useGetAllSubActivityQuery, useGetAssignedSubtypeQuery, useAddServiceSubtypeMutation, useDeleteServiceSubtypeMutation } =
  staffSubActivityExclusionApi;
