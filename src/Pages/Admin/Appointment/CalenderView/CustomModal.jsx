import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Switch } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";

const CustomModal = ({ handleClose, clicked }) => {
  const { register, handleSubmit, reset } = useForm();
  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        // check_date: date ? date.toLocaleDateString() : null,
      });
    }, 0);
    // }, [date.toLocaleDateString()]);
  }, [reset]);

  const onSubmit = (data) => {
    console.log(data);
    const title = "Me Co: Si Du";
    const start = data?.from_date + "T" + data?.from_time;
    const end = data?.from_date + "T" + data?.to_time;
    console.log(start, end);
    const final = { title, ...data, start, end };
    console.log(JSON.stringify(final));
    if (data) {
      //sending product to DB through API
      fetch("http://localhost:8800/api/scheduler/", {
        method: "POST",
        body: JSON.stringify(final),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((err) => console.log(err));
    }
    // reset();
  };
  return (
    <div>
      <Modal
        open={clicked} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={500}
        closable={false}
        className="box rounded-xl"
        // onClose={handleClose}
        // aria-labelledby="responsive-dialog-title"
      >
        <div className="px-5 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Add Appointment
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1 md:gap-2">
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Patient Name
                </span>
              </label>
              <select
                className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("patient")}
              >
                <option value=""></option>
                <option value="Duck duck">Duck duck</option>
                <option value="Ashni Soni">Ashni Soni</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Auth
                </span>
              </label>
              <select
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("auth")}
              >
                <option value=""></option>
                <option value="Cigna Authorization">Cigna Authorization</option>
                <option value="Baffa Authorization">Baffa Authorization</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  Provider
                </span>
              </label>
              <select
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full"
                {...register("provider")}
              >
                <option value=""></option>
                <option value="Max Auto">Max Auto</option>
                <option value="Gomex twin">Gomex twin</option>
              </select>
              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  From Date
                </span>
              </label>
              <input
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full"
                type="date"
                {...register("from_date")}
              />

              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  From
                </span>
              </label>
              <input
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full"
                type="time"
                {...register("from_time")}
              />

              <label className="label">
                <span className="label-text font-medium flex items-center text-[12px] text-gray-600 text-left">
                  To
                </span>
              </label>
              <input
                className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-[12px] w-full"
                type="time"
                {...register("to_time")}
              />

              <div className="flex justify-start  mt-2">
                <button
                  className=" py-[5px] font-normal px-3 mr-1 text-[12px]  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                  type="submit"
                >
                  Add Appointment
                </button>
                <button
                  className="py-[5px] px-3 text-[12px] font-normal bg-gradient-to-r from-red-700 to-red-400 hover:to-red-700 text-white rounded-sm"
                  autoFocus
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
