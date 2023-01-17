import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useUpdateStatusMutation } from "../../../../../features/Stuff_redux/staff/staffDataTableAPi";
import useToken from "../../../../../CustomHooks/useToken";
import { toast } from "react-toastify";

const StuffStatusAction = ({ status, id }) => {
  const { token } = useToken();
  // console.log("status", status);
  let convertedStatus = status ? 1 : 0;
  const [value, setValue] = useState(convertedStatus);
  let BoleanToNumber = value ? 1 : 0;

  // update status api call
  const [
    updateStatus,
    { data, isError: statusError, isSuccess: statusSucces },
  ] = useUpdateStatusMutation();

  const handleStatusChange = () => {
    setValue(!value);
    let payload = {
      employee_id: id,
      is_active: !BoleanToNumber,
    };
    if (payload) {
      updateStatus({
        token,
        payload,
      });
    }
  };
  useEffect(() => {
    if (statusSucces) {
      toast.success("Successfully updated", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    } else if (statusError) {
      toast.error("Cann't be Updated", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
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
