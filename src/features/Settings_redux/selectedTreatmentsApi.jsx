//conversation related apis will be handled here

import { apiSlice } from "../api/apiSlice";

export const selectedTreatmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //handle auth endpoint here
    selectedTreatments: builder.query({
      query: () => "get/selected/treatment",
    }),
  }),
});

export const { useSelectedTreatmentsQuery } = selectedTreatmentsApi;
