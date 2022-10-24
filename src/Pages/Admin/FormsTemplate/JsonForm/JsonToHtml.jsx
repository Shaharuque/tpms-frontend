import React, { Fragment, useState } from "react";
import parse from "html-react-parser";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const JsonToHtml = () => {
  const [caregiverSignature, setCaregiverSignature] = useState(false);
  const [providerSignature, setProviderSignature] = useState(false);
  const [ProviderImageURL, setProviderImageURL] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  console.log("ProviderImageURL", ProviderImageURL);
  console.log("imageURL", imageURL);
  const [file, setFile] = useState();

  console.log("file", file);

  const handleSignatureProvider = () => {
    setProviderSignature(true);
  };
  const handleSignatureCaregiver = () => {
    setCaregiverSignature(true);
  };
  const handleSignatureClose = () => {
    setCaregiverSignature(false);
    setProviderSignature(false);
  };

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    console.log(notes);
  };
  const data = [
    {
      type: "button",
      label: "Button",
      subtype: "button",
      className: "btn-default btn",
      name: "button-1666428128637-0",
      access: false,
      style: "default",
    },
    {
      type: "checkbox-group",
      required: false,
      label: "Checkbox Group",
      toggle: false,
      inline: false,
      name: "checkbox-group-1666428130834-0",
      access: false,
      other: false,
      values: [
        {
          label: "Option 1",
          value: "option-1",
          selected: true,
        },
        {
          label: "Option 2",
          value: "option-2",
          selected: true,
        },
      ],
    },
    {
      type: "date",
      required: false,
      label: "Date Field",
      className: "form-control",
      name: "date-1666428132618-0",
      access: false,
    },
    {
      type: "file",
      required: false,
      label: "File Upload",
      className: "form-control",
      name: "file-1666428134020-0",
      access: false,
      subtype: "file",
      multiple: false,
    },
    {
      type: "header",
      subtype: "h1",
      label: "Header",
      access: false,
    },
    {
      type: "number",
      required: false,
      label: "Number",
      className: "form-control",
      name: "number-1666428137024-0",
      access: false,
    },
    {
      type: "paragraph",
      subtype: "p",
      label: "Paragraph",
      access: false,
    },
    {
      type: "radio-group",
      required: false,
      label: "Radio Group",
      inline: false,
      name: "radio-group-1666428140110-0",
      access: false,
      other: false,
      values: [
        {
          label: "Option 1",
          value: "option-1",
          selected: false,
        },
        {
          label: "Option 2",
          value: "option-2",
          selected: false,
        },
        {
          label: "Option 3",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "select",
      required: false,
      label: "Select",
      className: "form-control",
      name: "select-1666428141692-0",
      access: false,
      multiple: false,
      values: [
        {
          label: "Option 1",
          value: "option-1",
          selected: true,
        },
        {
          label: "Option 2",
          value: "option-2",
          selected: false,
        },
        {
          label: "Option 3",
          value: "option-3",
          selected: false,
        },
      ],
    },
    {
      type: "text",
      required: false,
      label: "Text Field",
      className: "form-control",
      name: "text-1666428143220-0",
      access: false,
      subtype: "text",
      value: "dfhudgf",
    },
    {
      type: "textarea",
      required: false,
      label: "Text Area",
      className: "form-control",
      name: "textarea-1666428144792-0",
      access: false,
      subtype: "textarea",
    },
  ];

  const convertToHtml = (jData) => {
    // console.log(jData);
    var convertedHtml = "";
    jData.map((block) => {
      // console.log(block);

      switch (block.type) {
        case "header":
          convertedHtml += `<h1 className="form-inner-head">${block.label}</h1>`;
          break;

        case "button":
          convertedHtml += `<button>       
       ${block.name}
        </button>`;
          break;

        case "file":
          convertedHtml += `<input type="file" id="myfile" name=${block.label}>`;
          break;

        case "date":
          convertedHtml += `<div>
        <label for="start">${block.label}</label>
        <input type="date" id="start" name=${block.name}>
        </div>`;
          break;

        case "number":
          convertedHtml += `<input type=number name=${block.name} >`;
          break;
        case "textarea":
          convertedHtml += `<div className="mt-3">
       <label for="w3review">Review of W3Schools:</label>

<textarea id="w3review" name="w3review" rows="4" className="border" cols="50">
</textarea>
              </div>`;
          break;

        case "checkbox-group":
          convertedHtml += `
   
        ${block.values.map(
          (
            a,
            i
          ) => `<input type="checkbox" name=${a.label}><label for="vehicle1">${a.label} </label><br>
          `
        )}`;
          break;

        case "paragraph":
          convertedHtml += `<${block.subtype}>${block.label}</${block.subtype}>`;
          break;

        case "hidden":
          convertedHtml += `<input type=hidden name=${block.name} value=bar>`;
          break;

        default:
          console.log("Unknown block type", block.type);
          break;
      }
    });
    return <Fragment>{parse(convertedHtml)}</Fragment>;
  };
  return (
    <div className="form-border 2xl:w-[70%] w-full mx-auto p-5">
      <div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <img src={logo} alt="" />
          <div className="text-[16px] sm:mr-10 mr-0 ml-10 sm:ml-0">
            <p className="my-1">
              <span className="form-head">Mail: </span>demo@example.com
            </p>
            <p className="my-1">
              <Link to={"#"}>
                <span className="form-head">Email: </span>demo@example.com
              </Link>
            </p>
            <p className="my-1">
              <span className="form-head">Phone: </span> 000-000-0000
            </p>
            <p className="my-1">
              <Link to={"#"}>
                <span className="form-head">Fax: </span>000.000.0000
              </Link>
            </p>
          </div>
        </div>
        <div className="form-title mb-5">
          <h2>PRIVATE CLIENT INTAKE FORM</h2>
        </div>
      </div>
      {convertToHtml(data)}

      <div>
        <div className="flex flex-wrap gap-2 items-center justify-between my-5">
          <button
            className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
            onClick={handleSignatureProvider}
          >
            Provider Signature
            <FaSignature className="text-lg" />
          </button>
          <button
            className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
            onClick={handleSignatureCaregiver}
          >
            Caregiver Signature
            <FaSignature className="text-lg" />
          </button>
        </div>
        {caregiverSignature && (
          <SignatureModal
            handleSignatureClose={handleSignatureClose}
            open={caregiverSignature}
            setImageURL={setImageURL}
            setFile={setFile}
          ></SignatureModal>
        )}

        {providerSignature && (
          <SignatureModal
            handleSignatureClose={handleSignatureClose}
            open={providerSignature}
            setImageURL={setProviderImageURL}
            setFile={setFile}
          ></SignatureModal>
        )}
        <div className="flex items-center justify-between my-12">
          <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
            <AiFillCloud /> Save
          </button>
          <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
            <AiOutlinePrinter /> Print
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
        <div className="text-black">
          Demo Institution
          <span className=" font-normal">somewhere in america</span>
        </div>
        <div>
          Phone: 000-000-0000, Email: demo@example.com, Fax: 000.000.0000,
          example.com
        </div>
      </div>
    </div>
  );
};

export default JsonToHtml;
