//stuff table data crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const stuffDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //handle auth endpoint here
    //Get All Stuffs
    getStuffData: builder.mutation({
      query: ({ token, page }) => ({
        url: `admin/ac/setting/pay/period/get?page=${page}`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useGetStuffDataMutation } = stuffDataApi;
