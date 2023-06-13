import { apiSlice } from "../../api/apiSlice";

//
const ProviderleaveTrackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // leave tracking get All data
    ProvidergetLeaveTracking: builder.query({
      query: ({ payload, token }) => ({
        url: `provider/cred/leave/tracking`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["LeaveTrack"],
    }),
    //Staff leave Tracking Update
    ProvideraddLeaveTracking: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/leave/tracking/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["LeaveTrack"],
    }),

    // delete leave tracking
    ProviderDeleteLeaveTracking: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/leave/delete",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["LeaveTrack"],
    }),
  }),
});

export const { useProvidergetLeaveTrackingQuery, useProvideraddLeaveTrackingMutation, useProviderDeleteLeaveTrackingMutation } = ProviderleaveTrackApi;
