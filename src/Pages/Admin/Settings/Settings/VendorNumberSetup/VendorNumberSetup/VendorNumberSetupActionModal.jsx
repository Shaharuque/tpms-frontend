import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function VendorNumberSetupActionModal({
  open,
  handleClose,
  recordData,
}) {
  const { vendor, service_code } = recordData;
  const { register, handleSubmit, reset } = useForm();

  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        vendor_no: vendor,
        service_no: service_code,
      });
    }, 0);
  }, [vendor, service_code, reset]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div>
        <Modal
          // fullScreen={fullScreen}
          open={open}
          centered
          width={500}
          footer={false}
          closable={false}
          bodyStyle={{ padding: "0" }}
          className="box rounded-md"
        >
          <div className="px-5 py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Edit Vendor Setup
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary"
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full font-semibold">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mr-2 gap-2">
                  <div>
                    <label className="label">
                      <span className="modal-label-name">Service</span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("Length")}
                    >
                      <option value="Mr">Bi Weekly</option>
                      <option value="Mrs">Yearly</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="modal-label-name">Tx Type</span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("week_day")}
                    >
                      <option value="Mr">Sunday</option>
                      <option value="Mrs">Monday</option>
                      <option value="Miss">Tuesday</option>
                      <option value="Dr">Wednesday</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="modal-label-name">Regional Center</span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("year")}
                    >
                      <option value="Mr">2019</option>
                      <option value="Mrs">2020</option>
                      <option value="Miss">2021</option>
                      <option value="Dr">2022</option>
                    </select>
                  </div>

                  {/* staff_number  */}
                  <div className="mt-[-15px]">
                    {" "}
                    <label className="label">
                      <span className="modal-label-name">Vendor No</span>
                    </label>
                    <input
                      type="number"
                      name="vendor_no"
                      className="modal-input-field ml-1 w-full"
                      {...register("vendor_no")}
                    />
                  </div>
                  <div className="mt-[-15px]">
                    {" "}
                    <label className="label">
                      <span className="modal-label-name">Service Code</span>
                    </label>
                    <input
                      type="number"
                      name="service_no"
                      className="modal-input-field ml-1 w-full"
                      {...register("service_no")}
                    />
                  </div>
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
    </div>
  );
}
