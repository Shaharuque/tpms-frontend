import React from "react";
import AuthorizationAntdTable from "./AuthorizationAntdTable/AuthorizationAntdTable";

const Authorization = () => {
  return (
    <div className="h-[100vh]">
      {/* <div>
        <UseTable
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></UseTable>
      </div> */}

      <div>
        <AuthorizationAntdTable></AuthorizationAntdTable>
      </div>
    </div>
  );
};

export default Authorization;
