import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useUpdateStatusMutation } from "../../../../../features/Stuff_redux/staff/staffDataTableAPi";
import useToken from "../../../../../CustomHooks/useToken";
import { toast } from "react-toastify";
import BoolConverter from "../../../../Shared/BoolConverter/BoolConverter";
import axios from "axios";
import { baseIp } from "../../../../../Misc/BaseClient";

const StuffStatusAction = ({ status, id, setStaffData }) => {
  const { token } = useToken();
  console.log("status", id, status);
  let convertedStatus = status ? 1 : 0;
  const [value, setValue] = useState(BoolConverter(status));
  let BoleanToNumber = value ? 1 : 2;

  // update status api call
  const [
    updateStatus,
    { data, isError: statusError, isSuccess: statusSucces },
  ] = useUpdateStatusMutation();

  const handleStatusChange = () => {
    setValue(!value);
    let payload = {
      employee_id: id,
      is_active: BoolConverter(!value),
    };
    if (payload) {
      updateStatus({
        token,
        payload,
      });
      console.log("payload", payload);
    }
  };
  useEffect(() => {
    if (statusSucces) {
      toast.success("successfully updated the staff status", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        style: {
          fontSize: "12px",
        },
      });
      axios({
        method: "post",
        url: `${baseIp}/provider/list`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token,
        },
        data: {
          page: 1,
        },
      })
        .then((res) => {
          console.log("res", res);
          setStaffData(res?.data?.providerData?.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else if (statusError) {
      toast.error("Cann't be Updated", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        style: {
          fontSize: "12px",
        },
      });
    }
  }, [statusSucces, statusError]);

  return (
    <div className="flex items-center justify-center">
      <Switch
        size="small"
        defaultChecked={value}
        onClick={() => handleStatusChange()}
      />

      {!value ? (
        <h1 className="ml-1">In-Active</h1>
      ) : (
        <h1 className="ml-1">Active</h1>
      )}
    </div>
  );
};

export default StuffStatusAction;
