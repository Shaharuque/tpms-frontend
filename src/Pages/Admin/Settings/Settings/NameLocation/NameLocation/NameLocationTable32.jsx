import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Form from "./Form";

const NameLocationTable32 = ({ primaryData, data, table32Open, handleTableOpen32, loading }) => {
  console.log("form data", primaryData);
  return (
    <div>
      {/* Child 32  */}
      <h2 onClick={handleTableOpen32} className=" mt-4 text-xs p-2 text-white bg-secondary">
        Box No 32
      </h2>
      {table32Open && (
        <div className="border">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
            <Form item={data} primarydata={primaryData}></Form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NameLocationTable32;

// import React from "react";
// import Form from "./Form";

// const NameLocationTable32 = ({ data }) => {
//   return (
//     <div>
//       <Form item={data}></Form>
//     </div>
//   );
// };

// export default NameLocationTable32;
