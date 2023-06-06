//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const nameLocationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Name Lcoation Api
    getNameLocation: builder.query({
      query: (token) => ({
        url: `inadmin/setting/get/name/location`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["nameLocation"],
    }),
  }),
});

export const { useGetNameLocationQuery } = nameLocationApi;
