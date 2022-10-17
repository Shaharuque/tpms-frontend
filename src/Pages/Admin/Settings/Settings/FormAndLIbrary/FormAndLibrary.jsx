import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import MultiSelectionDiv from "../../../../Pages/Settings/SettingComponents/MultiSelectionDiv";
import { motion } from "framer-motion";
import axios from "axios";

const FormAndLibrary = () => {
  const [behaviorTherapy, setBehaviorTherapy] = useState(false);
  const [mentalHealth, setMentalHealth] = useState(false);
  const [speechTherapy, setSpeechTherapy] = useState(false);
  const [occupationalTherapy, setOccupationalTherapy] = useState(false);
  const [physicalTherapy, setPhysicalTherapy] = useState(false);
  const [musicTherapy, setMusicTherapy] = useState(false);

  const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState("");

  // testing space............
  useEffect(() => {
    axios("../../../All_Fake_Api/Transfer.json")
      .then((response) => {
        // console.log("chkd ata", response?.data)
        setTransferData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const arr1 = [];
  console.log(arr1);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setBehaviorTherapy(!behaviorTherapy)}
          className="mr-3 text-sm font-normal flex items-center bg-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-lg"
        >
          Behavioral Therapy{" "}
          <span className="ml-1 text-gray-500">
            <MdArrowForwardIos
              style={{
                transition: "all .3s ease-out",
                transform: `rotate(${behaviorTherapy ? "90" : "0"}deg)`,
              }}
            />
          </span>
        </button>
        <button
          onClick={() => setMentalHealth(!mentalHealth)}
          className="mr-3 text-sm font-normal flex items-center bg-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-lg"
        >
          Mental Health
          <span className="ml-1 text-gray-500">
            <MdArrowForwardIos
              style={{
                transition: "all .3s ease-out",
                transform: `rotate(${mentalHealth ? "90" : "0"}deg)`,
              }}
            />
          </span>
        </button>
        <button
          onClick={() => setSpeechTherapy(!speechTherapy)}
          className="mr-3 text-sm font-normal flex items-center bg-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-lg"
        >
          Speech Therapy
          <span className="ml-1 text-gray-500">
            <MdArrowForwardIos
              style={{
                transition: "all .3s ease-out",
                transform: `rotate(${speechTherapy ? "90" : "0"}deg)`,
              }}
            />
          </span>
        </button>
        <button
          onClick={() => setOccupationalTherapy(!occupationalTherapy)}
          className="mr-3 text-sm font-normal flex items-center bg-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-lg"
        >
          Occupational Therapy
          <span className="ml-1 text-gray-500">
            <MdArrowForwardIos
              style={{
                transition: "all .3s ease-out",
                transform: `rotate(${occupationalTherapy ? "90" : "0"}deg)`,
              }}
            />
          </span>
        </button>
        <button
          onClick={() => setPhysicalTherapy(!physicalTherapy)}
          className="mr-3 text-sm font-normal flex items-center bg-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-lg"
        >
          Physical Therapy
          <span className="ml-1 text-gray-500">
            <MdArrowForwardIos
              style={{
                transition: "all .3s ease-out",
                transform: `rotate(${physicalTherapy ? "90" : "0"}deg)`,
              }}
            />
          </span>
        </button>
        <button
          onClick={() => setMusicTherapy(!musicTherapy)}
          className="mr-3 text-sm font-normal flex items-center bg-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-lg"
        >
          Music Therapy
          <span className="ml-1 text-gray-500">
            <MdArrowForwardIos
              style={{
                transition: "all .3s ease-out",
                transform: `rotate(${musicTherapy ? "90" : "0"}deg)`,
              }}
            />
          </span>
        </button>
      </div>
      {/* body part  */}
      <div className="my-5">
        {behaviorTherapy && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border py-3 shadow-md"
          >
            <h1 className="text-lg text-orange-500 ml-2">Behavioral Therapy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
              <div className="ml-2">
                <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

                {/* new code added */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {TransferData.length > 0 &&
                    TransferData.map((item, index) => (
                      <option
                        className="px-2 text-sm"
                        onClick={(e) => arr1.push(item)}
                        // onClick={(e) => console.log(e.target.title)}
                        value={item.id}
                      >
                        {item.key}
                        {item.title}
                      </option>
                    ))}{" "}
                </select>
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
              <div className=" flex items-center justify-center ">
                <button // onClick={handleAddItems}
                  onClick={() => setSelectedKeys(arr1)}
                  className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                >
                  Add
                </button>
                <button className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md">
                  REMOVE
                </button>
              </div>
              <div>
                <h1 className="text-sm text-gray-700 my-2">
                  Facility Selected Insurance
                </h1>
                {/* ------ */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {selectedKeys.length > 0 &&
                    selectedKeys.map((item, index) => (
                      <option className="px-2 text-sm">{item.title}</option>
                    ))}
                </select>
                {/* </FormControl> */}
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="my-5">
        {mentalHealth && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border py-3 shadow-md"
          >
            <h1 className="text-lg text-orange-500 ml-2">Mental Health</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
              <div className="ml-2">
                <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

                {/* new code added */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {TransferData.length > 0 &&
                    TransferData.map((item, index) => (
                      <option
                        className="px-2 text-sm"
                        onClick={(e) => arr1.push(item)}
                        // onClick={(e) => console.log(e.target.title)}
                        value={item.id}
                      >
                        {item.key}
                        {item.title}
                      </option>
                    ))}{" "}
                </select>
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
              <div className=" flex items-center justify-center ">
                <button // onClick={handleAddItems}
                  onClick={() => setSelectedKeys(arr1)}
                  className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                >
                  Add
                </button>
                <button className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md">
                  REMOVE
                </button>
              </div>
              <div>
                <h1 className="text-sm text-gray-700 my-2">
                  Facility Selected Insurance
                </h1>
                {/* ------ */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {selectedKeys.length > 0 &&
                    selectedKeys.map((item, index) => (
                      <option className="px-2 text-sm">{item.title}</option>
                    ))}
                </select>
                {/* </FormControl> */}
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="my-5">
        {speechTherapy && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border py-3 shadow-md"
          >
            <h1 className="text-lg text-orange-500 ml-2">Speech Therapy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
              <div className="ml-2">
                <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

                {/* new code added */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {TransferData.length > 0 &&
                    TransferData.map((item, index) => (
                      <option
                        className="px-2 text-sm"
                        onClick={(e) => arr1.push(item)}
                        // onClick={(e) => console.log(e.target.title)}
                        value={item.id}
                      >
                        {item.key}
                        {item.title}
                      </option>
                    ))}{" "}
                </select>
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
              <div className=" flex items-center justify-center ">
                <button // onClick={handleAddItems}
                  onClick={() => setSelectedKeys(arr1)}
                  className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                >
                  Add
                </button>
                <button className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md">
                  REMOVE
                </button>
              </div>
              <div>
                <h1 className="text-sm text-gray-700 my-2">
                  Facility Selected Insurance
                </h1>
                {/* ------ */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {selectedKeys.length > 0 &&
                    selectedKeys.map((item, index) => (
                      <option className="px-2 text-sm">{item.title}</option>
                    ))}
                </select>
                {/* </FormControl> */}
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="my-5">
        {occupationalTherapy && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border py-3 shadow-md"
          >
            <h1 className="text-lg text-orange-500 ml-2">
              Occupational Therapy
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
              <div className="ml-2">
                <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

                {/* new code added */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {TransferData.length > 0 &&
                    TransferData.map((item, index) => (
                      <option
                        className="px-2 text-sm"
                        onClick={(e) => arr1.push(item)}
                        // onClick={(e) => console.log(e.target.title)}
                        value={item.id}
                      >
                        {item.key}
                        {item.title}
                      </option>
                    ))}{" "}
                </select>
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
              <div className=" flex items-center justify-center ">
                <button // onClick={handleAddItems}
                  onClick={() => setSelectedKeys(arr1)}
                  className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                >
                  Add
                </button>
                <button className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md">
                  REMOVE
                </button>
              </div>
              <div>
                <h1 className="text-sm text-gray-700 my-2">
                  Facility Selected Insurance
                </h1>
                {/* ------ */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {selectedKeys.length > 0 &&
                    selectedKeys.map((item, index) => (
                      <option className="px-2 text-sm">{item.title}</option>
                    ))}
                </select>
                {/* </FormControl> */}
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="my-5">
        {physicalTherapy && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border py-3 shadow-md"
          >
            <h1 className="text-lg text-orange-500 ml-2">Physical Therapy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
              <div className="ml-2">
                <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

                {/* new code added */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {TransferData.length > 0 &&
                    TransferData.map((item, index) => (
                      <option
                        className="px-2 text-sm"
                        onClick={(e) => arr1.push(item)}
                        // onClick={(e) => console.log(e.target.title)}
                        value={item.id}
                      >
                        {item.key}
                        {item.title}
                      </option>
                    ))}{" "}
                </select>
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
              <div className=" flex items-center justify-center ">
                <button // onClick={handleAddItems}
                  onClick={() => setSelectedKeys(arr1)}
                  className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                >
                  Add
                </button>
                <button className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md">
                  REMOVE
                </button>
              </div>
              <div>
                <h1 className="text-sm text-gray-700 my-2">
                  Facility Selected Insurance
                </h1>
                {/* ------ */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {selectedKeys.length > 0 &&
                    selectedKeys.map((item, index) => (
                      <option className="px-2 text-sm">{item.title}</option>
                    ))}
                </select>
                {/* </FormControl> */}
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="my-5">
        {musicTherapy && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border py-3 shadow-md"
          >
            <h1 className="text-lg text-orange-500 ml-2">Music Therapy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
              <div className="ml-2">
                <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

                {/* new code added */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {TransferData.length > 0 &&
                    TransferData.map((item, index) => (
                      <option
                        className="px-2 text-sm"
                        onClick={(e) => arr1.push(item)}
                        // onClick={(e) => console.log(e.target.title)}
                        value={item.id}
                      >
                        {item.key}
                        {item.title}
                      </option>
                    ))}{" "}
                </select>
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
              <div className=" flex items-center justify-center ">
                <button // onClick={handleAddItems}
                  onClick={() => setSelectedKeys(arr1)}
                  className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                >
                  Add
                </button>
                <button className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md">
                  REMOVE
                </button>
              </div>
              <div>
                <h1 className="text-sm text-gray-700 my-2">
                  Facility Selected Insurance
                </h1>
                {/* ------ */}
                <select
                  multiple
                  id="countries_multiple"
                  // className="h-40"
                  className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
                >
                  {selectedKeys.length > 0 &&
                    selectedKeys.map((item, index) => (
                      <option className="px-2 text-sm">{item.title}</option>
                    ))}
                </select>
                {/* </FormControl> */}
                <br />
                <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FormAndLibrary;
