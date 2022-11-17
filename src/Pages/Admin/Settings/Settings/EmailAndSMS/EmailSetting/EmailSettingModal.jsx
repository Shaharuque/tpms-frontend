import { Modal } from "antd";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from "../../../../../Assets/favicon.png";
import tpmsLogo from "../../../../../Assets/logo.png";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

const EmailSettingModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={510}
        closable={false}
        className="box rounded-xl"
        // onClose={handleClose}
        // aria-labelledby="responsive-dialog-title"
      >
        <div className=" py-3">
          <div className="flex px-5 pb-3 items-center justify-between shadow-md border-b">
            <h1 className=" font-medium text-orange-500 text-base">
              Email View
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>

          <div className=" overflow-scroll h-[500px]">
            <h1 className="mx-3 mt-4 text-2xl font-normal text-center bg-slate-200 pb-8 pt-6">
              Hi, qahaf shaa
            </h1>
            <div className="w-[100px] h-[100px] z-20 p-4 mx-auto border bg-white  rounded-full mt-[-10px]">
              <img src={logo} alt="" />
            </div>
            <div className="bg-gradient-to-r z-0 from-indigo-900 via-blue-500 to-indigo-900 py-24 mt-[-40px] mx-3"></div>
            <div className="border p-4 mx-auto mt-[-120px] bg-white rounded-xl mb-5 w-[90%]">
              <h2 className="mt-5 text-center mb-2 text-3xl font-normal">
                Appointment Reminder
              </h2>
              <p className="font-medium email-setting">
                This is{" "}
                <span className=" font-bold">
                  ABC Behavioral Therapy Center
                </span>{" "}
                reminding you of an appointment on{" "}
                <span className="bg-green-200 text-xs rounded-md font-bold px-2 py-1">
                  11/30/2022
                </span>{" "}
                @{" "}
                <span className="bg-green-200 text-xs rounded-md font-bold px-2 py-1">
                  10:00 AM
                </span>{" "}
                to{" "}
                <span className="bg-green-200 text-xs rounded-md font-bold px-2 py-1">
                  11:00 AM
                </span>{" "}
                . Please keep in mind, as per our cancellation policy, any
                appointment cancelled with less than 24 hours notice will incur
                a cancellation fee. We look forward to seeing you. DO NOT REPLY.
                Please call the office with any schedule changes
              </p>
              <div className="flex items-center my-7 justify-center">
                <img src={tpmsLogo} alt="" />
              </div>
            </div>
            <div className="px-3 w-[90%] mx-auto">
              <div className=" flex items-center mt-5 justify-center">
                <div className=" font-medium text-sm">
                  <a
                    href="https://therapypms.com/contact/"
                    className=" text-blue-500"
                    alt="help"
                  >
                    Help & Contact
                  </a>
                  <span> | </span>
                  <a
                    href="https://therapypms.com/"
                    className=" text-blue-500"
                    alt="help"
                  >
                    Security
                  </a>
                  <span> | </span>
                  <a
                    href="https://login.therapypms.com/"
                    className=" text-blue-500"
                    alt="help"
                  >
                    Apps
                  </a>
                </div>
              </div>
              <div className="my-6">
                <div className=" flex items-center justify-center gap-4 font-medium text-sm">
                  <div className="bg-gray-500 rounded-full p-1">
                    <a href="https://therapypms.com/contact/" alt="help">
                      <TiSocialTwitter className=" text-xl text-white" />
                    </a>
                  </div>
                  <div className="bg-gray-500 rounded-full p-1">
                    <a href="https://therapypms.com/contact/" alt="help">
                      <TiSocialInstagram className=" text-xl text-white" />
                    </a>
                  </div>
                  <div className="bg-gray-500 rounded-full p-1">
                    <a href="https://therapypms.com/contact/" alt="help">
                      <TiSocialFacebook className=" text-xl text-white" />
                    </a>
                  </div>
                  <div className="bg-gray-500 rounded-full p-1">
                    <a href="https://therapypms.com/contact/" alt="help">
                      <TiSocialLinkedin className=" text-xl text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className=" mb-5 text-[13px] font-normal text-gray-500 tracking-wide leading-6">
                  This mail is generated from Therapy PMS Accounts. If you think
                  this is SPAM, please report to support@therapypms.com for
                  immediate action. <br /> <br /> <br /> 123 Town Square Place
                  Ste 13, Jersey City, NJ 07310. Phone: 909-406-9004 <br />{" "}
                  <br /> Copyright © 2022 therapypms.com. All right reserved.
                  Manage notification preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 flex justify-end items-end px-5 border-t shadow-t-md">
            <button onClick={handleClose} className="pms-close-button ">
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EmailSettingModal;
