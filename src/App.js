import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ContractRateEditAdd from "./Pages/Admin/Billing/ContactRate/ContractRate/ContractRateEditAdd";
import LogIn from "./Pages/LoginPage/LogIn";
//For testing purpose
import BatchingClaims from "./Pages/Admin/Billing/BillingManager/BatchingClaims/BatchingClaims";
import ManageClaims from "./Pages/Admin/Billing/BillingManager/ManageClaims/ManageClaims";
import ProcessingClaim from "./Pages/Admin/Billing/BillingManager/ProcessingClaims/ProcessingClaim";
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
import AuthorizationEdit from "./Pages/Admin/Patient/Patients/Authorization/AuthorizationEdit/AuthorizationEdit";
import Documents from "./Pages/Admin/Patient/Patients/Documents/Documents";
import PatientLedger from "./Pages/Admin/Patient/Patients/PatientLedger/PatientLedger";
import PatientPortal from "./Pages/Admin/Patient/Patients/PatientPortal/PatientPortal";
import Intake from "./Pages/Admin/Patient/Patients/Intake/Intake";
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
import WorkSchedule from "./Pages/Admin/Staff/Staffs/WorkSchedule/WorkSchedule";
// ##### Billing
import TestingTable from "./Testing/AntTableTest/TestingTable";
import BillingManager from "./Pages/Admin/Billing/BillingManager/BillingManager";
import ArLedger from "./Pages/Admin/Billing/ARLeadger/ArLedger";
import ContractRate from "./Pages/Admin/Billing/ContactRate/ContractRate";
import PatientStatement from "./Pages/Admin/Billing/PatientStatement/PatientStatement";
import Eligibility from "./Pages/Admin/Billing/Eligibility/Eligibility";
import ClaimWise from "./Pages/Admin/Billing/ARLeadger/Components/ClaimWise/ClaimWise";
import SessionWise from "./Pages/Admin/Billing/ARLeadger/Components/SessionWise/SessionWise";
import Sidebar from "./Pages/Shared/Sidebar/Sidebar";
import AddAuthorization from "./Pages/Admin/Patient/Patients/Authorization/AddAuthorization/AddAuthorization";
import ContractRateAdd from "./Pages/Admin/Billing/ContactRate/ContractRate/ContractRateAdd";
import MPosting from "./Pages/Admin/Payment/MPosting";
import MPostingEditAdd from "./Pages/Admin/Payment/MPosting/MPostingEditAdd";
import MDepositApply from "./Pages/Admin/Payment/MPosting/MDepositApply";
import Report from "./Pages/Admin/Report/Report";
import Timesheet from "./Pages/Admin/Payroll/TimeSheet/Timesheet";
import ProcessingPayroll from "./Pages/Admin/Payroll/ProcessingPayroll/ProcessingPayroll";
import Processing_Payroll from "./Pages/Admin/Payroll/ProcessingPayroll/ProcessingPayroll/Processing_Payroll";
import PayrollSubmission from "./Pages/Admin/Payroll/ProcessingPayroll/PayrollSubmission/PayrollSubmission";
import ProcessedPayroll from "./Pages/Admin/Payroll/ProcessingPayroll/ProcessedPayroll/ProcessedPayroll";
import Settings from "./Pages/Admin/Settings/Settings";
import NameLocation from "./Pages/Admin/Settings/Settings/NameLocation/NameLocation";
import InsuranceSetup from "./Pages/Admin/Settings/Settings/InsuranceSetUp/InsuranceSetup";
import AddTreatments from "./Pages/Admin/Settings/Settings/AddTreatment/AddTreatments";
import AddServices from "./Pages/Admin/Settings/Settings/AddServices/AddServices";
import AddCptCode from "./Pages/Admin/Settings/Settings/AddCptCode/AddCptCode";
import AddStaffType from "./Pages/Admin/Settings/Settings/AddStaffType/AddStaffType";
import ReferringProvider from "./Pages/Admin/Settings/Settings/ReferringProvider/ReferringProvider";
import PlaceOfServices from "./Pages/Admin/Settings/Settings/PlaceOfService/PlaceOfServices";
import VendorNumberSetup from "./Pages/Admin/Settings/Settings/VendorNumberSetup/VendorNumberSetup";
import PayPeriod from "./Pages/Admin/Settings/Settings/PayPeriod/PayPeriod";
import UnbillableActivity from "./Pages/Admin/Settings/Settings/UnbillableActivity/UnbillableActivity";
import CreateServiceRules from "./Pages/Admin/Settings/Settings/CreateServiceRules/CreateServiceRules";
import FormAndLibrary from "./Pages/Admin/Settings/Settings/FormAndLIbrary/FormAndLibrary";
import TpmsMeet from "./Pages/Admin/Settings/Settings/TPMSMeet/TpmsMeet";
import BusinessFiles from "./Pages/Admin/Settings/Settings/BusinessFiles/BusinessFiles";
import DataImport from "./Pages/Admin/Settings/Settings/DataImport/DataImport";
import FormsBuilder from "./Pages/Admin/Settings/Settings/FormsBuilder/FormsBuilder";
import Logo from "./Pages/Admin/Settings/Settings/Logo/Logo";
import HolidaySetup from "./Pages/Admin/Settings/Settings/HolidaySetUp/HolidaySetup";
import AddServiceSubType from "./Pages/Admin/Settings/Settings/AddServiceSubType/AddServiceSubType";
import AddInsurance from "./Pages/Admin/Settings/Settings/AddInsurance/AddInsurance";
import EraManager from "./Pages/Admin/Settings/Settings/QAFiles/EraManager";
import UnBillableTimeSheet from "./Pages/Admin/Settings/Settings/UnBillableTimesheet/UnBillableTimeSheet";
import AddServiceSubTypeTab from "./Pages/Admin/Settings/Settings/AddServiceSubType/AddServiceSubType/AddServiceSubTypeTab";
import CptCodeExclusion from "./Pages/Admin/Settings/Settings/CptCodeExclusion/CptCodeExclusion";
import FormTemplate1 from "./Pages/Admin/FormsTemplate/FormTemplate1";
import DirectService from "./Pages/Admin/FormsTemplate/DirectService";
import ParentTrainingSession from "./Pages/Admin/FormsTemplate/ParentTrainingSession";
import BCBATrainee from "./Pages/Admin/FormsTemplate/BCBATrainee";
import PrivateClient from "./Pages/Admin/FormsTemplate/PrivateClient";
import OutpatientTreatmentRequest from "./Pages/Admin/FormsTemplate/OutpatientTreatmentRequest";
import JsonToHtml from "./Pages/Admin/FormsTemplate/JsonForm/JsonToHtml";
import Form from "./Pages/Admin/Settings/Settings/FormsBuilder/Form";
import ClinicTreatment from "./Pages/Admin/FormsTemplate/ClinicTreatment";
import AntDate from "./Testing/AntDatePicker/AntDate";
import ERemittance from "./Pages/Admin/Payment/ERRemitance/ERemittance";
import FormBuilderCreate from "./Pages/Admin/Settings/Settings/FormsBuilder/FormBuilderCreate";
import FBA from "./Pages/Admin/FormsTemplate/FBA";
import NewFromNew from "./Pages/Admin/FormsTemplate/NewFromNew";
import GssupervisionForm from "./Pages/Admin/FormsTemplate/GssupervisionForm";

import BCBATraineeUSR from "./Pages/Admin/FormsTemplate/BCBATraineeUSR";
import MonthlySupervisionNote from "./Pages/Admin/FormsTemplate/MonthlySupervisionNote";
import DiagnosisSessionForm from "./Pages/Admin/FormsTemplate/DiagnosisSessionForm";
import DischargeSummary from "./Pages/Admin/FormsTemplate/DischargeSummary";
import TreatmentPlanForm from "./Pages/Admin/FormsTemplate/TreatmentPlanForm";
import ParentTrainingForm from "./Pages/Admin/FormsTemplate/ParentTreatmentForm";
import AssessmentForm from "./Pages/Admin/FormsTemplate/AssessmentForm";
import BehaviorAnalysisProgressNote from "./Pages/Admin/FormsTemplate/BehaviorAnalysisProgressNote";
import SupervisionSupervision from "./Pages/Admin/FormsTemplate/SupervisionSupervision";
import SupervisionForm from "./Pages/Admin/FormsTemplate/SupervisionForm";
import ServiceVerificationlog from "./Pages/Admin/FormsTemplate/ServiceVerificationlog";
import SupervisionNonbillableBrct from "./Pages/Admin/FormsTemplate/SupervisionNonbillableBrct";
import CPNotesForm from "./Pages/Admin/FormsTemplate/CPNotesForm";
import ClinicalForm from "./Pages/Admin/FormsTemplate/ClinicalForm";
import SmallSoap from "./Pages/Admin/FormsTemplate/SmallSoap";
import UniqueSupervisionForm from "./Pages/Admin/FormsTemplate/UniqueSupervisionForm";
import ManagementModificationForm from "./Pages/Admin/FormsTemplate/ManagementModificationForm";
import SupervisionAssessment from "./Pages/Admin/FormsTemplate/SupervisionAssessment";
import AntTableSearchBox from "./Testing/AntTableTest/AntTableSearchBox";
import RequireAuth from "./Authorization/RequireAuth";
import InfiniteScrollTest from "./Testing/ApiTesting/InfiniteScrollTest";
import ProfileInformation from "./Pages/Shared/Profile/ProfileInformation";
import PasswordChange from "./Pages/Shared/Profile/PasswordChange";
import Profile from "./Pages/Shared/Profile/Profile";
import QueryTesting from "./Testing/ApiTesting/QueryTesting";
import EmailAndSms from "./Pages/Admin/Settings/Settings/EmailAndSMS/EmailAndSms";
import EmailSetting from "./Pages/Admin/Settings/Settings/EmailAndSMS/EmailSetting/EmailSetting";
import SmsSetting from "./Pages/Admin/Settings/Settings/EmailAndSMS/SmsSetting/SmsSetting";
import { ToastContainer } from "react-toastify";
import SecBillingManager from "./Pages/Admin/Billing/SecBillingManager/SecBillingManager";
import ManageSecondaryClaims from "./Pages/Admin/Billing/SecBillingManager/ManageSecondaryClaims/ManageSecondaryClaims";
import PendingSecondaryClaim from "./Pages/Admin/Billing/SecBillingManager/PendingSecondaryClaim/PendingSecondaryClaim";
import ERAFiles from "./Pages/Admin/Settings/Settings/QAFiles/QAFile/ERAFiles";
import Files277 from "./Pages/Admin/Settings/Settings/QAFiles/QAFile/Files277";
import Files999 from "./Pages/Admin/Settings/Settings/QAFiles/QAFile/Files999";
import EDIStatusFiles from "./Pages/Admin/Settings/Settings/QAFiles/QAFile/EDIStatusFiles";
import Test from "./Pages/Shared/Test";
import IntakeForm from "./Pages/Admin/Settings/Settings/IntakeForm/IntakeForm";
import StructureOfProcess from "./Pages/Admin/Settings/Settings/StructureOfProcess/StructureOfProcess";
import AppIdTracking from "./Pages/Admin/Settings/Settings/AppIdTracking/AppIdTracking";
import VOB from "./Pages/Admin/Patient/Patients/VOB/VOB";
import { usePersistStore } from "./CustomHooks/usePersistStore";
//super admin routes
import SuperAdmin from "./Pages/SuperAdmin/SuperAdmin";
import ProviderAccess from "./Pages/SuperAdmin/Components/ProviderAccess/ProviderAccess";
import AdminAccess from "./Pages/SuperAdmin/Components/AdminAccess/AdminAccess";
import Payor from "./Pages/SuperAdmin/Components/Payor/Payor";
import CompaniesAndFacilities from "./Pages/SuperAdmin/Components/CompaniesAndFacilities/CompaniesAndFacilities";
import CompanyLevelCSVReport from "./Pages/SuperAdmin/Components/CompanyLevelCSVReport/CompanyLevelCSVReport";
import UserPagePermission from "./Pages/SuperAdmin/Components/UserPagePermission/UserPagePermission";
import AddViewstothefacility from "./Pages/SuperAdmin/Components/AddViewstothefacility/AddViewstothefacility";
import ManageCredential from "./Pages/SuperAdmin/Components/ManageCredential/ManageCredential";
import BulkUpload from "./Pages/SuperAdmin/Components/BulkUpload/BulkUpload";
import AllAccountsReportExecution from "./Pages/SuperAdmin/Components/AllAccountsReportExecution/AllAccountsReportExecution";
import DuplicateManageClaimsReport from "./Pages/SuperAdmin/Components/DuplicateManageClaimsReport/DuplicateManageClaimsReport";
import MissingBilledSessionsUnderAppointment from "./Pages/SuperAdmin/Components/MissingBilledSessionsUnderAppointment/MissingBilledSessionsUnderAppointment";
import CreateDepositApplyWithNoCheck from "./Pages/SuperAdmin/Components/CreateDepositApplyWithNoCheck/CreateDepositApplyWithNoCheck";
import InsuranceDetails from "./Pages/SuperAdmin/Components/InsuranceDetails/InsuranceDetails";
import SMSEmailSettings from "./Pages/SuperAdmin/Components/SMSEmailSettings/SMSEmailSettings";
import BlockUnblockAdmins from "./Pages/SuperAdmin/Components/BlockUnblockAdmins/BlockUnblockAdmins";
import BillerlogUser from "./Pages/SuperAdmin/Components/BillerlogUser/BillerlogUser";
import OfficeStaff from "./Pages/Admin/Staff/AddStaff/OfficeStaff";
import Facility from "./Pages/SuperAdmin/Components/ProviderAccess/Components/Facility/Facility";
import CreateUser from "./Pages/SuperAdmin/Components/ProviderAccess/Components/CreateUser/CreateUser";
import DeleteUser from "./Pages/SuperAdmin/Components/ProviderAccess/Components/DeleteUser/DeleteUser";
import UnlockUser from "./Pages/SuperAdmin/Components/ProviderAccess/Components/UnlockUser/UnlockUser";
import SwitchUser from "./Pages/SuperAdmin/Components/ProviderAccess/Components/SwitchUser/SwitchUser";
import Welcome from "./Pages/SuperAdmin/Components/Welcome";
import PageAccess from "./Pages/SuperAdmin/Components/AdminAccess/Components/PageAccess/PageAccess";
import AdminCreateUser from "./Pages/SuperAdmin/Components/AdminAccess/Components/AdminCreateUser/AdminCreateUser";
import AdminDeleteUser from "./Pages/SuperAdmin/Components/AdminAccess/Components/AdminDeleteUser/AdminDeleteUser";
import AdminUnlockUser from "./Pages/SuperAdmin/Components/AdminAccess/Components/AdminUnlockUser/AdminUnlockUser";
import AdminSwitchUser from "./Pages/SuperAdmin/Components/AdminAccess/Components/AdminSwitchUser/AdminSwitchUser";
import Program from "./Pages/Admin/Settings/Settings/Program/Program";
import AccountType from "./Pages/Admin/Settings/Settings/Program/AccountType/AccountType";
import AllPrograms from "./Pages/Admin/Settings/Settings/Program/AllPrograms/AllPrograms";
import ProgramCategory from "./Pages/Admin/Settings/Settings/Program/ProgramCategory/ProgramCategory";
import Questionnaire from "./Pages/Admin/Settings/Settings/Program/Questionnaire/Questionnaire";
import AddAllProgram from "./Pages/Admin/Settings/Settings/Program/AllPrograms/Components/AddAllProgram";
import EditAllProgram from "./Pages/Admin/Settings/Settings/Program/AllPrograms/Components/EditAllProgram";
import StructureofProcess from "./Pages/Admin/FormsTemplate/StructureofProcess";
import CallLog from "./Pages/Admin/Patient/Patients/CallLog/CallLog";
import Chat from "./Pages/Shared/NavigationBar/Chat/Chat";
import ChatInbox from "./Pages/Shared/NavigationBar/Chat/ChatInbox/ChatInbox";
import BIRPProgressForm from "./Pages/Admin/FormsTemplate/MentalHealth/BIRPProgressForm";
import DISCHARGE_SUMMEREY from "./Pages/Admin/FormsTemplate/MentalHealth/DISCHARGE_SUMMEREY";
import MEDICATION_FLOWSHEET from "./Pages/Admin/FormsTemplate/MentalHealth/MEDICATION_FLOWSHEET";
import PCP_COMMUNICATION from "./Pages/Admin/FormsTemplate/MentalHealth/PCP_COMMUNICATION";
import CFARS_Form from "./Pages/Admin/FormsTemplate/MentalHealth/CFARS_Form";
import NO_SHOW_PROGRESSNOTE from "./Pages/Admin/FormsTemplate/MentalHealth/NO_SHOW_PROGRESSNOTE";
import LOCUS_WORKSHEET from "./Pages/Admin/FormsTemplate/MentalHealth/LOCUS_WORKSHEET";
import RELEASE_OF_INFORMATION from "./Pages/Admin/FormsTemplate/MentalHealth/RELEASE_OF_INFORMATION";
import CONSENT_TO_TREATMENT from "./Pages/Admin/FormsTemplate/MentalHealth/CONSENT_TO_TREATMENT";
import FARS_FORM from "./Pages/Admin/FormsTemplate/MentalHealth/FARS_FORM";
import MEDICATION_CONSENT from "./Pages/Admin/FormsTemplate/MentalHealth/MEDICATION_CONSENT";
import BIOPSYCHOSOCIAL from "./Pages/Admin/FormsTemplate/MentalHealth/BIOPSYCHOSOCIAL";
import MASTER_TREATMENT_PLAN from "./Pages/Admin/FormsTemplate/MentalHealth/MASTER_TREATMENT_PLAN";
import BIOPSYCHOSOCIAL_ASSESSMENT from "./Pages/Admin/FormsTemplate/MentalHealth/BIOPSYCHOSOCIAL_ASSESSMENT";
import NEW_TWO from "./Pages/Admin/FormsTemplate/SpeechTherapy/NEW_TWO";
import SPEECH_LANGUAGE_SESSION_NOTE from "./Pages/Admin/FormsTemplate/SpeechTherapy/SPEECH_LANGUAGE_SESSION_NOTE";
import SPEECH_LANGUAGE_PROGRESS_REPORT from "./Pages/Admin/FormsTemplate/SpeechTherapy/SPEECH_LANGUAGE_PROGRESS_REPORT";
import THERAPIST_COMMUNICATION_SESSION_NOTES from "./Pages/Admin/FormsTemplate/SpeechTherapy/THERAPIST_COMMUNICATION_SESSION_NOTES";
import TREATMENT_PLAN from "./Pages/Admin/FormsTemplate/SpeechTherapy/TREATMENT_PLAN";
import INITIAL_SPEECH_THERAPY_EVALUATION from "./Pages/Admin/FormsTemplate/SpeechTherapy/INITIAL_SPEECH_THERAPY_EVALUATION";
import SoapNotes from "./Pages/Admin/FormsTemplate/SoapNotes";
import DailySoap from "./Pages/Admin/FormsTemplate/SpeechTherapy/DailySoap";
import CBHbehaviourAssessmentForm from "./Pages/Admin/FormsTemplate/CBHbehaviourAssessmentForm";

import SESSION_NOTES from "./Pages/Admin/FormsTemplate/SESSION_NOTES";
import CBH_PROGRESS_NOTE from "./Pages/Admin/FormsTemplate/CBH_PROGRESS_NOTE";
import CBH_MEDICATION_MANAGEMENT_PROGRESS_NOTE from "./Pages/Admin/FormsTemplate/CBH_MEDICATION_MANAGEMENT_PROGRESS_NOTE";
import DataSheetForm from "./Pages/Admin/FormsTemplate/DataSheetForm";
import LocusScoreSheetForm from "./Pages/Admin/FormsTemplate/LocusScoreSheetForm";
import TreatmentPlanReview from "./Pages/Admin/FormsTemplate/TreatmentPlanReview";
import CBH_PSYCHIATRIC_EVALUATION_AND_MANAGEMENT_ASSESSMENT from "./Pages/Admin/FormsTemplate/CBH_PSYCHIATRIC_EVALUATION_AND_MANAGEMENT_ASSESSMENT";
import RiskAssessment from "./Pages/Admin/FormsTemplate/RiskAssessment";
import SpeechLanguageSessionNotes from "./Pages/Admin/FormsTemplate/SpeechLanguageSessionNotes";
import DiagnosisForm from "./Pages/Admin/FormsTemplate/DiagnosisForm";
import SpeechLanguageProgressReport from "./Pages/Admin/FormsTemplate/SpeechLanguageProgressReport";
import OtProgressReport from "./Pages/Admin/FormsTemplate/OtProgressReport";
function App() {
  const handle = useFullScreenHandle();
  //redux store persistency, If user reload the page redux store will not lost the accessToken and userInfo
  const auth = usePersistStore();
  return (
    <div className="app-body">
      <FullScreen handle={handle}>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<LogIn></LogIn>}></Route>
          {/* ------------------------form--------------------------- */}
          <Route path="/test" element={<Test></Test>}></Route>
          <Route path="/forms" element={<Form></Form>}></Route>
          <Route
            path="/form-demo-json"
            element={<JsonToHtml></JsonToHtml>}
          ></Route>
          <Route
            path="/form-template"
            element={<FormTemplate1></FormTemplate1>}
          ></Route>
          <Route
            path="/form-direct-service"
            element={<DirectService></DirectService>}
          ></Route>
          <Route
            path="/Parent-training-session"
            element={<ParentTrainingSession></ParentTrainingSession>}
          ></Route>
          <Route
            path="/BCBA-trainee"
            element={<BCBATrainee></BCBATrainee>}
          ></Route>
          <Route
            path="/private-client"
            element={<PrivateClient></PrivateClient>}
          ></Route>
          <Route
            path="/outpatient-treatment-request"
            element={<OutpatientTreatmentRequest></OutpatientTreatmentRequest>}
          ></Route>
          <Route
            path="/clinic-treatment"
            element={<ClinicTreatment></ClinicTreatment>}
          ></Route>
          <Route path="/FBA" element={<FBA></FBA>}></Route>
          <Route
            path="/BCBATraineeUSF"
            element={<BCBATraineeUSR></BCBATraineeUSR>}
          ></Route>
          <Route
            path="/MonthlySupervisionNote"
            element={<MonthlySupervisionNote></MonthlySupervisionNote>}
          ></Route>
          <Route
            path="/DiagnosisSessionForm"
            element={<DiagnosisSessionForm></DiagnosisSessionForm>}
          ></Route>
          <Route
            path="/DischargeSummary"
            element={<DischargeSummary></DischargeSummary>}
          ></Route>
          <Route
            path="/TreatmentPlanForm"
            element={<TreatmentPlanForm></TreatmentPlanForm>}
          ></Route>
          <Route
            path="/Parent-treatment-from"
            element={<ParentTrainingForm></ParentTrainingForm>}
          ></Route>
          <Route
            path="/assessment-form"
            element={<AssessmentForm></AssessmentForm>}
          ></Route>
          <Route
            path="/behavior-analysis-progress-note"
            element={
              <BehaviorAnalysisProgressNote></BehaviorAnalysisProgressNote>
            }
          ></Route>
          <Route
            path="/supervision-supervision"
            element={<SupervisionSupervision></SupervisionSupervision>}
          ></Route>
          <Route
            path="/supervision-form"
            element={<SupervisionForm></SupervisionForm>}
          ></Route>
          <Route
            path="/Service-Verification-log"
            element={<ServiceVerificationlog></ServiceVerificationlog>}
          ></Route>
          <Route
            path="/Super-vision-Non-billable-Brct"
            element={<SupervisionNonbillableBrct></SupervisionNonbillableBrct>}
          ></Route>
          <Route
            path="/cp-notes-form"
            element={<CPNotesForm></CPNotesForm>}
          ></Route>
          <Route
            path="/clinical-form"
            element={<ClinicalForm></ClinicalForm>}
          ></Route>
          <Route
            path="/smallsoap-form"
            element={<SmallSoap></SmallSoap>}
          ></Route>
          <Route
            path="/session-notes"
            element={<SESSION_NOTES></SESSION_NOTES>}
          ></Route>

          <Route
            path="/unique-supervision-form"
            element={<UniqueSupervisionForm></UniqueSupervisionForm>}
          ></Route>
          <Route
            path="/management-modification-form"
            element={<ManagementModificationForm></ManagementModificationForm>}
          ></Route>
          <Route
            path="/Supervision-Assessment"
            element={<SupervisionAssessment></SupervisionAssessment>}
          ></Route>
          <Route
            path="/Structure-Of-Process"
            element={<StructureofProcess></StructureofProcess>}
          ></Route>
          <Route
            path="/BIRPP-rogress-Form"
            element={<BIRPProgressForm></BIRPProgressForm>}
          ></Route>
          <Route path="/cfars-form" element={<CFARS_Form></CFARS_Form>}></Route>
          <Route
            path="/discharge-summary"
            element={<DISCHARGE_SUMMEREY></DISCHARGE_SUMMEREY>}
          ></Route>
          <Route
            path="/medication-flowsheet"
            element={<MEDICATION_FLOWSHEET></MEDICATION_FLOWSHEET>}
          ></Route>
          <Route
            path="/no-show-progressnote"
            element={<NO_SHOW_PROGRESSNOTE></NO_SHOW_PROGRESSNOTE>}
          ></Route>
          <Route
            path="/pcp-communication"
            element={<PCP_COMMUNICATION></PCP_COMMUNICATION>}
          ></Route>
          <Route
            path="/locus-worksheet"
            element={<LOCUS_WORKSHEET></LOCUS_WORKSHEET>}
          ></Route>
          <Route
            path="/relase-of-information"
            element={<RELEASE_OF_INFORMATION></RELEASE_OF_INFORMATION>}
          ></Route>
          <Route
            path="/consent-to-treatment"
            element={<CONSENT_TO_TREATMENT></CONSENT_TO_TREATMENT>}
          ></Route>
          <Route path="/fars-form" element={<FARS_FORM></FARS_FORM>}></Route>
          <Route
            path="/medication-consent"
            element={<MEDICATION_CONSENT></MEDICATION_CONSENT>}
          ></Route>
          <Route
            path="/biopsycosocial"
            element={<BIOPSYCHOSOCIAL></BIOPSYCHOSOCIAL>}
          ></Route>
          <Route
            path="/master-treatment-plan"
            element={<MASTER_TREATMENT_PLAN></MASTER_TREATMENT_PLAN>}
          ></Route>
          <Route
            path="/biopsychosocial-assessment"
            element={<BIOPSYCHOSOCIAL_ASSESSMENT></BIOPSYCHOSOCIAL_ASSESSMENT>}
          ></Route>
          <Route path="/new-two" element={<NEW_TWO></NEW_TWO>}></Route>
          <Route
            path="/speech-language-note"
            element={
              <SPEECH_LANGUAGE_SESSION_NOTE></SPEECH_LANGUAGE_SESSION_NOTE>
            }
          ></Route>
          <Route
            path="/speech-language-progress-report"
            element={
              <SPEECH_LANGUAGE_PROGRESS_REPORT></SPEECH_LANGUAGE_PROGRESS_REPORT>
            }
          ></Route>
          <Route
            path="/therapist-communication-session-notes"
            element={
              <THERAPIST_COMMUNICATION_SESSION_NOTES></THERAPIST_COMMUNICATION_SESSION_NOTES>
            }
          ></Route>
          <Route
            path="/treatment-plan"
            element={<TREATMENT_PLAN></TREATMENT_PLAN>}
          ></Route>
          <Route
            path="/initial-speech-therapy-evaluation"
            element={
              <INITIAL_SPEECH_THERAPY_EVALUATION></INITIAL_SPEECH_THERAPY_EVALUATION>
            }
          ></Route>
          <Route path="/daily-soap" element={<DailySoap></DailySoap>}></Route>
          <Route
            path="/new-form-new"
            element={<NewFromNew></NewFromNew>}
          ></Route>
          <Route
            path="/Gs-Supervision-Form"
            element={<GssupervisionForm></GssupervisionForm>}
          ></Route>
          <Route path="/Soap-Notes" element={<SoapNotes></SoapNotes>}></Route>
          <Route
            path="/CbhBehaviourAnalysisAssessment"
            element={<CBHbehaviourAssessmentForm></CBHbehaviourAssessmentForm>}
          ></Route>
          <Route
            path="/data-sheet"
            element={<DataSheetForm></DataSheetForm>}
          ></Route>
          <Route
            path="/locus-score-sheet"
            element={<LocusScoreSheetForm></LocusScoreSheetForm>}
          ></Route>
          <Route
            path="/treatment-plan-form"
            re
            element={<TreatmentPlanReview></TreatmentPlanReview>}
          ></Route>
          <Route
            path="/cbh-progress-note"
            element={<CBH_PROGRESS_NOTE></CBH_PROGRESS_NOTE>}
          ></Route>
          <Route
            path="/cbh-medication-management-progress-note"
            element={
              <CBH_MEDICATION_MANAGEMENT_PROGRESS_NOTE></CBH_MEDICATION_MANAGEMENT_PROGRESS_NOTE>
            }
          ></Route>
          <Route
            path="/cbh-psychiatric-evaluation"
            element={
              <CBH_PSYCHIATRIC_EVALUATION_AND_MANAGEMENT_ASSESSMENT></CBH_PSYCHIATRIC_EVALUATION_AND_MANAGEMENT_ASSESSMENT>
            }
          ></Route>
          <Route
            path="/risk-assessment"
            element={<RiskAssessment></RiskAssessment>}
          ></Route>
          <Route
            path="/speech-language-session-notes"
            element={<SpeechLanguageSessionNotes></SpeechLanguageSessionNotes>}
          ></Route>
           <Route
            path="/diagnosis-form"
            element={<DiagnosisForm></DiagnosisForm>}
          ></Route>
          <Route
            path="/speech-language-progressss-report"
            element={<SpeechLanguageProgressReport></SpeechLanguageProgressReport>}
          ></Route>

<Route
            path="/ot-progressss-report"
            element={<OtProgressReport></OtProgressReport>}
          ></Route>
          {/* ------------------------form End--------------------------- */}
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

          {/* ------------------------form--------------------------- */}
          <Route
            path="/form-template"
            element={<FormTemplate1></FormTemplate1>}
          ></Route>
          <Route
            path="/form-direct-service"
            element={<DirectService></DirectService>}
          ></Route>
          {/* ------------------------form End--------------------------- */}

          {/*Testing */}
          <Route path="/search" element={<CustomSearch></CustomSearch>}></Route>
          <Route path="test" element={<AntTableTest></AntTableTest>}></Route>
          <Route path="table-api" element={<TableApi></TableApi>}></Route>
          <Route
            path="/details/:id"
            element={<SingleDetails></SingleDetails>}
          ></Route>
          <Route
            path="/testing"
            element={<TestingTable></TestingTable>}
          ></Route>
          <Route
            path="/search-box"
            element={<AntTableSearchBox></AntTableSearchBox>}
          ></Route>
          <Route path="/test-date" element={<AntDate></AntDate>}></Route>
          <Route
            path="/test-scroll"
            element={<InfiniteScrollTest></InfiniteScrollTest>}
          ></Route>
          <Route
            path="/queryTest"
            element={<QueryTesting></QueryTesting>}
          ></Route>
          {/*--------- Testing End ------------*/}

          {/* Super Admin Panel */}
          <Route path="/super-admin" element={<SuperAdmin></SuperAdmin>}>
            <Route index element={<Welcome></Welcome>}></Route>
            <Route
              path="provider-access"
              element={<ProviderAccess></ProviderAccess>}
            >
              <Route index element={<Navigate to="facility" />} />
              <Route path="facility" element={<Facility></Facility>}></Route>
              <Route
                path="create-user"
                element={<CreateUser></CreateUser>}
              ></Route>
              <Route
                path="delete-user"
                element={<DeleteUser></DeleteUser>}
              ></Route>
              <Route
                path="unlock-user"
                element={<UnlockUser></UnlockUser>}
              ></Route>
              <Route
                path="switch-user"
                element={<SwitchUser></SwitchUser>}
              ></Route>
            </Route>
            <Route path="admin-access" element={<AdminAccess></AdminAccess>}>
              <Route index element={<Navigate to="page-access" />} />
              <Route
                path="page-access"
                element={<PageAccess></PageAccess>}
              ></Route>
              <Route
                path="admin-create-user"
                element={<AdminCreateUser></AdminCreateUser>}
              ></Route>
              <Route
                path="admin-delete-user"
                element={<AdminDeleteUser></AdminDeleteUser>}
              ></Route>
              <Route
                path="admin-unlock-user"
                element={<AdminUnlockUser></AdminUnlockUser>}
              ></Route>
              <Route
                path="admin-switch-user"
                element={<AdminSwitchUser></AdminSwitchUser>}
              ></Route>
            </Route>
            <Route path="payor" element={<Payor></Payor>}></Route>
            <Route
              path="Companies-and-facilities"
              element={<CompaniesAndFacilities></CompaniesAndFacilities>}
            ></Route>
            <Route
              path="company-level-CSV-Report"
              element={<CompanyLevelCSVReport></CompanyLevelCSVReport>}
            ></Route>
            <Route
              path="user-page-permission"
              element={<UserPagePermission></UserPagePermission>}
            ></Route>
            <Route
              path="Add-views-to-the-facility"
              element={<AddViewstothefacility></AddViewstothefacility>}
            ></Route>
            <Route
              path="manage-credential"
              element={<ManageCredential></ManageCredential>}
            ></Route>
            <Route
              path="bulk-upload"
              element={<BulkUpload></BulkUpload>}
            ></Route>
            <Route
              path="billerlog-user"
              element={<BillerlogUser></BillerlogUser>}
            ></Route>
            <Route
              path="All-accounts-report-execution"
              element={
                <AllAccountsReportExecution></AllAccountsReportExecution>
              }
            ></Route>
            <Route
              path="duplicate-manage-claims-report"
              element={
                <DuplicateManageClaimsReport></DuplicateManageClaimsReport>
              }
            ></Route>
            <Route
              path="missing-billed-sessions-under-appointment"
              element={
                <MissingBilledSessionsUnderAppointment></MissingBilledSessionsUnderAppointment>
              }
            ></Route>
            <Route
              path="create-deposit-apply-with-no-check"
              element={
                <CreateDepositApplyWithNoCheck></CreateDepositApplyWithNoCheck>
              }
            ></Route>
            <Route
              path="insurance-details"
              element={<InsuranceDetails></InsuranceDetails>}
            ></Route>
            <Route
              path="sms-email-settings"
              element={<SMSEmailSettings></SMSEmailSettings>}
            ></Route>
            <Route
              path="blocked-admins-settings"
              element={<BlockUnblockAdmins></BlockUnblockAdmins>}
            ></Route>
          </Route>

          {/*  */}
          {/* Admin Pannel */}
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Sidebar handle={handle}></Sidebar>
              </RequireAuth>
            }
          >
            <Route
              path="report-export-view"
              element={<DownloadView></DownloadView>}
            ></Route>
            <Route path="chat" element={<Chat></Chat>}></Route>
            <Route path="chat/:id" element={<ChatInbox></ChatInbox>}></Route>

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
            {/* <Route
              path="billing/ar-followup-bucket-filter-types/1"
              element={<ProvideEscalation></ProvideEscalation>} 
            ></Route> */}
            <Route
              path="billing/ar-followup-bucket-filter-types/1"
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
              path="recurring-session-edit/:id"
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
              <Route path="patient-vob/:id" element={<VOB></VOB>}></Route>
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
              <Route
                path="patient-intake/:id"
                element={<Intake></Intake>}
              ></Route>
              <Route
                path="patient-call-log/:id"
                element={<CallLog></CallLog>}
              ></Route>
            </Route>
            <Route
              path="authorization-add"
              element={<AddAuthorization></AddAuthorization>}
            ></Route>
            <Route
              path="authorization-Edit/:id"
              element={<AuthorizationEdit></AuthorizationEdit>}
            ></Route>
            {/* ----------------------------------Patient End----------------------------------------------- */}
            {/* STAFF  */}
            <Route path="staffs" element={<Staffs></Staffs>}></Route>
            <Route
              path="create-staff/provider"
              element={<CreateStaff></CreateStaff>}
            ></Route>
            <Route
              path="create-staff/officeStaff"
              element={<OfficeStaff></OfficeStaff>}
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
              <Route
                path="work-schedule/:id"
                element={<WorkSchedule></WorkSchedule>}
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
            <Route
              path="submit-secondary-billing"
              element={<SecBillingManager></SecBillingManager>}
            >
              <Route
                index
                element={<Navigate to="pending-secondary-Claims" />}
              />
              <Route
                path="pending-secondary-Claims"
                element={<PendingSecondaryClaim></PendingSecondaryClaim>}
              ></Route>
              <Route
                path="manage-secondary-claims"
                element={<ManageSecondaryClaims></ManageSecondaryClaims>}
              ></Route>
            </Route>
            <Route path="ar-leader" element={<ArLedger></ArLedger>}>
              <Route index element={<Navigate to="ar-leader-claim-wish" />} />
              <Route
                path="ar-leader-claim-wish"
                element={<ClaimWise></ClaimWise>}
              ></Route>
              <Route
                path="ar-leader-session-wish"
                element={<SessionWise></SessionWise>}
              ></Route>
            </Route>
            <Route
              path="contract-rate"
              element={<ContractRate></ContractRate>}
            ></Route>
            <Route
              path="billing/rate-list-add"
              element={<ContractRateAdd></ContractRateAdd>}
            ></Route>
            <Route
              path="billing/rate-list-add-edit/:id"
              element={<ContractRateEditAdd></ContractRateEditAdd>}
            ></Route>
            <Route
              path="patient-statement"
              element={<PatientStatement></PatientStatement>}
            ></Route>
            <Route
              path="patient-eligibility"
              element={<Eligibility></Eligibility>}
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
                element={<Processing_Payroll />}
              ></Route>
              <Route
                path="submit-payroll"
                element={<PayrollSubmission />}
              ></Route>
              <Route
                path="completed-payroll"
                element={<ProcessedPayroll />}
              ></Route>
            </Route>
            <Route path="timesheet" element={<Timesheet></Timesheet>}></Route>
            {/* ----------------------------------PAYROLL End----------------------------------------------- */}
            {/* Report */}
            <Route path="report" element={<Report></Report>}></Route>
            {/* ----------------------------------Report End----------------------------------------------- */}
            {/* settings routes  */}
            <Route
              path="form-builder-create"
              element={<FormBuilderCreate></FormBuilderCreate>}
            ></Route>
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
                path="cpt-code-exclusion"
                element={<CptCodeExclusion></CptCodeExclusion>}
              ></Route>
              <Route
                path="sub-activity-setup"
                element={<AddServiceSubType></AddServiceSubType>}
              >
                <Route index element={<Navigate to="SubTypeTab" />} />

                <Route
                  // sub type
                  path="SubTypeTab"
                  element={<AddServiceSubTypeTab></AddServiceSubTypeTab>}
                ></Route>
              </Route>

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
                path="unbillable-time-sheet"
                element={<UnBillableTimeSheet></UnBillableTimeSheet>}
              ></Route>
              <Route
                path="session-rule"
                element={<CreateServiceRules></CreateServiceRules>}
              ></Route>
              <Route path="file-manager" element={<EraManager></EraManager>}>
                <Route index element={<Navigate to="era-files" />} />
                <Route path="era-files" element={<ERAFiles></ERAFiles>}></Route>
                <Route path="file-277" element={<Files277></Files277>}></Route>
                <Route path="file-999" element={<Files999></Files999>}></Route>
                <Route
                  path="edi-status-files"
                  element={<EDIStatusFiles></EDIStatusFiles>}
                ></Route>
              </Route>
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
              <Route
                path="sms-email-setting"
                element={<EmailAndSms></EmailAndSms>}
              >
                <Route index element={<Navigate to="email-setting" />} />
                <Route
                  path="email-setting"
                  element={<EmailSetting></EmailSetting>}
                ></Route>
                <Route
                  path="sms-setting"
                  element={<SmsSetting></SmsSetting>}
                ></Route>
              </Route>
              <Route
                path="intake-form"
                element={<IntakeForm></IntakeForm>}
              ></Route>
              <Route
                path="structure-of-process"
                element={<StructureOfProcess></StructureOfProcess>}
              ></Route>
              <Route
                path="app-id-tracking"
                element={<AppIdTracking></AppIdTracking>}
              ></Route>
              <Route
                path="create-program"
                element={<AddAllProgram></AddAllProgram>}
              ></Route>
              <Route
                path="edit-program/:id"
                element={<EditAllProgram></EditAllProgram>}
              ></Route>
              <Route path="program" element={<Program></Program>}>
                <Route index element={<Navigate to="account-type" />} />
                <Route
                  path="account-type"
                  element={<AccountType></AccountType>}
                ></Route>
                <Route
                  path="all-program"
                  element={<AllPrograms></AllPrograms>}
                ></Route>
                <Route
                  path="program-category"
                  element={<ProgramCategory></ProgramCategory>}
                ></Route>
                <Route
                  path="questionnaire"
                  element={<Questionnaire></Questionnaire>}
                ></Route>
              </Route>
            </Route>
            {/* ----------------------------------Setting End----------------------------------------------- */}
          </Route>

          {/* User Pannel */}
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

          {/* Patient-Portal Pannel */}
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
        {/* react toast show korar jnno */}
        <ToastContainer />
      </FullScreen>
    </div>
  );
}

export default App;
