import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../../CustomHooks/useToken";
import {
  useGetpayrollinfoQuery,
  useUpdatePayrollMutation,
} from "../../../../../../features/Stuff_redux/payroleSetup/payrollSetupApi";
import PyarollMultiSelect from "../PayrollMultiSelect/PyarollMultiSelect";

const PayrollEditModal = ({ handleClose, open, payroll_id, services }) => {
  console.log("from edit modal", open, payroll_id, services);
  const [active, setActive] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(false);
  const [serviceId, setServiceId] = useState([]);
  const { token } = useToken();
  const { id } = useParams();

  //record service id wise service description
  const existingService = services?.find(
    (each) => each.id === payroll_id?.service_id
  );
  console.log("Clicked existing service", existingService);

  //Individual payroll data id wise
  //   const { data: payrollInfo, isLoading } = useGetpayrollinfoQuery({
  //     token,
  //     id: payroll_id,
  //     payload: {
  //       id: payroll_id,
  //     },
  //   });
  //   console.log(isLoading, payrollInfo);

  //update payroll api
  const [updatePayroll, { isSuccess: updateSuccess, isError: updateError }] =
    useUpdatePayrollMutation();

  //To show default data in the form
  useEffect(() => {
    setTimeout(() => {
      reset({
        milage_rate: payroll_id?.milage_rate,
        hourly_rate: payroll_id?.hourly_rate,
      });
    }, 500);
  }, [reset, payroll_id?.milage_rate, payroll_id?.hourly_rate]);

  const onSubmit = (data) => {
    const payload = {
      edit_id: payroll_id?.id,
      employee_id: id,
      service_id: data?.service,
      hourly: data?.hourly_rate,
      milage: data?.milage_rate,
      apply_all: 1, //1=true,2=false
    };
    if (payload) {
      updatePayroll({
        token,
        payload,
      });
    }
    // console.log(payload);
  };

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Successfully Staff Created", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      handleClose();
    } else if (updateError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [updateSuccess, updateError]);
  return (
    <div>
      <div>
        <Modal
          open={open} //aikhaney true na likey ekta state ana lagbey tar value 'true'
          centered
          footer={null}
          bodyStyle={{ padding: "0" }}
          closable={false}
          className="box rounded-xl"
        >
          <div className="px-5 py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">Payroll</h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className="mt-3">
              <p className="text-xs font-medium text-gray-600 mt-1">
                The staff rates need to be setup before they can be scheduled
                for plan of care.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="modal-label-name">Service</span>
                  </label>
                  <select
                    className="modal-input-field ml-1 w-full"
                    name="service"
                    {...register("service")}
                  >
                    {existingService ? (
                      <option value={existingService?.id}>
                        {existingService?.description}
                      </option>
                    ) : (
                      <option>Select Treatment</option>
                    )}
                    {services
                      ?.filter((item) => item.id !== existingService?.id)
                      ?.map((service) => {
                        return (
                          <option key={service?.id} value={service?.id}>
                            {service?.description}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="modal-label-name">Hourly Rate</span>
                  </label>
                  <input
                    type="text"
                    name="hourly_rate"
                    className="modal-input-field ml-1 w-full"
                    {...register("hourly_rate")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="modal-label-name">
                      Milage Rate (cents/mile)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="milage_Rate"
                    className="modal-input-field ml-1 w-full"
                    {...register("milage_rate")}
                  />
                </div>

                <div className="flex ml-1 mt-8 gap-2 items-center">
                  <input
                    type="checkbox"
                    name="service"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="modal-label-name">Apply to All Service</span>
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
};

export default PayrollEditModal;
