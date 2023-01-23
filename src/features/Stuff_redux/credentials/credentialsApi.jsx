//stuff crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const credentialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get staff credentials
    getcredentials: builder.query({
      query: ({ token, page = 3, id }) => ({
        url: `admin/ac/staff/credentials/all/${id}?page=1`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Credentials"],
    }),
    //Add staff credential
    addCredential: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/credential/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Credentials"],
    }),
    //get staff credential table individual data
    getcredentialinfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/staff/credential/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Credentials"],
    }),
    //Update staff credential info
    updateCredential: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/credential/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Credentials"],
    }),
  }),
});

export const {
  useGetcredentialsQuery,
  useAddCredentialMutation,
  useUpdateCredentialMutation,
  useGetcredentialinfoQuery,
} = credentialApi;
