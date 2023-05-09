//stuff crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const clearenceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get clearence api
    getClearence: builder.query({
      query: ({ token, page, id }) => ({
        url: `/provider/clearance/list`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ page, id }),
      }),
      providesTags: ["Clearence"],
    }),
    //get staff clearence table individual data
    clearenceInfo: builder.query({
      query: ({ token, id }) => ({
        url: `/provider/single/clearance/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["Clearence"],
    }),
    //Add staff clearence
    addClearence: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/provider/clearance/save",
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
    updateClearence: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/provider/clearance/update",
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
    deleteClearance: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/provider/clearance/delete",
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
  useAddClearenceMutation,
  useUpdateClearenceMutation,
  useGetClearenceQuery,
  useClearenceInfoQuery,
  useDeleteClearanceMutation,
} = clearenceApi;
