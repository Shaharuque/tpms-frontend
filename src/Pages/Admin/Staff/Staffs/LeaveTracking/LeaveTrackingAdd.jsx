import { useParams } from "react-router-dom";
import useToken from "../../../../../CustomHooks/useToken";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAddLeaveTrackingMutation } from "../../../../../features/Stuff_redux/leaveTracking/leaveTrackingApi";

const LeaveTrackingAdd = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();
  const { id } = useParams();

  // Add new leave api
  const [addLeaveTracking, { data: addleaveTrackdata, isSuccess: addleaveTrackSuccess, isError: addleaveTrackError }] = useAddLeaveTrackingMutation();

  const onSubmit = (data) => {
    const addTrackPaylod = {
      employee_id: id,
      leave_date: data.date,
      desc: data.desc,
    };
    addLeaveTracking({
      token,
      payload: addTrackPaylod,
    });
  };
  //Success/Error message show
  useEffect(() => {
    if (addleaveTrackSuccess) {
      toast.success(addleaveTrackdata?.message, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      reset();
      handleClose();
    } else if (addleaveTrackError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [addleaveTrackError, addleaveTrackSuccess, addleaveTrackdata?.message, handleClose, reset]);

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
        <div className="px-5 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">Apply Leave</h1>
            <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="modal-label-name">Description</span>
                </label>

                <textarea rows={4} placeholder="maxLength is 6" size="middle" className="w-full border bottom-2 ml-1 p-1" {...register("desc")} />
              </div>
              <div className=" flex item-center gap-4 flex-wrap">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Date</span>
                  </label>
                  <input type="date" name="date" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full" {...register("date")} />
                </div>
                <div className="mt-8">
                  <button className="mr-2 pms-button" type="submit">
                    Apply Leave
                  </button>
                  {/* onClick={() => setTimeOpen(false)} */}
                  <button className="pms-close-button" onClick={handleClose} autoFocus>
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LeaveTrackingAdd;
