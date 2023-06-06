import * as React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import axios from "axios";
import { baseIp } from "../../../../../../Misc/BaseClient";
import useToken from "../../../../../../CustomHooks/useToken";
import { toast } from "react-toastify";
import { fetchReferringProvider } from "../../../../../../features/Settings_redux/referringProviderApi";
export default function ReferringProviderActionModal({
  handleClose,
  open,
  recordData,
  page,
}) {
  const { id, provider_name, provider_last_name, npi, upin, id_qual } =
    recordData || {};
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { token } = useToken();

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

  const onSubmit = async (FormData) => {
    console.log(FormData);
    if (FormData && !id) {
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/add/referring/provider`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: FormData,
        });

        if (res.data.status === "success") {
          toast.success("successfully Added the referring provider", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
          dispatch(fetchReferringProvider({ page, token }));
          handleClose();
        } else {
          toast.error("Already Exists", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
        }
      } catch (error) {
        console.log(error?.res?.data?.message);
      }
    } else {
      console.log("update part is hitted");
      try {
        let res = await axios({
          method: "post",
          url: `${baseIp}/setting/update/referring/provider`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: {
            ...FormData,
            referring_id: id,
          },
        });

        // console.log(res.data);
        if (res.data.status === "success") {
          toast.success("Successfully Updated", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
          dispatch(fetchReferringProvider({ page, token }));
          // handleClose();
        } else {
          toast.error("referring provider already exists", {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            style: { fontSize: "12px" },
          });
        }
      } catch (error) {
        console.log(error?.res?.data?.message);
      }
    }
  };

  // Editable value
  React.useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        provider_name,
        provider_last_name,
        npi,
        upin,
        id_qual,
      });
    }, 100);
  }, [reset, provider_name, provider_last_name, npi, upin, id_qual]);
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
              Add Referring Provider
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-medium  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 mr-2 gap-3">
              <div>
                <label className="label">
                  <span className="modal-label-name">Provider First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider First Name"
                  name="provider_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("provider_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Provider Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider Last Name"
                  name="provider_last_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("provider_last_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">NPI</span>
                </label>
                <input
                  type="text"
                  placeholder="NPI"
                  name="npi"
                  className="modal-input-field ml-1 w-full"
                  {...register("npi")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">ID Qualifier</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  name="id_qual"
                  {...register("id_qual")}
                >
                  <option selected=""></option>
                  <option value="1c">Medicare - 1C</option>
                  <option value="1d">Medicaid - 1D</option>
                  <option value="1b">Blue Shield - 1B</option>
                  <option value="g2">Commercial - G2</option>
                  <option value="hmo">HMO</option>
                  <option value="1a">Blue Cross - 1A</option>
                  <option value="1g">UPIN - 1G</option>
                  <option value="ei">Emp TIN - EI</option>
                  <option value="ob">State License - OB</option>
                  <option value="zz">Taxonomy - ZZ</option>
                  <option value="9f">MediPass - 9F</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">ID</span>
                </label>
                <input
                  type="number"
                  placeholder="id"
                  name="upin"
                  className="modal-input-field ml-1 w-full"
                  {...register("upin")}
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
}
