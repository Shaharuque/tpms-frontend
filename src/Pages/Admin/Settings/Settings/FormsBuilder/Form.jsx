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
        <Link to={"/form-demo-json"}>
          <button className="pms-button">Demo form json</button>
        </Link>
        <div className="my-2"></div>
        <div className="my-2"></div>
        <div className="my-2"></div>
        <Link to={"/supervision-form"}>
          <button className="pms-button">SUPERVISION FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/management-modification-form"}>
          <button className="pms-button">Management Modification Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Structure-Of-Process"}>
          <button className="pms-button">Structure-Of-Process</button>
        </Link>
        <br /> <div className="text-red-700">DOne</div>
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
        <Link to={"/clinic-treatment"}>
          <button className="pms-button">
            Clinical Treatment, Management & Modification Notes
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/private-client"}>
          <button className="pms-button">PRIVATE CLIENT INTAKE FORM</button>
        </Link>
        <br />
        Data Sheet
        <div className="my-2"></div>
        <Link to={"/new-form-new"}>
          <button className="pms-button">
           New Form New
          </button>
        </Link>
        <br />
        Session Notes
        <div className="my-2"></div>
        <Link to={"/clinical-form"}>
          <button className="pms-button">CP Clinical Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/cp-notes-form"}>
          <button className="pms-button">CP NOTES Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Super-vision-Non-billable-Brct"}>
          <button className="pms-button">Supervision and Assessment</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Supervision-Assessment"}>
          <button className="pms-button">SESSION NOTES 2</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Service-Verification-log"}>
          <button className="pms-button"> CBH SERVICE VERIFICATION LOG</button>
        </Link>
       
       
        <div className="my-2"></div>
        <Link to={"/Gs-Supervision-Form"}>
          <button className="pms-button">  GS Supervision Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/supervision-supervision"}>
          <button className="pms-button">Supervision Non-billable Note</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/behavior-analysis-progress-note"}>
          <button className="pms-button">
            CBH Behavior Analysis Progress Note
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/unique-supervision-form"}>
          <button className="pms-button">Unique Supervision Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/assessment-form"}>
          <button className="pms-button"> GS ASSESSMENT FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Parent-treatment-from"}>
          <button className="pms-button">GS Parent Training Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/TreatmentPlanForm"}>
          <button className="pms-button">GS Treatment Plan Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/DischargeSummary"}>
          <button className="pms-button">DISCHARGE SUMMARY</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/DiagnosisSessionForm"}>
          <button className="pms-button">DIAGNOSIS SESSION FORM</button>
        </Link>
       
        <div className="my-2"></div>
        <Link to={"/CbhBehaviourAnalysisAssessment"}>
          <button className="pms-button">CBH Behavior Analysis Assessment</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/MonthlySupervisionNote"}>
          <button className="pms-button">MONTHLY SUPERVISION NOTE</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/BCBATraineeUSF"}>
          <button className="pms-button">
            BCBA TRAINEE UNIQUE SUPERVISION FORM
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/Soap-Notes"}>
          <button className="pms-button">
          Soap Notes
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/FBA"}>
          <button className="pms-button">FBA</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/outpatient-treatment-request"}>
          <button className="pms-button">
            OUTPATIENT TREATMENT REQUEST [OTR] FORM
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/smallsoap-form"}>
          <button className="pms-button">CP SOAP Form</button>
        </Link>
        <br />
        {/* ------------------------ mental form lists --------------------------  */}
        -----------------------Mental Health start from
        here-----------------------------------
        <div className="my-2"></div>
        <Link to={"/BIRPP-rogress-Form"}>
          <button className="pms-button">BIRP Progress Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/biopsycosocial"}>
          <button className="pms-button">BIOPSYCHOSOCIAL</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/cfars-form"}>
          <button className="pms-button">CFARS Form</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/discharge-summary"}>
          <button className="pms-button">DISCHARGE SUMMEREY</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/medication-flowsheet"}>
          <button className="pms-button">MEDICATION FLOWSHEET</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/no-show-progressnote"}>
          <button className="pms-button">NO SHOW PROGRESS NOTE</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/pcp-communication"}>
          <button className="pms-button">PCP COMMUNICATION</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/locus-worksheet"}>
          <button className="pms-button">LOCUS_WORKSHEET</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/relase-of-information"}>
          <button className="pms-button">
            RELEASE OF INFORMATION FROM CBH TO OTHER ORGANIZATION
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/consent-to-treatment"}>
          <button className="pms-button">
            CONSENT TO TREATMENT/ CLIENT ACKNOWLEDGEMENT
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/fars-form"}>
          <button className="pms-button">FARS FORM</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/medication-consent"}>
          <button className="pms-button">MEDICATION CONSENT</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/master-treatment-plan"}>
          <button className="pms-button">MASTER TREATMENT PLAN</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/biopsychosocial-assessment"}>
          <button className="pms-button">BIOPSYCHOSOCIAL ASSESSMENT</button>
        </Link>
        <div className="my-2"></div>
        -------------------------------- Speech therapy -----------------
        <div className="my-2"></div>
        <Link to={"/new-two"}>
          <button className="pms-button">NEW TWO</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/speech-language-note"}>
          <button className="pms-button">SPEECH LANGUAGE SESSION NOTE</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/speech-language-progress-report"}>
          <button className="pms-button">
            SPEECH LANGUAGE PROGRESS REPORT
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/therapist-communication-session-notes"}>
          <button className="pms-button">
            THERAPIST COMMUNICATION/SESSION NOTES
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/treatment-plan"}>
          <button className="pms-button">TREATMENT PLAN</button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/initial-speech-therapy-evaluation"}>
          <button className="pms-button">
            INITIAL SPEECH THERAPY EVALUATION/PLAN OF CARE
          </button>
        </Link>
        <div className="my-2"></div>
        <Link to={"/daily-soap"}>
          <button className="pms-button">Daily Soap Note</button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
