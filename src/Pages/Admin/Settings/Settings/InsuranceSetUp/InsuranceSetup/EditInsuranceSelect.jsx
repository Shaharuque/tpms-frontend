import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { BoolConverter01 } from "../../../../../Shared/BoolConverter/BoolConverter";

import { PostfetchData } from "../../../../../../Misc/Helper";
import useToken from "../../../../../../CustomHooks/useToken";
import { usePayorSetupDetailsUpdateMutation } from "../../../../../../features/Settings_redux/insuranceSetup/insuranceSetupApi";
import { toast } from "react-toastify";

const EditInsuranceSelect = ({ insuranceBox, payordetail }) => {
  console.log("data get props insurancebox", insuranceBox);
  console.log("edit insurance payor details", payordetail);
  const [insurancestate, setInsuranceState] = useState(insuranceBox?.tx_types);
  const { register, handleSubmit, control, reset } = useForm();
  const { token } = useToken();
  // all bolian value converted
  const [active, setactive] = useState(BoolConverter01(payordetail?.is_active));
  const [elec, setelec] = useState(BoolConverter01(payordetail?.is_electronic));
  const [box17, setbox17] = useState(BoolConverter01(payordetail?.box_17));
  const [daycpt, setdaycpt] = useState(BoolConverter01(payordetail?.day_pay_cpt));

  // console.log(active);
  // use fields array
  const { fields, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
  });

  const [payorSetupDetailsUpdate, { data: payorupdatedata, isLoading: payorupdateLoading }] =
    usePayorSetupDetailsUpdateMutation();

  console.log(payorupdatedata);

  useEffect(() => {
    if (payorupdatedata?.status === true) {
      toast.success(<h1 className="text-[12px]">{payorupdatedata?.message}</h1>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [payorupdatedata?.message, payorupdatedata?.status]);

  const id = [];
  const Box24j = [];
  const idqulifire = [];
  const treatmentid = [];

  const onSubmit = async (data) => {
    const createPayload = data?.test
      .filter((item) => item.active === true)
      .map((item) => {
        Box24j.push(item?.box24j);
        id.push(item?.id);
        idqulifire.push(item?.idQualifier);
        treatmentid.push(item?.tretmentId);
      });

    const Payload = {
      edit_details_id: id,
      box_24j: Box24j,
      id_qualifire: idqulifire,
      // is_elec: BoolConverter01(elec),
      is_elec: elec == null || false || undefined ? 0 : 1,
      is_active: BoolConverter01(active),
      box_17: BoolConverter01(box17),
      day_pay_cpt: BoolConverter01(daycpt),
      insurance_type: data.insurance_type,
      treatmentid: treatmentid,
      payor_up_id: payordetail?.id,
    };
    console.log("Payload", Payload);

    // const SelelctedPayorDetailseUpdate = await PostfetchData({
    //   // endPoint: "admin/ac/setting/selected/insurance/details/update",
    //   endPoint: "setting/payor/setup/details/update",
    //   payload: Payload,
    //   token,
    // });

    // console.log(SelelctedPayorDetailseUpdate);

    payorSetupDetailsUpdate({
      token,
      data: Payload,
    });

    // reset();
  };

  // api value  append
  useEffect(() => {
    reset();
    insuranceBox?.tx_types.map((item) =>
      append({
        id: item.id,
        active: false,
        taxType: item?.treatment_name,
        tretmentId: item?.treatment_id,
        box24j: item?.box_24j,
        idQualifier: item?.id_qualifire,
      })
    );
  }, [append, insuranceBox, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-5 gap-2">
          {/* switch */}
          {/* <div> */}
          <div className="flex items-center mt-7">
            <Switch size="small" defaultChecked={elec} onClick={() => setelec((elec) => !elec)} />
            <span className="ml-2">Is Electronic</span>
          </div>
          <div className="flex items-center mt-7">
            <Switch
              size="small"
              defaultChecked={active}
              onClick={() => setactive((active) => !active)}
            />
            <span className="ml-2">Active</span>
          </div>
          <div className="flex items-center mt-7">
            <Switch
              size="small"
              defaultChecked={box17}
              onClick={() => setbox17((box17) => !box17)}
            />
            <span className="ml-2">Is Fill Box-17</span>
          </div>
          <div>
            <div className="flex items-center mt-7">
              <Switch
                size="small"
                defaultChecked={daycpt}
                onClick={() => setdaycpt((daycpt) => !daycpt)}
              />
              <span className="ml-2">is time required Code</span>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div>
          <label className="label">
            <span className=" label-font">Insurance Type</span>
          </label>
          <select
            className="input-border input-font  focus:outline-none "
            {...register("insurance_type")}
          >
            <option value="">Other</option>
            <option value="1">Medicare</option>
            <option value="2">Medicaid</option>
            <option value="3">Champva</option>
            <option value="4">Group Health Plan</option>
            <option value="5">Feca Blk Lung</option>
          </select>
        </div>

        {/* <p onClick={() => append()}>+</p> */}

        {/* starting txtype */}

        <div className="w-[100%] px-2 sm:w-[75%]">
          <div className=" grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 my-5 gap-3">
            <h3 className=" font-medium text-base my-2">Tax Type</h3>
            <h3 className="mx-auto font-medium text-base my-2">Box 24J</h3>
            <h3 className="mx-auto font-medium text-base my-2">ID Qualifier</h3>

            {/* checkbox */}
            <>
              {fields.map((field, index) => {
                return (
                  <>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" {...register(`test.${index}.active`)} />

                      <h3 className="text-sm font-normal ">{field?.taxType}</h3>
                    </div>

                    <input
                      type="text"
                      className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register(`test.${index}.box24j`)}
                    />

                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                      {...register(`test.${index}.idQualifier`)}
                    >
                      <option value="">ID Qualifier</option>
                      <option value="0B">0B</option>
                      <option value="1B">1B</option>
                      <option value="1C">1C</option>
                      <option value="1D">1D</option>
                      <option value="1G">1G</option>
                      <option value="1H">1H</option>
                      <option value="EI">EI</option>
                      <option value="G2">G2</option>
                      <option value="LU">LU</option>
                      <option value="N5">N5</option>
                      <option value="SY">SY</option>
                      <option value="X5">X5</option>
                      <option value="ZZ">ZZ</option>
                    </select>
                  </>
                );
              })}
            </>

            {/* <div className="bg-gray-200 py-[1px] mt-3"></div> */}
            <div className=" flex items-center mt-5">
              <button className=" pms-button mr-2" type="submit">
                Go
              </button>

              <button className="pms-close-button">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditInsuranceSelect;
