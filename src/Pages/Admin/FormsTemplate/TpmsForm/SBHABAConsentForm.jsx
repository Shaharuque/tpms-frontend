import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const SBHABAConsentForm = () => {
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
              <h1>SBH NOTICE OF PRIVACY PRACTICES</h1>
              <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div>
              <p className="text-base font-normal mt-2">
                Read this document in its entirety. Signing indicates that you
                have read and agree to all terms
              </p>

              <div>
                <div className="my-8">
                  <h1 className="form-input-name-black px-2">
                    Acknowledgment of Services
                  </h1>
                  <p className="text-base font-normal my-5 px-4">
                    Signature Behavioral Health provides individualized behavior
                    analytic services to clients with and without developmental
                    diagnoses such as autism spectrum disorder. We offer ABA
                    therapy, behavior intervention planning, and training for
                    caretakers. I acknowledge sessions provided by Signature
                    Behavioral Health staff may involve direct services with the
                    client, time to prep materials, data collection, and time to
                    discuss the session with the caretaker.
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Voluntary Participation and Termination Policy
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I am entering into this contract with Signature Behavioral
                    Health voluntarily. I understand I have the right to
                    terminate services at any point. I also understand,
                    Signature Behavioral Health reserves the right to terminate
                    services for one of more of the following:
                  </p>
                  <ol className="  list-decimal font-[16px] px-16 gap-5">
                    <li>
                      <p>
                        Client has mastered all necessary skill
                        acquisition/behavioral goals outlined in client’s
                        transition plan and parent/guardian agrees there are no
                        other socially significant goals to address during
                        treatment.
                      </p>
                    </li>
                    <li>
                      <p>
                        If client is not progressing according to predetermined
                        treatment goals after providing all empirically based
                        interventions, it is a duty of this company to refer to
                        a new provider.
                      </p>
                    </li>
                    <li>
                      <p>
                        Client ages out of treatment (this is determined by
                        state and specific funding source).
                      </p>
                    </li>
                    <li>
                      <p>
                        Client/Caregiver has refused to follow treatment
                        recommendations or policy requirements, even after
                        formal steps to address barriers to treatment.
                      </p>
                    </li>
                    <li>
                      <p>
                        Client/Caregiver discriminates against staff due to
                        race, age, sex, sexual orientation, socioeconomic
                        status, and/or national origin. If client has requested
                        change in staff due to cultural identity.{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        If staff becomes aware of any circumstances that put
                        them at risk such as drug use, hostile/harassing
                        behavior of caregivers, illegal activities)
                      </p>
                    </li>
                    <li>
                      <p>
                        If we are unable to provide competent staff due to case
                        specific concerns or are unable to provide staff due to
                        resignations, caregiver request in staff changes, lack
                        of available staff to place for recommended treatment
                        hours, etc.{" "}
                      </p>
                    </li>
                  </ol>
                  <p className="text-base font-medium my-5 px-4">
                    Expectations for Participation
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    All ABA services for minors include a component of
                    parent/caregiver training. In order for ABA therapy to have
                    lasting effects, parents must assist the minor with
                    continuing the skills he or she learns outside of planned
                    sessions, especially in the home and community settings.
                    Parent education and training will be available through
                    Signature Behavioral Health. Participation by parents,
                    guardians, or caretakers is not only encouraged but expected
                    for any program to be successful.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I agree to cooperate with Signature Behavioral Health’s
                    efforts to provide ABA services and I will participate in
                    the treatment process and will follow through with
                    interventions recommended by the supervising BCBA. I
                    understand that failure to comply with treatment and/or
                    participate in parent training may be grounds for
                    termination of ABA services. I agree to communicate with
                    staff any challenges related to continuing behavior
                    procedures outside of ABA sessions. I understand I am part
                    of the treatment team; therefore, I will communicate my
                    goals and needs of treatment to the supervising staff.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I acknowledge ABA staff are not babysitters, respite, or
                    transportation staff. I may not make requests for staff to
                    conduct duties that would conflict with ABA duties.
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Additionally, I agree to the following:
                  </p>
                  <ol className="  list-decimal font-[16px] px-16 gap-5">
                    <li>
                      <p>
                        A parent/caregiver or other responsible adult age 18 or
                        older designated by a parent/caregiver must be at the
                        home, on time and with the individual we are serving.
                        The family should be prepared for intervention at the
                        beginning of a scheduled shift. The parent/caregiver or
                        other designated adult must remain at the home for the
                        entire session. The designated adult must have written
                        authorization to obtain medical care for the minor in
                        the absence of parents/caregivers.
                      </p>
                    </li>
                    <li>
                      <p>
                        Inform provider of existing professionals and
                        communicate with team members who provide care to the
                        individual being serviced (other caregivers, teachers,
                        therapists, school administration).
                      </p>
                    </li>
                    <li>
                      <p>
                        Complete treatment recommendations such as data taking
                        and practicing behavior plan strategies.{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        Treat staff members with respect, and maintain a
                        professional relationship with all staff. I will not
                        engage in personal relationships or discuss personal
                        issues that are not relevant to treatment. I will not be
                        verbally or emotionally abusive toward staff.{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        To provide teaching materials and potential reinforcers
                        for the intervention program. I will replace and supply
                        any necessary teaching materials and reinforcers for
                        treatment. I also agree, to provide access to already
                        existing materials within the household that may be
                        useful for program success.
                      </p>
                    </li>
                  </ol>
                  <p className="text-base font-medium my-5 px-4">
                    Community Outings
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I understand programming might be suggested to work outside
                    the home environment for the benefit of client progress and
                    generalization of skills. If agreed upon by providing my
                    signature on the authorized treatment plan, a
                    parent/caregiver or other primary person age 18 or older
                    designated by the parent/caregiver must be present at all
                    times during community outings. The designated person must
                    have written authorization to obtain medical care for the
                    individual being serviced in the absence of the
                    parent/caregiver.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    Intervention-related community outings may not include
                    personal shopping trips or errands that are not relevant to
                    treatment goals. Community outings are based upon goals and
                    objectives and take place at a mutually agreed upon
                    location. Parents/caregivers are responsible for any fees
                    incurred during community outings requested by
                    parents/caregivers.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    Transportation arrangements will be made on an individual
                    basis; however, staff may not transport the client to
                    community outings. If staff will be transported by a parent
                    or caregiver, written consent must be provided and accepted
                    by supervisory staff.
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Gift/Special Events Policy
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I understand that staff are not allowed to accept money,
                    gifts, exchange of services, from clients or anyone related
                    to client care. I accept that I will not attempt to gift
                    items, money, or services to my staff members. Also, I will
                    not invite staff to attend events that are not clinically
                    necessary. If I request staff to attend an event outside of
                    the home setting, I must obtain written permission from
                    supervisory and administrative staff.
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Staff Video/audio Policy
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I acknowledge that I do not have the right to obtain
                    photograph(s) and/or videotaped image(s) and sound byte(s)
                    of Signature Behavioral Health staff. This includes therapy,
                    training, educational seminars, etc.
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Illness Policy
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    To prevent the spread of communicable diseases, it is our
                    policy that clients must notify staff in advance, within 24
                    hours of a treatment session, if it is known that the
                    individual will not be able to participate in the ABA
                    program the next day.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    Sickness includes, but is not limited to the following
                  </p>
                  <ol className="  list-decimal font-[16px] px-16 gap-5">
                    <li>
                      <p>Temperature above 100</p>{" "}
                    </li>
                    <li>
                      <p>Mumps</p>{" "}
                    </li>
                    <li>
                      <p>Pinworm</p>{" "}
                    </li>
                    <li>
                      <p>Ringworm</p>{" "}
                    </li>
                    <li>
                      <p>Communicable Disease</p>{" "}
                    </li>
                    <li>
                      <p>Measles</p>{" "}
                    </li>
                    <li>
                      <p>Lice</p>{" "}
                    </li>
                    <li>
                      <p>Chicken Pox</p>{" "}
                    </li>
                    <li>
                      <p>Vomit</p>{" "}
                    </li>
                    <li>
                      <p>Diarrhea</p>{" "}
                    </li>
                    <li>
                      <p>Rash</p>{" "}
                    </li>
                    <li>
                      <p>Pink Eye</p>{" "}
                    </li>
                    <li>
                      <p>Strep Throat</p>{" "}
                    </li>
                    <li>
                      <p>Staph Infection</p>{" "}
                    </li>
                    <li>
                      <p>Trouble breathing</p>{" "}
                    </li>
                    <li>
                      <p>Flu</p>{" "}
                    </li>
                  </ol>
                  <p className="text-base font-normal my-5 px-4">
                    Parents/legal guardians are asked to use the same guidelines
                    used in schools and day care centers. If a client is too
                    sick to attend school or day care then he/she is too sick to
                    participate in his/her ABA therapy session. ABA therapy will
                    resume as soon as the client’s doctor clears him/her of
                    being contagious or the remedy is completed.
                    Parents/guardians must provide documentation of a doctor’s
                    note, if requested from care staff. Client must be illness
                    free 24 hours prior to resuming services. Criteria for
                    resuming services may differ depending on the illness.
                    Client must be illness free for a total of 48 hours after
                    receiving medical treatment with antibiotics for: Strep
                    throat and conjunctivitis. Client must be illness free for
                    72 hours after receiving medication treatment and having no
                    live lice; also, following maintenance treatments as
                    indicated on the product label.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    Physician's Release must be obtained after chicken pox,
                    measles, mumps, RSV, rubella, and mononucleosis.{" "}
                    <i>
                      (If for any reason the individual is admitted to the
                      hospital, I must provide a release from the Physician
                      stating that it is okay to resume therapy, and/or resume
                      limited therapy; before services can be continued)
                    </i>
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I also acknowledge if any infectious diseases are suspected,
                    Signature Behavioral Health staff are required to report it
                    to the local health department as outlined by federal
                    guidelines. If infectious diseases are found, services will
                    be discontinued until client is cleared by a Doctor.
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    Lastly, I acknowledge staff must follow the same policy and
                    cancel sessions as needed due to sickness.
                  </p>

                  <p className="text-base font-medium my-5 px-4">
                    Vacation/Personal Days
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I understand that in the event of inclement weather,
                    Signature Behavioral Health will follow the local
                    government’s procedures. I also understand that the Clinical
                    Director has the discretion to cancel appointments due to
                    circumstances if needed even if the schools have not closed.
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand that Signature Behavioral Health has scheduled
                    vacation and holidays where all services will be cancelled,
                    and I will be given a calendar of those scheduled days in
                    advance. I also understand that staff will request vacation
                    or personal days. I will be given advance notice for
                    requests of absence or leave.
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand it is my responsibility to provide advance
                    notice for vacations and extended leave. Leave of absences
                    totaling more than 3 consecutive weeks, may result in
                    discontinuation of services.
                  </p>

                  <p className="text-base font-medium my-5 px-4">
                    Cancellations
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I understand I am to provide 24 hours’ notice to the
                    cancellation of sessions. Canceling within 2 hours of my
                    scheduled appointment or not being present for services is
                    considered a “no show.” If I cancel or “no show” more than
                    three times in one month, a staff member will contact me to
                    make a plan for improving attendance, such as a change in
                    schedule. If I cannot be reached for more than 1 week or if
                    I have 4+ cancellations or no shows within 1 month, my
                    services will be discontinued. If at a later date : I wish
                    to resume services, I will need to re-apply for services. If
                    there is a waitlist, I will be placed on the waitlist from
                    the date : I re-apply. Upon availability for services to
                    begin, I must provide a written request offering a
                    resolution of the barriers to consistent attendance prior to
                    beginning services.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I understand if notification is not made at least 24 hours
                    in advance and there is not a verifiable emergency
                    situation, I will be billed a cancellation fee equal to the
                    amount of my financial responsibility for the regular
                    scheduled session, which will not be reimbursable through
                    insurance. In addition, if my clinician arrives and the
                    client is late to a scheduled appointment, the client will
                    be billed the rate of the full appointment. I understand, if
                    I do not provide notice of delay, the clinician will wait no
                    longer than 15 minutes for the scheduled appointment. The
                    wait time will not be charged to insurance and I am
                    responsible for the payment of the time staff were waiting
                    to render services. I understand I will be charged a fee for
                    sessions that are ended early by the family without advance
                    notice.
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand that if staff arrives at the home and the
                    individual being serviced is sick, the staff will not be
                    able to work with them and I will be charged for the
                    session, which will not be reimbursable through insurance.
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand staff might need to cancel a session due to
                    emergencies. I will respect emergencies that are not
                    excessive (less than 3 in one month). I acknowledge if staff
                    cancels more than 3 times in one month, I should speak to
                    the supervisor of the staff member to reach a resolution. If
                    staff continues canceling behavior, I understand Signature
                    Behavioral Health will provide a resolution that might
                    include removal of staff from my services.
                  </p>

                  <p className="text-base font-medium my-5 px-4">
                    Cancellation Info
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I understand if I need to cancel or reschedule a session, I
                    should use the electronic cancellation system. My account
                    can be accessed by signatureaba.theranest.com.
                  </p>

                  <p className="text-base font-medium my-5 px-4">
                    Environmental Considerations
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    I agree that I will maintain a conducive therapeutic
                    environment. Staff maintains the right to cancel a session
                    if it does not meet the following conditions:
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Sickness includes, but is not limited to the following
                  </p>

                  <ol className="  list-decimal font-[16px] px-16 gap-5">
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Temperature in the working area should be kept at a
                        comfortable level.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        The working areas should be free of smoke.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Working areas should be free of offensive odors.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Free from environmentally hazardous materials.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Lighting should be kept at an adequate level during
                        intervention hours and clinic meetings.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Exits should not be blocked.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        A clean, functional bathroom should be made available at
                        all times to staff in accordance with U.S. Department of
                        Labor, Occupational Safety and Health Administration
                        requirements
                      </p>
                    </li>

                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Garbage receptacles in the working area should be clean
                        and odor-free.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Tables and chairs should be wiped down as needed.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Carpets and floors should be kept clean.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        All weapons kept in the home will be inaccessible during
                        the hours that staff is in the home.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        First-aid supplies should be immediately accessible to
                        the program provider and staff members.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Any persons in the home shall not be under the influence
                        of drugs or alcohol. Nor shall there be illegal drugs
                        present.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-medium my-3 px-4">
                        Staff are free from potentially harmful or harassing
                        environments. This includes but is not limited to verbal
                        berating/insults, physical threat or injury, physical or
                        verbal sexual harassment behaviors.{" "}
                      </p>
                    </li>
                  </ol>
                  <hr />
                  <p className="text-base font-medium my-5 px-4">
                    Mandated Reporting
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand that if Signature Behavioral Health staff have
                    reason to suspect that a minor, elderly, or disabled person
                    is being abused or neglected, they are required to report
                    this (and any additional information upon request) to the
                    appropriate state agency. If this agency believes that a
                    client is threatening serious harm to him/herself or others,
                    they are required to take protective actions which could
                    include notifying the police, an intended victim, a minor’s
                    parents, or others who could provide protection, or seeking
                    appropriate hospitalization.
                  </p>

                  <hr />
                  <p className="text-base font-medium my-5 px-4">
                    Professional Relationship
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand that Signature Behavioral Health staff are here
                    to work with my family in a strictly professional manner. As
                    a client of Signature Behavioral Health, it is imperative
                    that staff not have any other type of relationship with me.
                    Personal and/or business relationships undermine the
                    effectiveness of the treatment process and are considered
                    unethical.
                  </p>

                  <p className="text-base font-medium my-5 px-4">
                    Professional Misconduct
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I acknowledge professional misconduct by a healthcare
                    professional must be reported by other healthcare
                    professionals. In cases in which a professional or legal
                    disciplinary meeting is being held regarding the healthcare
                    professional’s actions, related records may be released in
                    order to substantiate disciplinarily concerns.
                  </p>

                  <hr />
                  <p className="text-base font-medium my-5 px-4">
                    Confidentiality
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    Maintaining strict confidentiality of client assessment and
                    intervention information is a priority of Signature
                    Behavioral Health.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    Records may only be accessed by authorized personnel and
                    will be protected via locked file cabinets and encrypted
                    passwords on computers. No information related to an
                    individual who is receiving services, either verbal or
                    written, will be released to other agencies or individuals
                    without the express written consent of the individual’s
                    legal guardian.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    By law, however, the rules of confidentiality do not pertain
                    under the following conditions.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    If abuse or neglect of a minor, disabled, or elderly person
                    is reported or suspected, the professional involved is
                    required to report it to the local law enforcement office or
                    child welfare office for investigation.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    If, during the course of services, the professional involved
                    receives information that someone’s life is in danger, that
                    professional has a duty to warn the potential victim.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    If our records and staff testimony are subpoenaed by court
                    order, we are required to produce records or appear in court
                    to answer questions regarding the individual.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    If you choose to break confidentiality by sharing private
                    information through conversations or an unsecured
                    communication medium (e.g., email, telephone), Signature
                    Behavioral Health cannot be held liable for the outcome.
                  </p>

                  <hr />

                  <p className="text-base font-medium my-5 px-4">
                    Potential Risks and Barriers to Evaluation Services
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I acknowledge ABA treatment may cause disruption to normal
                    family schedule/routine and preferred patterns of
                    responding. I also understand individuals who receive
                    services may experience responding to said changes. I
                    understand that there is a risk associated with any type of
                    therapy or intervention, however, Signature Behavioral
                    Health makes careful effort to minimize risks.
                  </p>
                  <p className="text-base font-normal my-5 px-4">
                    In addition, I understand that Signature Behavioral Health
                    works with individuals who may exhibit severe behavioral
                    challenges, that may out themselves or others at risk of
                    physical harm or injury. When these risks are present, a
                    specific crisis plan will be provided for the individual.
                    Crisis plans may include, state approved restraint
                    procedures. This will only be utilized if deemed necessary
                    to maintain the safety of the individual and others. At any
                    point, I understand I may deny the use of restraint. If not
                    restraint is to be used and/or crisis is not managed safely,
                    911 may be called. Parent or caregiver will be responsible
                    for providing medical treatment and/or transportation if
                    needed. A reevaluation of the individual’s crisis plan will
                    be given if these steps are taken.
                  </p>

                  <hr />
                  <p className="text-base font-medium my-5 px-4">
                    Complaint Process
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand it is the goal of Signature Behavioral Health
                    to provide high quality services. I also understand that if
                    I am not satisfied with my care, I may provide this feedback
                    orally or in writing to the supervising staff. If my
                    concerns have not been remedied by the supervising staff, I
                    have the right to escalate my concern to administrative
                    staff. Signature Behavioral Health will provide a response
                    to my concerns as early as possible, no longer than 14 days
                    after speaking directly with a staff member.
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Defamation/social media
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand that by signing this document I agree that I
                    will not make defamatory comments about Signature Behavioral
                    Health or its staff to others or post defamatory commentary
                    about the company or staff on any website or social media
                    site. In the event that defamatory remarks about treatment
                    and/or Signature Behavioral Health staff are made by my
                    family, or others acting in concert with my family, I
                    further consent by signing below to allow Signature
                    Behavioral Health and staff to use any information necessary
                    to rebut or defend against, or prosecute claims for, the
                    defamation.
                  </p>
                  <p className="text-base font-medium my-5 px-4">
                    Contact Policy
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand that given Signature Behavioral Health’s many
                    professional commitments, this agency is often not
                    immediately available by telephone. If I need to leave them
                    a message, Signature Behavioral Health will make every
                    effort to return my
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    call promptly (within 24-48 hours with the exception of
                    holidays and weekends). If I am difficult to reach due to my
                    own schedule, I will provide acceptable callback times when
                    I will be available. I also understand Signature Behavioral
                    Health does not provide on-call coverage 24 hours per day, 7
                    days per week. In emergency or crisis situations,{" "}
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I will contact my physician, or call 911 and/or go to the
                    nearest hospital emergency room. I also understand that
                    communication will take place via email. While privacy is of
                    utmost priority, I understand that no guarantees can be made
                    with using online communication. I agree to allow
                    communications to occur via professional email accounts.
                  </p>

                  <hr />
                  <p className="text-base font-medium my-5 px-4">
                    Web-based Practice (Telehealth)s
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand if I receive remote, web-based services,
                    Signature Behavioral Health adheres to the guidelines
                    established by HIPAA and all client medical records are kept
                    confidential. I acknowledge protocols are utilized to ensure
                    privacy and confidentiality are maintained.
                  </p>

                  <hr />
                  <p className="text-base font-medium my-5 px-4">
                    Client Rights
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand I have the right to be free from abuse,
                    neglect, and exploitation. If I suspect abuse, neglect, or
                    exploitation, I should report immediately to law enforcement
                    or my state designated abuse hotline. I have the right to
                    considerate, safe and respectful care, without
                    discrimination due to race, ethnicity, color, gender, sexual
                    orientation, age, religion, national origin, or source of
                    payment. I have the right to ask questions about any aspects
                    of therapy and about my staff’s specific training and
                    experience.
                  </p>

                  <p className="text-base font-medium my-5 px-4">
                    Conflict of Interest
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I understand that Signature Behavioral Health will incur
                    substantial costs in providing and arranging for the
                    services to be provided to our family, including supplies,
                    services, personnel, and other items that are subject to
                    this agreement. Accordingly, I/we promise and agree that,
                    during the term of this agreement, and any extension to the
                    agreement, plus one (1) year after the agreement expires, is
                    terminated, or otherwise concludes:
                  </p>
                  <ol className="  list-decimal font-[16px] px-16 gap-5">
                    <li>
                      <p className="text-base font-normal my-5 px-4">
                        I will not attempt to directly or indirectly own,
                        manage, operate, control, or participate in the
                        ownership, management, operation or control of, or
                        become associated, as an employee, director, officer,
                        advisor, agent, consultant, principal, partner, member
                        or independent contractor with any person, enterprise,
                        firm, partnership, corporation, limited liability
                        entity, cooperative, or other entity operating a
                        behavioral consulting services firm or other competitive
                        business located, or providing services, within a twenty
                        (20) mile radius of the areas where Signature Behavioral
                        Health provides services.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-normal my-5 px-4">
                        I will not attempt to divert any business of Signature
                        Behavioral Health to any other competitive establishment
                        that is located within a twenty (20) mile radius of the
                        areas where Signature Behavioral Health provides
                        services.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-normal my-5 px-4">
                        I agree not to solicit or employ any employee or
                        independent contractor of Signature Behavioral Health,
                        including Board Certified Behavior Analysts,
                        consultants, therapists, or any other employees, in any
                        manner including, but not limited to, as an employee,
                        consultant, or through a third party, other than general
                        advertisement without prior written approval by
                        Signature Behavioral Health during the term of this
                        agreement and for at least one (1) year after the
                        expiration, termination, or conclusion of this
                        agreement. Unless otherwise agreed to by the Parties, in
                        the event that I violate this section, I/we agree to pay
                        Signature Behavioral Health a fee of fifty percent (50%)
                        of the gross annual salary paid by Signature Behavioral
                        Health to such employee or independent contractor,
                        including Board Certified Behavior Analysts,
                        consultants, and therapists. Such fee shall be paid by
                        me upon hiring of such employee or independent
                        contractor, including Board Certified Behavior Analysts,
                        consultants, and therapists, in any capacity.
                      </p>
                    </li>
                    <li>
                      <p className="text-base font-normal my-5 px-4">
                        I agree to maintain confidentiality for all business
                        policies, procedures, techniques, trade secrets, other
                        knowledge, or processes developed by Signature
                        Behavioral Health. I understand that all program
                        materials are prepared solely for my use and cannot be
                        copied, disseminated, published, or shared with a third
                        party without the approval of Signature Behavioral
                        Health. I understand that all program materials must be
                        returned to Signature Behavioral Health upon termination
                        of this agreement.
                      </p>
                    </li>
                  </ol>
                  <p className="text-base font-normal my-5 px-4">
                    I agree that to the fullest extent permitted by law,
                    Signature Behavioral Health shall not be liable to the
                    Client for any special, indirect, or consequential damages
                    whatsoever, whether caused by Signature Behavioral Health’s
                    negligence, breach of contract, or other cause or causes
                    whatsoever including, but not limited to, loss of behavioral
                    consulting services and the costs related to locating a new
                    provider of such consulting services. This does not include
                    willful or intentional wrongs. I also understand that
                    therapy outcomes are dependent on several variables,
                    including my participation, and success cannot be
                    guaranteed. I understand that failure to adhere to treatment
                    recommendations by Signature Behavioral Health’s staff may
                    impact the success of the individual’s progress and that I
                    am responsible for being a willing and active participant in
                    this process. I understand that continual non-compliance
                    with adhering to treatment recommendations may result in
                    termination of services.
                  </p>

                  <p className="text-base font-Medium my-5 px-4">
                    Consent for Assessment and Treatment
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I certify that I have authority to legally consent to
                    assessment and on-going treatment, release of information,
                    and all legal issues involving{" "}
                    <input
                      type="text"
                      className=" border-b-2 focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    If my status as legal guardian should change, I will
                    immediately inform Signature Behavioral Health and provide
                    the name, address, and phone number of the person(s) who
                    have assumed that role. I hereby acknowledge that I have
                    received information on Signature Behavioral Health’s
                    expectations including but not limited to client
                    participation, cancellations, financial responsibility, etc
                    and have had the opportunity to ask questions and get
                    clarification regarding these requirements and processes. I
                    have received a summary of the HIPAA Privacy and Security
                    Standards, Recipient Choice and Rights, and abuse hotline
                    number. This consent will be updated annually. I acknowledge
                    that accessing services through Signature Behavioral Health
                    is a choice and that I have the right to discontinue
                    services at any time. Additionally, I acknowledge that I
                    have the choice to change companies or request a change in
                    assigned staff at any point and Signature Behavioral Health
                    reserves the right to adhere to requested change.
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I provide my consent for my child to participate in an
                    assessment and on-going services through Signature
                    Behavioral Health in the settings and at the times I have
                    indicated and that are mutually agreed upon thereafter. I
                    agree to be physically present and alert and to participate
                    fully in treatment. By signing below, I am acknowledging
                    that I have read, understand, and agree to all of the terms
                    within this document. My consent expires one year after the
                    date : below.
                  </p>

                  <p className="text-base font-normal my-5 px-4">
                    I acknowledge Signature Behavioral Health may need to
                    provide information regarding my child to our insurance
                    company. I hereby provide explicit consent to release
                    information necessary to maintain ABA services. This
                    includes but is not limited to prior authorization requests,
                    concurrent treatment requests, discharge planning.
                  </p>
                </div>
                <div className="overflow-x-scroll my-7">
                  <table class="min-w-full border-2 border-blue-600 ">
                    <tbody>
                      {" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td
                          class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={"2"}
                        >
                          <div class="flex">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Print Name)
                              </label>
                            </span>
                            <br />
                            <input
                              type="TEXT"
                              className=" w-full border-none focus:outline-none "
                              placeholder="Enter Here..."
                              {...register("client_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div class="flex">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Signature)
                              </label>
                            </span>

                            <button
                              className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                              onClick={handleSignatureProvider}
                            >
                              <FaSignature className="text-lg" />
                            </button>
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div class="flex">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Date :
                              </label>
                            </span>

                            <input
                              type="date"
                              className=" w-full border-none focus:outline-none "
                              placeholder="Enter Here..."
                              {...register("client_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td
                          class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={"2"}
                        >
                          <div class="flex">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #2: (Print Name)
                              </label>
                            </span>
                            <br />
                            <div></div>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div class="flex">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #2: (Signature)
                              </label>
                            </span>

                            <button
                              className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                              onClick={handleSignatureProvider}
                            >
                              <FaSignature className="text-lg" />
                            </button>
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div class="flex">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Date :
                              </label>
                            </span>

                            <input
                              type="date"
                              className=" w-full border-none focus:outline-none "
                              placeholder="Enter Here..."
                              {...register("client_name")}
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

export default SBHABAConsentForm;
