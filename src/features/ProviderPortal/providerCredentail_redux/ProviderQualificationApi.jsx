import { apiSlice } from "../../api/apiSlice";

export const ProviderQualificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get qualification
    ProvidergetQualification: builder.query({
      query: ({ token, page, id }) => ({
        url: `provider/cred/qualification/list`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ page, id }),
      }),
      providesTags: ["Qualification"],
    }),
    //Add qualification
    ProvideraddQualification: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/qualification/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Qualification"],
    }),
    //get qualification table individual data
    ProvidergetQualificationInfo: builder.query({
      query: ({ token, id }) => ({
        url: `provider/cred/single/qualification/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["Qualification"],
    }),
    //Update qualification info
    ProviderupdateQualification: builder.mutation({
      query: ({ token, payload }) => ({
        url: "provider/cred/qualification/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Qualification"],
    }),
    //Delete qualification by id
    ProviderdeleteQualification: builder.mutation({
      query: ({ token, payload }) => ({
        url: `provider/cred/qualification/delete`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Qualification"],
    }),
  }),
});

export const {
  useProvideraddQualificationMutation,
  useProvidergetQualificationInfoQuery,
  useProviderupdateQualificationMutation,
  useProviderdeleteQualificationMutation,
  useProvidergetQualificationQuery,
} = ProviderQualificationApi;
