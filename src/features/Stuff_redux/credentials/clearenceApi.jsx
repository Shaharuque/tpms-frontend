//stuff crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const clearenceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get clearence api
    getClearence: builder.query({
      query: ({ token, page = 3, id }) => ({
        url: `admin/ac/staff/clearance/all/${id}?page=1`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Clearence"],
    }),
    //get staff clearence table individual data
    clearenceInfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/staff/clearance/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Clearence"],
    }),
    //Add staff clearence
    addClearence: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/clearance/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Clearence"],
    }),

    //Update staff clearence info
    updateClearence: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/clearance/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
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
} = clearenceApi;
