import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
const StructureofProcess = () => {
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
    <div>
      <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 ">
        <div>
          <div className="form-title mb-5">
            <h1>STRUCTURE OF PROCESS</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div>
              <h1 className="form-inner-head my-2 text-center">
                ANECDOTAL REPORT
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-blue-400"
                      >
                        Practice Name
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        NPI (Box # 33 )
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Tax id /Emp#
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Practice Address ( BOX# 32 )
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Billing Address (Box # 33 )
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-2 mt-5 bg-blue-600 border-2 border-blue-400">
              <h4 className="text-white text-center font-bold text-lg">
                Client Profile
              </h4>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div className="basis-1/2">
                <div class="overflow-x-auto">
                  <table class="min-w-full border-2 border-blue-600 ">
                    <tbody>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="basis-1/2">
                <div class="overflow-x-auto">
                  <table class="min-w-full border-2 border-blue-600 ">
                    <tbody>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div>
                <div class="overflow-x-auto">
                  <table class="min-w-full border-2 border-blue-600 ">
                    <thead class="border-b bg-blue-600">
                      <tr>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-blue-400"
                        >
                          Practice Name
                        </th>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          NPI (Box # 33 )
                        </th>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Tax id /Emp#
                        </th>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Practice Address ( BOX# 32 )
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none"
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div class="overflow-x-auto">
                  <table class="min-w-full border-2 border-blue-600 ">
                    <thead class="border-b bg-blue-600">
                      <tr>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-blue-400"
                        >
                          Practice Name
                        </th>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          NPI (Box # 33 )
                        </th>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Tax id /Emp#
                        </th>
                        <th
                          scope="col"
                          class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Practice Address ( BOX# 32 )
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr class="border-b border-2 border-blue-600 ">
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("date_setting_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("antecedent_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("behavior_1")}
                            />
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("consequence_1")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2 text-center">
                ANECDOTAL REPORT
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-blue-400"
                      >
                        Practice Name
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        NPI (Box # 33 )
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Tax id /Emp#
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Practice Address ( BOX# 32 )
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Billing Address (Box # 33 )
                      </th>
                      <th
                        scope="col"
                        class=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Billing Address (Box # 33 )
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-5 px-2">
              <div className="form-title mb-5">
                <h1>PAYMENT POSTING</h1>
                <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
              </div>
              <div className="flex flex-wrap justify-center mt-4 mb-4">
                <div className="flex items-center  mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("analyzing_data")}
                  />
                  <label for="inline-radio" className="ml-2  form-input-name ">
                    Online
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("modifying_program")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Drop Box
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("adding_goals")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Provide Mail
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("developing_bip")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    ERA
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("developing_plan")}
                  />
                  <label for="inline-2-radio" className="ml-2 form-input-name">
                    FAX
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("developing_plan")}
                  />
                  <label for="inline-2-radio" className="ml-2 form-input-name">
                    Other
                  </label>
                  <input
                    type="text"
                    className="w-[50%] border-2 border-black "
                    {...register("consequence_1")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>{" "}
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>{" "}
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>{" "}
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed -
              </span>
              <div>
                <img
                  src={"https://app.therapypms.com/assets/img/chart.png"}
                  className="mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">SOP SOURCE</span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <div class="flex justify-center">
                  <div class=" xl:w-full">
                    <select
                      class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <div className="border-2 border-blue-600 px-2">
              <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("client")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Client
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Therapist
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("rendering_provider")}
                  />
                  <label for="inline-2-radio" class="ml-2 form-input-name">
                    Rendering Provider
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex  flex-wrap justify-between mt-10">
              <div>
                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Provider Signature
                  <FaSignature className="text-lg" />
                </button>
              </div>

              <div>
                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Caregiver Signature <FaSignature className="text-lg" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between my-12">
              <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
                <AiFillCloud /> Save
              </button>
              <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
                <AiOutlinePrinter /> Print
              </button>
            </div>
          </div>
        </form>

        {providerSignature && (
          <SignatureModal
            handleSignatureClose={handleSignatureClose}
            open={providerSignature}
            setImageURL={setProviderImageURL}
            setFile={setFile}
          ></SignatureModal>
        )}

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
    </div>
  );
};

export default StructureofProcess;
