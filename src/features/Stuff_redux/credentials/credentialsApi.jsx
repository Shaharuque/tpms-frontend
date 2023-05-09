//stuff crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const credentialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get staff credentials
    getCredentials: builder.query({
      query: ({ token, page, id }) => ({
        url: `/provider/credential/list`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ page, id }),
      }),
      providesTags: ["Credentials"],
    }),

    //Add staff credential
    addCredential: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/provider/credential/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
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
  useGetCredentialsQuery,
  useAddCredentialMutation,
  useUpdateCredentialMutation,
  useGetcredentialinfoQuery,
} = credentialApi;
