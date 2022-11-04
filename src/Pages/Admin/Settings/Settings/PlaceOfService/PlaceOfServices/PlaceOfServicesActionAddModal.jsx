import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function PlaceOfServicesActionAddModal({
  handleClose,
  open,
  recordData,
}) {
  const { id, pos_code, pos_name } = recordData;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // Editable value
  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        service_code: pos_code,
        place_of_service: pos_name ? pos_name : null,
      });
    }, 100);
  }, [reset, id, pos_name]);
  //console.log(errors);

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
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 my-3 mr-2 gap-x-4 gap-y-4">
              <div className="mt-[-15px]">
                <label className="label">
                  <span className="modal-label-name">Place of Service</span>
                </label>
                <input
                  type="text"
                  name="place_of_service"
                  className="modal-input-field ml-1 w-full"
                  {...register("place_of_service")}
                />
              </div>
              <div className="mt-[-15px]">
                <label className="label">
                  <span className="modal-label-name">
                    Place of Service Code
                  </span>
                </label>
                <input
                  type="number"
                  name="service_code"
                  className="modal-input-field ml-1 w-full"
                  {...register("service_code")}
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
