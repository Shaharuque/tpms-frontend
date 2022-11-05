import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import NameLocationTableAddButton from "./NameLocationTableAddButton";

const Form = (item) => {
  const [add, setAdd] = useState(false);
  const [store, setStore] = useState([]);

  const handleAdd = () => {
    setAdd(!add);
  };

  // Editable value
  useEffect(
    () => {
      setTimeout(() => {
        reset(
          {
            zone_name: item?.item[0]?.zone_name || "Main Zone",
            city: item?.item[0]?.city,
            facility_name_two: item?.item[0]?.facility_name_two,
            address: item?.item[0]?.address,
            state: item?.item[0]?.state,
            npi: item?.item[0]?.npi ? item?.item[0]?.npi : "",
            phone_one: item?.item[0]?.phone_one,
            zip: item?.item[0]?.zip,
          },
          {
            zone_name: item?.item[1]?.zone_name,
            city: item?.item[1]?.city,
          }
        );
      }, 0);
    },
    [item?.item[1]?.zone_name],
    item?.item[0]?.zone_name
  );

  //console.log(item);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // const data_one = [data];
    console.log(data);
    setStore([...store, data]);
    reset();
  };
  console.log(store);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-2">
          {/* name  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Region Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Main Zone"
              name="zone_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("zone_name")}
              disabled
            />
          </div>
          {/* address 1 */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Facility Name
              </span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="facility_name_two"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("facility_name_two")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Address
              </span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="address"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("address")}
            />
          </div>
          {/* city  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                City
              </span>
            </label>
            <input
              type="text"
              placeholder="New Jersy"
              name="city"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("city")}
            />
          </div>
          {/* state  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                State
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
              <span className="label-text text-xs text-gray-500 text-left">
                Zip
              </span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="zip"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("zip")}
            />
          </div>
          {/* phone  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Phone
              </span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="phone_one"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("phone_one")}
            />
          </div>

          {/* NPI */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                NPI
              </span>
            </label>
            <div className="mb-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="1234"
                name="npi"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("npi")}
              />
              <div
                onClick={handleAdd}
                className="bg-secondary text-white p-[6px]"
              >
                <FaPlus />
              </div>
            </div>
          </div>
          {/* First form done  */}
        </div>
        {add && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="divider"></div>
            <NameLocationTableAddButton
              handleAdd={handleAdd}
              register={register}
              setAdd={setAdd}
            ></NameLocationTableAddButton>
          </motion.div>
        )}

        {/* submit  */}
        <input
          className=" mt-20 px-3 py-1 rounded-md text-sm font-normal bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
          type="submit"
          value={"Save"}
        />
      </form>
    </div>
  );
};

export default Form;
