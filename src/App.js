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

function App() {
  return (
    <div className="app-body">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          {/* <Route
            path="/appointment"
            element={<Appointment></Appointment>}
          ></Route> */}
          <Route path="/session-manage" element={<ListView></ListView>}></Route>
          <Route
            path="/calender-view"
            element={<CalendarView></CalendarView>}
          ></Route>
          <Route
            path="/recurring-session"
            element={<RecurringSession></RecurringSession>}
          ></Route>
          <Route
            path="/recurring-session-edit"
            element={<RecurringSessionEdit></RecurringSessionEdit>}
          ></Route>
          <Route path="/patient-List" element={<Patients></Patients>}></Route>
          <Route path="/staffs" element={<Staffs></Staffs>}></Route>
          {/* <Route path="/billing" element={<Billing></Billing>}></Route> */}
          <Route
            path="/submit-billing"
            element={<BillingManager></BillingManager>}
          ></Route>
          <Route path="/ar-leader" element={<ArLedger></ArLedger>}></Route>
          <Route
            path="/contract-rate"
            element={<ContractRate></ContractRate>}
          ></Route>
          <Route
            path="billing/rate-list-add-edit/:id"
            element={<ContractRateEditAdd></ContractRateEditAdd>}
          ></Route>
          <Route
            path="billing/rate-list-add-edit"
            element={<ContractRateEditAdd></ContractRateEditAdd>}
          ></Route>
          <Route
            path="/patient-statement"
            element={<PatientStatement></PatientStatement>}
          ></Route>
          {/* <Route path="/payment" element={<Payment></Payment>}></Route> */}
          <Route
            path="/era-remittance"
            element={<ERemittance></ERemittance>}
          ></Route>
          <Route path="/m-posting" element={<MPosting></MPosting>}></Route>
          <Route
            path="billing/deposit-add/:id"
            element={<MPostingEditAdd></MPostingEditAdd>}
          ></Route>
          <Route
            path="billing/deposit-add"
            element={<MPostingEditAdd></MPostingEditAdd>}
          ></Route>
          <Route
            path="billing/deposit-apply/:id"
            element={<MDepositApply></MDepositApply>}
          ></Route>
          <Route
            path="/era-manager"
            element={<EraManager></EraManager>}
          ></Route>
          <Route path="/report" element={<Report></Report>}></Route>
          {/* <Route path="/payroll" element={<Payroll></Payroll>}></Route> */}
          <Route
            path="/processing-payroll"
            element={<ProcessingPayroll></ProcessingPayroll>}
          ></Route>
          <Route path="/timesheet" element={<Timesheet></Timesheet>}></Route>
          {/* settings routes  */}
          <Route path="/settings" element={<Settings></Settings>}>
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
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
