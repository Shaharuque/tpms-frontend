import React, { useMemo } from "react";

const ExclusionTable = ({ newAdded }) => {
  const data = newAdded;
  console.log(newAdded);

  const columns = useMemo(
    () => [
      {
        Header: "Patients",
        accessor: "patients", // accessor is the "key" in the data
      },
      {
        Header: "DOS",
        accessor: "dos",
      },
    ],
    []
  );
  //   const columns = useMemo(() => [...LeaveTrackingTableDataColumn], []);
  return <div>{data}</div>;
};

export default ExclusionTable;
