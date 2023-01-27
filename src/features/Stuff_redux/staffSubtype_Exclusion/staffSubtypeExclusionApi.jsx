//staff sub-type exclusions api
import { apiSlice } from "../../api/apiSlice";

const staffSubActivityExclusionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //  get all staff subtypes
    getAllSubActivity: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/staffs/sub/activity/get/all`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["Staff_SubActivity"],
    }),
    //  get all assigned sub-activity
    getAssignedSubtype: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/staffs/sub/activity/exclusion/assign`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["Staff_SubActivity"],
    }),

    // add staff sub-activity
    addServiceSubtype: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/staffs/sub/activity/exclusion/save`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Staff_SubActivity"],
    }),

    // Delete staff sub-activity type
    deleteServiceSubtype: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/staffs/sub/activity/exclusion/delete`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Staff_SubActivity"],
    }),
  }),
});

export const {
  useGetAllSubActivityQuery,
  useGetAssignedSubtypeQuery,
  useAddServiceSubtypeMutation,
  useDeleteServiceSubtypeMutation,
} = staffSubActivityExclusionApi;
