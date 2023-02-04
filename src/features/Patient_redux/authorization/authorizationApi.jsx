//patient authorization related apis will be handled here

import { apiSlice } from "../../api/apiSlice";

export const patientAuthorizationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //handle auth endpoint here
    //get patient authorization api
    getPatientAuthorization: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/authorization`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["PatientAuthorization"],
    }),

    //get patient authorization info
    getPatientAuthorizationInfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/patient/authorization/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["PatientAuthorization"],
    }),

    //update Authorization Info
    patientAuthorizationUpdate: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/authorization/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["PatientAuthorization"],
    }),

    //Get Patient Authorization Activity api
    getPatientAuthorizationActivity: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/authorization/activity`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["PatientAuthorization"],
    }),

    //Get Patient Authorization Activity Services api
    getActivityServices: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/auth/act/get/service`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Get Patient Authorization Activity SubType api
    getActivitySubtypes: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/auth/act/get/subtype`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Get Patient Authorization Activity Cptcode api
    getActivityCptcode: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/auth/act/get/cptcode`,
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

export const {
  useGetPatientAuthorizationQuery,
  useGetPatientAuthorizationInfoQuery,
  useGetPatientAuthorizationActivityQuery,
  usePatientAuthorizationUpdateMutation,
  useGetActivityServicesQuery,
  useGetActivitySubtypesQuery,
  useGetActivityCptcodeQuery,
} = patientAuthorizationApi;
