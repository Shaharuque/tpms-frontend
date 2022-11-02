// import React from "react";
// import { Link } from "react-router-dom";

// const FormsBuilder = () => {
// return (
//     <div>
//       <Link to={"/forms"}>
//         <button className="pms-button">Forms</button>
//       </Link>

//     </div>
// );
// };

// export default FormsBuilder;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import "formBuilder/dist/form-render.min.js"
import "./formbuilder.css";
import $ from "jquery";
import { FiDownload } from "react-icons/fi";
import { IoCaretBackCircleOutline } from "react-icons/io5";

// I have used it in react by adding this:
// require('formBuilder/dist/form-render.min.js');
// here's a sample way of calling it
// $(fb.current).toggle();
// $(fbRender.current).toggle();
// $(userForm.current).formRender({
// dataType: 'json',
// formData: $(fb.current).formBuilder('getData', 'json')
// });
// kgjh
// fb = Form Builder
// fbRender = Form Render
// useForm = Form element inside my Form Render

window.jQuery = $; // JQuery alias
window.$ = $; // JQuery alias

require("jquery-ui-sortable"); // For FormBuilder Element Drag and Drop
require("formBuilder"); // For FormBuilder

const FormBuilderCreate = () => {
  const [data, setdata] = useState(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const fb = useRef();
  const formData = [];

  console.log(title);

  // document.body.style.margin = "30px";

  useEffect(() => {
    // $(fb.current).formBuilder({ formData });
    const chk = $(fb.current).formBuilder({ formData });
    setdata(chk);
  }, []);

  // var fbEditor = document.getElementById('build-wrap');
  // var formBuilder = $(fbEditor).formBuilder().data('formBuilder');
  // document.getElementById('clear-all-fields').onclick = function() {
  // data.actions.clearFields();
  // };
  // document.getElementById('clear-all-fields').addEventListener
  console.log("check data", data);
  const cleardata = () => {
    data.actions.clearFields();
  };
  const showdata = () => {
    data.actions.showData();
    console.log(data.actions.getData());
  };
  const render = () => {};

  return (
    <div className="">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Create New Form</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin/settings/froms-builder"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-7 my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-base text-gray-500 text-left">
                Enter form title:
              </span>
            </label>
            <input
              type="text"
              name="Address"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-base text-gray-500 text-left">
                Select form type:
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              onChange={(e) => setType(e.target.value)}
            >
              <option value=""> </option>
              <option value="fghfhgfjgh"> 30 Days </option>
              <option value="name"> 60 Days </option>
              <option value="namggggggge"> 90 Days </option>
            </select>
          </div>
        </div>
      </form>
      <div className="my-3">
        <div id="fb-editor" ref={fb} />
      </div>

      {/* <div className='flex'>
      <div className='flex-none w-14 h-14'>  <button onClick={cleardata}>click me</button></div>
      <div className='flex-none w-16 h-14'> <button onClick={showdata}>Show data</button></div>
    </div> */}
      <div className="flex items-center justify-end">
        <div className=" mt-4 ">
          <button className="pms-button mr-3" onClick={cleardata}>
            Clear
          </button>
          <button className="pms-button" onClick={showdata}> 
            Show data
          </button>
        </div>
      </div>
    </div>
  );
};

//

export default FormBuilderCreate;
