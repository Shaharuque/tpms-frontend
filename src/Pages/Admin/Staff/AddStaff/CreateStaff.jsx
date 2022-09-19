import React from "react";
import { useForm } from "react-hook-form";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CreateStaff = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[100vh]">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Today's Copay</h1>
        <div className="flex items-center gap-3">
          <Link
            to={"/admin/staffs"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
          {/* name  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                First Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="first_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("first_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Middle Name
              </span>
            </label>
            <input
              type="text"
              name="middle_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("middle_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Last Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="last_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("last_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Nick Name
              </span>
            </label>
            <input
              type="text"
              name="nick_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("nick_name")}
            />
          </div>
          {/* DOB */}
          <div>
            {" "}
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Date of Birth<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("check_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                SSN
              </span>
            </label>
            <input
              type="text"
              name="ssn"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("ssn")}
            />
          </div>
          {/* phone & email  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Office Phone <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_phone"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("office_phone")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Office Fax
              </span>
            </label>
            <input
              type="text"
              name="office_phone"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("office_phone")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Office Email<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_email"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("office_email")}
            />
          </div>
          {/* driving license */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Drivers License & Expiration Date
              </span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-2 gap-y-1">
              <div>
                <input
                  type="text"
                  name="driving_license"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("driving_license")}
                />
              </div>
              <div className="">
                {" "}
                <input
                  className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full "
                  type="date"
                  {...register("license_Date")}
                />
              </div>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("title")}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Hiring Date with Company
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("hiring_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Credential Type
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("credential_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Treatment Type
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("credential_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Individual NPI
              </span>
            </label>
            <input
              type="text"
              name="individual_npi"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("individual_npi")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                CAQH Id
              </span>
            </label>
            <input
              type="text"
              name="cahq_id"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("cahq_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Service Area Zip
              </span>
            </label>
            <input
              type="text"
              name="service_area_zip"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("service_area_zip")}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Termination Date
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("terminate_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Language(s)
              </span>
            </label>
            <input
              type="text"
              name="language"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("language")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Taxonomy Code
              </span>
            </label>
            <input
              type="text"
              name="taxonomy_code"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("taxonomy_code")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Gender <span className="text-red-500">*</span>
              </span>
            </label>
            <div className="flex items-center">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  female
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  male
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateStaff;
