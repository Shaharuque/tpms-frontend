import React, {useState } from "react";
import { MdImportantDevices } from "react-icons/md";
import { MultiSelect } from "react-multi-select-component";
import './ListviewMultiselect.css'

const CustomMultiSelection = (props) => {
  console.log('props dtaa receve', props.options)

  const dataoptions = [
    { label: "Grapes ", value: "grapes", id: 2  },
    { label: "Masfgngo ", value: "mafgngo", id: 6},
    { label: "Gradfgpdes ", value: "grfgapes", id: 7  },
    { label: "Mango ", value: "mango", id: 9},
    { label: "Strawberry ", value: "strawberry", id: 12},
  ];

  const [selected, setSelected] = useState([]);

  const customValueRenderer = (selected, _options) => {
      if(selected.length){
        if(selected.length > 3) return `All Selected ${selected.length}`
        return selected.map(({ label }) => label)
      }
      return  "None selected";
    };

    const getId = selected.map((item, index)=>(item.id))
    console.log("Multi Select data",getId)
  return (

<MultiSelect
      className="listview"
      options={props.options || dataoptions}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      valueRenderer={customValueRenderer}
    />

  );
};

export default CustomMultiSelection;

// import React from "react";
// import { CheckPicker, Checkbox, Button } from "rsuite";

// const CustomMultiSelection = ({ data, setValue, value }) => {
//   const footerStyles = {
//     // padding: "10px 2px",
//     borderTop: "1px solid rgb(229, 229, 229)",
//   };

//   const footerButtonStyle = {
//     float: "right",
//     marginRight: 10,
//     marginTop: 2,
//   };

//   const allValue = data.map((item) => item.value);
//   const picker = React.useRef();
//   const handleChange = (value) => {
//     setValue(value);
//   };
//   const handleCheckAll = (value, checked) => {
//     setValue(checked ? allValue : []);
//   };
//   return (
//     <div>
//       <CheckPicker
//         data={data}
//         placeholder="Select"
//         ref={picker}
//         // style={{ width: 224 }}
//         style={{ width: 150 }}
//         value={value}
//         onChange={handleChange}
//         renderExtraFooter={() => (
//           <div style={footerStyles}>
//             <Checkbox
//               inline
//               indeterminate={value.length > 0 && value.length < allValue.length}
//               checked={value.length === allValue.length}
//               onChange={handleCheckAll}
//             >
//               Select All
//             </Checkbox>

//             {/* <Button
//               style={footerButtonStyle}
//               appearance="primary"
//               size="sm"
//               onClick={() => {
//                 picker.current.close();
//               }}
//             >
//               Ok
//             </Button> */}
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default CustomMultiSelection;
