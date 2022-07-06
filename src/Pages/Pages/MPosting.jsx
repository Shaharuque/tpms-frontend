import React from "react";
import { Link } from "react-router-dom";

const MPosting = () => {
  return (
    <div>
      <div className="md:flex mb-2 flex-wrap  items-center justify-between">
        <h1 className="text-sm text-orange-400">Meet Lists</h1>
        <Link to={"/billing/deposit-add"}>
          <button className="px-10 py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            Add New Data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MPosting;
