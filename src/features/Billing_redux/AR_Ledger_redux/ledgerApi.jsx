import { apiSlice } from "../../api/apiSlice";

export const ledgerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Ledger Get Patients
    getLedgerPatients: builder.mutation({
      query: (token) => ({
        url: "admin/ac/ledger/get/client",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
    //Ledger Get Payor/Insurance
    getLedgerPayor: builder.mutation({
      query: (token) => ({
        url: "admin/ac/ledger/get/payor",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
    //Ledger Get CPT Code
    getLedgerCPT: builder.mutation({
      query: (token) => ({
        url: "admin/ac/ledger/get/cpt/code",
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
  useGetLedgerPatientsMutation,
  useGetLedgerPayorMutation,
  useGetLedgerCPTMutation,
} = ledgerApi;
