import { apiSlice } from "../../api/apiSlice";

export const myStatementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // paid statement api
    myPaidStatement: builder.mutation({
      query: (token) => ({
        url: `patient/my/statement/paid`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    // unpaid statement api
    myUnpaidStatement: builder.mutation({
      query: (token) => ({
        url: `patient/my/statement/unpaid`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //  my statement get data api
    myStatementGetData: builder.mutation({
      query: (token) => ({
        url: `patient/my/statement/get/data`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
  }),
});

export const { useMyPaidStatementMutation, useMyUnpaidStatementMutation, useMyStatementGetDataMutation } = myStatementApi;
