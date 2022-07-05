import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
// import DataImportFileAction from "./DataImportFileAction";

const DataImportComponent = ({ row }) => {
  const [action, setAction] = useState(false);
  console.log(row);
  return (
    <div>
      <Link
        className="text-secondary"
        onClick={() => setAction(!action)}
        to={"#"}
      >
        Ready for download
      </Link>
      {/* {action && <DataImportFileAction row={row}></DataImportFileAction>} */}
    </div>
  );
};

export default memo(DataImportComponent);
