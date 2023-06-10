//stuff crud operatios api will be handled here

import { providerIp } from "../../../Misc/BaseClient";
import { apiSlice } from "../../api/apiSlice";

export const ProviderCredentialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get staff credentials
    getProviderCredentials: builder.query({
      query: ({ token, page = 1 }) => ({
        url: `provider/cred/get/credentials`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ page }),
      }),
      providesTags: ["Credentials"],
    }),

    //Add staff credential
    addProviderCredential: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/credentials/save",
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
    getProvidercredentialinfo: builder.query({
      query: ({ token, id }) => ({
        url: `provider/cred/credentials/single/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["Credentials"],
    }),
    //Update staff credential info
    updateProviderCredential: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/credentials/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Credentials"],
    }),
    //Delete staff credential info
    deleteProviderCredential: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/credentials/delete",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Credentials"],
    }),
  }),
});

export const {
  useGetProviderCredentialsQuery,
  useAddProviderCredentialMutation,
  useDeleteProviderCredentialMutation,
  useUpdateProviderCredentialMutation,
  useGetProvidercredentialinfoQuery,
} = ProviderCredentialApi;
