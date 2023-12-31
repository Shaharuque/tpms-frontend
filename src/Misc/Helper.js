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
      "x-auth-token": token || null,
    },
  });
  return response;
};

// export const PostfetchData = async ({ endPoint, payload = null, token }) => {
//   console.log(endPoint, payload);
//   const response = await axios.post(`${baseIp}/${endPoint}`, payload, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       "x-auth-token": token || null,
//     },
//   });
//   return response.data;
// };

export const PostfetchData = async ({ endPoint, payload = null, token }) => {
  try {
    console.log(endPoint, payload);
    const response = await axios.post(`${baseIp}/${endPoint}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token || null,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error; // Re-throw the error to be caught and handled by the caller
  }
};


// react query  implementatio

// const Success = (data) => {
//   console.log("perform data fetching ", data)
// }

// const Error = (error) => {
//   console.log("perform side effect after ecountering error ", error)
// }

// export const QueryPost = (url, payload) => {
//   return axios.post('https://test-prod.therapypms.com/api/v1/internal/admin/ac/setting/cpt/code/exclusion/get', payload, {
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
