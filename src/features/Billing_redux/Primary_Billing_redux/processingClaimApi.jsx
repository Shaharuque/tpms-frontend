import { apiSlice } from "../../api/apiSlice";

export const ProcessingClaimApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get staff table and emergency table data
    // PayorByDate: builder.query({
    //   //staffContactInfo
    //   query: ({ token, payload }) => ({
    //     url: `admin/ac/pclm/payor/bydate`,
    //     method: "GET",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(date),
    //   }),
    //   providesTags: ["ProcessClaim"],
    // }),

    //   addContactInfo  staff contact info
    // addContactInfo: builder.mutation({
    //   query: ({ token, payload }) => ({
    //     url: `admin/ac/staff/contact/details/update`,
    //     method: "POST",
    //     headers: {
    //       "content-type": "Application/json",
    //       Authorization: token,
    //     },
    //     body: JSON.stringify(payload),
    //   }),
    //   invalidatesTags: ["ContactInfo"],
    // }),

    //   add Emergency contact info
    PayorByDate: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/pclm/payor/bydate`,
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

export const { usePayorByDateMutation } = ProcessingClaimApi;
