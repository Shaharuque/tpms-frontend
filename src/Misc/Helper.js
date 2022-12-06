//FetchendPoit.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseIp, headers } from "./BaseClient";

export const fetchData = async (endPoint, token) => {
  console.log(`helper function call ${baseIp}/${endPoint}`);
  const response = await axios.get(`${baseIp}/${endPoint}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token || null,
    },
  });
  return response;
};

export const PostfetchData = async ({ endPoint, payload, token }) => {
  console.log(endPoint, payload, token);
  const response = await axios.post(`${baseIp}/${endPoint}`, payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token || null,
    },
  });
  return response.data;
};

// react query  implementatio

// const Success = (data) => {
//   console.log("perform data fetching ", data)
// }

// const Error = (error) => {
//   console.log("perform side effect after ecountering error ", error)
// }

// export const QueryPost = (url, payload) => {
//   return axios.post('https://test-prod.therapypms.com/api/v1/admin/ac/setting/cpt/code/exclusion/get', payload, {
//     headers: headers,
//   })

//   }

//   export const useAddSuperHeroData = (url,payload) => {
//     const queryClient = useQueryClient()
//     return useMutation(QueryPost,{
//         onSuccess : () =>{
//             // data post hwoar sate sate auto update howar jonno use kora hoice
//             queryClient.invalidateQueries('super-heroes')
//         },

//         onSuccess : Success,
//         onError : Error
//     })
// }

// export default fetchData;
