import { apiSlice } from "../../api/apiSlice";

export const ProviderClearenceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get clearence api
    ProvidergetClearence: builder.query({
      query: ({ token, page = 1 }) => ({
        url: `provider/cred/get/clearance`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ page }),
      }),
      providesTags: ["Clearence"],
    }),
    //get staff clearence table individual data
    ProviderclearenceInfo: builder.query({
      query: ({ token, id }) => ({
        url: `provider/cred/clearance/single/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["Clearence"],
    }),
    //Add staff clearence
    ProvideraddClearence: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/clearance/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Clearence"],
    }),

    //Update staff clearence info
    ProviderupdateClearence: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/clearance/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Clearence"],
    }),
    //delete staff clearence
    ProviderdeleteClearance: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/clearance/delete",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Clearence"],
    }),
  }),
});

export const {
  useProvideraddClearenceMutation,
  useProviderdeleteClearanceMutation,
  useProvidergetClearenceQuery,
  useProviderclearenceInfoQuery,
  useProviderupdateClearenceMutation,
} = ProviderClearenceApi;
