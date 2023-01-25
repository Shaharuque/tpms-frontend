import { apiSlice } from "../../api/apiSlice";

//
const leaveTrackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // leave tracking get All data
    getLeaveTracking: builder.mutation({
      query: ({ id, token }) => ({
        url: `/admin/ac/staff/leave/tracking`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify({ employee_id: id }),
      }),
      providesTags: ["LeaveTrack"],
    }),
  }),
});

export const { useGetLeaveTrackingMutation } = leaveTrackApi;
