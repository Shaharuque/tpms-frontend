//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const holidaySetupAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllHoliday: builder.query({
      query: ({ token }) => ({
        url: `setting/all/holiday`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["allHoliday"],
    }),

    holidayAdd: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/new/holiday/save`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["allHoliday"],
    }),

    holidayDelete: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/holiday/delete`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["allHoliday"],
    }),

    // holid day update

    holidayUpdate: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/federal/holiday/save`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["allHoliday"],
    }),
  }),
});

export const {
  useGetAllHolidayQuery,
  useHolidayAddMutation,
  useHolidayDeleteMutation,
  useHolidayUpdateMutation,
} = holidaySetupAPi;
