import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const EvaluationServicesConsent = () => {
  const [caregiverSignature, setCaregiverSignature] = useState(false);
  const [providerSignature, setProviderSignature] = useState(false);
  const [ProviderImageURL, setProviderImageURL] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  console.log("ProviderImageURL", ProviderImageURL);
  console.log("imageURL", imageURL);
  const [file, setFile] = useState();

  console.log("file", file);

  const handleSignatureProvider = () => {
    setProviderSignature(true);
  };
  const handleSignatureCaregiver = () => {
    setCaregiverSignature(true);
  };
  const handleSignatureClose = () => {
    setCaregiverSignature(false);
    setProviderSignature(false);
  };

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
          <div>
            <div className="flex items-center flex-wrap gap-3 justify-between">
              <img src={logo} alt="" />
              <div className="text-[16px] sm:mr-10 mr-0 ml-10 sm:ml-0">
                <p className="my-1">
                  <span className="form-head">Mail: </span>demo@example.com
                </p>
                <p className="my-1">
                  <Link to={"#"}>
                    <span className="form-head">Email: </span>demo@example.com
                  </Link>
                </p>
                <p className="my-1">
                  <span className="form-head">Phone: </span> 000-000-0000
                </p>
                <p className="my-1">
                  <Link to={"#"}>
                    <span className="form-head">Fax: </span>000.000.0000
                  </Link>
                </p>
              </div>
            </div>
            <div className="form-title mb-5">
              <h1>
                INFORMED CONSENT FOR <br />
                TELETHERAPY{" "}
              </h1>
              <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div>
              <p className="text-sm font-normal my-2">
                Read this document in its entirety. Signing indicates that you
                have read and agree to all terms
              </p>

              <span className="mb-3 mt-3 font-bold">
                Acknowledgment of Services
              </span>

              <p className="text-sm font-normal my-2">
                Signature Behavioral Health provides individualized behavior
                analytic services to clients with and without developmental
                diagnoses such as autism spectrum disorder. We offer ABA
                therapy, behavior intervention planning, training for
                caretakers, peer groups, and evaluation services. I acknowledge
                sessions provided by Signature Behavioral Health staff may
                involve direct services with the client, time to prep materials,
                data collection, and time to discuss the session with the
                caretaker.
              </p>

              <span className="mb-3 mt-3 font-bold">
                Voluntary Participation and Termination Policy
              </span>

              <p className="text-sm font-normal my-2">
                I am entering into this contract with Signature Behavioral
                Health voluntarily. I understand I have the right to terminate
                services at any point. I also understand, Signature Behavioral
                Health reserves the right to terminate services for one of more
                of the following:
              </p>

              <ul class="ml-6 text-sm font-normal list-decimal mt-2 ">
                <li>
                  {" "}
                  Client/Caregiver discriminates against staff due to race, age,
                  sex, sexual orientation, socioeconomic status, and/or national
                  origin. If client has requested change in staff due to
                  cultural identity.
                </li>
                <li className="mt-2 mb-2">
                  If staff becomes aware of any circumstances that put them at
                  risk such as drug use, hostile/harassing behavior of
                  caregivers, illegal activities)
                </li>
                <li>
                  If we are unable to provide competent staff due to
                  case-specific concerns or are unable to provide staff due to
                  resignations, caregiver request in staff changes, lack of
                  available staff to place for recommended treatment, etc.
                </li>
              </ul>

              <span className="mb-3 mt-3 font-bold">
                Expectations for Participation
              </span>

              <p className="text-sm font-normal mt-3 mb-3">
                All Evaluation services for minors include a component of
                parent/caregiver participation. Participation by parents,
                guardians, or caretakers is not only encouraged but expected to
                conduct the evaluation.
              </p>
              <p className="text-sm font-normal mt-3 mb-3">
                I agree to cooperate with Signature Behavioral Health’s efforts
                to conduct evaluation services and I will participate in the
                process. I understand that failure to comply with appointments
                may be grounds for termination of Evaluation services.
              </p>

              <p className="text-sm font-normal my-2">
                Additionally, I agree to the following:
              </p>

              <ul class="ml-6 text-sm font-normal list-decimal mt-2 ">
                <li>
                  {" "}
                  A parent/caregiver or other responsible adult age 18 or older
                  designated by a parent/caregiver must during the evaluation,
                  on time and with the individual we are serving. The
                  parent/caregiver or other designated adult must remain on-site
                  for the entire appointment. The designated adult must have
                  written authorization to obtain medical care for the minor in
                  the absence of parents/caregivers.
                </li>
                <li className="mt-2 mb-2">
                  Complete documentation necessary(consent forms, etc).
                </li>
                <li>
                  Treat staff members with respect, and maintain a professional
                  relationship with all staff. I will not engage in personal
                  relationships or discuss personal issues that are not relevant
                  to the evaluation. I will not be verbally or emotionally
                  abusive toward staff.
                </li>
              </ul>

              <span className="mb-3 mt-3 font-bold">
                Gift/Special Events Policy
              </span>

              <p className="text-sm font-normal mt-3 mb-3">
                I understand that staff are not allowed to accept money, gifts,
                exchange of services, from clients or anyone related to client
                care. I accept that I will not attempt to gift items, money, or
                services to my staff members. Also, I will not invite staff to
                attend events that are not clinically necessary.
              </p>

              <span className="mb-3 mt-3 font-bold">
                Staff Video/audio Policy
              </span>

              <p className="text-sm font-normal mt-3 mb-3">
                I acknowledge that I do not have the right to obtain
                photograph(s) and/or videotaped image(s) and sound byte(s) of
                Signature Behavioral Health staff. This includes therapy,
                training, educational seminars, etc.
              </p>

              <span className="mb-3 mt-3 font-bold">Illness Policy</span>

              <p className="text-sm font-normal mt-3 mb-3">
                To prevent the spread of communicable diseases, it is our policy
                that clients must notify staff in advance, within 24 hours of a
                treatment session, if it is known that the individual will not
                be able to participate in the evaluation services.
              </p>

              <span className="mb-3 mt-3 font-bold">
                Sickness includes, but is not limited to the following:
              </span>

              <ul class="ml-6 text-sm font-normal list-decimal mt-2 ">
                <li>Temperature above 100</li>
                <li className="mt-2 mb-2">Mumps</li>
                <li>Pinworm</li>
                <li>Ringworm</li>
                <li>Communicable Disease</li>
                <li>Measles</li>
                <li>Lice</li>
                <li>Chicken Pox</li>
                <li>Vomit</li>
                <li>Diarrhea</li>
                <li>Rash</li>
                <li>Pink Eye</li>
                <li>Strep Throat</li>
                <li>Staph Infection</li>
                <li>Trouble breathing</li>
                <li>Flu</li>
              </ul>

              <p className="text-sm mt-2 mb-2">
                Parents/legal guardians are asked to use the same guidelines
                used in schools and day care centers. If a client is too sick to
                attend school or daycare then they are too sick to participate
                in an evaluation. Evaluation Services will resume as soon as the
                client’s doctor clears them of being contagious or the remedy is
                completed. Parents/guardians must provide documentation of a
                doctor’s note, if requested from care staff. The client must be
                illness-free 24 hours prior to resuming evaluation services.
                Criteria for resuming services may differ depending on the
                illness. Client must be illness free for a total of 48 hours
                after receiving medical treatment with antibiotics for Strep
                throat and conjunctivitis. The client must be illness-free for
                72 hours after receiving medication treatment and having no live
                lice; also, following maintenance treatments as indicated on the
                product label
              </p>

              <p className="text-sm mt-2 mb-2">
                Physician's Release must be obtained after chickenpox, measles,
                mumps, RSV, rubella, and mononucleosis. (If for any reason the
                individual is admitted to the hospital, I must provide a release
                from the Physician stating that it is okay to resume therapy,
                and/or resume; before services can be continued)
              </p>

              <p className="text-sm mt-2 mb-2">
                I also acknowledge if any infectious diseases are suspected,
                Signature Behavioral Health staff are required to report it to
                the local health department as outlined by federal guidelines.
                If infectious diseases are found, services will be discontinued
                until client is cleared by a Doctor.
              </p>

              <p className="text-sm mt-2 mb-2">
                Lastly, I acknowledge staff must follow the same policy and
                cancel sessions as needed due to sickness.
              </p>

              <span className="mb-3 mt-3 font-bold">Cancellations</span>

              <p className="text-sm font-normal mt-3 mb-3">
                I understand I am to provide 24 hours’ notice to the
                cancellation of sessions. Canceling within 2 hours of my
                scheduled appointment or not being present for services is
                considered a “no show.”
              </p>
              <p className="text-sm font-normal mt-3 mb-3">
                I understand if notification is not made at least 24 hours in
                advance and there is not a verifiable emergency situation, I
                will be billed a cancellation fee equal to the amount of my
                financial responsibility for the regularly scheduled session,
                which will not be reimbursable through insurance. In addition,
                if my clinician arrives and the client is late to a scheduled
                appointment, the client will be billed the rate of the full
                appointment. I understand, that if I do not provide notice of
                delay, the clinician will wait no longer than 15 minutes for the
                scheduled appointment. The wait time will not be charged to
                insurance and I am responsible for the payment of the time staff
                were waiting to render services. I understand I will be charged
                a fee for sessions that are ended early by the family without
                advance notice.
              </p>
              <p className="text-sm font-normal mt-3 mb-3">
                I understand that if staff arrives at the scheduled session and
                the individual being serviced is sick, the staff will not be
                able to work with them and I will be charged for the session,
                which will not be reimbursable through insurance.
              </p>

              <span className="mb-3 mt-3 font-bold">Cancellation Info</span>

              <p className="text-sm font-normal mt-3 mb-3">
                I understand if I need to cancel or reschedule a session, I
                should use the electronic cancellation system or call the office
                at 410-774-9840
              </p>

              <span className="mb-3 mt-3 font-bold">
                Environmental Considerations
              </span>

              <p className="text-sm font-normal mt-3 mb-3">
                I agree that I will maintain a conducive therapeutic
                environment. Staff maintains the right to cancel a session if it
                does not meet the following conditions:
              </p>
              <ul class="ml-6 text-sm font-normal list-decimal mt-2 ">
                <li>
                  That I have read or had this form read and/or had this form
                  explained to me.
                </li>
                <li className="mt-2 mb-2">
                  Any persons on-site shall not be under the influence of drugs
                  or alcohol. Nor shall there be illegal drugs present.
                </li>
                <li>
                  Staff are free from potentially harmful or harassing
                  environments. This includes but is not limited to verbal
                  berating/insults, physical threat or injury, physical or
                  verbal sexual harassment behaviors.
                </li>
              </ul>
              <p>
                Any behaviors mentioned in this section will be reported to
                local law enforcement as necessary and the session will be
                terminated.
              </p>

              <hr />

              <span className="mb-3 mt-3 font-bold">Mandated Reporting</span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I understand that if Signature Behavioral Health staff have
                reason to suspect that a minor, elderly, or disabled person is
                being abused or neglected, they are required to report this (and
                any additional information upon request) to the appropriate
                state agency. If this agency believes that a client is
                threatening serious harm to him/herself or others, they are
                required to take protective actions which could include
                notifying the police, an intended victim, a minor’s parents, or
                others who could provide protection, or seeking appropriate
                hospitalization.
              </p>
              <hr />

              <span className="mb-3 mt-3 font-bold">
                Professional Relationship
              </span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I understand that Signature Behavioral Health staff are here to
                work with my family in a strictly professional manner. As a
                client of Signature Behavioral Health, it is imperative that
                staff not have any other type of relationship with me. Personal
                and/or business relationships undermine the effectiveness of the
                treatment process and are considered unethical.
              </p>
              <hr />

              <span className="mb-3 mt-3 font-bold">
                Professional Misconduct
              </span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I acknowledge professional misconduct by a healthcare
                professional must be reported by other healthcare professionals.
                In cases in which a professional or legal disciplinary meeting
                is being held regarding the healthcare professional’s actions,
                related records may be released in order to substantiate
                disciplinarily concerns.
              </p>
              <hr />

              <span className="mb-3 mt-3 font-bold">Confidentiality</span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                Maintaining strict confidentiality of client assessment and
                intervention information is a priority of Signature Behavioral
                Health.
              </p>
              <p className="text-sm font-normal mt-3 mb-3 ">
                Records may only be accessed by authorized personnel and will be
                protected via locked file cabinets and encrypted passwords on
                computers. No information related to an individual who is
                receiving services, either verbal or written, will be released
                to other agencies or individuals without the express written
                consent of the individual’s legal guardian.
              </p>
              <p className="text-sm font-normal mt-3 mb-3 ">
                By law, however, the rules of confidentiality do not pertain
                under the following conditions.
              </p>
              <p className="text-sm font-normal mt-3 mb-3 ">
                If abuse or neglect of a minor, disabled, or elderly person is
                reported or suspected, the professional involved is required to
                report it to the local law enforcement office or child welfare
                office for investigation.
              </p>
              <p className="text-sm font-normal mt-3 mb-3 ">
                If, during the course of services, the professional involved
                receives information that someone’s life is in danger, that
                professional has a duty to warn the potential victim.
              </p>
              <p className="text-sm font-normal mt-3 mb-3 ">
                If our records and staff testimony are subpoenaed by court
                order, we are required to produce records or appear in court to
                answer questions regarding the individual.
              </p>
              <p className="text-sm font-normal mt-3 mb-3 ">
                If you choose to break confidentiality by sharing private
                information through conversations or an unsecured communication
                medium (e.g., email, telephone), Signature Behavioral Health
                cannot be held liable for the outcome.
              </p>
              <hr />

              <span className="mb-3 mt-3 font-bold">
                Potential Risks and Barriers to Evaluation Services
              </span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I acknowledge Evaluation Services may cause disruption to normal
                family schedule/routine and preferred patterns of responding. I
                also understand individuals who receive services may experience
                responding to said changes. I understand that there is a risk
                associated with any type of assessment or intervention, however,
                Signature Behavioral Health makes a careful effort to minimize
                risks.
              </p>

              <p className="text-sm font-normal mt-3 mb-3 ">
                In addition, I understand that Signature Behavioral Health works
                with individuals who may exhibit severe behavioral challenges,
                that may put themselves or others at risk of physical harm or
                injury. When these risks are present, a specific crisis plan
                will be provided for the individual. Crisis plans may include,
                state-approved restraint procedures. This will only be utilized
                if deemed necessary to maintain the safety of the individual and
                others. At any point, I understand I may deny the use of
                restraint. If no restraint is to be used and/or crisis is not
                managed safely, 911 or 211 may be called. The parent or
                caregiver will be responsible for providing medical treatment
                and/or transportation if needed. A reevaluation of the
                individual’s crisis plan will be given if these steps are taken.
              </p>
              <hr />

              <span className="mb-3 mt-3 font-bold">Complaint Process</span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I understand it is the goal of Signature Behavioral Health to
                provide high-quality services. I also understand that if I am
                not satisfied with my care, I may provide this feedback orally
                or in writing to the supervising staff. If my concerns have not
                been remedied by the supervising staff, I have the right to
                escalate my concern to the administrative staff. Signature
                Behavioral Health will provide a response to my concerns as
                early as possible, no longer than 14 days after speaking
                directly with a staff member.
              </p>

              <span className="mb-3 mt-3 font-bold">
                Defamation/social media
              </span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I understand that by signing this document I agree that I will
                not make defamatory comments about Signature Behavioral Health
                or its staff to others or post defamatory comments about the
                company or staff on any website or social media site. In the
                event that defamatory remarks about treatment and/or Signature
                Behavioral Health staff are made by my family, or others acting
                in concert with my family, I further consent by signing below to
                allow Signature Behavioral Health and staff to use any
                information necessary to rebut or defend against or prosecute
                claims for, the defamation.
              </p>

              <span className="mb-3 mt-3 font-bold">Contact Policy</span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I understand that given Signature Behavioral Health’s many
                professional commitments, this agency is often not immediately
                available by telephone. If I need to leave them a message,
                Signature Behavioral Health will make every effort to return my
              </p>
              <p className="text-sm font-normal mt-3 mb-3 ">
                call promptly (within 24-48 hours with the exception of holidays
                and weekends). If I am difficult to reach due to my own
                schedule, I will provide acceptable callback times when I will
                be available. I also understand Signature Behavioral Health does
                not provide on-call coverage 24 hours per day, 7 days per week.
                In emergency or crisis situations, I will contact my physician,
                or call 911 and/or go to the nearest hospital emergency room. I
                also understand that communication will take place via email.
                While privacy is of utmost priority, I understand that no
                guarantees can be made with using online communication. I agree
                to allow communications to occur via professional email
                accounts.
              </p>

              <hr />

              <span className="mb-3 mt-3 font-bold">
                Web-based Practice (Telehealth)s
              </span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I understand if I receive remote, web-based services, Signature
                Behavioral Health adheres to the guidelines established by
                HIPAA, and all client medical records are kept confidential. I
                acknowledge protocols are utilized to ensure privacy and
                confidentiality are maintained.
              </p>

              <hr />

              <span className="mb-3 mt-3 font-bold">Client Rights</span>

              <p className="text-sm font-normal mt-3 mb-3 ">
                I understand I have the right to be free from abuse, neglect,
                and exploitation. If I suspect abuse, neglect, or exploitation,
                I should report immediately to law enforcement or my
                state-designated abuse hotline. I have the right to considerate,
                safe and respectful care, without discrimination due to race,
                ethnicity, color, gender, sexual orientation, age, religion,
                national origin, or source of payment. I have the right to ask
                questions about any aspects of therapy and about my staff’s
                specific training and experience.
              </p>

              <span className="mb-3 mt-3 font-bold">Conflict of Interest</span>
              <p>
                I understand that Signature Behavioral Health will incur
                substantial costs in providing and arranging for the services to
                be provided to our family, including supplies, services,
                personnel, and other items that are subject to this agreement.
                Accordingly, I/we promise and agree that, during the term of
                this agreement, and any extension to the agreement, plus one (1)
                year after the agreement expires, is terminated, or otherwise
                concludes:
                <ul class="ml-6 list-disc text-sm">
                  <li>
                    I will not attempt to directly or indirectly own, manage,
                    operate, control, or participate in the ownership,
                    management, operation or control of, or become associated,
                    as an employee, director, officer, advisor, agent,
                    consultant, principal, partner, member or independent
                    contractor with any person, enterprise, firm, partnership,
                    corporation, limited liability entity, cooperative, or other
                    entity operating a behavioral consulting services firm or
                    other competitive business located, or providing services,
                    within a twenty (20) mile radius of the areas where
                    Signature Behavioral Health provides services.
                  </li>
                  <li>
                    I will not attempt to divert any business of Signature
                    Behavioral Health to any other competitive establishment
                    that is located within a twenty (20) mile radius of the
                    areas where Signature Behavioral Health provides services.
                  </li>
                  <li>
                    I agree not to solicit or employ any employee or independent
                    contractor of Signature Behavioral Health, including Board
                    Certified Behavior Analysts, consultants, therapists, or any
                    other employees, in any manner including, but not limited
                    to, as an employee, consultant, or through a third party,
                    other than general advertisement without prior written
                    approval by Signature Behavioral Health during the term of
                    this agreement and for at least one (1) year after the
                    expiration, termination, or conclusion of this agreement.
                    Unless otherwise agreed to by the Parties, in the event that
                    I violate this section, I/we agree to pay Signature
                    Behavioral Health a fee of fifty percent (50%) of the gross
                    annual salary paid by Signature Behavioral Health to such
                    employee or independent contractor, including Board
                    Certified Behavior Analysts, consultants, and therapists.
                    Such fee shall be paid by me upon hiring of such employee or
                    independent contractor, including Board Certified Behavior
                    Analysts, consultants, and therapists, in any capacity.
                  </li>

                  <li>
                    I agree to maintain confidentiality for all business
                    policies, procedures, techniques, trade secrets, other
                    knowledge, or processes developed by Signature Behavioral
                    Health. I understand that all program materials are prepared
                    solely for my use and cannot be copied, disseminated,
                    published, or shared with a third party without the approval
                    of Signature Behavioral Health. I understand that all
                    program materials must be returned to Signature Behavioral
                    Health upon the termination of this agreement.
                  </li>
                </ul>
                I agree that to the fullest extent permitted by law, Signature
                Behavioral Health shall not be liable to the Client for any
                special, indirect, or consequential damages whatsoever, whether
                caused by Signature Behavioral Health’s negligence, breach of
                contract, or other cause or causes whatsoever including, but not
                limited to, loss of behavioral consulting services and the costs
                related to locating a new provider of such consulting services.
                This does not include willful or intentional wrongs. I also
                understand that therapy outcomes are dependent on several
                variables, including my participation, and success cannot be
                guaranteed. I understand that failure to adhere to treatment
                recommendations by Signature Behavioral Health’s staff may
                impact the success of the individual’s progress and that I am
                responsible for being a willing and active participant in this
                process. I understand that continual non-compliance with
                adhering to treatment recommendations may result in termination
                of services.
              </p>



              <span className="mb-3 mt-3 font-bold">Consent for Assessment and Treatment</span>

              <p className="text-sm font-normal mt-3 mb-3">I certify that I have the authority to legally consent to assessment, the release of information, and all legal issues involving <input type="text"  className="border border-b"/></p>

              <p className="text-sm font-normal mt-3 mb-3">If my status as legal guardian should change, I will immediately inform Signature Behavioral Health and provide the name, address, and phone number of the person(s) who have assumed that role. I hereby acknowledge that I have received information on Signature Behavioral Health’s expectations including but not limited to client participation, cancellations, financial responsibility, etc, and have had the opportunity to ask questions and get clarification regarding these requirements and processes. I have received a summary of the HIPAA Privacy and Security Standards, Recipient Choice and Rights, and abuse hotline number. This consent will be updated annually. I acknowledge that accessing services through Signature Behavioral Health is a choice and that I have the right to discontinue services at any time. Additionally, I acknowledge that I have the choice to change companies or request a change in assigned staff at any point and Signature Behavioral Health reserves the right to adhere to the requested change.</p>

              <p className="text-sm font-normal">I provide my consent for my child to participate in an assessment and ongoing services through Signature Behavioral Health in the settings and at the times I have indicated and that are mutually agreed upon thereafter. I agree to be physically present and alert and to participate fully in treatment. By signing below, I am acknowledging that I have read, understand, and agree to all of the terms within this document.</p>

              <p className="text-sm font-normal mt-3 mb-3">I acknowledge Signature Behavioral Health may need to provide information regarding my child to our insurance company. I hereby provide explicit consent to release the information necessary to access the service. This includes but is not limited to prior authorization requests, concurrent treatment requests, and discharge planning.</p>




              <div className="mt-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-2 border-blue-600 ">
                    <tbody>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Print Name)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={2}
                        >
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Signature)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <input
                              onClick={handleSignatureCaregiver}
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Date:
                              </label>
                            </span>
                            <input
                              type="date"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Print Name)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={2}
                        >
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Signature)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <input
                              onClick={handleSignatureCaregiver}
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Date:
                              </label>
                            </span>
                            <input
                              type="date"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {caregiverSignature && (
                <SignatureModal
                  handleSignatureClose={handleSignatureClose}
                  open={caregiverSignature}
                  setImageURL={setImageURL}
                  setFile={setFile}
                ></SignatureModal>
              )}

              {providerSignature && (
                <SignatureModal
                  handleSignatureClose={handleSignatureClose}
                  open={providerSignature}
                  setImageURL={setProviderImageURL}
                  setFile={setFile}
                ></SignatureModal>
              )}
              <div className="flex items-center justify-between my-12">
                <button className=" bg-purple-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
                  <AiFillCloud /> Save
                </button>
                <button className=" bg-cyan-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
                  <AiOutlinePrinter /> Print
                </button>
              </div>

              <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
                <div className="text-black">
                  Demo Institution{" "}
                  <span className=" font-normal">somewhere in america</span>
                </div>
                <div>
                  Phone: 000-000-0000, Email: demo@example.com, Fax:
                  000.000.0000, example.com
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EvaluationServicesConsent;
