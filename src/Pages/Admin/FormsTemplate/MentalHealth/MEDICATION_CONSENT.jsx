import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const MEDICATION_CONSENT = () => {
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

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-border 2xl:w-[85%] w-full mx-auto p-5 bg-white">
      <div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <img src={logo} className="w-[250px] h-[100px]" alt="" />
          <div className="text-[16px] sm:mr-10 mr-0 ml-10 sm:ml-0">
            <p className="my-2">
              <span className="form-head">Mail: </span>demo@example.com
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Email: </span>demo@example.com
              </Link>
            </p>
            <p className="my-2">
              <span className="form-head">Phone: </span> 000-000-0000
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Fax: </span>000.000.0000
              </Link>
            </p>
          </div>
        </div>
        <div className="form-title my-5">
          <h1>MEDICATION CONSENT</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex item-center justify-between flex-wrap gap-3">
            <div>
              {" "}
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  Patient’s Name:
                </label>
              </span>
              <input
                type="text"
                className=" my-3 form-bottom-border focus:outline-none "
                placeholder="Enter Here..."
                {...register("client_name")}
              />
            </div>
            <div>
              {" "}
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  Patient MR#:
                </label>
              </span>
              <input
                type="text"
                className=" my-3 form-bottom-border focus:outline-none "
                placeholder="Enter Here..."
                {...register("client_name")}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <div className="flex justify-center">
                {" "}
                <input
                  type="text"
                  className=" my-3 form-bottom-border focus:outline-none"
                  placeholder="Enter Here..."
                  {...register("client_name")}
                />
              </div>

              <div>
                <h1>(NAME(S) OF PSYCHOTROPIC MEDICATION)</h1>
              </div>
            </div>
          </div>

          <p className="font-normal text-[16p] my-5">
            I have been informed that Brenda White, M.D. recommends that I
            received one or more of the above medications for the treatment of
            my psychiatric disturbance. I have been informed about the nature of
            the treatment, reasonable alternative treatments, as well as no
            treatment, and the risks of possible side effects have been
            explained to me. If I fail to comply with the treatment or choose to
            see another provider, I am obligated to inform Dr. White about that
            decision.
          </p>
          <p className="font-normal text-[16p] my-5">
            <span className="font-semibold">
              {" "}
              This medication ____ is/ ____ is not FDA approved. (There is
              evidence of good results with this)
            </span>{" "}
            <br />
            <br />I understand that although the substantial side effects of
            this treatment have been explained to me, that there may be other
            side effects,{" "}
            <span className="medium">
              and that I should promptly inform Brenda White, M.D.
            </span>
            if there are any unexpected changes in my condition. Further
            information on prescribed medication can be found on the website
            www.nami.org.
          </p>
          <p className="font-normal text-[16p] my-5">
            <span className="font-semibold">
              I understand that I am not forced to take medication and that I am
              encouraged to discuss my medication further with Brenda White,
              M.D. should I have further questions about it or about continuing
              to take it. I also understand that I should not mix alcohol with
              sedating medications and exercise caution while driving or use of
              machinery.
            </span>{" "}
            <br />
            <br />I understand that my doctor believes that medications are
            likely to help me, but that there is no guarantee as to results that
            may be expected. I understand that I have to take responsibility to
            administer the said medications and to keep them in safekeeping away
            from children. I will follow up with the visits as recommended by
            Dr. White.
          </p>
          <p className="font-normal text-[16p] my-5">
            On this basis I authorize Brenda White, M.D. to prescribe
            medications at such intervals as recommended.
          </p>

          <div>
            <h1 className="form-small-title my-5 ml-1 w-full">
              I ACCEPT ({" "}
              <input
                type="text"
                className=" my-3 form-bottom-border focus:outline-none "
                placeholder="Enter Here..."
                {...register("client_name")}
              />{" "}
              )
            </h1>
          </div>

          <div>
            <div class="flex gap-3 my-2">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  PATIENT/PARENT/GUARDIAN SIGNATURE:
                </label>
              </span>

              <button
                className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
                onClick={handleSignatureCaregiver}
              >
                Caregiver Signature
                <FaSignature className="text-lg" />
              </button>
            </div>
            <div className="flex items-center flex-wrap gap-8">
              <div class="flex gap-3 my-2">
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    PRINT NAME:
                  </label>
                </span>

                <input
                  type="text"
                  className=" form-bottom-border focus:outline-none "
                  placeholder="Enter Here..."
                  {...register("client_name")}
                />
              </div>
              <div class="flex gap-3 my-2">
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    DATE
                  </label>
                </span>

                <input
                  type="date"
                  placeholder="Enter Here..."
                  className="  border-none focus:outline-none "
                  {...register("dob")}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-small-title my-5 ml-1 w-full">
              I DECLINE ({" "}
              <input
                type="text"
                className=" my-3 form-bottom-border focus:outline-none "
                placeholder="Enter Here..."
                {...register("client_name")}
              />{" "}
              )
            </h1>
          </div>

          <div>
            <div class="flex gap-3 my-2">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  PATIENT/PARENT/GUARDIAN SIGNATURE:
                </label>
              </span>

              <button
                className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
                onClick={handleSignatureCaregiver}
              >
                Caregiver Signature
                <FaSignature className="text-lg" />
              </button>
            </div>
            <div className="flex items-center flex-wrap gap-8">
              <div class="flex gap-3 my-2">
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    PRINT NAME:
                  </label>
                </span>

                <input
                  type="text"
                  className=" form-bottom-border focus:outline-none "
                  placeholder="Enter Here..."
                  {...register("client_name")}
                />
              </div>
              <div class="flex gap-3 my-2">
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    DATE
                  </label>
                </span>

                <input
                  type="date"
                  placeholder="Enter Here..."
                  className="  border-none focus:outline-none "
                  {...register("dob")}
                />
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-8">
              <div class="flex gap-3 my-2">
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    PHYSICIAN SIGNATURE:
                  </label>
                </span>

                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Provider Signature
                  <FaSignature className="text-lg" />
                </button>
              </div>
              <div class="flex gap-3 my-2">
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    DATE
                  </label>
                </span>

                <input
                  type="date"
                  placeholder="Enter Here..."
                  className="  border-none focus:outline-none "
                  {...register("dob")}
                />
              </div>
            </div>
          </div>
        </form>
        <div>
          <div className="flex flex-wrap   justify-between my-5"></div>
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
            <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
              <AiFillCloud /> Save
            </button>
            <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
              <AiOutlinePrinter /> Print
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
        <div className="text-black">
          Demo Institution
          <span className=" font-normal">somewhere in america</span>
        </div>
        <div>
          Phone: 000-000-0000, Email: demo@example.com, Fax: 000.000.0000,
          example.com
        </div>
      </div>
    </div>
  );
};

export default MEDICATION_CONSENT;
