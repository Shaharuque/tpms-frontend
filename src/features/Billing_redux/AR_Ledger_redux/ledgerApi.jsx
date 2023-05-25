import { apiSlice } from "../../api/apiSlice";

export const ledgerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Ledger Get Patients
    getLedgerPatients: builder.mutation({
      query: (token) => ({
        url: "/ledger/list/patient",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //Ledger Get Payor/Insurance
    getLedgerPayor: builder.mutation({
      query: (token) => ({
        url: "/ledger/list/insurance",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //Ledger Get CPT Code
    getLedgerCPT: builder.mutation({
      query: (token) => ({
        url: "/ledger/list/cpt",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //Ledger Bulk Note Save
    getLedgerTransactions: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/ledger/transaction/list",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),
    //Ledger Bulk Note Save
    bulkNoteSave: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/ledger/bulk/note/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useGetLedgerPatientsMutation, useGetLedgerPayorMutation, useGetLedgerCPTMutation, useBulkNoteSaveMutation, useGetLedgerTransactionsMutation } =
  ledgerApi;
