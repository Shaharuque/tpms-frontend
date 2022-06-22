import React, { useState } from "react";
import { motion } from "framer-motion";

const ListView = () => {
  const [move, setMove] = useState(false);
  const hm = () => {
    setMove(!move);
  };
  console.log(move);
  return (
    <div>
      <motion.div
        className="bg-red-400 p-2 w-10"
        animate={{
          x: move ? -10 : 500,
        }}
        onClick={hm}
      ></motion.div>
    </div>
  );
};

export default ListView;
