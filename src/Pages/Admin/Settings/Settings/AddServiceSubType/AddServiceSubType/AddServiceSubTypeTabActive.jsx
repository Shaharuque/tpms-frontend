import React, { useState } from "react";
import { Switch } from "antd";
import BoolConverter from "../../../../../Shared/BoolConverter/BoolConverter";
import axios from "axios";
import { baseIp } from "../../../../../../Misc/BaseClient";
import useToken from "../../../../../../CustomHooks/useToken";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchServiceSubType } from "../../../../../../features/Settings_redux/selectedServiceSubTypesApi";

const AddServiceSubTypeTabActive = ({
  status,
  id,
  type,
  serviceId,
  txType,
}) => {
  const [value, setValue] = useState(BoolConverter(status));
  const { token } = useToken();
  const dispatch = useDispatch();

  const handleStatusChange = async (id) => {
    setValue(!value);

    const payload = {
      id,
      status: !value ? 1 : 2,
    };
    console.log("payload", payload);
    if (payload) {
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/subactivity/status/change`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token,
          },
          data: payload,
        });
        if (res?.data?.status === "success") {
          toast.success("successfully active status changed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
            style: { fontSize: "12px" },
          });
          dispatch(
            fetchServiceSubType({
              token,
              payload: {
                treatment_id: txType,
                bill_type: type,
                ser_id: serviceId,
              },
            })
          );
        }
        //else res?.data?.status === "error" holey
        else {
          toast.error(res?.data?.message, {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            theme: "dark",
            style: { fontSize: "12px" },
          });
        }
      } catch (error) {
        toast.warning(error?.message, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          style: { fontSize: "12px" },
        });
      }
    }
  };
  console.log("status", value, id);
  return (
    <div className="flex items-center justify-center">
      <Switch
        size="small"
        defaultChecked={value}
        onClick={() => handleStatusChange(id)}
      />
      {value === true ? (
        <h1 className="ml-1">Active</h1>
      ) : (
        <h1 className="ml-1">In-Active</h1>
      )}
    </div>
  );
};

export default AddServiceSubTypeTabActive;
