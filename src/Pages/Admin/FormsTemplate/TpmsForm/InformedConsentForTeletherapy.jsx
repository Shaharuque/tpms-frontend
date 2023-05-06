import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const InformedConsentForTeletherapy = () => {
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
            INFORMED CONSENT FOR <br />TELETHERAPY{" "}
            </h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <p className="text-sm font-normal my-2">This Informed Consent for Teletherapy contains important information concerning engaging in electronic psychotherapy or teletherapy. Please read this carefully and let me know if you have any questions.</p>


            <span className="mb-3 mt-3 font-bold">Benefits and Risks of Teletherapy</span>

            <p className="text-sm font-normal my-2">Teletherapy refers to the remote provision of psychotherapy services using telecommunications technologies such as video conferencing or telephone. One of the benefits of teletherapy is that the client and therapist can engage in services without being in the same physical location. This can be helpful in ensuring continuity of care if the client or therapist moves to a different location, takes an extended vacation, or is otherwise unable to continue to meet in person. It can also increase the convenience and time efficiency of both parties.</p>

            <p className="text-sm font-normal my-2">Although there are benefits of teletherapy, there are some fundamental differences between in-person psychotherapy and teletherapy, as well as some inherent risks. For example:</p>

            <ul class="ml-6 text-sm font-normal list-decimal mt-2 ">
              <li> <span className="font-bold">Risks to confidentiality:</span> Because teletherapy sessions take place outside of the typical office setting, there is potential for third parties to overhear sessions if they are not conducted in a secure environment. I will take reasonable steps to ensure the privacy and security of your information, and it is important for you to review your own security measures and ensure that they are adequate to protect information on your end. You should participate in therapy only while in a room or area where other people are not present and cannot overhear the conversation.</li>
              <li className="mt-2 mb-2">
              <span className="font-bold ">Issues related to technology:</span> There are risks inherent in the use of technology for therapy that are important to understand, such as: potential for technology to fail during a session, potential that transmission of confidential information could be interrupted by unauthorized parties, or potential for electronically stored information to be accessed by unauthorized parties.
              </li>
              <li>
             <span className="font-bold"> Crisis management and intervention:</span> As a general rule I will not engage in teletherapy with patients who are in a crisis situation. Before engaging in teletherapy, we will develop an emergency response plan to address potential crisis situations that may arise during the course of our teletherapy work.
                
              </li>
              <li className="mt-2 mb-2">
              <span className="font-bold">Efficacy:</span> While most research has failed to demonstrate that teletherapy is less effective than in person psychotherapy, some experienced mental health professionals believe that something is lost by not being in the same room. For example, there is debate about one’s ability when doing remote work to fully process non-verbal information. If you ever have concerns about misunderstandings between us related to our use of technology, please bring up such concerns immediately and we will address the potential misunderstanding together
              </li>
              

             
            </ul>

            <span className="mb-3 mt-3 font-bold">Electronic Communications</span>


            <p className="text-sm font-normal mt-3 mb-3">We will discuss which is the most appropriate platform to use for teletherapy services. I will make my best efforts to comply with the American Counseling Association’s Ethics Code guidance on Distance Counseling as well as the Texas Department of Regulatory Agency’s Teletherapy Policy, and I will provide you with a copy of these guidelines upon request.</p>
            <p className="text-sm font-normal mt-3 mb-3">You may be required to have certain system requirements to access electronic psychotherapy via the method we choose. You are solely responsible for any cost to you to obtain any additional/necessary system requirements, accessories, or software to use electronic psychotherapy.</p>
            <p className="text-sm font-normal mt-3 mb-3">For communication between sessions, I use email communication and text messaging only with your permission and only for administrative purposes unless we have made another agreement. That means that email exchanges and text messages with my office should be limited to things like setting and changing appointments, billing matters, and other related issues. You should be aware that I cannot guarantee the confidentiality of any information communicated by email or text.</p>
            <p className="text-sm font-normal mt-3 mb-3">Treatment is most effective when clinical discussions occur at your regularly scheduled sessions, however if an urgent issue arises, you should feel free to attempt to reach me by phone. I will make every effort to return your call on the same day you make it, with the exception of weekends and holidays. If you are unable to reach me and feel that you cannot wait for me to return your call, contact your family physician or the nearest emergency room and ask for the psychologist or psychiatrist on call. If I will be unavailable for an extended time, I will provide you with the name of a colleague to contact, if necessary.

</p>


            <span className="mb-3 mt-3 font-bold">Confidentiality</span>


<p className="text-sm font-normal mt-3 mb-3">I have a legal and ethical responsibility to make my best efforts to protect all communications, electric and otherwise, that are a part of our teletherapy. However, the nature of electronic communications technologies is such that I cannot guarantee that our communications will be kept confidential and/or that a third party may not gain access to our communications. Even though I may utilize state of the art encryption methods, firewalls, and back-up systems to help secure our communication, there is a risk that our electronic communications may be compromised, unsecured, and/or accessed by a third party.</p>
<p className="text-sm font-normal mt-3 mb-3">The extent of confidentiality and the exceptions to confidentiality that I outlined in my Disclosure Statement and Informed Consent for Services still apply in teletherapy. Please let me know if you have any questions about exceptions to confidentiality.</p>

<span className="mb-3 mt-3 font-bold">Emergencies and Technology

</span>


<p className="text-sm font-normal mt-3 mb-3">Assessing and evaluating threats and other emergencies can be more difficult when conducting teletherapy than in traditional in-person therapy. In order to address some of these difficulties, I will ask you where you are located at the beginning of each session and I will ask that you identify an emergency contact person who is near your location and who I have permission to contact in the event of a crisis or emergency to assist in addressing the situation.</p>
<p className="text-sm font-normal mt-3 mb-3">If the session cuts out, meaning the technological connection fails, and you are having an emergency do not call me back, but call 911, or go to your nearest emergency room. Call me after you have called or obtained emergency services.</p>
<p className="text-sm font-normal mt-3 mb-3">If the session cuts out and you are not having an emergency, disconnect from the session and I will wait two (2) minutes and then re-contact you via the teletherapy platform on which we agreed to conduct therapy. If you do not receive a call back within two (2) minutes then call me on the phone number 410-774-9840</p>
<p className="text-sm font-normal mt-3 mb-3">If there is a technological failure and we are unable to resume the connection, you will only be charged the prorated amount of actual session time.

</p>



<span className="mb-3 mt-3 font-bold">Fees</span>


<p className="text-sm font-normal mt-3 mb-3">The same fee rates shall apply for teletherapy as apply for in-person psychotherapy. However, if your HSA, or FSA, third-party payer, or other managed care provider does not cover electronic psychotherapy sessions, you will be solely responsible for the entire fee of the session.

</p>

<span className="mb-3 mt-3 font-bold">Informed Consent:</span>


<p className="text-sm font-normal mt-3 mb-3">I, having been fully informed of the risks and benefits of teletherapy; the security measures in place, which include procedures for emergency situations; the fees associated with teletherapy; the technological requirements needed to engage in teletherapy; and all other information provided in this informed consent, agree to and understand the procedures and policies set forth in this consent.</p>


<span className="text-sm">By signing this form, I certify:</span>


            <ul class="ml-6 list-disc text-sm">
                  <li>
                  That I have read or had this form read and/or had this form explained to me.
                  </li>
                  <li>
                  That I fully understand its contents including the risks and benefits of the procedure(s).
                  </li>
                  <li>That I have been given ample opportunity to ask questions and that any questions have been answered to my satisfaction.</li>
                 
                </ul>





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
  )
}

export default InformedConsentForTeletherapy