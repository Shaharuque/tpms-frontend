//staff department api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const staffDepartmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //update staff department
    updateDepartment: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/staff/department/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useUpdateDepartmentMutation } = staffDepartmentApi;
