import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import { Select, Space } from "antd";

const LocusScoreSheetForm = () => {
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
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
            <h2>DATASHEET</h2>

            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>

        {/* form heading part  */}

        <div className="my-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-x-auto mt-5">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                          Agency Name:
                        </label>
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                          Client Name/Number:
                        </label>
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="grid grid-cols-5 border border-blue-600">
                  <div className="col-span-5 text-center border p-2 border-blue-600 font-semibold">
                    Dimension 1: Risk of Harm
                  </div>

                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Min Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Low Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Mod Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Serious Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Extreme Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    1
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    2
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    3
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    4
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    5
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    a
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    b
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    c
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    d
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    e
                  </div>
                </div>
                <div className="grid grid-cols-5 border border-blue-600">
                  <div className="col-span-5 text-center border p-2 border-blue-600 font-semibold">
                    Dimension 1: Risk of Harm
                  </div>

                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Min Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Low Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Mod Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Serious Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Extreme Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    1
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    2
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    3
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    4
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    5
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    a
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    b
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    c
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    d
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    e
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-2 mb-2">
                <div className="grid grid-cols-5 border border-blue-600">
                  <div className="col-span-5 text-center border p-2 border-blue-600 font-semibold">
                    Dimension 1: Risk of Harm
                  </div>

                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Min Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Low Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Mod Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Serious Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Extreme Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    1
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    2
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    3
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    4
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    5
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    a
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    b
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    c
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    d
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    e
                  </div>
                </div>


                <div className="grid grid-cols-5 border border-blue-600">
                  <div className="col-span-5 text-center border p-2 border-blue-600 font-semibold">
                    Dimension 1: Risk of Harm
                  </div>

                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Min Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Low Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Mod Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Serious Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Extreme Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    1
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    2
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    3
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    4
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    5
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    a
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    b
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    c
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    d
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    e
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="grid grid-cols-5 border border-blue-600">
                  <div className="col-span-5 text-center border p-2 border-blue-600 font-semibold">
                    Dimension 1: Risk of Harm
                  </div>

                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Min Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Low Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Mod Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Serious Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Extreme Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    1
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    2
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    3
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    4
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    5
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    a
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    b
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    c
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    d
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    e
                  </div>
                </div>
                <div className="grid grid-cols-5 border border-blue-600">
                  <div className="col-span-5 text-center border p-2 border-blue-600 font-semibold">
                    Dimension 1: Risk of Harm
                  </div>

                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Min Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Low Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Mod Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Serious Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Extreme Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    1
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    2
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    3
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    4
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    5
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    a
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    b
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    c
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    d
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    e
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-2">
                <div className="grid grid-cols-5 border border-blue-600">
                  <div className="col-span-5 text-center border p-2 border-blue-600 font-semibold">
                    Dimension 1: Risk of Harm
                  </div>

                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Min Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Low Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Mod Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Serious Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    <span className="font-bold">Extreme Risk</span>
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    1
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    2
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    3
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    4
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    5
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    a
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    b
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    c
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    d
                  </div>
                  <div className="border p-1 flex items-center justify-center border-blue-600">
                    e
                  </div>
                </div>
              
              </div>
            </div>

            <div  className="mt-5">
             <h1 className="form-inner-head border-b border-blue-600">COMPOSITE SCORE:</h1>
             <p className="mt-2 mb-2 text-sm">Instructions : Circle the scores that best describe client's current circumstances and clinical presentation. Then choose the highest score in which at least one answer is circled. Place that score in the box for the dimension on the right of the page. Add all scores for the composite score.</p>

             <h1>NOTE:</h1>
             <p className="text-sm">Any score of 4 or 5 in Dimensions 1, 2, or 3 have independent placement criteria required regardless of the composite score or scores on other dimensions.</p>

            </div>

            <div>
            <div className="overflow-x-auto mt-5">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                          Agency Name:
                        </label>
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                          Client Name/Number:
                        </label>
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                         Date:
                        </label>
                        <input
                          type="date"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          </form>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 items-center justify-between my-5">
            <button
              className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureProvider}
            >
              Provider Signature
              <FaSignature className="text-lg" />
            </button>
            <button
              className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureCaregiver}
            >
              Caregiver Signature
              <FaSignature className="text-lg" />
            </button>
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
            <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
              <AiFillCloud /> Save
            </button>
            <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
              <AiOutlinePrinter /> Print
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
          <div className="text-black">
            Demo Institution{" "}
            <span className=" font-normal">somewhere in america</span>
          </div>
          <div>
            Phone: 000-000-0000, Email: demo@example.com, Fax: 000.000.0000,
            example.com
          </div>
        </div>
      </div>
    </>
  );
};

export default LocusScoreSheetForm;
