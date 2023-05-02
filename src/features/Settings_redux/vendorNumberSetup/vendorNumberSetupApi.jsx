import { apiSlice } from "../../api/apiSlice";

export const vendorNumberApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //handle auth endpoint here
    vendorNumberEssentials: builder.query({
      query: ({ token }) => ({
        url: `setting/vendor/number`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //get regional center api
    vendorNumberReginalCenter: builder.query({
      query: ({ token }) => ({
        url: `setting/vendor/number/regional/center`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
  }),
});

export const {
  useVendorNumberEssentialsQuery,
  useVendorNumberReginalCenterQuery,
} = vendorNumberApi;
