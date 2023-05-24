import { apiSlice } from "../../api/apiSlice";

export const manageClaimApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Manage Claim Get Batch
    getBatch: builder.mutation({
      query: (token) => ({
        url: "/pri/manage/claim/get/batchid/list",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //Manage Claim Get Payor/Insurance
    getPayorManageClaim: builder.mutation({
      query: (token) => ({
        url: "admin/ac/manage/claim/get/payor",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),

    //Manage Claim Get TX Provider
    getTxProviderManageClaim: builder.mutation({
      query: (token) => ({
        url: "admin/ac/manage/claim/get/tx/provider",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),

    //Manage Claim Get CMS Provider(24j Provider)
    get24jProviderManageClaim: builder.mutation({
      query: (token) => ({
        url: "admin/ac/manage/claim/get/cms/provider",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),

    //Manage Claim Get Activity Type
    getManageClaimActivity: builder.mutation({
      query: (token) => ({
        url: "admin/ac/manage/claim/get/activity/type",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useGetBatchMutation,
  useGetPayorManageClaimMutation,
  useGetTxProviderManageClaimMutation,
  useGet24jProviderManageClaimMutation,
  useGetManageClaimActivityMutation,
} = manageClaimApi;
