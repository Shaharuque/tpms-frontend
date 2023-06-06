import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useToken from "../../../../../../../CustomHooks/useToken";
import { useUpdateBox32InsuranceSetupMutation } from "../../../../../../../features/Settings_redux/insuranceSetup/insuranceSetupApi";
import { toast } from "react-toastify";

const Box32 = ({ box32, handleBox32, insuranceBox }) => {
  const { register, handleSubmit, reset } = useForm();
  const {
    id,
    facility_32,
    cms_1500_32a,
    cms_1500_32b,
    cms1500_32address,
    cms1500_32city,
    cms1500_32state,
    cms1500_32zip,
  } = insuranceBox || {};
  const { token } = useToken();

  const [
    updateBox32InsuranceSetup,
    { isSuccess: box32UpdateSuccess, isError: box33UpdateError },
  ] = useUpdateBox32InsuranceSetupMutation();

  useEffect(() => {
    setTimeout(() => {
      reset({
        facility_32,
        cms_1500_32a,
        cms_1500_32b,
        cms1500_32address,
        cms1500_32city,
        cms1500_32state,
        cms1500_32zip,
      });
    }, 500);
  }, [
    reset,
    facility_32,
    cms_1500_32a,
    cms_1500_32b,
    cms1500_32address,
    cms1500_32city,
    cms1500_32state,
    cms1500_32zip,
  ]);
  const onSubmit = (data) => {
    const payload = {
      ...data,
      payor_up_id: id,
    };
    if (payload && id) {
      updateBox32InsuranceSetup({
        token,
        data: payload,
      });
    }
  };

  useEffect(() => {
    if (box32UpdateSuccess) {
      toast.success("successfully update the box33", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [box32UpdateSuccess]);
  return (
    <div>
      <h2
        onClick={() => {
          handleBox32();
          console.log(box32);
        }}
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Box No 32
      </h2>
      {box32 && (
        <div className="border bg-teal-50">
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
              <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 my-3 mr-2 gap-x-4 gap-y-1">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-font">Facility Name</span>
                  </label>
                  <input
                    type="text"
                    name="facility_32"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("facility_32")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Address</span>
                  </label>
                  <input
                    type="text"
                    name="cms1500_32address"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_32address")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">City</span>
                  </label>
                  <input
                    type="text"
                    name="cms1500_32city"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_32city")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">State</span>
                  </label>
                  <select
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_32state")}
                  >
                    <option value="AK">Alaska</option>
                    <option value="AL">Alabama</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FM">Federated States of Micronesia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="AE">Armed Forces Africa</option>
                    <option value="AA">
                      Armed Forces Americas (except Canada)
                    </option>
                    <option value="AE">Armed Forces Canada</option>
                    <option value="AE">Armed Forces Europe</option>
                    <option value="AE">Armed Forces Middle East</option>
                    <option value="AP">Armed Forces Pacific</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">Zip</span>
                  </label>
                  <input
                    type="text"
                    name="cms1500_32zip"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_32zip")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">NPI</span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32a"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms_1500_32a")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Taxonomy</span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_32b"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms_1500_32b")}
                  />
                </div>
              </div>

              <div className="my-5 ">
                <button className="pms-button" type="submit">
                  Save Box 32
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Box32;
