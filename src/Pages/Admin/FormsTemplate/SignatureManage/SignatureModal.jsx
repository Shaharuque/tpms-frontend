import { Modal, Tabs } from "antd";
import React, { useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import SignaturePad from "react-signature-canvas";
import SimpleFileUpload from "react-simple-file-upload";

const SignatureModal = ({
  setImageURL,
  handleSignatureClose,
  open,
  setFile,
}) => {
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  return (
    <div>
      <Modal
        open={open}
        centered
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-lg"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400">Add signature</h1>
            <IoCloseCircleOutline
              onClick={handleSignatureClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="DRAW" key="1">
                <div>
                  <SignaturePad
                    ref={sigCanvas}
                    canvasProps={{
                      className: "signatureCanvas",
                    }}
                  />
                  <div className="bg-gray-200 py-[1px] mt-3"></div>
                  <div className=" flex items-center justify-between mt-2 gap-2">
                    <button className="pms-clear-button" onClick={clear}>
                      Clear
                    </button>
                    <div>
                      <button className="pms-button mr-2" onClick={save}>
                        Add Signature
                      </button>
                      <button
                        className="pms-close-button"
                        onClick={handleSignatureClose}
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  {/* <button onClick={close}>Close</button> */}
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="UPLOAD" key="2">
                <div className="">
                  <div>
                    {/*
                    <h1 className=" my-2 text-base font-medium">
                      Upload Signature File
                    </h1>
                   <SimpleFileUpload
                      apiKey={`b7deee9a71131791da71b4a74e6169c2`}
                      onSuccess={setFile}
                    /> */}
                    <h1 className=" my-2 text-base font-medium">
                      Upload Signature File
                    </h1>
                    <input
                      className="my-5"
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(e) => setFile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="bg-gray-200 py-[1px] mt-3"></div>
                <div className=" flex items-center justify-end mt-2 gap-2">
                  <button className="pms-button mr-2">Add Signature</button>
                  <button
                    className="pms-close-button"
                    onClick={handleSignatureClose}
                  >
                    Close
                  </button>
                </div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignatureModal;
