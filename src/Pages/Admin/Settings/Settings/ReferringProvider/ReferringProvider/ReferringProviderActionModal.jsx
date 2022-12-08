import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function ReferringProviderActionModal({
  handleClose,
  open,
  recordData,
}) {
  const { register, handleSubmit, reset } = useForm();

  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        provider_first_name: recordData?.first_name,
        provider_last_name: recordData?.last_name,
        npi: recordData?.npi,
        upin: recordData?.upin,
      });
    }, 0);
  }, [
    recordData?.first_name,
    recordData?.last_name,
    recordData?.npi,
    recordData?.upin,
    reset,
  ]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={600}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Edit Document
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-medium  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 mr-2 gap-3">
              <div>
                <label className="label">
                  <span className="modal-label-name">Provider First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider First Name"
                  name="provider_first_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("provider_first_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Provider Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider Last Name"
                  name="provider_last_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("provider_last_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">NPI</span>
                </label>
                <input
                  type="number"
                  placeholder="NPI"
                  name="npi"
                  className="modal-input-field ml-1 w-full"
                  {...register("npi")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">UPIN</span>
                </label>
                <input
                  type="number"
                  placeholder="UPIN"
                  name="upin"
                  className="modal-input-field ml-1 w-full"
                  {...register("upin")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Save
              </button>

              <button className="pms-close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
