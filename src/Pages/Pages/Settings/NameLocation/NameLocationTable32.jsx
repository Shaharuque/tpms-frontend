import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import NameLocationTableAddButton from "./NameLocationTableAddButton";


const NameLocationTable32 = ({
  data,
  table32Open,
  handleTableOpen32,
  loading,
}) => {
  const [add, setAdd] = useState(0);
  const [test,setTest]=useState({})
  //console.log(loading);
  console.log(data);

  const handleAdd = () => {
    setAdd(add + 1);
  };
  
  // Editable value
  useEffect(() => {
    setTimeout(() => {
      reset({
        address: '',
      });
    }, 0);
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  return (
    <div>
      {/* Child 32  */}
      <h2
        onClick={handleTableOpen32}
        className=" mt-4 text-xs p-2 text-white bg-secondary"
      >
        Box No 32
      </h2>
      {table32Open && (
        <div className="border">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
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
                    name="region_name"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("region_name")}
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
                    {...register("state")}
                  >
                    <option value="Mr">Mr</option>
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
                    type="number"
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
                    type="number"
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
                      type="number"
                      placeholder="ABC Behavioral Therapy Center"
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
                {/* done  */}
              </div>
              {add && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="divider"></div>
                  {add === 1 && (
                    <NameLocationTableAddButton></NameLocationTableAddButton>
                  )}
                </motion.div>
              )}

              {/* submit  */}
              <input
                className=" mt-20 px-3 py-1 rounded-md text-sm font-normal bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
                type="submit"
                value={"Save"}
              />
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NameLocationTable32;
