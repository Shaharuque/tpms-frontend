// import React, {useState } from "react";
// import { MdImportantDevices } from "react-icons/md";
// import { MultiSelect } from "react-multi-select-component";
// import  "./CustomMultiSelect.css"

// const CustomMultiSelection = () => {
//   const options = [
//     { label: "Grapes ", value: "grapes" },
//     { label: "Masfgngo ", value: "mafgngo" },
//     { label: "Gradfgpdes ", value: "grfgapes" },
//     { label: "Mango ", value: "mango" },
//     { label: "Strawberry ", value: "strawberry" },
//   ];
//   const [selected, setSelected] = useState([]);

//   const customValueRenderer = (selected, _options) => {
//       if(selected.length){
//         if(selected.length > 3) return `All Selected ${selected.length}`
//         return selected.map(({ label }) => label)
//       }
//       return  "None selected";
//     };

//     console.log("Multi Select data",selected)
//   return (

// <MultiSelect
//     // styles={{
//     //   // Fixes the overlapping problem of the component
//     //   menu: provided => ({ ...provided, zIndex: 99999999 })
//     // }}
//     // style={{
//     //   zIndex:99999
//     //   }}
//       className="Global"
//       options={options}
//       value={selected}
//       onChange={setSelected}
//       labelledBy="Select"
//       valueRenderer={customValueRenderer}
//     />

//   );
// };

// export default CustomMultiSelection;

import React from "react";
import { CheckPicker, Checkbox, Button } from "rsuite";

const CustomMultiSelection = ({ data, setValue, value }) => {
  const footerStyles = {
    // padding: "10px 2px",
    borderTop: "1px solid rgb(229, 229, 229)",
  };

  const footerButtonStyle = {
    float: "right",
    marginRight: 10,
    marginTop: 2,
  };

  const allValue = data.map((item) => item.value);
  const picker = React.useRef();
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

            {/* <Button
              style={footerButtonStyle}
              appearance="primary"
              size="sm"
              onClick={() => {
                picker.current.close();
              }}
            >
              Ok
            </Button> */}
          </div>
        )}
      />
    </div>
  );
};

export default CustomMultiSelection;
