//manage sessions api will be handled here

import { apiSlice } from "../../api/apiSlice";

export const manageSessionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Manage Session Get Patient
    manageSessionGetPatient: builder.query({
      query: (token) => ({
        url: `admin/ac/manage/session/get/client`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
    //Manage Session Get Provider
    manageSessionGetProvider: builder.query({
      query: (token) => ({
        url: `admin/ac/manage/session/get/provider`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),
    //Manage Session Get Session List
    getManageSessionList: builder.query({
      query: ({ token, payload, page }) => ({
        url: `admin/ac/manage/session/get/appointments?page=${page}`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["ManageSession"],
    }),

    //Manage Session Status Change
    //Manage Session Get Session List
    manageSessionStatusChange: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/manage/session/appointment/status/action`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["ManageSession"],
    }),
  }),
});

export const {
  useManageSessionGetPatientQuery,
  useManageSessionGetProviderQuery,
  useGetManageSessionListQuery,
  useManageSessionStatusChangeMutation,
} = manageSessionApi;
