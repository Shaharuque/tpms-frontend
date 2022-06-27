import React from "react";
import { Link } from "react-router-dom";

const DataImportComponent = ({ row }) => {
  console.log(row);
  return (
    <div>
      <Link className="text-secondary" to={"#"}>
        Ready for download
      </Link>
    </div>
  );
};

export default DataImportComponent;
