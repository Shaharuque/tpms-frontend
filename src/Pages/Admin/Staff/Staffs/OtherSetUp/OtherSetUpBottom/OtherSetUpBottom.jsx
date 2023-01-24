import React from "react";

const OtherSetUpBottom = ({ key, data, register }) => {
  const tx_type = `txType[${key}]`;
  const { treatment_name, box_24j, id_qualifire } = data;
  return (
    <fieldset name={tx_type} key={tx_type}>
      <div className="flex items-center gap-2 mb-2 ">
        <h3 className="text-xs font-normal w-80">{treatment_name}</h3>
        <input
          type="text"
          name={`${tx_type}.${box_24j}`}
          className="input-border input-font w-full focus:outline-none py-[1px]"
          {...register(`${box_24j}`)}
        />
        <select
          className="input-border input-font w-full focus:outline-none py-[1px]"
          {...register(`${id_qualifire}`)}
        >
          <option value="Speech Therapist">Speech Therapist</option>
          <option value="female">Female</option>
        </select>
      </div>
    </fieldset>
  );
};

export default OtherSetUpBottom;
