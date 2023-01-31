//stuff crud operatios api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const staffApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get staff info id wise
    getInfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/staff/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: (result, error, arg) => {
        console.log(result);
        return [
          { type: "Staff", id: arg.id }, //dynamic tag //each single video ar jnno different different single tag provided
        ];
      },
    }),
    //Create Stuff
    createStuff: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/create",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["StuffTable"],
    }),
    // Update Staff Info
    updateStaff: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/info/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: (result, error, arg) => [
        "StuffTable",
        { type: "Staff", id: arg.payload.employee_edit_id }, //dynamic tag //each single video ar jnno different different single tag invalidates
      ],
    }),
  }),
});

export const {
  useCreateStuffMutation,
  useGetInfoQuery,
  useUpdateStaffMutation,
} = staffApi;
