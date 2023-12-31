//manage sessions api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const recurringSessionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Recurring Session Get Patient
    recurringGetAllInfos: builder.mutation({
      query: ({ url, token, payload }) => ({
        url: url,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      // invalidatesTags: ["ManageSession"],
    }),
  }),
});

export const { useRecurringGetAllInfosMutation } = recurringSessionApi;
