import axios from "axios";
import React, { useEffect, useState } from "react";
import { memo } from "react";
import { baseIp } from "../../../../Misc/BaseClient";
import useToken from "../../../../CustomHooks/useToken";
import { toast } from "react-toastify";

const PatientStatusAction = ({ id, is_active_client }) => {
  const [status, setStatus] = useState(is_active_client);
  const { token } = useToken();

  const handleStatus = (e) => {
    setStatus(e.target.value);
    // console.log("status", status);
    const payload = {
      patient_id: id,
      is_active: parseInt(e.target.value),
    };
    console.log("payload", payload);
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token,
      },
    };
    if (payload) {
      axios
        .post(`${baseIp}/patient/active/status/change`, payload, options)
        .then((response) => {
          console.log(response.data);
          if (response.data?.status === "success") {
            toast.success("successfully updated the status", {
              position: "top-center",
              autoClose: 5000,
              theme: "dark",
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  console.log("id and status", id, status);

  return (
    <div className="">
      <select value={status} onChange={(e) => handleStatus(e)} className="border w-full rounded-md lg:px-5 py-[4px]">
        <option value="0">In-Active</option>
        <option value="1">Active</option>
        <option value="2">Wait-List</option>
      </select>
    </div>
  );
};

export default memo(PatientStatusAction);
