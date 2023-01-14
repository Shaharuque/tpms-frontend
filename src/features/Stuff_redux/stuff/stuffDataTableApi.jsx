//stuff table data crud operatios api will be handled here
// import { apiSlice } from "../../api/apiSlice";

import { apiSlice } from "../../api/apiSlice";

// export const stuffDataApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     //handle auth endpoint here
//     //Get All Stuffs
//     getStuffData: builder.mutation({
//       query: ({ token, page }) => ({
//         url: `admin/ac/setting/pay/period/get?page=${page}`,
//         method: "POST",
//         headers: {
//           "content-type": "Application/json",
//           Authorization: token,
//         },
//       }),
//     }),
//   }),
// });

// export const { useGetStuffDataMutation } = stuffDataApi;

export const stuffDataApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStaffData: builder.mutation({
      query: ({ token }) => ({
        url: `admin/ac/staff/get/all`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useGetStaffDataMutation } = stuffDataApi;
