//FetchApi.js

import axios from "axios";
import { headers } from "./BaseClient";

const fetchData = async (api) => {
  console.log(`https://app.therapypms.com/api/v1/${api}`);
  const response = await axios.get(`https://app.therapypms.com/api/v1/${api}`, {
    headers: headers,
  });
  return response;
};

export default fetchData;
