import React, { useState } from "react";

const PatientPortal = () => {
  const [secure, setSecure] = useState(false);
  const [billing, setBilling] = useState(false);
  const [pay, setPay] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <div className="h-[100vh]">
      <div className="ml-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
        <div>
          <h1 className="text-xl text-gray-600 font-semibold mb-2">
            Patient Portal Features
          </h1>
          <p className="text-xs text-gray-400">
            Select which features are available for this Patient Portal.
          </p>
          <div className="my-3">
            <div className="flex items-center mb-1">
              <input
                type="checkbox"
                name="patient"
                onClick={() => {
                  setSecure(!secure);
                }}
              />
              <span className="text-xs ml-1 text-gray-700 font-medium">
                Text message ok
              </span>
            </div>
            <div className="flex items-center mb-1">
              <input
                type="checkbox"
                name="patient"
                onClick={() => {
                  setBilling(!billing);
                }}
              />
              <span className="text-xs ml-1 text-gray-700 font-medium">
                Access billing documents
              </span>
            </div>
            <div className="flex items-center mb-1">
              <input
                type="checkbox"
                name="patient"
                onClick={() => {
                  setPay(!pay);
                }}
              />
              <span className="text-xs ml-1 text-gray-700 font-medium">
                Pay a balance with credit card using Stripe
              </span>
            </div>
          </div>

          <button className=" py-[5px] mt-2 px-3  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            Save Features
          </button>
        </div>
        <div>
          <h1 className="text-xl text-gray-600 font-semibold mb-2">
            Patient Portal Features
          </h1>
          <p className="text-xs text-gray-400">
            Select which features are available for this Patient Portal.
          </p>
          <div className="my-3">
            <select
              className="border rounded-sm px-2 py-[4px]  text-xs w-full md:w-1/2"
              onChange={(e) => setEmail(e.target.value)}
            >
              <option value="mail">amro@aamm.com</option>
              <option value="rome">amrrrrrrrrro@aamm.com</option>
            </select>
          </div>
          <button className=" py-[5px] mt-2 px-3  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            Send Invitation
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default PatientPortal;
