import { apiSlice } from "../../api/apiSlice";
export const myCalenderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all event calendar(individual patient)
    getMyCalenderEvents: builder.query({
      query: ({ token, payload }) => ({
        url: `/patient/my/calender/get/data`,
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

export const { useGetMyCalenderEventsQuery, useSingleEventDataMutation } = myCalenderApi;
