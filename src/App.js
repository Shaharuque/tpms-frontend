import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Pages/Components/Sidebar.jsx";
import Dashboard from "./Pages/Pages/Dashboard.jsx";
import Appointment from "./Pages/Pages/Appointment.jsx";
import Patients from "./Pages/Pages/Patients.jsx";
import Staffs from "./Pages/Pages/Staffs.jsx";
import Billing from "./Pages/Pages/Billing.jsx";
import Payment from "./Pages/Pages/Payment.jsx";
import Report from "./Pages/Pages/Report.jsx";
import Payroll from "./Pages/Pages/Payroll.jsx";
import Settings from "./Pages/Pages/Settings.jsx";
import Test from "./Pages/Components/Test.jsx";
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
          <Route path="/patients" element={<Patients></Patients>}></Route>
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
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/session-manage" element={<ListView></ListView>}></Route>
          <Route
            path="/calender-view"
            element={<CalendarView></CalendarView>}
          ></Route>
          <Route
            path="/recurring-session"
            element={<RecurringSession></RecurringSession>}
          ></Route>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
