import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className=" mx-auto flex items-center justify-center my-5">
      <div>
        <h1>from builder</h1>
        <button className="pms-button">
          <Link to={"/form-template"}>Demo Form</Link>
        </button>
        <div className="my-2"></div>

        <Link to={"/form-direct-service"}>
          <button className="pms-button">
            DIRECT-SERVICE PARENT TRAINING NOTE
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Parent-training-session"}>
          <button className="pms-button">PARENT TRAINING SESSION NOTE</button>  
        </Link>
        <div className="my-2"></div>
        <Link to={"/BCBA-trainee"}>
          <button className="pms-button">
            BCBA TRAINEE SUPERVISION MONTHLY FORM
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/private-client"}>
          <button className="pms-button">PRIVATE CLIENT INTAKE FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/form-demo-json"}>
          <button className="pms-button">Demo form json</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/outpatient-treatment-request"}>
          <button className="pms-button">
            OUTPATIENT TREATMENT REQUEST [OTR] FORM
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/clinic-treatment"}>
          <button className="pms-button">Clinic Treatment</button>
        </Link>
        <div className="my-2"></div>
        <div className="my-2"></div>
        <Link to={"/FBA"}>
          <button className="pms-button">FBA</button>
        </Link>
        <div className="my-2"></div>
        <div className="my-2"></div>
        <Link to={"/BCBATraineeUSF"}>
          <button className="pms-button">
            BCBA TRAINEE UNIQUE SUPERVISION FORM
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/MonthlySupervisionNote"}>
          <button className="pms-button">MONTHLY SUPERVISION NOTE</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/DiagnosisSessionForm"}>
          <button className="pms-button">DIAGNOSIS SESSION FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/DischargeSummary"}>
          <button className="pms-button">DISCHARGE SUMMARY</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/TreatmentPlanForm"}>
          <button className="pms-button">TREATMENT PLAN FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Parent-treatment-from"}>
          <button className="pms-button">PARENT TREATMENT FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/assessment-form"}>
          <button className="pms-button">ASSESSMENT FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/behavior-analysis-progress-note"}>
          <button className="pms-button">Behavior Analysis Progress Note</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/supervision-supervision"}>
          <button className="pms-button">SUPERVISION NON-BILLABLE SUPERVISION</button>
        </Link>

        <div className="my-2"></div>
        <Link to={"/supervision-form"}>
          <button className="pms-button">SUPERVISION FORM</button>
        </Link>

        <div className="my-2"></div>
        <Link to={"/Service-Verification-log"}>
          <button className="pms-button">SERVICE VERIFICATION LOG</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Super-vision-Non-billable-Brct"}>
          <button className="pms-button">SUPERVISION NON-BILLABLE BRCT</button>
        </Link>

        <div className="my-2"></div>
        <Link to={"/cp-notes-form"}>
          <button className="pms-button">CP NOTES Form</button>
        </Link>

        <div className="my-2"></div>
        <Link to={"/clinical-form"}>
          <button className="pms-button">Clinical Form</button>
        </Link>


        <div className="my-2"></div>
        <Link to={"/smallsoap-form"}>
          <button className="pms-button">small soap Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/unique-supervision-form"}>
          <button className="pms-button">Unique Supervision Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/management-modification-form"}>
          <button className="pms-button">Management Modification Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Supervision-Assessment"}>
          <button className="pms-button">SESSION NOTES 2</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Structure-Of-Process"}>
          <button className="pms-button">Structure-Of-Process</button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
