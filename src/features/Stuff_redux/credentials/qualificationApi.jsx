import { apiSlice } from "../../api/apiSlice";

export const credentialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get staff credentials
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
    //Add staff credential
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
    //get staff credential table individual data
    getQualificationInfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/staff/qualification/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
    //Update staff credential info
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
  }),
});

export const {
  useAddQualificationMutation,
  useGetQualificationQuery,
  useUpdateQualificationMutation,
  useGetQualificationInfoQuery,
} = credentialApi;
