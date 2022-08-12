import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Pages/Components/Sidebar.jsx";
import Dashboard from "./Pages/Pages/Dashboard.jsx";
import Patients from "./Pages/Pages/Patients.jsx";
import Staffs from "./Pages/Pages/Staffs.jsx";
import Report from "./Pages/Pages/Report.jsx";
import Settings from "./Pages/Pages/Settings.jsx";
// import Test from "./Pages/Components/Test.jsx";
import ListView from "./Pages/Pages/ListView";
import CalendarView from "./Pages/Pages/CalendarView";
import RecurringSession from "./Pages/Pages/RecurringSession";
import BillingManager from "./Pages/Pages/BillingManager";
import ArLedger from "./Pages/Pages/ArLedger";
import ContractRate from "./Pages/Pages/ContractRate";
import PatientStatement from "./Pages/Pages/PatientStatement";
import ERemittance from "./Pages/Pages/ERemittance";
import MPosting from "./Pages/Pages/MPosting";
import EraManager from "./Pages/Pages/EraManager";
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
import RecurringSessionEdit from "./Pages/Pages/RecurringSession/RecurringSessionEdit";
import MPostingEditAdd from "./Pages/Pages/MPosting/MPostingEditAdd";
import MDepositApply from "./Pages/Pages/MPosting/MDepositApply";
import ContractRateEditAdd from "./Pages/Pages/ContractRate/ContractRateEditAdd";
import PatientsInfo from "./Pages/Pages/Patients/PatientsInfo";
import Authorization from "./Pages/Pages/Patients/Authorization";
import Documents from "./Pages/Pages/Patients/Documents";
import PatientPortal from "./Pages/Pages/Patients/PatientPortal";
import PatientLedger from "./Pages/Pages/Patients/PatientLedger";
import PatientInformation from "./Pages/Pages/Patients/PatientInformation";
import AuthorizationEdit from "./Pages/Pages/Patients/AuthorizationEdit";
import StaffInformation from "./Pages/Pages/Staffs/StaffInformation";
import Bio from "./Pages/Pages/Staffs/Bio";
import ContactDetails from "./Pages/Pages/Staffs/ContactDetails";
import Credentials from "./Pages/Pages/Staffs/Credentials";
import DepartmentSupervisor from "./Pages/Pages/Staffs/DepartmentSupervisor";
import PayrollSetup from "./Pages/Pages/Staffs/PayrollSetup";
import OtherSetup from "./Pages/Pages/Staffs/OtherSetup";
import LeaveTracking from "./Pages/Pages/Staffs/LeaveTracking";
import InsuranceExclusion from "./Pages/Pages/Staffs/InsuranceExclusion";
import ServiceSubTypeExclusions from "./Pages/Pages/Staffs/ServiceSubTypeExclusions";
import PatientExclusion from "./Pages/Pages/Staffs/PatientExclusion";
import StaffPortal from "./Pages/Pages/Staffs/StaffPortal";
import LogIn from "./Pages/LoginPage/LogIn";
import ArFollowupBucket from "./Pages/Pages/Dashboard/TodaysTask/ArFollowupBucket";
import ProvideEscalation from "./Pages/Pages/Dashboard/TodaysTask/ProvideEscalation";
import PayorEscalation from "./Pages/Pages/Dashboard/TodaysTask/PayorEscalation";
import MGEscalation from "./Pages/Pages/Dashboard/TodaysTask/MGEscalation";
import MedicalRecords from "./Pages/Pages/Dashboard/TodaysTask/MedicalRecords";
import AuthorizationNotRequired from "./Pages/Pages/Dashboard/Patient/AuthorizationNotRequired";
import SelfPayClients from "./Pages/Pages/Dashboard/Patient/SelfPayClients";
import AuthPlaceHolders from "./Pages/Pages/Dashboard/Patient/AuthPlaceHolders";
import ExpiringAuthorization from "./Pages/Pages/Dashboard/Patient/ExpiringAuthorization";
import CoPayForToday from "./Pages/Pages/Dashboard/Patient/CoPayForToday";
import SignatureNotLoaded from "./Pages/Pages/Dashboard/Staffs/SignatureNotLoaded";
import CredentialsToExpire from "./Pages/Pages/Dashboard/Staffs/CredentialsToExpire";
import MissingCredentials from "./Pages/Pages/Dashboard/Staffs/MissingCredentials";
import VacationPendingApproval from "./Pages/Pages/Dashboard/Staffs/VacationPendingApproval";
import LastMonthBilledDates from "./Pages/Pages/Dashboard/Billing/LastMonthBilledDates";
import LastMonthsStatements from "./Pages/Pages/Dashboard/Billing/LastMonthsStatements";
import LastWeeksDeposits from "./Pages/Pages/Dashboard/Billing/LastWeeksDeposits";
import PendingSecondaryClaims from "./Pages/Pages/Dashboard/Billing/PendingSecondaryClaims";
import SessionRendered from "./Pages/Pages/Dashboard/Billing/SessionRendered";
import ReduxTesting from "./Testing/ReduxTesting";
import MainBase from "./Testing/Table_React/MainBase";
import BatchingClaims from "./Pages/Pages/BillingManager/BatchingClaims";
import ManageClaims from "./Pages/Pages/BillingManager/ManageClaims";
import ProcessingClaim from "./Pages/Pages/BillingManager/ProcessingClaim";
import Scheduled from "./Pages/Pages/Dashboard/Scheduler/Scheduled";
import Sessions from "./Pages/Pages/Dashboard/Scheduler/Sessions";
import Provider from "./Pages/Pages/Dashboard/Scheduler/Provider";
import SessionNote from "./Pages/Pages/Dashboard/Scheduler/SessionNote";
import CancelledSession from "./Pages/Pages/Dashboard/Scheduler/CancelledSession";
import PaymentDeposits from "./Pages/Pages/Dashboard/TrendingReports/PaymentDeposits";
import KPIReportsInsurance from "./Pages/Pages/Dashboard/TrendingReports/KPIReportsInsurance";
import KPIReportsPatient from "./Pages/Pages/Dashboard/TrendingReports/KPIReportsPatient";
import KPIReports from "./Pages/Pages/Dashboard/TrendingReports/KPIReports";
import ScheduleBillable from "./Pages/Pages/Dashboard/TrendingReports/ScheduleBillable";

function App() {
  return (
    <div className="app-body">
      <Routes>
        <Route path="/" element={<LogIn></LogIn>}></Route>
        {/*Testing */}

        <Route path="/table" element={<MainBase></MainBase>}></Route>
        <Route
          path="/testing/redux"
          element={<ReduxTesting></ReduxTesting>}
        ></Route>

        <Route path="/admin" element={<Sidebar></Sidebar>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          {/* DASHBOARD ROUTES  */}
          {/* todays task  */}
          <Route
            path="billing/ar-followup-bucket"
            element={<ArFollowupBucket></ArFollowupBucket>}
          ></Route>
          <Route
            path="billing/ar-followup-bucket-filter-types/1"
            // element={<ProvideEscalation></ProvideEscalation>}
            element={<ArFollowupBucket></ArFollowupBucket>}
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
          <Route path="sessions-manage" element={<ListView></ListView>}></Route>
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

          {/* APPOINTMENT ROUTES */}
          <Route path="session-manage" element={<ListView></ListView>}></Route>
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

          {/* PATIENT  */}
          <Route path="patient/:id" element={<PatientsInfo></PatientsInfo>}>
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
          {/* STAFF  */}
          <Route path="staff" element={<StaffInformation></StaffInformation>}>
            <Route path="staffs-biographic" element={<Bio></Bio>}></Route>
            <Route
              path="staffs-contact-details"
              element={<ContactDetails></ContactDetails>}
            ></Route>
            <Route
              path="staffs-credentials"
              element={<Credentials></Credentials>}
            ></Route>
            <Route
              path="staffs-department"
              element={<DepartmentSupervisor></DepartmentSupervisor>}
            ></Route>
            <Route
              path="staffs-payroll"
              element={<PayrollSetup></PayrollSetup>}
            ></Route>
            <Route
              path="staffs-other-setup"
              element={<OtherSetup></OtherSetup>}
            ></Route>
            <Route
              path="staffs-leave-tracking"
              element={<LeaveTracking></LeaveTracking>}
            ></Route>
            <Route
              path="staffs-payor-exclusion"
              element={<InsuranceExclusion></InsuranceExclusion>}
            ></Route>
            <Route
              path="staffs-sub-activity-exclusion"
              element={<ServiceSubTypeExclusions></ServiceSubTypeExclusions>}
            ></Route>
            <Route
              path="staffs-client-exclusion"
              element={<PatientExclusion></PatientExclusion>}
            ></Route>
            <Route
              path="staffs-portal"
              element={<StaffPortal></StaffPortal>}
            ></Route>
          </Route>
          {/* BILLING  */}
          <Route
            path="submit-billing"
            element={<BillingManager></BillingManager>}
          >
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

          <Route path="patient-List" element={<Patients></Patients>}></Route>
          <Route path="staffs" element={<Staffs></Staffs>}></Route>
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
          <Route path="era-manager" element={<EraManager></EraManager>}></Route>
          {/* PAYROLL  */}
          <Route
            path="processing-payroll"
            element={<ProcessingPayroll></ProcessingPayroll>}
          ></Route>
          <Route path="timesheet" element={<Timesheet></Timesheet>}></Route>
          <Route path="report" element={<Report></Report>}></Route>
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
            <Route path="cpt-code" element={<AddCptCode></AddCptCode>}></Route>
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
            <Route path="pay-period" element={<PayPeriod></PayPeriod>}></Route>
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
