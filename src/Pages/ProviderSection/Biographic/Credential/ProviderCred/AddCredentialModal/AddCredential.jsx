import { Modal } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddProviderCredentialMutation } from "../../../../../../features/ProviderPortal/providerCredentail_redux/ProviderCredentialApi";
import useToken from "../../../../../../CustomHooks/useToken";

const ProviderAddCredential = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();
  const { id } = useParams();

  // Add credential Api
  const [addProviderCredential, { isSuccess: addCredentialSuccess, isError: addCredentialError }] = useAddProviderCredentialMutation();

  const onSubmit = (data) => {
    const payload = {
      employee_id: id,
      cred_type: data?.cred_type,
      date_issue: data?.date_issue,
      date_expire: data?.expiry_Date,
      //0/1 hobey cred_apply
      cred_apply: data?.cred_apply ? 1 : 0,
      // cred_file: null,
    };
    if (payload) {
      addProviderCredential({
        token,
        payload,
      });
    }
    console.log(payload);
    console.log("normal data", data);
  };

  useEffect(() => {
    if (addCredentialSuccess) {
      handleClose();
      toast.success("Successfully Added", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (addCredentialError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
    //handleClose dependency tey na dileo choley cuz aita change hoy na
  }, [addCredentialError, addCredentialSuccess, handleClose]);
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
            <h1 className="text-lg text-left text-orange-400 ">Credential</h1>
            <IoCloseCircleOutline onClick={handleClose} className="text-gray-600 text-2xl hover:text-primary" />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="modal-label-name">
                    Credential <span className="text-red-500">*</span>
                  </span>
                </label>
                <input type="text" name="cred_type" className="modal-input-field ml-1 w-full" {...register("cred_type")} />
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">Date Issued</span>
                </label>
                <input type="date" className="modal-input-field ml-1 w-full" {...register("date_issue")} />
              </div>
              <div>
                {" "}
                <label className="label">
                  <span className="modal-label-name">Expiry Date</span>
                </label>
                <input type="date" className="modal-input-field ml-1 w-full" {...register("expiry_Date")} />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Upload File</span>
                </label>
                <input type="file" className=" px-2 py-[5px]  text-xs w-full" {...register("fileName")} />
              </div>
              <div className="flex  ml-1 mt-4 gap-2 items-center">
                <input type="checkbox" name="cred_apply" {...register("cred_apply")} />
                <span className="modal-label-name">Credential Not Applicable</span>
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
export default ProviderAddCredential;
