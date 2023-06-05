import { apiSlice } from "../../api/apiSlice";

export const manageClaimApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Manage Claim Get Batch
    getBatch: builder.mutation({
      query: (token) => ({
        url: "/inadmin/pri/manage/claim/get/batchid/list",
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
        url: "/inadmin/pri/manage/claim/get/tx/provider",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),

    //Manage Claim Get Patient
    getPatient: builder.mutation({
      query: (token) => ({
        url: "/inadmin/pri/manage/claim/get/patient/list",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
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

    //Manage Claim List Data
    getManageClaimData: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/manage/claim/list",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Manage Claim List Data
    getManageClaimTransactions: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/manage/claim/list/transaction",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
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
  useGetPatientMutation,
  useGetManageClaimDataMutation,
  useGetManageClaimTransactionsMutation,
} = manageClaimApi;
