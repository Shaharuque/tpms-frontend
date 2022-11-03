//FetchendPoit.js

import axios from "axios";
import { baseIp, headers } from "./BaseClient";

export const fetchData = async (endPoint) => {
  console.log(`${baseIp}${endPoint}`);
  const response = await axios.get(`${baseIp}/${endPoint}`, {
    headers: headers,
  });
  return response;
};
