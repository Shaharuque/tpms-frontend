import React, { useEffect } from "react";
import Table from "./Table";
import { task } from "../Data/Data";

const Tables = ({ tableType, tableName }) => {
  console.log(tableType);
  useEffect(() => {}, [tableType]);
  return (
    <div>
      <tbody className="shadow-lg w-full bg-white">
        <h2 className="thead text-base py-1 bg-secondary px-2 text-white">
          {tableName}
        </h2>
        <div className="td">
          {" "}
          <tr>
            <th className="bg-gray-200 border thd text-xs py-2 px-2 text-center w-96 ">
              Company
            </th>
            <th className="bg-gray-200 border  text-xs py-2 px-2 text-center w-44">
              Contact
            </th>
          </tr>
          {task.map((tasks, i) => (
            <Table key={i} tasks={tasks}></Table>
          ))}
        </div>
      </tbody>
    </div>
  );
};

export default Tables;
