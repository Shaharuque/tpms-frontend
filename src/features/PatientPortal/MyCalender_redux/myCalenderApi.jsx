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
      //  providesTags: ["PatientAuthorizationTable"],
    }),

    // get single session
    // singleAppointmentApi: builder.query({
    //   query: ({ token, payload }) => ({
    //     url: `/inadmin/calender/single/appointment`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       "x-auth-token": token,
    //     },
    //     body: JSON.stringify(payload),
    //   }),
    //   //   providesTags: ["PatientAuthorizationTable"],
    // }),
  }),
});

export const { useGetMyCalenderEventsQuery } = myCalenderApi;
