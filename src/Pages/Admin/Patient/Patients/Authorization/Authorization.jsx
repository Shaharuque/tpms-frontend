import React from "react";
import { useParams } from "react-router-dom";
import AuthorizationAntdTable from "./AuthorizationAntdTable/AuthorizationAntdTable";

const Authorization = () => {
  const { id } = useParams();

  return (
    // className="h-[100vh]"
    <div className="h-[100vh]">
      <AuthorizationAntdTable></AuthorizationAntdTable>
    </div>
  );
};

export default Authorization;
