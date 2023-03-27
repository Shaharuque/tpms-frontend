import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const Form = (item) => {
  const [add, setAdd] = useState(false);
  const [store, setStore] = useState([]);

  const handleAdd = () => {
    setAdd(!add);
  };

  // const map = item.length > 0 && item.map((i, e) => i);
  // console.log("---", item, item[0]);
  // useEffect(() => {
  //   console.log("specific---", map);
  // }, []);

  // Editable value
  useEffect(
    () => {
      setTimeout(() => {
        reset(
          {
            zone_name: item?.item[0]?.zone_name,
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
      console.log("---", item, item.item[2]);
    },
    [item?.item[0]?.zone_name],
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
                onClick={handleAdd}
                className="bg-secondary text-white  mt-[26px] p-[6px]"
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
            <p>hello</p>
            {/* <NameLocationTableAddButton
              handleAdd={handleAdd}
              register={register}
              setAdd={setAdd}
            ></NameLocationTableAddButton> */}
          </motion.div>
        )}

        {/* submit  */}
        <input className="pms-button my-2" type="submit" value={"Save"} />
      </form>
    </div>
  );
};

export default Form;
