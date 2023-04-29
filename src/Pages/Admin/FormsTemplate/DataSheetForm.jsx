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

const DataSheetForm = () => {
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
    <div>
      {" "}
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
            <div>
              <div class="flex flex-col ">
                <div class="sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-2 border-blue-600 ">
                        <tbody>
                          <tr className="border-b border-2 border-blue-600 ">
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                              <div className="flex  gap-3">
                                <span>
                                  <label
                                    for="child_name"
                                    className=" font-bold text-base"
                                  >
                                    Client:
                                  </label>
                                  <input
                                    type="text"
                                    className="  border-none focus:outline-none w-8"
                                    {...register("child_name")}
                                  />
                                </span>
                                <span>
                                  <label
                                    for="child_name"
                                    className=" font-bold text-base"
                                  >
                                    Staff Name:
                                  </label>
                                  <input
                                    type="text"
                                    className="  border-none focus:outline-none w-8"
                                    {...register("child_name")}
                                  />
                                </span>
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                              <div className="flex   gap-2">
                                <span>
                                  <label
                                    for="attendees"
                                    className=" font-bold text-base"
                                  >
                                    Session Date:
                                  </label>
                                  <input
                                    type="date"
                                    className=" border-none focus:outline-none "
                                    {...register("attendees")}
                                  />
                                </span>
                              </div>
                              <div className="flex justify-between w-full gap-3 mt-2">
                                <div>
                                  <label
                                    for="child_name"
                                    className=" font-bold text-base"
                                  >
                                    Start:
                                  </label>
                                  <input
                                    type="time"
                                    className="  border-none focus:outline-none "
                                    {...register("child_name")}
                                  />
                                </div>
                                <div>
                                  <label
                                    for="child_name"
                                    className=" font-bold text-base"
                                  >
                                    End:
                                  </label>
                                  <input
                                    type="time"
                                    className="  border-none focus:outline-none "
                                    {...register("child_name")}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr className="border-b border-2 border-blue-600 ">
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-3">
                                <Space wrap>
                                  <Select
                                    defaultValue="lucy"
                                    style={{
                                      width: 120,
                                    }}
                                    onChange={handleChange}
                                    options={[
                                      {
                                        value: "jack",
                                        label: "Jack",
                                      },
                                      {
                                        value: "lucy",
                                        label: "Lucy",
                                      },
                                      {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                      },
                                    ]}
                                  />
                                </Space>
                                <Space wrap>
                                  <Select
                                    defaultValue="lucy"
                                    style={{
                                      width: 120,
                                    }}
                                    onChange={handleChange}
                                    options={[
                                      {
                                        value: "jack",
                                        label: "Jack",
                                      },
                                      {
                                        value: "lucy",
                                        label: "Lucy",
                                      },
                                      {
                                        value: "Yiminghe",
                                        label: "yiminghe",
                                      },
                                    ]}
                                  />
                                </Space>
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap gap-2">
                                <label
                                  for="end_time"
                                  className=" font-bold text-base"
                                >
                                  End Time:
                                </label>
                                <input
                                  type="time"
                                  className=" border-none focus:outline-none"
                                  {...register("end_time")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <label
                                  for="date"
                                  className=" font-bold text-base"
                                >
                                  Date:
                                </label>
                                <input
                                  type="date"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>{" "}
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <label
                                  for="date"
                                  className=" font-bold text-base"
                                >
                                  Date:
                                </label>
                                <input
                                  type="date"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <label
                                  for="date"
                                  className=" font-bold text-base"
                                >
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
                          <tr className="border-b border-2 border-blue-600 ">
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-3">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>{" "}
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-2 border-blue-600 ">
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-3">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>{" "}
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-2 border-blue-600 ">
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-3">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>{" "}
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("date")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
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
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 mt-4">
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 mt-4">
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 ">
                  <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                    Program:
                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-gray-300"
                      {...register("date")}
                    />
                  </div>
                  <div className="col-span-5 border p-2 border-black font-semibold">
                    Target:
                    <input
                      type="text"
                      className=" border-none focus:outline-none"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +1
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +2
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +3
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +4
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +5
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +6
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +7
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +8
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +9
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +10
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +11
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +12
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +13
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +14
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                    +15
                  </div>
                  <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      /{" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      =
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-3 mt-5 mb-[55px]">
              <h1 className="form-inner-head text-center mt-4">
                Session Notes
              </h1>

              <div className="mt-3">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className="border-2 border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 mt-4 mb-4">
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 ">
                <div className="col-span-5 bg-gray-300 border p-2 border-black font-semibold">
                  Program:
                  <input
                    type="text"
                    className=" border-none focus:outline-none bg-gray-300"
                    {...register("date")}
                  />
                </div>
                <div className="col-span-5 border p-2 border-black font-semibold">
                  Target:
                  <input
                    type="text"
                    className=" border-none focus:outline-none"
                    {...register("date")}
                  />
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +1
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +2
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +3
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +4
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +5
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +6
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +7
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +8
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +9
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +10
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +11
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +12
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +13
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +14
                </div>
                <div className="border p-1 flex items-end justify-end border-black">
                  <input
                    type="text"
                    className=" border-none focus:outline-none w-5"
                    {...register("date")}
                  />
                  +15
                </div>
                <div className="col-span-5 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                  <div>
                    Total:
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    /{" "}
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    {" "}
                    =
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-8"
                      {...register("date")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 mt-4">
                <div className="grid grid-cols-2 ">
                  <div className="col-span-2 bg-[#ccccff] border p-2 border-black font-semibold">
                  Task Analysis: 

                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-[#ccccff]"
                      {...register("date")}
                    />
                  </div>

                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>

                  <div className="col-span-2 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 ">
                  <div className="col-span-2 bg-[#ccccff] border p-2 border-black font-semibold">
                  Task Analysis: 

                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-[#ccccff]"
                      {...register("date")}
                    />
                  </div>

                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>

                  <div className="col-span-2 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 ">
                  <div className="col-span-2 bg-[#ccccff] border p-2 border-black font-semibold">
                  Task Analysis: 

                    <input
                      type="text"
                      className=" border-none focus:outline-none bg-[#ccccff]"
                      {...register("date")}
                    />
                  </div>

                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>
                  <div className="border p-1 flex items-end justify-end border-black">
                    <input
                      type="text"
                      className=" border-none focus:outline-none w-5"
                      {...register("date")}
                    />
                  </div>

                  <div className="col-span-2 border pt-2 px-2 pb-6 border-black font-semibold flex items-center justify-between">
                    <div>
                      Total:
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                    <div>
                      {" "}
                      <input
                        type="text"
                        className=" border-none focus:outline-none w-8"
                        {...register("date")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mt-5">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 bg-gray-400">
                      <div className="flex flex-wrap  gap-3">
                        <label className="text-center font-bold text-lg ">
                          Antecedent
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 bg-gray-400">
                      <div className="flex flex-wrap gap-2">
                        <label className="text-center font-bold text-lg ">
                          Antecedent
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 bg-gray-400">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                          Antecedent
                        </label>
                      </div>
                    </td>{" "}
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 bg-gray-400">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                          Antecedent
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 bg-gray-400">
                      <div className="flex flex-wrap  gap-2">
                        <label className="text-center font-bold text-lg ">
                          Antecedent
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-3">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap gap-2">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>{" "}
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-3">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap gap-2">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>{" "}
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
                        <input
                          type="text"
                          className=" border-none focus:outline-none"
                          {...register("date")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                      <div className="flex flex-wrap  gap-2">
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
      </div>{" "}
    </div>
  );
};

export default DataSheetForm;
