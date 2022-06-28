import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import MultiSelectionDiv from "./SettingComponents/MultiSelectionDiv";
import { motion } from "framer-motion";

const FormAndLibrary = () => {
  const [behaviorTherapy, setBehaviorTherapy] = useState(false);
  const [mentalHealth, setMentalHealth] = useState(false);
  const [speechTherapy, setSpeechTherapy] = useState(false);
  const [occupationalTherapy, setOccupationalTherapy] = useState(false);
  const [physicalTherapy, setPhysicalTherapy] = useState(false);
  const [musicTherapy, setMusicTherapy] = useState(false);
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
            <MultiSelectionDiv
              selectBox={"Unassigned"}
              addBox={"Assigned"}
            ></MultiSelectionDiv>
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
            <MultiSelectionDiv
              selectBox={"Unassigned"}
              addBox={"Assigned"}
            ></MultiSelectionDiv>
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
            <MultiSelectionDiv
              selectBox={"Unassigned"}
              addBox={"Assigned"}
            ></MultiSelectionDiv>
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
            <MultiSelectionDiv
              selectBox={"Unassigned"}
              addBox={"Assigned"}
            ></MultiSelectionDiv>
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
            <MultiSelectionDiv
              selectBox={"Unassigned"}
              addBox={"Assigned"}
            ></MultiSelectionDiv>
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
            <MultiSelectionDiv
              selectBox={"Unassigned"}
              addBox={"Assigned"}
            ></MultiSelectionDiv>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FormAndLibrary;
