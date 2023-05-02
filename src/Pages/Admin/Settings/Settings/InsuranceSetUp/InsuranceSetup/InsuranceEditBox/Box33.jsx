import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useUpdateBox33InsuranceSetupMutation } from "../../../../../../../features/Settings_redux/insuranceSetup/insuranceSetupApi";
import { toast } from "react-toastify";
import useToken from "../../../../../../../CustomHooks/useToken";

const Box33 = ({ box33, handleBox33, insuranceBox }) => {
  const { register, handleSubmit, reset } = useForm();
  const {
    id,
    facility_33,
    cms_1500_33a,
    cms_1500_33b,
    cms1500_33address,
    cms1500_33city,
    cms1500_33state,
    cms1500_33zip,
  } = insuranceBox || {};
  console.log("from box33", insuranceBox);
  const { token } = useToken();

  const [
    updateBox33InsuranceSetup,
    { isSuccess: box33UpdateSuccess, isError: box33UpdateError },
  ] = useUpdateBox33InsuranceSetupMutation();

  useEffect(() => {
    setTimeout(() => {
      reset({
        facility_33,
        cms_1500_33a,
        cms_1500_33b,
        cms1500_33address,
        cms1500_33city,
        cms1500_33state,
        cms1500_33zip,
      });
    }, 500);
  }, [
    facility_33,
    cms_1500_33a,
    cms_1500_33b,
    cms1500_33address,
    cms1500_33city,
    cms1500_33state,
    cms1500_33zip,
    reset,
  ]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      payor_up_id: id,
    };
    if (payload && id) {
      updateBox33InsuranceSetup({
        token,
        data: payload,
      });
    }
  };

  useEffect(() => {
    if (box33UpdateSuccess) {
      toast.success("successfully update the box33", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [box33UpdateSuccess]);

  return (
    <div>
      <h2
        onClick={() => {
          handleBox33();
          console.log(box33);
        }}
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Box No 33
      </h2>
      {box33 && (
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
                    name="facility_33"
                    className="input-border bg-teal-50 input-font w-full focus:outline-none"
                    {...register("facility_33")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Address</span>
                  </label>
                  <input
                    type="text"
                    name="cms1500_33address"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_33address")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">City</span>
                  </label>
                  <input
                    type="text"
                    name="cms1500_33city"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_33city")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">State</span>
                  </label>
                  <select
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_33state")}
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
                    name="cms1500_33zip"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms1500_33zip")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">NPI</span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33a"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms_1500_33a")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Taxonomy</span>
                  </label>
                  <input
                    type="text"
                    name="cms_1500_33b"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("cms_1500_33b")}
                  />
                </div>
              </div>

              <div className="my-5 ">
                <button className="pms-button" type="submit">
                  Save Box 33
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Box33;
