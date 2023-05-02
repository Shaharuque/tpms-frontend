//Add Treatment related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const cptcodeExclusionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // search treatment
    // TreatmentSearch: builder.query({
    //   query: ({ token, data }) => ({
    //     url: `setting/get/all/treatment/search`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       "x-auth-token": token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   providesTags: ["SearchTretment"],
    // }),

    // search treatment search
    // SearchSelectedTreatment: builder.query({
    //   query: ({ token, data }) => ({
    //     url: `setting/get/all/Selectedtreatment/search`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       "x-auth-token": token,
    //     },
    //     body: JSON.stringify(data),
    //   }),
    //   providesTags: ["SearchSelectedTretment"],
    // }),

    //All Treatment Api
    availableCptCodes: builder.query({
      query: ({ token }) => ({
        url: `setting/available/cpt/codes`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["availableCptCodes"],
    }),

    //Facility Selected Treatment Api
    excludedCptCodes: builder.query({
      query: ({ token }) => ({
        url: `setting/excluded/cpt/codes`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["excludedCptCodes"],
    }),

    // add
    addCptExclusion: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/add/cpt/exclusion`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [
        "availableCptCodes",
        "excludedCptCodes",
        // "SearchSelectedTretment",
        // "selectedTreatments",
        // "SearchTretment",
      ],
    }),

    //  delete
    removeCptExclusion: builder.mutation({
      query: ({ token, data }) => ({
        url: `setting/remove/cpt/exclusion`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [
        "availableCptCodes",
        "excludedCptCodes",
        // "SearchTretment",
        // "SearchSelectedTretment",
      ],
    }),
  }),
});

export const {
  useAddCptExclusionMutation,
  useExcludedCptCodesQuery,
  useRemoveCptExclusionMutation,
  useAvailableCptCodesQuery,
} = cptcodeExclusionApi;
