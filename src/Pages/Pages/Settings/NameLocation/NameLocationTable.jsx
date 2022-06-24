import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const NameLocationTable = () => {
  const [tableOpen, setTableOpen] = useState(false);
  const handleTable = () => {
    setTableOpen(!tableOpen);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <h2
        onClick={handleTable}
        className=" mt-4 text-xs p-2 text-white bg-secondary"
      >
        Box No 33
      </h2>
      {tableOpen && (
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
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-5">
                {/* name  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="name"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                </div>
                {/* address 1 */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="address"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Address 2
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="addressTwo"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("addressTwo", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                </div>
                {/* city  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="city"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "City is required",
                      },
                    })}
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("state", { required: true })}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                {/* Zip  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Zip
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="zip"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("zip", {
                      required: {
                        value: true,
                        message: "zip is required",
                      },
                    })}
                  />
                </div>
                {/* phone  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Phone
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="ABC Behavioral Therapy Center"
                    name="phone"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "phone is required",
                      },
                    })}
                  />
                </div>
                {/* short code  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Behavioral Therapy Center"
                    name="shortCode"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("shortCode", {
                      required: {
                        value: true,
                        message: "shortCode is required",
                      },
                    })}
                  />
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NameLocationTable;
