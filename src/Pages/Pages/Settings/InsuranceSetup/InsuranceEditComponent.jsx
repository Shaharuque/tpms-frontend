import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Checkbox, FormControlLabel, Switch } from "@mui/material";

const InsuranceEditComponent = ({ row }) => {
  const [value, setValue] = React.useState(false);

  console.log(row.original.insurance);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className=" my-5 box">
        {/* <h1>{row.original.place_of_Service}</h1> */}
        <div className="border p-5">
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
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 1D-2 gap-2">
                {/* name  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      CoPay Number
                    </span>
                  </label>
                  <input
                    type="number"
                    name="co_pay_number"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("co_pay_number")}
                  />
                  {/* <label className="label">
                <span className="label-text-alt">
                  {" "}
                  {errors.name?.type === "required" && (
                    <p className=" text-red-500">{errors.name.message}</p>
                  )}
                </span>
              </label> */}
                </div>
                <div className="flex items-center mt-7">
                  <Switch
                    size="small"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="text-sm font-normal">Is Electronic</span>
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 31
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_31"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_31")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 32a
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_32a"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_32a")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 32b
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_32b"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_32b")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 33a
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_33a"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_33a")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 33b
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cms_1500_33b"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_33b")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Provider NPI
                    </span>
                  </label>
                  <input
                    type="number"
                    name="provider_npi"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("provider_npi")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      TaxId
                    </span>
                  </label>
                  <input
                    type="number"
                    name="tax_id"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("tax_id")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Main Taxonomy
                    </span>
                  </label>
                  <input
                    type="number"
                    name="main_taxonomy"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("main_taxonomy")}
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center mt-7">
                    <Switch
                      size="small"
                      onClick={() => {
                        setValue(!value);
                      }}
                    />
                    <span className="text-sm font-normal">Active</span>
                  </div>
                  <div className="flex items-center mt-7">
                    <Switch
                      size="small"
                      onClick={() => {
                        setValue(!value);
                      }}
                    />
                    <span className="text-sm font-normal">Is Fill Box-17</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mt-7">
                    <Switch
                      size="small"
                      onClick={() => {
                        setValue(!value);
                      }}
                    />
                    <span className="text-sm font-normal">
                      is time required Code
                    </span>
                  </div>
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 32 Address
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_address"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_32_address")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 32 City
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_city"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_32_city")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 32 State
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_state"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_32_state")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 32 Zip
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32_zip"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_32_zip")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 33 Address
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_address"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_33_address")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 33 City
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_city"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_33_city")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 33 State
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_state"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_33_state")}
                  />
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Cms1500 33 Zip
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33_zip"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("cms_1500_33_zip")}
                  />
                </div>
              </div>
              <div className="overflow-auto my-5">
                <table className=" overflow-y-hidden">
                  <tr className="text-sm font-normal gap-5">
                    <th className="font-medium">Tx Type</th>
                    <th className="font-medium ">Box 24J</th>
                    <th className="font-medium ">ID Qualifier</th>
                  </tr>
                  <tr>
                    <td align="center w-36">
                      <FormControlLabel
                        control={<Checkbox />}
                        onClick={() => {
                          setValue(!value);
                        }}
                        label="Behavioral therapy"
                        className="text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Box 24J"
                        name="behavioral_box_24J"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-36"
                        {...register("behavioral_box_24J")}
                      />
                    </td>
                    <td>
                      <div className="ml-5 w-36">
                        <select
                          className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                          {...register("behavior_ID_Qualifier")}
                        >
                          <option value="1D">1D</option>
                          <option value="Lu">Lu</option>
                          <option value="Miss">Miss</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center w-36">
                      <FormControlLabel
                        control={<Checkbox />}
                        onClick={() => {
                          setValue(!value);
                        }}
                        label="Mental Health "
                        className="text-sm item-left"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Box 24J"
                        name="behavioral_box_24J"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-36"
                        {...register("behavioral_box_24J")}
                      />
                    </td>
                    <td>
                      <div className="ml-5 w-36">
                        <select
                          className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                          {...register("behavior_ID_Qualifier")}
                        >
                          <option value="1D">1D</option>
                          <option value="Lu">Lu</option>
                          <option value="Miss">Miss</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center w-36">
                      <FormControlLabel
                        control={<Checkbox />}
                        onClick={() => {
                          setValue(!value);
                        }}
                        label="Physical Therapy"
                        className="text-sm items-start"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Box 24J"
                        name="behavioral_box_24J"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-36"
                        {...register("behavioral_box_24J")}
                      />
                    </td>
                    <td>
                      <div className="ml-5 w-36">
                        <select
                          className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                          {...register("behavior_ID_Qualifier")}
                        >
                          <option value="1D">1D</option>
                          <option value="Lu">Lu</option>
                          <option value="Miss">Miss</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              {/* submit  */}
              <div>
                <input
                  type="submit"
                  value={"SAVE"}
                  className="px-5  py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                />
                <button
                  className="px-5 ml-3 py-1 bg-gradient-to-r from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                  autoFocus
                >
                  CANCEL
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceEditComponent;
