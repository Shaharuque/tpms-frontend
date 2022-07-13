import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="shadow-md resp ml-[5.2rem] md:ml-[5rem] lg:ml-[5.2rem] text-center mb-3 mt-7 py-4  bg-white rounded-3xl  "
    >
      <h4 className=" text-xs font-normal">
        Copyright 2022 © <span className=" text-secondary">TherapyPMS</span>.
        All rights reserved.
      </h4>
    </motion.div>
  );
};

export default Footer;
