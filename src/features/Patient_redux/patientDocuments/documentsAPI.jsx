import { apiSlice } from "../../api/apiSlice";

//documents crud operatios api will be handled here
export const documentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get staff credentials
    getdocuments: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/patient/document/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Documents"],
    }),
    // Add documents
    addDocuemnts: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/admin/ac/patient/document/save",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Documents"],
    }),

    //get documents individual data
    getdocumentsinfo: builder.query({
      query: ({ token, id }) => ({
        url: `admin/ac/patient/document/single/${id}`,
        method: "GET",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
      }),
      providesTags: ["Documents"],
    }),

    //Update document  info
    updateDocument: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/patient/document/update",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Documents"],
    }),

    //Delete document
    documentDelete: builder.mutation({
      query: ({ token, payload }) => ({
        url: "admin/ac/patient/document/delete",
        method: "POST",
        headers: {
          "content-type": "Application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["Documents"],
    }),
  }),
});

export const {
  useDocumentDeleteMutation,
  useGetdocumentsQuery,
  useAddDocuemntsMutation,
  useGetdocumentsinfoQuery,
  useUpdateDocumentMutation,
  //   useGetgetdocumentsQuery,
  //   useAddCredentialMutation,
  //   useUpdateCredentialMutation,
  //   useGetcredentialinfoQuery,
} = documentsApi;
