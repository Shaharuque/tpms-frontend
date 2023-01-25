import { apiSlice } from "../../api/apiSlice";

//
const leaveTrackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // leave tracking get All data
    getLeaveTracking: builder.query({
      query: ({ payload, token }) => ({
        url: `admin/ac/staff/leave/tracking`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["LeaveTrack"],
    }),
    //Staff leave Tracking Update
    addLeaveTracking: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/leave/tracking/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["LeaveTrack"],
    }),
  }),
});

export const { useGetLeaveTrackingQuery, useAddLeaveTrackingMutation } =
  leaveTrackApi;
