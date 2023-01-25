//staff otherSetup api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const otherStaffApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //update staff department
    getOtherSetup: builder.query({
      query: ({ token, id }) => ({
        url: `/admin/ac/staff/other/setup/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useGetOtherSetupQuery } = otherStaffApi;
