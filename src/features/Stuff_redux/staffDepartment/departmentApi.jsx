//staff department api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const staffDepartmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //dept. supervisor list
    getSupervisorList: builder.query({
      query: ({ id, token }) => ({
        url: `/provider/department/supervisor/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["StaffDepartment"],
    }),

    //update staff supervisor
    updateDepartment: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/provider/department/supervisor/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useUpdateDepartmentMutation, useGetSupervisorListQuery } =
  staffDepartmentApi;
