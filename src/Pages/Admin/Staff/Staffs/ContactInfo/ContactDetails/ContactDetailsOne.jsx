import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import TextArea from "antd/lib/input/TextArea";
import { useEffect } from "react";
import { useAddContactInfoMutation } from "../../../../../../features/Stuff_redux/contactInfo/contactInfoApi";
import useToken from "../../../../../../CustomHooks/useToken";
import { toast } from "react-toastify";

const ContactDetailsOne = ({
  contactDetails,
  handleContactDetails,
  contactApiData,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = useToken();
  const [addContactInfo, { isSuccess, isLoading, isError }] =
    useAddContactInfoMutation();

  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      employee_contact_edit: contactApiData?.employee_id,
      address_one: data?.address_one,
      address_two: data?.address_two,
      city: data?.city,
      state: data?.state,
      zip: data?.zip,
      mobile: data?.mobile,
      fax: data?.fax,
      main_phone: data?.main_phone,
      address_note: data?.address_note,
    };
    console.log("payload", payload);
    addContactInfo({ token, payload });
  };
  // console.log("data come", contactApiData);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Contact Details Updated", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    } else if (isError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [isError, isSuccess]);

  // api data set
  const {
    address_one,
    fax,
    id,
    address_two,
    city,
    state,
    main_phone,
    mobile,
    address_note,
    zip,
  } = contactApiData;
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
        zip: zip || null,
        fax: fax || null,
        address_note: address_note || null,
      });
    }, 0);
  }, [
    address_note,
    address_one,
    address_two,
    city,
    fax,
    id,
    main_phone,
    mobile,
    reset,
    state,
    zip,
  ]);

  return (
    <div>
      {" "}
      <h2
        onClick={handleContactDetails}
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Contact Details
      </h2>
      {contactDetails && (
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
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 my-3 mr-2 gap-x-4 gap-y-1">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-font">Address1</span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("address_one")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Address2</span>
                  </label>
                  <input
                    type="text"
                    name="address2"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("address_two")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">City</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("city")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">State</span>
                  </label>
                  <select
                    className="input-border input-font w-full focus:outline-none"
                    {...register("state")}
                  >
                    <option value="Speech Therapist">Speech Therapist</option>
                    <option value="female">Female</option>
                    <option value="AK">Alaska</option>

                    <option value="AL">Alabama</option>
                    <option value="jm">jamaica</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FM">Federated States of Micronesia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">Zip</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("zip")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Mobile</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("mobile")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Fax</span>
                  </label>
                  <input
                    type="text"
                    name="fax"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("fax")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">Main Phone</span>
                  </label>
                  <input
                    type="text"
                    name="main_phone"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("main_phone")}
                  />
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
              <div className="my-3 ">
                <button
                  disabled={isLoading}
                  className="pms-button"
                  type="submit"
                >
                  Save Contact
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactDetailsOne;
