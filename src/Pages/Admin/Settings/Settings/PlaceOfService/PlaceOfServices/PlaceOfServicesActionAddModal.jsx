import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function PlaceOfServicesActionAddModal({
  handleClose,
  open,
  recordData,
}) {
  const { id, description } = recordData;
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
        service_code: id,
        place_of_service: description,
      });
    }, 100);
  }, [reset, id, description]);
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
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Place of Service
                  </span>
                </label>
                <input
                  type="text"
                  name="place_of_service"
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("place_of_service")}
                />
              </div>
              <div className="mt-[-15px]">
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Place of Service Code
                  </span>
                </label>
                <input
                  type="number"
                  name="service_code"
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("service_code")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Save
              </button>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                autoFocus
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
