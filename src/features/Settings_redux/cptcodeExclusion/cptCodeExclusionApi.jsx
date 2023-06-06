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
        url: `inadmin/setting/available/cpt/codes`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        cache: "no-cache",
      }),
      providesTags: ["availableCptCodes"],
    }),

    //Facility Selected Treatment Api
    excludedCptCodes: builder.query({
      query: ({ token }) => ({
        url: `inadmin/setting/excluded/cpt/codes`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        cache: "no-cache",
      }),
      providesTags: ["excludedCptCodes"],
    }),

    // add
    addCptExclusion: builder.mutation({
      query: ({ token, data }) => ({
        url: `inadmin/setting/add/cpt/exclusion`,
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
        url: `inadmin/setting/remove/cpt/exclusion`,
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

export const { useAddCptExclusionMutation, useExcludedCptCodesQuery, useRemoveCptExclusionMutation, useAvailableCptCodesQuery } = cptcodeExclusionApi;
