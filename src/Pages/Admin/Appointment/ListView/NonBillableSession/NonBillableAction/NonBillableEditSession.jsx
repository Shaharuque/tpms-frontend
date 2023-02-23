import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const NonBillableEditSession = ({ handleClose, openEdit, appointmentId }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Modal
        open={openEdit} //aikhaney true na likey ekta state ana lagbey tar value 'true'
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
              Edit Appointment
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 text-2xl hover:text-primary"
            />
          </div>
          <div className="h-4 py-1">
            {openEdit ? (
              <>
                <progress className="progress w-full bg-secondary h-[3px]"></progress>
              </>
            ) : (
              <div className="bg-gray-200 py-[1.5px] mt-3"></div>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>here</div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Edit Appointment
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

export default NonBillableEditSession;
