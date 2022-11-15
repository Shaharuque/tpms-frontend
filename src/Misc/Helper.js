//FetchendPoit.js

import axios from "axios";
import { baseIp, headers } from "./BaseClient";

export const fetchData = async (endPoint) => {
  console.log(`helper function call ${baseIp}/${endPoint}`);
  const response = await axios.get(`${baseIp}/${endPoint}`, {
    headers: headers,
  });
  return response;
};

export const PostfetchData = async (endPoint, payload) => {
  const response = await axios.post(`${baseIp}/${endPoint}`, payload, {
    headers: headers,
  });
  return response.data;
};

// export default fetchData;
