import * as React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../../../../../Misc/Helper";
import axios from "axios";
import { headers } from "../../../../../../Misc/BaseClient";
import { useDispatch } from "react-redux";
import { fetchCpt } from "../../../../../../features/Settings_redux/cptCodeSlice";
export default function AddCptCodeActionModal({
  handleClose,
  open,
  record,
  page,
  token,
  endPoint,
}) {
  const [txName, setTxName] = useState("");
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const { id, cpt_code, treatment } = record;
  const dispatch = useDispatch();

  useEffect(() => {
    setTxName(treatment?.treatment_name);
  }, [treatment?.treatment_name]);
  //console.log(treatment);

  //getting all the selected treatment data for Tx type selection purpose
  useEffect(() => {
    fetchData("admin/ac/setting/get/selected/treatment", token).then((res) => {
      const result = res?.data?.selected_treatment;
      if (result?.length !== 0) {
        setSelectedTreatments(result);
      }
    });
  }, []);
  console.log(selectedTreatments);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (FormData) => {
    console.log(FormData);
    if (FormData && !id) {
      try {
        let res = await axios({
          method: "post",
          url: "https://ovh.therapypms.com/api/v1/admin/ac/setting/cpt/code/create",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token || null,
          },
          data: FormData,
        });

        // console.log(res.data);
        if (res.data.status === "success") {
          console.log("Successfully Inserted");
          dispatch(fetchCpt({ endPoint, page, token }));
          handleClose();
        }
      } catch (error) {
        console.log(error?.res?.data?.message); // this is the main part. Use the response property from the error object
      }
    }
    // reset();
  };

  // Editable value
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        cpt_code: cpt_code,
        // facility_treatment_id: txName ? txName : null,
      });
    }, 100);
  }, [reset, cpt_code]);

  return (
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
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Edit Document
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-medium  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 mr-2 gap-5">
              <div>
                <label className="label">
                  <span className="modal-label-name">Tx Type</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  name="facility_treatment_id"
                  {...register("facility_treatment_id")}
                >
                  {/* <option value="Behavioral therapy">Behavioral therapy</option>
                  <option value="Speech Therapy">Speech Therapy</option>
                  <option value="Occupational Therapy">
                    Occupational Therapy
                  </option> */}
                  {selectedTreatments?.map((treatment) => {
                    return (
                      <option key={treatment?.id} value={treatment?.id}>
                        {treatment?.treatment_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">Cpt Code</span>
                </label>
                <input
                  type="number"
                  placeholder="Cpt Code"
                  name="cpt_code"
                  className="modal-input-field ml-1 w-full"
                  {...register("cpt_code")}
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
