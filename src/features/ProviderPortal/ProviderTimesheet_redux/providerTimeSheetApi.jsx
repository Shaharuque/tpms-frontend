import { apiSlice } from "../../api/apiSlice";

//documents crud operatios api will be handled here
export const providerTimeSheetApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //get payperiod time
    payrollTimeGet: builder.query({
      query: (token) => ({
        url: `/provider/timesheet/get/all/time/periods`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
      }),
    }),
    //get payroll timesheet appointments
    payrollTimeAppointmentsGet: builder.mutation({
      query: ({ token, payload }) => ({
        url: `/provider/timesheet/get/all/time/sheet/appointments`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      providesTags: ["ProviderPortalPayrollTimesheet"],
    }),

    // Payroll timesheet update
    payrollTimesheetUpdate: builder.mutation({
      query: ({ token, payload }) => ({
        url: `/provider/timesheet/payroll/time/sheet/save/changes`,
        method: "POST",
        headers: {
          "content-type": "Application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: ["ProviderPortalPayrollTimesheet"],
    }),
  }),
});

export const { usePayrollTimeGetQuery, usePayrollTimeAppointmentsGetMutation, usePayrollTimesheetUpdateMutation } = providerTimeSheetApi;
