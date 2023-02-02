import React from "react";
import Loading from "../../../../../../Loading/Loading";

const OtherSetUpBottom = ({ propdata }) => {
  // if (!propdata) {
  //   return <Loading />;
  // }
  const { fields, register, OtherSetupApiData } = propdata;
  console.log("fields props", fields);
  return (
    <div>
      {OtherSetupApiData.map((field, index) => {
        return (
          <div key={field.id} className="flex items-center gap-2 mb-2">
            <h3 className="text-xs font-normal w-80">
              {field?.treatment_name}
            </h3>
            <input
              type="text"
              defaultValue={field.box_24j}
              // name={`${tx_type}.${box_24j}`}
              className="input-border input-font w-full focus:outline-none py-[1px]"
              // {...register(`${box_24j}`)}
              {...register(`box_24j.${index}.box_24j`)}
            />

            <select
              className="input-border input-font w-full focus:outline-none py-[1px]"
              // defaultValue={}
              {...register(`id_qualifire.${index}.id_qualifire`)}
            >
              <option value={field.id_qualifire}>{field.id_qualifire}</option>
              <option value="female">Female</option>
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default OtherSetUpBottom;
