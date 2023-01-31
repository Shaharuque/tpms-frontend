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
  }),
});

export const {
  useGetPatientAuthorizationQuery,
  useGetPatientAuthorizationActivityQuery,
} = patientAuthorizationApi;
