import React from "react";
import { Link } from "react-router-dom";

const Table = ({ tasks }) => {
  const { count, report, link } = tasks;

  return (
    <tr>
      <td className="border text-xs font-normal text-secondary py-1 px-2">
        <Link to={link}>{report}</Link>
      </td>
      <td className="border text-xs py-1 px-2 text-center">{count}</td>
    </tr>
  );
};

export default Table;
