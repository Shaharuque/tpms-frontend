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
          <button className="pms-button">Discharge Summary</button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
