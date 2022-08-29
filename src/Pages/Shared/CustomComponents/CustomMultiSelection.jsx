import React from "react";
import { CheckPicker, Checkbox, Button } from "rsuite";

const CustomMultiSelection = ({ data, setValue, value }) => {
  const footerStyles = {
    padding: "10px 2px",
    borderTop: "1px solid #e5e5e5",
  };

  const footerButtonStyle = {
    float: "right",
    marginRight: 10,
    marginTop: 2,
  };

  const allValue = data.map((item) => item.value);
  const picker = React.useRef();
  //   const [value, setValue] = React.useState([]);
  const handleChange = (value) => {
    setValue(value);
  };
  const handleCheckAll = (value, checked) => {
    setValue(checked ? allValue : []);
  };
  return (
    <div>
      <CheckPicker
        data={data}
        placeholder="Select"
        ref={picker}
        // style={{ width: 224 }}
        style={{ width: 150 }}
        value={value}
        onChange={handleChange}
        renderExtraFooter={() => (
          <div style={footerStyles}>
            <Checkbox
              inline
              indeterminate={value.length > 0 && value.length < allValue.length}
              checked={value.length === allValue.length}
              onChange={handleCheckAll}
            >
              Select All
            </Checkbox>

            <Button
              style={footerButtonStyle}
              appearance="primary"
              size="sm"
              onClick={() => {
                picker.current.close();
              }}
            >
              Ok
            </Button>
          </div>
        )}
      />
    </div>
  );
};

export default CustomMultiSelection;
