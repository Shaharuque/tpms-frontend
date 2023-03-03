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
  }),
});

export const { useGetLedgerPatientsMutation } = ledgerApi;
