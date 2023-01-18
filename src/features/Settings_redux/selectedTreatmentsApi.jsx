//conversation related apis will be handled here

import { apiSlice } from "../api/apiSlice";

export const selectedTreatmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //handle auth endpoint here
    // update active status
    selectedTreatments: builder.mutation({
      query: ({ token }) => ({
        url: "admin/ac/setting/subactivity/treatment/get/all",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useSelectedTreatmentsMutation } = selectedTreatmentsApi;
