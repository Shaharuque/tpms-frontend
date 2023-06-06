import { apiSlice } from "../../api/apiSlice";

export const ProcessingClaimApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Process Claim Get Payor
    PayorByDate: builder.mutation({
      query: ({ token, payload }) => ({
        url: `/inadmin/pri/process/claim/get/data/by/date`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get Patient
    getPatientProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/process/claim/short/by/patient",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    // Process Claim Get Therapist Name
    getTherapistProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/process/claim/short/by/treating/therapist",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get CPT CODE
    getCPTProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/process/claim/short/by/cpt",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Get Activity Type
    getActivityProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/process/claim/short/by/activity/type",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
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
        url: "/inadmin/pri/process/claim/short/by/cms/therapist",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //Process Claim Data Get
    getAllProcessClaims: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/process/claim/get/billing/data",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
    }),

    //infinite scroll
    //Process Claim Data Get
    getClaims: builder.query({
      query: ({ token, data }) => ({
        url: `/inadmin/pri/process/claim/get/billing/data`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      }),
      providesTags: ["processClaim"],
    }),

    //update process claim
    //Process Claim Get CMS Provider
    updateProcessClaim: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/inadmin/pri/process/claim/billing/data/update",
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
  useGetAllProcessClaimsMutation,
  useGetClaimsQuery,
  useUpdateProcessClaimMutation,
} = ProcessingClaimApi;
