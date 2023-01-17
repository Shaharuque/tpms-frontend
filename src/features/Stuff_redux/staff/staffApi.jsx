//stuff crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const staffApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get staff info id wise
    getInfo: builder.query({
      query: ({ token, id }) => ({
        url: `/admin/ac/staff/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
    //Create Stuff
    createStuff: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/create",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useCreateStuffMutation, useGetInfoQuery } = staffApi;
