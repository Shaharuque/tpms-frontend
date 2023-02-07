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
      providesTags: ["OtherSetup"],
    }),

    addOtherSetup: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/other/setup/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["OtherSetup"],
    }),
  }),
});

export const { useGetOtherSetupQuery, useAddOtherSetupMutation } =
  otherSetupApi;
