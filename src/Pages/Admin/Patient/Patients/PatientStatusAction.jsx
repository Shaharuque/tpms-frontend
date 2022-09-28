import React, { useState } from "react";
import { memo } from "react";
import { Toggle } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";

const PatientStatusAction = ({ status }) => {
  const [value, setValue] = useState(status);
  console.log(status);

  return (
    <div className="flex justify-center">
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
