import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddInsurance = () => {
  const [select, setSelect] = useState(false);
  const [newAdded, setNewAdded] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setNewAdded([...newAdded, data.insurance]);
  };
  console.log(newAdded);
  const handleDlt = (i) => {
    console.log(i);
  };
  return (
    <div>
      <div>
        <div>
          <div className="flex lg:flex-nowrap gap-4 md:flex-wrap flex-wrap ">
            <form className="data-box" onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                {" "}
                <label className="label">
                  <span className="label-text text-xs  text-left">
                    All Insurance
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("insurance")}
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
                <input
                  className="mx-1 px-10 py-1 bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
                  type="submit"
                  value={"ADD"}
                />
              </div>
            </form>
            <div className="show-box mx-1  w-full">
              <h1 className="text-xs  my-2  text-left">
                Facility Selected Insurance
              </h1>
              <div className=" border text-gray-500 text-sm">
                {newAdded.map((a, i) => (
                  <p>
                    <button
                      className={`w-full item text-left px-2 py-1 ${
                        select && "bg-indigo-500"
                      }`}
                      onClick={() => handleDlt(a)}
                    >
                      {a}
                    </button>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInsurance;
