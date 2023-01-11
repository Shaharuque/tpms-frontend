import { Modal } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useUpdatePayperiodMutation } from "../../../../../../features/Settings_redux/payperiod/payperiodApi";

const PayPeriodEnitModal = ({ handleClose, open, editRecord, token }) => {
  console.log(editRecord);
  //Date converter function
  const sampleFunction = (date) => {
    const [year, month, day] = date.split("-");
    const result = [month, day, year].join("/");
    return result;
  };
  //update payperiod
  const [
    updatePayperiod,
    { data, isSuccess: updateSuccess, isError: updateError },
  ] = useUpdatePayperiodMutation();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("normal data", data);
    const payload = {
      start_date: data?.start_date,
      end_date: data?.end_date,
      check_date: data?.check_date,
      time_sheet: data?.time_sheet,
    };
    console.log("modified data", payload);
    if (payload) {
      updatePayperiod({
        data: payload,
        token: token,
      });
    }
  };
  console.log(updateSuccess, data);
  useEffect(() => {
    if (updateSuccess) {
      handleClose();
      toast.success("Successfully Updated", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (updateError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
    //handleClose dependency tey na dileo choley cuz aita change hoy na
  }, [updateSuccess, updateError]);

  useEffect(() => {
    setTimeout(() => {
      reset({
        id: editRecord?.id,
        start_date: editRecord?.start_date,
        end_date: editRecord?.end_date,
        check_date: editRecord?.check_date,
        time_sheet: editRecord?.time_sheet,
      });
    }, 500);
  }, [
    reset,
    editRecord?.start_date,
    editRecord?.end_date,
    editRecord?.check_date,
    editRecord?.time_sheet,
  ]);
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
              Create/Edit Pay Period
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-4 gap-y-4">
              <div>
                <label className="label">
                  <span className="modal-label-name">From Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("start_date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">End Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("end_date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Check Date</span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="date"
                  {...register("check_date")}
                />
              </div>
              <div className="col-span-2">
                <label className="label">
                  <span className="modal-label-name">
                    After how many days staff can't submit time sheet?
                  </span>
                </label>
                <input
                  className="modal-input-field ml-1 w-full"
                  type="number"
                  {...register("time_sheet")}
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
};

export default PayPeriodEnitModal;
