import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

const ContractRateEditAdd = () => {
  const { id } = useParams();
  console.log("param ", id);
  const [combo, setCombo] = useState(false);

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

  const onCancel = (data) => {
    reset();
  };
  return (
    <div>
      <div>
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
              <div className="flex flex-wrap items-center gap-5 my-5">
                <div className="w-[30%]">
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Select Insurance
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("insurance")}
                  >
                    <option value="name"> Payor </option>
                    <option value="name"> Client </option>
                  </select>
                </div>
                {/* File  */}
                <div className=" ">
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      File
                    </span>
                  </label>
                  <input
                    type="file"
                    className=" border bg-white rounded-sm ml-1  text-xs"
                    {...register("fileName")}
                  />
                </div>
              </div>
              <div className="divider"></div>
              <h1 className="text-lg my-2 text-orange-500">Add/Edit Rate:</h1>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-5">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Select Tx type
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("tx_type")}
                  >
                    <option value="name"> abcd </option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Service
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("service")}
                  >
                    <option value="name"> abcd </option>
                  </select>
                </div>
                {/* Service Sub-Type  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Service Sub-Type
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("service_sub_type")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* CPT Code  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      CPT Code
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("CPT_Code")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                <div className="flex justify-between gap-2">
                  {/* m1 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-xs text-gray-500 text-left">
                        M1
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m1"
                      className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                      {...register("m1")}
                    />
                  </div>
                  {/* m1 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-xs text-gray-500 text-left">
                        M2
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m2"
                      className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                      {...register("21")}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  {/* m3 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-xs text-gray-500 text-left">
                        M3
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m3"
                      className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                      {...register("m3")}
                    />
                  </div>
                  {/* m4 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-xs text-gray-500 text-left">
                        M4
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m4"
                      className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                      {...register("m4")}
                    />
                  </div>
                </div>
                {/* Rate Type  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Rate Type
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("rate_type")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* Rate Per  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Rate Per
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("rate_Per")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* Contract Rate */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Contract Rate
                    </span>
                  </label>
                  <input
                    type="number"
                    name="contract_rate"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("contract_rate")}
                  />
                </div>
                {/* Billing Rate */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Billing Rate
                    </span>
                  </label>
                  <input
                    type="number"
                    name="billing_rate"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("billing_rate")}
                  />
                </div>
                {/* % Increase */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      % Increase
                    </span>
                  </label>
                  <input
                    type="number"
                    name="increase"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("increase")}
                  />
                </div>

                {/* Degree Level  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Degree Level
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("degree_level")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                <div className="flex ml-1 gap-3">
                  <div>
                    <FormGroup>
                      <FormControlLabel
                        className="form-check-label inline-block ml-2 text-sm text-gray-500"
                        control={<Checkbox />}
                        label="Active"
                      />
                    </FormGroup>
                  </div>
                  <div>
                    <FormGroup>
                      <FormControlLabel
                        className="form-check-label inline-block ml-2 text-sm text-gray-500"
                        control={<Checkbox />}
                        label="Add to auth"
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>

              {/* submit  */}
              <input
                className="btn btn-primary bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
                type="submit"
                value={"Save"}
              />
              <Link to={"/contract-rate"}>
                {" "}
                <button
                  className="px-5  bg-gradient-to-r from-red-700 to-red-400 py-3 ml-3 hover:to-red-700 text-white rounded-md"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </Link>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContractRateEditAdd;
