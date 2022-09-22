import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Pages/Components/Sidebar.jsx";
import Report from "./Pages/Pages/Report.jsx";
import Settings from "./Pages/Pages/Settings.jsx";
import BillingManager from "./Pages/Pages/BillingManager";
import ArLedger from "./Pages/Pages/ArLedger";
import ContractRate from "./Pages/Pages/ContractRate";
import PatientStatement from "./Pages/Pages/PatientStatement";
import ERemittance from "./Pages/Pages/ERemittance";
import MPosting from "./Pages/Pages/MPosting";
import ProcessingPayroll from "./Pages/Pages/ProcessingPayroll";
import Timesheet from "./Pages/Pages/Timesheet";
import NameLocation from "./Pages/Pages/Settings/NameLocation";
import AddInsurance from "./Pages/Pages/Settings/AddInsurance";
import AddTreatments from "./Pages/Pages/Settings/AddTreatments";
import AddServices from "./Pages/Pages/Settings/AddServices";
import AddCptCode from "./Pages/Pages/Settings/AddCptCode";
import AddServiceSubType from "./Pages/Pages/Settings/AddServiceSubType";
import AddStaffType from "./Pages/Pages/Settings/AddStaffType";
import ReferringProvider from "./Pages/Pages/Settings/ReferringProvider";
import PlaceOfServices from "./Pages/Pages/Settings/PlaceOfServices";
import EraManager from "./Pages/Pages/Settings/EraManager";
import VendorNumberSetup from "./Pages/Pages/Settings/VendorNumberSetup";
import HolidaySetup from "./Pages/Pages/Settings/HolidaySetup";
import PayPeriod from "./Pages/Pages/Settings/PayPeriod";
import Logo from "./Pages/Pages/Settings/Logo";
import UnbillableActivity from "./Pages/Pages/Settings/UnbillableActivity";
import CreateServiceRules from "./Pages/Pages/Settings/CreateServiceRules";
import FormsBuilder from "./Pages/Pages/Settings/FormsBuilder";
import FormAndLibrary from "./Pages/Pages/Settings/FormAndLibrary";
import BusinessFiles from "./Pages/Pages/Settings/BusinessFiles";
import DataImport from "./Pages/Pages/Settings/DataImport";
import TpmsMeet from "./Pages/Pages/Settings/TpmsMeet";
import InsuranceSetup from "./Pages/Pages/Settings/InsuranceSetup";
import MPostingEditAdd from "./Pages/Pages/MPosting/MPostingEditAdd";
import MDepositApply from "./Pages/Pages/MPosting/MDepositApply";
import ContractRateEditAdd from "./Pages/Pages/ContractRate/ContractRateEditAdd";
import LogIn from "./Pages/LoginPage/LogIn";
//For testing purpose
import MainBase from "./Testing/Table_React/MainBase";
import BatchingClaims from "./Pages/Pages/BillingManager/BatchingClaims";
import ManageClaims from "./Pages/Pages/BillingManager/ManageClaims";
import ProcessingClaim from "./Pages/Pages/BillingManager/ProcessingClaim";
import PayrollSubmission from "./Pages/Pages/Payroll/PayrollSubmission";
import CreateStaff from "./Pages/Admin/Staff/AddStaff/CreateStaff";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import UserTimesheets from "./Pages/Pages/User/Timesheet/UserTimesheets";
import Biographic from "./Pages/Pages/User/Biographic/Biographic";
import Pataients from "./Pages/Pages/User/Patient/Pataients";
import SchedulerCalender from "./Pages/Pages/User/My-Schedule/SchedulerCalender/SchedulerCalender";
import MySchedule from "./Pages/Pages/PatientPortal/MySchedule/MySchedule";
import MyInfo from "./Pages/Pages/PatientPortal/MyInfo/MyInfo";
import { Bios } from "./Pages/Pages/User/Biographic/Bios/Bios";
import CredentialsContainer from "./Pages/Pages/User/Biographic/Credential/CredentialsContainer";
import MyCalender from "./Pages/Pages/PatientPortal/MySchedule/MyCalender/MyCalender";
import MyStatement from "./Pages/Pages/PatientPortal/MyStatement/MyStatement";
import ForgetPassword from "./Pages/LoginPage/ForgetPassword";
import ForgetPasswordCodeCheck from "./Pages/LoginPage/ForgetPasswordCodeCheck";
import NewPassSet from "./Pages/LoginPage/NewPassSet";
import ManageSessions from "./Pages/Pages/User/ManageSessions";
import Profile from "./Pages/Pages/Shared/Profile/Profile";
import ProfileInformation from "./Pages/Pages/Shared/Profile/ProfileInformation";
import PasswordChange from "./Pages/Pages/Shared/Profile/PasswordChange";
import ContractContainer from "./Pages/Pages/User/Biographic/ContactInfo/ContractContainer";
// --------new start with folder structure ------------------------------------------------------------------------------------------------

// ###### DASHBOARD
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import ArFollowupBucket from "./Pages/Admin/Dashboard/Dashboard/TodaysTask/ArFollowupBucket";
import ExpiringAuthorization from "./Pages/Admin/Dashboard/Dashboard/Patient/ExpiringAuthorization";
import SelfPayClients from "./Pages/Admin/Dashboard/Dashboard/Patient/SelfPayClients";
import AuthorizationNotRequired from "./Pages/Admin/Dashboard/Dashboard/Patient/AuthorizationNotRequired";
import CoPayForToday from "./Pages/Admin/Dashboard/Dashboard/Patient/CoPayForToday";
import AuthPlaceHolders from "./Pages/Admin/Dashboard/Dashboard/Patient/AuthPlaceHolders";
import VacationPendingApproval from "./Pages/Admin/Dashboard/Dashboard/Staffs/VacationPendingApproval";
import MissingCredentials from "./Pages/Admin/Dashboard/Dashboard/Staffs/MissingCredentials";
import CredentialsToExpire from "./Pages/Admin/Dashboard/Dashboard/Staffs/CredentialsToExpire";
import SignatureNotLoaded from "./Pages/Admin/Dashboard/Dashboard/Staffs/SignatureNotLoaded";
import SessionRendered from "./Pages/Admin/Dashboard/Dashboard/Billing/SessionRendered";
import LastWeeksDeposits from "./Pages/Admin/Dashboard/Dashboard/Billing/LastWeeksDeposits";
import LastMonthsStatements from "./Pages/Admin/Dashboard/Dashboard/Billing/LastMonthsStatements";
import LastMonthBilledDates from "./Pages/Admin/Dashboard/Dashboard/Billing/LastMonthBilledDates";
import PendingSecondaryClaims from "./Pages/Admin/Dashboard/Dashboard/Billing/PendingSecondaryClaims";
import Scheduled from "./Pages/Admin/Dashboard/Dashboard/Scheduler/Scheduled";
import Sessions from "./Pages/Admin/Dashboard/Dashboard/Scheduler/Sessions";
import Provider from "./Pages/Admin/Dashboard/Dashboard/Scheduler/Provider";
import SessionNote from "./Pages/Admin/Dashboard/Dashboard/Scheduler/SessionNote";
import CancelledSession from "./Pages/Admin/Dashboard/Dashboard/Scheduler/CancelledSession";
import KPIReports from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/KPIReports";
import KPIReportsInsurance from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/KPIReportsInsurance";
import KPIReportsPatient from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/KPIReportsPatient";
import PaymentDeposits from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/PaymentDeposits";
// ###### APPOINTMENT
import ListView from "./Pages/Admin/Appointment/ListView/ListView";
import CalendarView from "./Pages/Admin/Appointment/CalenderView/CalendarView";
import RecurringSession from "./Pages/Admin/Appointment/RecurringSession/RecurringSession";
import RecurringSessionEdit from "./Pages/Admin/Appointment/RecurringSession/RecurringSession/RecurringSessionEdit";
import ProvideEscalation from "./Pages/Admin/Dashboard/Dashboard/TodaysTask/ProvideEscalation";
// ###### NAVIGATION BAR
import DownloadView from "./Pages/Shared/NavigationBar/ScheduleExport/Download/DownloadView";
import ApplyPayment from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/PaymentDeposite/ApplyPayment";
import AddDeposit from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/PaymentDeposite/AddDeposit";
import EditDeposit from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/PaymentDeposite/EditDeposit";
import DepositDetails from "./Pages/Admin/Dashboard/Dashboard/TrendingReports/PaymentDeposite/DepositDetails";
// ###### Patient
import Patients from "./Pages/Admin/Patient/Patients";
import PatientsInfo from "./Pages/Admin/Patient/Patients/PatientsInfo";
import PatientInformation from "./Pages/Admin/Patient/Patients/PatientInfo/PatientInformation";
import Authorization from "./Pages/Admin/Patient/Patients/Authorization/Authorization";
import AuthorizationEdit from "./Pages/Admin/Patient/Patients/Authorization/AddAuthorization/AuthorizationEdit";
import Documents from "./Pages/Admin/Patient/Patients/Documents/Documents";
import PatientLedger from "./Pages/Admin/Patient/Patients/PatientLedger/PatientLedger";
import PatientPortal from "./Pages/Admin/Patient/Patients/PatientPortal/PatientPortal";
// ###### Not Found
import NotFound from "./NoPageFound/NotFound";
//Testing
import CustomSearch from "./Testing/CustomSearch/CustomSearch";
import AntTableTest from "./Testing/AntTableTest/AntTableTest";
import TableApi from "./Testing/AntTableTest/TableApi/TableApi";
import SingleDetails from "./Testing/AntTableTest/TableApi/SingleDetails";
// ###### Staff
import Staffs from "./Pages/Admin/Staff/Staffs";
import StaffInformation from "./Pages/Admin/Staff/Staffs/StaffInformation";
import Bio from "./Pages/Admin/Staff/Staffs/StaffBio/Bio";
import ContactDetails from "./Pages/Admin/Staff/Staffs/ContactInfo/ContactDetails";
import Credentials from "./Pages/Admin/Staff/Staffs/Credential/Credentials";
import DepartmentSupervisor from "./Pages/Admin/Staff/Staffs/DepartmentSupervisor/DepartmentSupervisor";
import PayrollSetup from "./Pages/Admin/Staff/Staffs/PayrollSetup/PayrollSetup";
import OtherSetup from "./Pages/Admin/Staff/Staffs/OtherSetUp/OtherSetup";
import LeaveTracking from "./Pages/Admin/Staff/Staffs/LeaveTracking/LeaveTracking";
import InsuranceExclusion from "./Pages/Admin/Staff/Staffs/InsuranceExclusion/InsuranceExclusion";
import StaffPortal from "./Pages/Admin/Staff/Staffs/StaffPortal/StaffPortal";
import ServiceSubTypeExclusions from "./Pages/Admin/Staff/Staffs/ServiceSubTypeExclusion/ServiceSubTypeExclusions";
import PatientExclusion from "./Pages/Admin/Staff/Staffs/PatientExclusion/PatientExclusion";
import TestingTable from "./Testing/AntTableTest/TestingTable";

function App() {
  const handle = useFullScreenHandle();
  return (
    <div className="app-body">
      <FullScreen handle={handle}>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<LogIn></LogIn>}></Route>
          <Route
            path="/forget-password"
            element={<ForgetPassword></ForgetPassword>}
          ></Route>
          <Route
            path="/code-check"
            element={<ForgetPasswordCodeCheck></ForgetPasswordCodeCheck>}
          ></Route>
          <Route
            path="/new-password"
            element={<NewPassSet></NewPassSet>}
          ></Route>

          {/*Testing */}
          <Route path="/search" element={<CustomSearch></CustomSearch>}></Route>
          <Route
            path="/auth-table"
            element={<CustomSearch></CustomSearch>}
          ></Route>
          <Route path="test" element={<AntTableTest></AntTableTest>}></Route>
          {/* <Route path="expandTable" element={<ExpendedTable></ExpendedTable>} /> */}
          <Route path="table-api" element={<TableApi></TableApi>}></Route>
          <Route
            path="/details/:id"
            element={<SingleDetails></SingleDetails>}
          ></Route>
          <Route
            path="/testing"
            element={<TestingTable></TestingTable>}
          ></Route>
          {/* Testing End */}

          <Route path="/admin" element={<Sidebar handle={handle}></Sidebar>}>
            <Route
              path="report-export-view"
              element={<DownloadView></DownloadView>}
            ></Route>
            {/* ----------------------------------Profile Start----------------------------------------------- */}

            <Route path="profile" element={<Profile></Profile>}>
              <Route
                path="profile-information"
                element={<ProfileInformation></ProfileInformation>}
              ></Route>
              <Route
                path="password-change"
                element={<PasswordChange></PasswordChange>}
              ></Route>
            </Route>

            {/* ----------------------------------Profile End----------------------------------------------- */}

            <Route index element={<Dashboard></Dashboard>}></Route>
            {/* DASHBOARD ROUTES  */}
            {/* todays task  */}
            <Route
              path="billing/ar-followup-bucket"
              element={<ArFollowupBucket></ArFollowupBucket>}
            ></Route>
            <Route
              path="billing/ar-followup-bucket-filter-types/1"
              element={<ProvideEscalation></ProvideEscalation>}
            ></Route>
            <Route
              path="billing/ar-followup-bucket-filter-types/2"
              // element={<PayorEscalation></PayorEscalation>}
              element={<ArFollowupBucket></ArFollowupBucket>}
            ></Route>
            <Route
              path="billing/ar-followup-bucket-filter-types/3"
              // element={<MGEscalation></MGEscalation>}
              element={<ArFollowupBucket></ArFollowupBucket>}
            ></Route>
            <Route
              path="billing/ar-followup-bucket-filter-types/4"
              // element={<MedicalRecords></MedicalRecords>}
              element={<ArFollowupBucket></ArFollowupBucket>}
            ></Route>
            {/* Patients  */}
            <Route
              path="auth-to-expire"
              element={<ExpiringAuthorization></ExpiringAuthorization>}
            ></Route>
            <Route
              path="non-payor-tag"
              element={<SelfPayClients></SelfPayClients>}
            ></Route>
            <Route
              path="no-authorization"
              element={<AuthorizationNotRequired></AuthorizationNotRequired>}
            ></Route>
            <Route
              path="todays-copay"
              element={<CoPayForToday></CoPayForToday>}
            ></Route>
            <Route
              path="auth-place-holder"
              element={<AuthPlaceHolders></AuthPlaceHolders>}
            ></Route>
            {/* Staffs  */}
            <Route
              path="vacation-pending"
              element={<VacationPendingApproval></VacationPendingApproval>}
            ></Route>
            <Route
              path="missing-credentials"
              element={<MissingCredentials></MissingCredentials>}
            ></Route>
            <Route
              path="credentials-expire"
              element={<CredentialsToExpire></CredentialsToExpire>}
            ></Route>
            <Route
              path="signature-not-update"
              element={<SignatureNotLoaded></SignatureNotLoaded>}
            ></Route>
            {/* Billing  */}
            <Route
              path="session-not-bulled"
              element={<SessionRendered></SessionRendered>}
            ></Route>
            <Route
              path="last-week-deposit"
              element={<LastWeeksDeposits></LastWeeksDeposits>}
            ></Route>
            <Route
              path="last-five-statement"
              element={<LastMonthsStatements></LastMonthsStatements>}
            ></Route>
            <Route
              path="last-month-billed-dated"
              element={<LastMonthBilledDates></LastMonthBilledDates>}
            ></Route>
            <Route
              path="pending-secondary"
              element={<PendingSecondaryClaims></PendingSecondaryClaims>}
            ></Route>
            {/* Scheduling  */}
            <Route
              path="scheduler-not-render"
              element={<Scheduled></Scheduled>}
            ></Route>
            <Route
              path="schedule-not-attend-last-week"
              element={<Sessions></Sessions>}
            ></Route>
            <Route
              path="provider-signature-missing-session"
              element={<Provider></Provider>}
            ></Route>
            <Route
              path="session-note-missing"
              element={<SessionNote></SessionNote>}
            ></Route>
            <Route
              path="cancelled-session"
              element={<CancelledSession></CancelledSession>}
            ></Route>
            {/* Trending Reports  */}
            <Route
              path="sessions-manage"
              element={<ListView></ListView>}
            ></Route>
            <Route
              path="m-remittance"
              element={<PaymentDeposits></PaymentDeposits>}
            ></Route>
            <Route
              path="kpi-reported-by-months-view"
              element={<KPIReports></KPIReports>}
            ></Route>
            <Route
              path="kpi-reported-by-patient-view"
              element={<KPIReportsPatient></KPIReportsPatient>}
            ></Route>
            <Route
              path="kpi-reported-by-insurance-view"
              element={<KPIReportsInsurance></KPIReportsInsurance>}
            ></Route>
            {/* ------------------------------  */}
            <Route
              path="deposit-apply/:id"
              element={<ApplyPayment></ApplyPayment>}
            ></Route>
            <Route
              path="deposit-edit/:id"
              element={<EditDeposit></EditDeposit>}
            ></Route>
            <Route
              path="deposit-details/:id"
              element={<DepositDetails></DepositDetails>}
            ></Route>
            <Route
              path="deposit-add"
              element={<AddDeposit></AddDeposit>}
            ></Route>

            {/* ----------------------------------DashBoard End----------------------------------------------- */}
            {/* APPOINTMENT ROUTES */}
            <Route
              path="session-manage"
              element={<ListView></ListView>}
            ></Route>
            <Route
              path="calender-view"
              element={<CalendarView></CalendarView>}
            ></Route>
            <Route
              path="recurring-session"
              element={<RecurringSession></RecurringSession>}
            ></Route>
            <Route
              path="recurring-session-edit"
              element={<RecurringSessionEdit></RecurringSessionEdit>}
            ></Route>
            {/* ----------------------------------Appointment End----------------------------------------------- */}
            {/* PATIENT  */}
            <Route path="patient-List" element={<Patients></Patients>}></Route>
            <Route path="patient" element={<PatientsInfo></PatientsInfo>}>
              {/* <Route index element={<PatientsInfo></PatientsInfo>}></Route> */}
              <Route
                path="patient-info/:id"
                element={<PatientInformation></PatientInformation>}
              ></Route>
              <Route
                path="patient-authorization/:id"
                element={<Authorization></Authorization>}
              ></Route>
              <Route
                path="patient-authorization"
                element={<Authorization></Authorization>}
              ></Route>
              <Route
                path="patient-document/:id"
                element={<Documents></Documents>}
              ></Route>
              <Route
                path="patient-portal/:id"
                element={<PatientPortal></PatientPortal>}
              ></Route>
              <Route
                path="patient-ledger/:id"
                element={<PatientLedger></PatientLedger>}
              ></Route>
            </Route>
            <Route
              path="authorization-Edit"
              element={<AuthorizationEdit></AuthorizationEdit>}
            ></Route>
            <Route
              path="authorization-Edit/:id"
              element={<AuthorizationEdit></AuthorizationEdit>}
            ></Route>
            {/* ----------------------------------Patient End----------------------------------------------- */}
            {/* STAFF  */}
            <Route path="staffs" element={<Staffs></Staffs>}></Route>
            <Route
              path="create-staff/staff"
              element={<CreateStaff></CreateStaff>}
            ></Route>
            <Route path="staff" element={<StaffInformation></StaffInformation>}>
              <Route path="staffs-biographic/:id" element={<Bio></Bio>}></Route>
              <Route
                path="staffs-contact-details/:id"
                element={<ContactDetails></ContactDetails>}
              ></Route>
              <Route
                path="staffs-credentials/:id"
                element={<Credentials></Credentials>}
              ></Route>
              <Route
                path="staffs-department/:id"
                element={<DepartmentSupervisor></DepartmentSupervisor>}
              ></Route>
              <Route
                path="staffs-payroll/:id"
                element={<PayrollSetup></PayrollSetup>}
              ></Route>
              <Route
                path="staffs-other-setup/:id"
                element={<OtherSetup></OtherSetup>}
              ></Route>
              <Route
                path="staffs-leave-tracking/:id"
                element={<LeaveTracking></LeaveTracking>}
              ></Route>
              <Route
                path="staffs-payor-exclusion/:id"
                element={<InsuranceExclusion></InsuranceExclusion>}
              ></Route>
              <Route
                path="staffs-sub-activity-exclusion/:id"
                element={<ServiceSubTypeExclusions></ServiceSubTypeExclusions>}
              ></Route>
              <Route
                path="staffs-client-exclusion/:id"
                element={<PatientExclusion></PatientExclusion>}
              ></Route>
              <Route
                path="staffs-portal/:id"
                element={<StaffPortal></StaffPortal>}
              ></Route>
            </Route>
            {/* ----------------------------------Staff End----------------------------------------------- */}
            {/* BILLING  */}

            <Route
              path="submit-billing"
              element={<BillingManager></BillingManager>}
            >
              <Route index element={<Navigate to="proces-Clims" />} />
              <Route
                path="proces-Clims"
                element={<ProcessingClaim></ProcessingClaim>}
              ></Route>
              <Route
                path="Batching-climbs"
                element={<BatchingClaims></BatchingClaims>}
              ></Route>
              <Route
                path="Manage-claims"
                element={<ManageClaims></ManageClaims>}
              ></Route>
            </Route>
            <Route path="ar-leader" element={<ArLedger></ArLedger>}></Route>
            <Route
              path="contract-rate"
              element={<ContractRate></ContractRate>}
            ></Route>
            <Route
              path="billing/rate-list-add-edit"
              element={<ContractRateEditAdd></ContractRateEditAdd>}
            ></Route>
            <Route
              path="billing/rate-list-add-edit/:id"
              element={<ContractRateEditAdd></ContractRateEditAdd>}
            ></Route>
            <Route
              path="patient-statement"
              element={<PatientStatement></PatientStatement>}
            ></Route>
            {/* ----------------------------------Billing End----------------------------------------------- */}
            {/* PAYMENT */}
            <Route
              path="era-remittance"
              element={<ERemittance></ERemittance>}
            ></Route>
            <Route path="m-posting" element={<MPosting></MPosting>}></Route>
            <Route
              path="billing/deposit-apply/:id"
              element={<MDepositApply></MDepositApply>}
            ></Route>
            <Route
              path="billing/deposit-add/:id"
              element={<MPostingEditAdd></MPostingEditAdd>}
            ></Route>
            <Route
              path="billing/deposit-add"
              element={<MPostingEditAdd></MPostingEditAdd>}
            ></Route>
            {/* ----------------------------------PAYMENT End----------------------------------------------- */}
            {/* PAYROLL  */}
            <Route
              path="processing-payroll"
              element={<ProcessingPayroll></ProcessingPayroll>}
            >
              <Route index element={<Navigate to="process-payroll" />} />
              <Route
                path="process-payroll"
                element={<PayrollSubmission />}
              ></Route>
              <Route
                path="submit-payroll"
                element={<PayrollSubmission />}
              ></Route>
              <Route
                path="completed-payroll"
                element={<PayrollSubmission />}
              ></Route>
            </Route>
            <Route path="timesheet" element={<Timesheet></Timesheet>}></Route>
            {/* ----------------------------------PAYROLL End----------------------------------------------- */}
            {/* Report */}
            <Route path="report" element={<Report></Report>}></Route>
            {/* ----------------------------------Report End----------------------------------------------- */}
            {/* settings routes  */}
            <Route path="settings" element={<Settings></Settings>}>
              <Route index element={<NameLocation></NameLocation>}></Route>
              <Route
                path="add-insurance"
                element={<AddInsurance></AddInsurance>}
              ></Route>
              <Route
                path="insurance-setup"
                element={<InsuranceSetup></InsuranceSetup>}
              ></Route>
              <Route
                path="add-treatment"
                element={<AddTreatments></AddTreatments>}
              ></Route>
              <Route
                path="services"
                element={<AddServices></AddServices>}
              ></Route>
              <Route
                path="cpt-code"
                element={<AddCptCode></AddCptCode>}
              ></Route>
              <Route
                path="sub-activity-setup"
                element={<AddServiceSubType></AddServiceSubType>}
              ></Route>
              <Route
                path="add-staff-type"
                element={<AddStaffType></AddStaffType>}
              ></Route>
              <Route
                path="rendering-provider"
                element={<ReferringProvider></ReferringProvider>}
              ></Route>
              <Route
                path="pos"
                element={<PlaceOfServices></PlaceOfServices>}
              ></Route>
              <Route
                path="vendor-number"
                element={<VendorNumberSetup></VendorNumberSetup>}
              ></Route>
              <Route
                path="holiday-setup"
                element={<HolidaySetup></HolidaySetup>}
              ></Route>
              <Route
                path="pay-period"
                element={<PayPeriod></PayPeriod>}
              ></Route>
              <Route path="logo" element={<Logo></Logo>}></Route>
              <Route
                path="unbillable-activity"
                element={<UnbillableActivity></UnbillableActivity>}
              ></Route>
              <Route
                path="session-rule"
                element={<CreateServiceRules></CreateServiceRules>}
              ></Route>
              <Route
                path="file-manager"
                element={<EraManager></EraManager>}
              ></Route>
              <Route
                path="froms-builder"
                element={<FormsBuilder></FormsBuilder>}
              ></Route>
              <Route
                path="notes-forms"
                element={<FormAndLibrary></FormAndLibrary>}
              ></Route>
              <Route
                path="business-documents"
                element={<BusinessFiles></BusinessFiles>}
              ></Route>
              <Route
                path="data-export"
                element={<DataImport></DataImport>}
              ></Route>
              <Route path="meet-lists" element={<TpmsMeet></TpmsMeet>}></Route>
            </Route>
            {/* ----------------------------------Setting End----------------------------------------------- */}
          </Route>

          {/* user */}
          <Route path="/user" element={<Sidebar handle={handle}></Sidebar>}>
            <Route index element={<ManageSessions />}></Route>
            <Route path="calender" element={<SchedulerCalender />}></Route>
            <Route path="biographic" element={<Biographic />}>
              <Route index element={<Bios></Bios>}></Route>
              <Route
                path="bio-contactinfo"
                element={<ContractContainer></ContractContainer>}
              ></Route>
              <Route
                path="bio-credential"
                element={<CredentialsContainer></CredentialsContainer>}
              ></Route>
            </Route>

            <Route path="Pataients" element={<Pataients />}></Route>
            <Route path="user-timesheet" element={<UserTimesheets />}></Route>
          </Route>

          {/* Patient-Portal start */}
          <Route path="/patient" element={<Sidebar handle={handle}></Sidebar>}>
            <Route index element={<MySchedule />}></Route>
            <Route path="calender" element={<MyCalender></MyCalender>}></Route>
            <Route path="my-info" element={<MyInfo></MyInfo>}></Route>
            <Route
              path="my-statement"
              element={<MyStatement></MyStatement>}
            ></Route>
          </Route>
          {/* No Page Found */}
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </FullScreen>
    </div>
  );
}

export default App;
