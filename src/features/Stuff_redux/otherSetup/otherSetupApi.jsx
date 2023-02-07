//staff other setup api will be handled here
import { apiSlice } from "../../api/apiSlice";

export const otherSetupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get staff Other Setup
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

export const { useGetOtherSetupQuery } = otherSetupApi;
