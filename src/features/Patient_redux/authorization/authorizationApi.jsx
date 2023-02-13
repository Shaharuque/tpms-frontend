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
      providesTags: ["PatientAuthorizationTable"],
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
      invalidatesTags: ["PatientAuthorization", "PatientAuthorizationTable"],
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
      providesTags: ["PatientAuthorizationActivity"],
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

    //Patient Authorization Activity SubActivity(needed when to update activity)
    //result will be shown in the Service Sub-Type field
    getActivitySubActivity: builder.query({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/auth/act/get/subactivity`,
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

    //Patient Authorization Activity Info(Activity Id wise)
    patientAuthorizationActivityInfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/patient/auth/act/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["IndividualActivity"],
    }),

    //Patient Authorization activity create/add
    patientAuthorizationActivityCreate: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/auth/act/save`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["PatientAuthorizationActivity"],
    }),

    //Patient Authorization Activity Update
    patientAuthorizationActivityUpdate: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/auth/act/update`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["PatientAuthorizationActivity", "IndividualActivity"],
    }),

    //Patient Authorization Activity delete
    patientAuthorizationActivityDelete: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/auth/act/delete`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["PatientAuthorizationActivity"],
    }),

    //Patient Authorization Create Info
    getAuthorizationCreateInfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/patient/authorization/create/info/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
    }),

    //Patient Authorization create=>patient id wise
    //Patient Authorization Save
    patientAuthorizationCreate: builder.mutation({
      query: ({ token, payload }) => ({
        url: `admin/ac/patient/authorization/save`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["PatientAuthorizationTable"],
    }),
  }),
});

export const {
  useGetPatientAuthorizationQuery,
  useGetPatientAuthorizationInfoQuery,
  useGetAuthorizationCreateInfoQuery,
  usePatientAuthorizationCreateMutation,
  usePatientAuthorizationUpdateMutation,
  useGetPatientAuthorizationActivityQuery,
  usePatientAuthorizationActivityInfoQuery,
  usePatientAuthorizationActivityCreateMutation,
  usePatientAuthorizationActivityUpdateMutation,
  usePatientAuthorizationActivityDeleteMutation,
  useGetActivityServicesQuery,
  useGetActivitySubActivityQuery,
  useGetActivitySubtypesQuery,
  useGetActivityCptcodeQuery,
} = patientAuthorizationApi;
