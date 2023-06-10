import { apiSlice } from "../../api/apiSlice";

//documents crud operatios api will be handled here
export const patientDocumentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //get documents
    getProviderPatientDocs: builder.query({
      query: ({ token, id }) => ({
        url: `/provider/patients/get/patient/document`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ id }),
      }),
      providesTags: ["ProviderPortalDocuments"],
    }),
    // Add documents
    providerPatientAddDocuemnts: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/provider/patients/save/patient/document",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["ProviderPortalDocuments"],
    }),

    //get documents individual data
    getdocumentsinfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/patient/document/single/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
      providesTags: ["ProviderPortalDocuments"],
    }),

    //Update document  info
    updateDocument: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/patient/document/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["ProviderPortalDocuments"],
    }),

    //Delete document
    documentDelete: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/patient/document/delete",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["ProviderPortalDocuments"],
    }),
  }),
});

export const {
  useDocumentDeleteMutation,
  useGetProviderPatientDocsQuery,
  useProviderPatientAddDocuemntsMutation,
  useGetdocumentsinfoQuery,
  useUpdateDocumentMutation,
} = patientDocumentApi;
