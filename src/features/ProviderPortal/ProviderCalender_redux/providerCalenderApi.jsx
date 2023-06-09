import { apiSlice } from "../../api/apiSlice";
export const providerCalenderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all event calendar(individual patient)
    getProviderCalenderEvents: builder.query({
      query: ({ token, payload }) => ({
        url: `/provider/calender/get/all/events`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //get single session data
    singleEventData: builder.mutation({
      query: ({ token, payload }) => ({
        url: `/patient/my/calender/get/single/data`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useGetProviderCalenderEventsQuery, useSingleEventDataMutation } = providerCalenderApi;
