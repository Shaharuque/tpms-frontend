import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="shadow-md ml-[98px] mr-[22px] text-center mb-3 mt-7 py-4  bg-white rounded-3xl  "
    >
      <h4 className=" text-xs font-normal p-2 lg:p-0">
        Copyright 2022 © <span className=" text-secondary">TherapyPMS</span>.
        All rights reserved.
      </h4>
    </motion.div>
  );
};

export default Footer;
