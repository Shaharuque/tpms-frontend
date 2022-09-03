import React, { useState } from "react";
import { memo } from "react";
import { Toggle } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";

const PatientStatusAction = ({ row }) => {
  const status = row?.original?.is_active_client;
  const [value, setValue] = useState(status);

  return (
    <div>
      <Toggle
        checkedChildren={<CheckIcon />}
        unCheckedChildren={<CloseIcon />}
        checked={value ? true : false}
        size="sm"
        onClick={() => {
          setValue(!value);
        }}
      />
    </div>
  );
};

export default memo(PatientStatusAction);
