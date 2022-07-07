import React from "react";
import { FaUpload } from "react-icons/fa";

const ERemittance = () => {
  return (
    <div>
      <div className="upload">
        <button>
          <FaUpload />
          <input type="file" />
        </button>
      </div>
    </div>
  );
};

export default ERemittance;
