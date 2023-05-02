import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useVendorNumberEssentialsQuery } from "../../../../../../features/Settings_redux/vendorNumberSetup/vendorNumberSetupApi";
import useToken from "../../../../../../CustomHooks/useToken";
import axios from "axios";
import { baseIp } from "../../../../../../Misc/BaseClient";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchVendorNumber } from "../../../../../../features/Settings_redux/vendorNumberSlice";

export default function VendorNumberSetupActionModal({
  open,
  handleClose,
  recordData,
  txId,
  regionalCenter,
  page,
}) {
  const {
    id,
    regional_center_id,
    service_code,
    service_id,
    treatment_id,
    vendor_no,
  } = recordData || {};
  // const { vendor, service_code } = recordData;
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();
  const dispatch = useDispatch();

  //Getting Vendor Number Setup Essentials
  const {
    data: vendorEssentials,
    isSuccess,
    isLoading,
  } = useVendorNumberEssentialsQuery({
    token,
  });

  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        service_id: service_id || null,
        treatment_id: treatment_id || null,
        regional_center_id: regional_center_id || null,
        vendor_no: vendor_no || null,
        service_code: service_code || null,
      });
    }, 0);
  }, [
    vendor_no,
    service_code,
    service_id,
    treatment_id,
    regional_center_id,
    reset,
  ]);

  const onSubmit = async (FormData) => {
    console.log(FormData);
    if (FormData && !id) {
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/add/vendor/number`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: FormData,
        });

        // console.log(res.data);
        if (res.data.status === "success") {
          toast.success("successfully set new vendor number", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
          dispatch(
            fetchVendorNumber({
              page,
              token,
              tx_id: txId || null,
              region_id: regionalCenter || null,
            })
          );
          handleClose();
        } else {
          toast.error("vendor number already exist", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
        }
      } catch (error) {
        toast.error(error?.res?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          style: { fontSize: "12px" },
        });
      }
    } else {
      console.log(FormData);
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/update/vendor/number`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: {
            edit_vendor_id: id,
            ...FormData,
          },
        });
        if (res.data.status === "success") {
          toast.success("Successfully Updated", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
          dispatch(
            fetchVendorNumber({
              page,
              token,
              tx_id: txId || null,
              region_id: regionalCenter || null,
            })
          );
          handleClose();
        }
      } catch (error) {
        toast.error(error?.res?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          style: { fontSize: "12px" },
        });
      }
    }
    // reset();
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
              <div className="w-full">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mr-2 gap-x-2 gap-y-2">
                  <div>
                    <label className="label">
                      <span className="modal-label-name">Service</span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("service_id")}
                    >
                      <option value={0}>select service</option>
                      {vendorEssentials?.data?.service
                        ?.filter((item) => item.service !== null)
                        ?.map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item?.service}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="modal-label-name">Tx Type</span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("treatment_id")}
                    >
                      <option value={0}>select treatment</option>
                      {vendorEssentials?.data?.tx_types
                        ?.filter((item) => item.treatment_name !== null)
                        .map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item?.treatment_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="modal-label-name">Regional Center</span>
                    </label>
                    <select
                      className="modal-input-field ml-1 w-full"
                      {...register("regional_center_id")}
                    >
                      <option value={0}>select regional center</option>
                      {vendorEssentials?.data?.payors
                        ?.filter((item) => item.regional_center_name !== null)
                        .map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item?.regional_center_name}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* staff_number  */}
                  <div className="">
                    {" "}
                    <label className="label">
                      <span className="modal-label-name">Vendor No</span>
                    </label>
                    <input
                      type="text"
                      name="vendor_no"
                      className="modal-input-field ml-1 w-full"
                      {...register("vendor_no")}
                    />
                  </div>
                  <div className="">
                    {" "}
                    <label className="label">
                      <span className="modal-label-name">Service Code</span>
                    </label>
                    <input
                      type="text"
                      name="service_code"
                      className="modal-input-field ml-1 w-full"
                      {...register("service_code")}
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
