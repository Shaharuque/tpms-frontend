//stuff table data crud operatios api will be handled here
// import { apiSlice } from "../../api/apiSlice";

import { apiSlice } from "../../api/apiSlice";

export const staffDataTableAPi = apiSlice.injectEndpoints({
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
        url: "/provider/employee/status/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["StuffTable"],
    }),
  }),
});

export const { useGetStaffDataQuery, useUpdateStatusMutation } =
  staffDataTableAPi;
