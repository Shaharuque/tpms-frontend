import { apiSlice } from "../../api/apiSlice";

export const ProcessingClaimApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Process Claim Get Payor
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
    }),

    //Process Claim Get Patient
    getPatientProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/client/name",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    // Process Claim Get Therapist Name
    getTherapistProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/treating/therapist/name",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get CPT CODE
    getCPTProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/cpt/code",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get Activity Type
    getActivityProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/activity/type",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get Degree Level
    getDegreeLevelProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/degree/level",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get ZONE
    getZoneProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/zone",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get Modifire
    getModifireProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/modifire",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get CMS Provider
    getCMSProviderProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/pclm/cms/provider",
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
  usePayorByDateMutation,
  useGetPatientProcessClaimMutation,
  useGetTherapistProcessClaimMutation,
  useGetCPTProcessClaimMutation,
  useGetActivityProcessClaimMutation,
  useGetDegreeLevelProcessClaimMutation,
  useGetZoneProcessClaimMutation,
  useGetModifireProcessClaimMutation,
  useGetCMSProviderProcessClaimMutation,
} = ProcessingClaimApi;
