import { apiSlice } from "../../api/apiSlice";

export const contactRateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //All Selected Insurance/Payor
    getAllPayors: builder.mutation({
      query: (token) => ({
        url: "/contract/rate/list/payor/facility",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      invalidatesTags: ["SELECTEDINSURANCE"],
    }),
    //All setting services get
    getAllServices: builder.mutation({
      query: (token) => ({
        url: "/contract/rate/list/setting/service",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //Get all setting sub-activity
    getAllSettingSubActivity: builder.mutation({
      query: (token) => ({
        url: "/contract/rate/list/all/suc/activity",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //Get all setting selected treatment
    getAllSelectedTreatment: builder.mutation({
      query: (token) => ({
        url: "/contract/rate/list/treatment/facility",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    // //Ledger Bulk Note Save
    // bulkNoteSave: builder.mutation({
    //   query: ({ token, payload }) => ({
    //     url: "admin/ac/ledger/bulk/note/save",
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(payload),
    //   }),
    // }),
  }),
});

export const { useGetAllPayorsMutation, useGetAllServicesMutation, useGetAllSettingSubActivityMutation, useGetAllSelectedTreatmentMutation } = contactRateApi;
