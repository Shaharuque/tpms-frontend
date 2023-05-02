//Global Search related apis will be handled here
import { apiSlice } from "../../api/apiSlice";

export const GlobalSearchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // add
    InsuranceSearch: builder.query({
      query: ({ token, data }) => ({
        url: `setting/get/all/insurance/search`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      // invalidatesTags: [],
    }),
  }),
});

export const { useInsuranceSearchQuery } = GlobalSearchApi;
