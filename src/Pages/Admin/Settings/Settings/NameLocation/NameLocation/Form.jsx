import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import NameLocationTableAddButton from "./NameLocationTableAddButton";
import { FaPlus } from "react-icons/fa";

const Form = ({ item, primarydata }) => {
  console.log("item, primarydata", primarydata);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // addressExtra: testingobj.address
      externaladdedData: item,
    },
    mode: "onBlur",
  });

  useEffect(() => {
    reset({
      externaladdedData: item,
    });
  }, [item, reset]);

  const { fields, append, remove } = useFieldArray({
    name: "externaladdedData",
    control,
  });
  const onSubmit = (data) => console.log(data);

  console.log("fields", fields);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-3">
          {/* name  */}
          <div>
            <label className="label">
              <span className="label-font">Region Name</span>
            </label>
            <input
              type="text"
              placeholder="Main Zone"
              name="zone_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("zone_name")}
              disabled
            />
          </div>
          {/* address 1 */}
          <div>
            <label className="label">
              <span className="label-font">Facility Name</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="facility_name_two"
              className="input-border input-font w-full focus:outline-none"
              {...register("facility_name_two")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-font">Address</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="address"
              className="input-border input-font w-full focus:outline-none"
              {...register("address")}
            />
          </div>
          {/* city  */}
          <div>
            <label className="label">
              <span className="label-font">City</span>
            </label>
            <input
              type="text"
              placeholder="New Jersy"
              name="city"
              className="input-border input-font w-full focus:outline-none"
              {...register("city")}
            />
          </div>
          {/* state  */}
          <div>
            <label className="label">
              <span className="label-font">State</span>
            </label>
            <select
              className="input-border input-font w-full focus:outline-none"
              name="state"
              {...register("state")}
            >
              <option value="AK">Alaska</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          {/* Zip  */}
          <div>
            <label className="label">
              <span className="label-font">Zip</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="zip"
              className="input-border input-font w-full focus:outline-none"
              {...register("zip")}
            />
          </div>
          {/* phone  */}
          <div>
            <label className="label">
              <span className="label-font">Phone</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="phone_one"
              className="input-border input-font w-full focus:outline-none"
              {...register("phone_one")}
            />
          </div>

          {/* NPI */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div>
                <label className="label">
                  <span className="label-font">NPI</span>
                </label>
                <input
                  type="text"
                  placeholder="1234"
                  name="npi"
                  className="input-border input-font w-full focus:outline-none"
                  {...register("npi")}
                />
              </div>

              <div
                // onClick={handleAdd}
                onClick={() => append()}
                className="bg-secondary text-white  mt-[26px] p-[6px]"
              >
                <FaPlus />
              </div>
            </div>
          </div>
          {/* First form done  */}
        </div>

        {/* // fields, register, errors, remove */}
        <NameLocationTableAddButton
          fields={fields}
          register={register}
          errors={errors}
          remove={remove}
        ></NameLocationTableAddButton>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
