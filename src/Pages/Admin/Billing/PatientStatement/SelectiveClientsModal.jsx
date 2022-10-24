import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectiveClientsModal = () => {
  //const [data, setData] = useState();
  const getFacts = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
    return res;
  };

  // Using the hook
  const { data, error, isLoading } = useQuery(["randomFacts"], getFacts);
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  //   useEffect(() => {
  //     axios("../../../All_Fake_Api/PatientStatement.json").then((response) => {
  //       setData(response?.data);
  //     });
  //   }, []);
  //   console.log(data);
  return <div></div>;
};

export default SelectiveClientsModal;
