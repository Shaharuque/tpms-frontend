import React from "react";

const DataImportFileAction = ({ row }) => {
  console.log("data", row.original.col1);
  return (
    <div>
      <button className="text-secondary" to={"#"}>
        {row.original.col1}
      </button>
    </div>
  );
};

export default DataImportFileAction;
