import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-prod.therapypms.com/api/v1/admin/ac/setting/",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = await getState()?.authInfo?.accessToken;
      console.log(token);
      if (token) {
        headers.set("Authorization", token);
        // headers.set("Accept", "Application/json");
      }

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
