import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useToken from "../../../../CustomHooks/useToken";
import axios from "axios";
import { providerIp } from "../../../../Misc/BaseClient";
import { toast } from "react-toastify";

const ProviderEmargencyContact = ({ emdata }) => {
  const [note, setNote] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();

  // api data set
  const { address_one, fax, id, address_two, city, state, main_phone, mobile, address_note, contact_name, zip } = emdata || {};
  console.log(state);
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        address_one: address_one || null,
        address_two: address_two || null,
        city: city || null,
        state: state || null,
        main_phone: main_phone || null,
        mobile: mobile || null,
        contact_name: contact_name || null,
        zip: zip || null,
        fax: fax || null,
        address_note: address_note || null,
      });
    }, 0);
  }, [address_note, address_one, address_two, city, contact_name, fax, id, main_phone, mobile, reset, state, zip]);

  const onSubmit = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/contact/emergency/update`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: data,
      });

      if (res?.data?.success === true) {
        toast.success(<h1 className="text-[12px]">{res?.data?.message}</h1>, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "dark",
        });
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="p-2">
        <h4 className="text-md mt-2 text-left text-orange-400 mb-3">Contact Details</h4>
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
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 my-3 mr-2 gap-x-4 gap-y-1">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="label-font">Contact Name</span>
                </label>
                <input type="text" name="contact_name" className="input-border input-font w-full focus:outline-none" {...register("contact_name")} />
              </div>
              <div>
                <label className="label">
                  <span className="label-font">Address1</span>
                </label>
                <input type="text" name="address1" className="input-border input-font w-full focus:outline-none" {...register("address_one")} />
              </div>
              <div>
                <label className="label">
                  <span className="label-font">Address2</span>
                </label>
                <input type="text" name="address2" className="input-border input-font w-full focus:outline-none" {...register("address_two")} />
              </div>
              <div>
                <label className="label">
                  <span className="label-font">City</span>
                </label>
                <input type="text" name="city" className="input-border input-font w-full focus:outline-none" {...register("city")} />
              </div>

              <div>
                <label className="label">
                  <span className="label-font">State</span>
                </label>
                <select className="input-border input-font w-full focus:outline-none" {...register("state")}>
                  <option value="Speech Therapist">Speech Therapist</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-font">Zip</span>
                </label>
                <input type="text" name="zip" className="input-border input-font w-full focus:outline-none" {...register("zip")} />
              </div>
              <div>
                <label className="label">
                  <span className="label-font">Mobile</span>
                </label>
                <input type="text" name="mobile" className="input-border input-font w-full focus:outline-none" {...register("mobile")} />
              </div>
              <div>
                <label className="label">
                  <span className="label-font">Fax</span>
                </label>
                <input type="text" name="fax" className="input-border input-font w-full focus:outline-none" {...register("fax")} />
              </div>

              <div>
                <label className="label">
                  <span className="label-font">Main Phone</span>
                </label>
                <input type="text" name="main_phone" className="input-border input-font w-full focus:outline-none" {...register("main_phone")} />
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-font">Notes</span>
                </label>
                <textarea
                  rows={4}
                  size="middle"
                  className="w-full border bottom-2 ml-1 p-1"
                  {...register("address_note")}
                  // onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
            <div className="my-3">
              <button disabled={false} className=" pms-button" type="submit">
                Save Emergency Contact
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ProviderEmargencyContact;
