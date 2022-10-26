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

const FormsBuilder = () => {
  const [data, setdata] = useState(null);

  const fb = useRef();
  const formData = [
    {
      type: "header",
      subtype: "h1",
      label: "formBuilder in React",
    },
    {
      type: "paragraph",
      label:
        "This is a demonstration of formBuilder running in a React project.",
    },
  ];

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
    <div>
      <Link to={"/forms"}>
        <button className="pms-button mb-2">Forms</button>
      </Link>
      <div id="fb-editor" ref={fb} />{" "}
      {/* <div className='flex'>
      <div className='flex-none w-14 h-14'>  <button onClick={cleardata}>click me</button></div>
      <div className='flex-none w-16 h-14'> <button onClick={showdata}>Show data</button></div>
    </div> */}
      <div className="inline-flex float-right mt-4 mx-5">
        <button
          className="btn  mx-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg btnstyle"
          onClick={cleardata}
        >
          Clear
        </button>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btnstyle"
          onClick={showdata}
        >
          Show data
        </button>
      </div>
    </div>
  );
};

export default FormsBuilder;
//
