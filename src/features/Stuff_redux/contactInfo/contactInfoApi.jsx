import { apiSlice } from "../../api/apiSlice";

export const staffInfoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get staff table and emergency table data
    getAllStaff: builder.query({
      //staffContactInfo
      query: ({ token, id }) => ({
        url: `admin/ac/staff/contact/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["ContactInfo"],
    }),

    //   addContactInfo  staff contact info
    addContactInfo: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/staff/contact/details/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["ContactInfo"],
    }),

    //   add Emergency contact info
    addEmergencyContactInfo: builder.mutation({
      query: ({ token, payload }) => ({
        url: `/admin/ac/staff/emergency/contact/details/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["ContactInfo"],
    }),
  }),
});

export const {
  useGetAllStaffQuery,
  useAddContactInfoMutation,
  useAddEmergencyContactInfoMutation,
} = staffInfoApi;
