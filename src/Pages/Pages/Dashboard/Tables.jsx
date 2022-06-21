import React, { useEffect } from "react";
import Table from "./Table";
import { task } from "../Data/Data";

const Tables = ({ tableType, tableName }) => {
  console.log(tableType);
  return (
    <div>
      <table className="shadow-lg w-full bg-white">
        <h1 className="thead py-1  bg-secondary text-white">{tableName}</h1>
        <div className="td">
          {" "}
          <tr>
            <th className="bg-gray-200 border thd text-xs py-1 px-2 text-center w-96 ">
              Report
            </th>
            <th className="bg-gray-200 border  text-xs py-1 px-2 text-center w-44">
              Count
            </th>
          </tr>
          {tableType.map((tasks, i) => (
            <Table key={i} tasks={tasks}></Table>
          ))}
        </div>
      </table>
    </div>
  );
};

export default Tables;
