import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Calendar } from "react-calendar";

export default function SFTPModal({ handleClose, open, recordData }) {
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = React.useState(false);
  const [date2, setDate2] = React.useState(false);
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
  const [openSingleCalendar, setOpenSingleCalendar] = React.useState(false);

  const handleSingleClearDate = () => {
    setOpenSingleCalendar(false);
    setDate(null);
  };

  const handleSingleCancelDate = () => {
    setOpenSingleCalendar(false);
    setDate(new Date());
  };

  const handleDate = () => {
    setDate2(true);
  };

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
              Fetch SFTP Files
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-medium  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" text-[13px] font-normal my-5">
              The last time you refreshed ERA feed for this account was on DATE{" "}
              <span className=" font-medium">08/16/2022</span>, so ERA feeds
              will be refreshed from{" "}
              <span className=" font-medium">08/16/2022....</span>{" "}
              <button
                onClick={handleDate}
                className={
                  !date2 ? " visible text-primary font-semibold m-1" : " hidden"
                }
              >
                Change Date
              </button>
            </div>

            <div>
              {date2 && (
                <>
                  <div>
                    <input
                      onClick={() => setOpenSingleCalendar(!openSingleCalendar)}
                      value={date ? date.toLocaleDateString() : "Select a Date"}
                      className="modal-input-field ml-1 w-1/4"
                      {...register("date")}
                    />
                    {/* single calendar */}
                    {openSingleCalendar && (
                      <div className="col-span-2 mb-5 w-[60%] mt-1 rounded my-0 absolute z-10 bg-white single-date p-1">
                        <Calendar onChange={setDate} value={date} />
                        <div className="bg-gray-200 py-[1px] "></div>
                        <div className="flex justify-between bg-white p-1">
                          <button
                            onClick={() => handleSingleClearDate()}
                            className="pms-clear-button"
                          >
                            CLEAR
                          </button>
                          <div>
                            <button
                              onClick={() => setOpenSingleCalendar(false)}
                              className=" pms-button mr-2"
                              type="submit"
                            >
                              OK
                            </button>
                            <button
                              className="pms-close-button"
                              onClick={() => handleSingleCancelDate()}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
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
