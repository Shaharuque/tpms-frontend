import { apiSlice } from "../../api/apiSlice";

export const qualificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get qualification
    getQualification: builder.query({
      query: ({ token, page = 3, id }) => ({
        url: `admin/ac/staff/qualification/all/${id}?page=1`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Qualification"],
    }),
    //Add qualification
    addQualification: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/qualification/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Qualification"],
    }),
    //get qualification table individual data
    getQualificationInfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/staff/qualification/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Qualification"],
    }),
    //Update qualification info
    updateQualification: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/qualification/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Qualification"],
    }),
    //Delete qualification by id
    deleteQualification: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/staff/qualification/delete`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Qualification"],
    }),
  }),
});

export const {
  useAddQualificationMutation,
  useGetQualificationQuery,
  useUpdateQualificationMutation,
  useDeleteQualificationMutation,
  useGetQualificationInfoQuery,
} = qualificationApi;
