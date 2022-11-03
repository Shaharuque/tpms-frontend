//FetchendPoit.js

import axios from "axios";
import { baseIp, headers } from "./BaseClient";

const fetchData = async (endPoint) => {
  console.log(`helper function call ${baseIp}${endPoint}`);
  const response = await axios.get(`${baseIp}/${endPoint}`, {
    headers: headers,
  });
  return response;
};




export const PostfetchData =(endPoint , x ) => {
  
 const options = {
  url: `${baseIp}${endPoint}`,
  method: "POST",
  headers: headers,
  data: x,
}; 

return options;
};


export default fetchData;
