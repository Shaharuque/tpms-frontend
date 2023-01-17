//stuff table data crud operatios api will be handled here
// import { apiSlice } from "../../api/apiSlice";

import { apiSlice } from "../../api/apiSlice";

export const stuffDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all stuff data
    getStaffData: builder.query({
      query: ({ token, page }) => ({
        url: `admin/ac/staff/get/all?page=${page}`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["StuffTable"],
    }),
    // update active status
    updateStatus: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/active/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["StuffTable"],
    }),
  }),
});

export const { useGetStaffDataQuery, useUpdateStatusMutation } = stuffDataApi;
