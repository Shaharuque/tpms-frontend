// import React, { useEffect } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import NameLocationTableAddButton from "./NameLocationTableAddButton";
// import { FaPlus } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const Form = ({ item, primarydata }) => {
//   console.log("item, primarydata", primarydata);

//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       // addressExtra: testingobj.address
//       externaladdedData: item,
//     },
//     mode: "onBlur",
//   });

//   useEffect(() => {
//     reset({
//       externaladdedData: item,
//     });
//   }, [item, reset]);

//   const { fields, append, remove } = useFieldArray({
//     name: "externaladdedData",
//     control,
//   });
//   const onSubmit = (data) => console.log(data);

//   console.log("fields", fields);

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-3">
//           {/* name  */}
//           <div>
//             <label className="label">
//               <span className="label-font">Region Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Main Zone"
//               name="zone_name"
//               className="input-border input-font w-full focus:outline-none"
//               {...register("zone_name", {})}
//               disabled
//             />
//           </div>
//           {/* address 1 */}
//           <div>
//             <label className="label">
//               <span className="label-font">Facility Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="ABC Behavioral Therapy Center"
//               name="facility_name_two"
//               className="input-border input-font w-full focus:outline-none"
//               {...register("facility_name_two", {})}
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="label-font">Address</span>
//             </label>
//             <input
//               type="text"
//               placeholder="ABC Behavioral Therapy Center"
//               name="address"
//               className="input-border input-font w-full focus:outline-none"
//               {...register("address", {})}
//             />
//           </div>
//           {/* city  */}
//           <div>
//             <label className="label">
//               <span className="label-font">City</span>
//             </label>
//             <input
//               type="text"
//               placeholder="New Jersy"
//               name="city"
//               className="input-border input-font w-full focus:outline-none"
//               {...register("city", {})}
//             />
//           </div>
//           {/* state  */}
//           <div>
//             <label className="label">
//               <span className="label-font">State</span>
//             </label>
//             <select
//               className="input-border input-font w-full focus:outline-none"
//               name="state"
//               {...register("state", {})}
//             >
//               <option value="AK">Alaska</option>
//               <option value="Mrs">Mrs</option>
//               <option value="Miss">Miss</option>
//               <option value="Dr">Dr</option>
//             </select>
//           </div>
//           {/* Zip  */}
//           <div>
//             <label className="label">
//               <span className="label-font">Zip</span>
//             </label>
//             <input
//               type="text"
//               placeholder="ABC Behavioral Therapy Center"
//               name="zip"
//               className="input-border input-font w-full focus:outline-none"
//               {...register("zip", {})}
//             />
//           </div>
//           {/* phone  */}
//           <div>
//             <label className="label">
//               <span className="label-font">Phone</span>
//             </label>
//             <input
//               type="text"
//               placeholder="ABC Behavioral Therapy Center"
//               name="phone_one"
//               className="input-border input-font w-full focus:outline-none"
//               {...register("phone_one", {})}
//             />
//           </div>

//           {/* NPI */}
//           <div>
//             <div className="mb-2 flex items-center gap-2">
//               <div>
//                 <label className="label">
//                   <span className="label-font">NPI</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="1234"
//                   name="npi"
//                   className="input-border input-font w-full focus:outline-none"
//                   {...register("npi", {})}
//                 />
//               </div>

//               <div
//                 // onClick={handleAdd}
//                 onClick={() => append()}
//                 className="bg-secondary text-white  mt-[26px] p-[6px]"
//               >
//                 <FaPlus />
//               </div>
//             </div>
//           </div>
//           {/* First form done  */}
//         </div>

//         {/* // fields, register, errors, remove */}
//         {/* <NameLocationTableAddButton
//           fieldD={fields}
//           register={register}
//           errors={errors}
//           remove={remove}
//         ></NameLocationTableAddButton> */}

//         {/*  */}
//         <div>
//           {fields.map((field, index) => {
//             return (
//               <div key={field.id}>
//                 <div>
//                   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-2">
//                     {/* {/ name  /} */}
//                     <div>
//                       <span className="label-font">Region Name</span>

//                       <label className="label"></label>
//                       <input
//                         type="text"
//                         placeholder="Main Zone"
//                         defaultValue={field?.zone_name}
//                         name="zone_name"
//                         className="input-border input-font w-full focus:outline-none"
//                         {...register(`box32.${index}.zone_name`)}
//                       />
//                     </div>
//                     {/* {/ facility name /} */}
//                     <div>
//                       <label className="label">
//                         <span className="label-font">Facility Name</span>
//                       </label>
//                       <input
//                         defaultValue={field?.facility_name_two}
//                         type="text"
//                         placeholder="ABC Behavioral Therapy Center"
//                         name="facility_name_three"
//                         className="input-border input-font w-full focus:outline-none"
//                         {...register(`box32.${index}.facility_name_three`)}
//                       />
//                     </div>
//                     {/* address */}
//                     <div>
//                       <label className="label">
//                         <span className="label-font">Address</span>
//                       </label>
//                       <input
//                         defaultValue={field?.address}
//                         type="text"
//                         placeholder="ABC Behavioral Therapy Center"
//                         name="address"
//                         className="input-border input-font w-full focus:outline-none"
//                         {...register(`box32.${index}.address`)}
//                       />
//                     </div>
//                     {/* {/ city  /} */}
//                     <div>
//                       <label className="label">
//                         <span className="label-font">City</span>
//                       </label>
//                       <input
//                         defaultValue={field?.city}
//                         type="text"
//                         placeholder="New Jersy"
//                         name="city"
//                         ref={register}
//                         className="input-border input-font w-full focus:outline-none"
//                         {...register(`box32.${index}.city`)}
//                       />
//                     </div>
//                     {/* state  */}
//                     <div>
//                       <label className="label">
//                         <span className="label-font">State</span>
//                       </label>
//                       <select
//                         defaultValue={field?.state}
//                         className="input-border input-font w-full focus:outline-none"
//                         {...register(`box32.${index}.state`)}
//                       >
//                         <option value="Mr">Mr</option>
//                         <option value="Mrs">Mrs</option>
//                         <option value="Miss">Miss</option>
//                         <option value="Dr">Dr</option>
//                       </select>
//                     </div>
//                     {/* zip */}
//                     <div>
//                       <label className="label">
//                         <span className="label-font">Zip</span>
//                       </label>
//                       <input
//                         defaultValue={field?.zip}
//                         type="number"
//                         placeholder="zip"
//                         name="zip"
//                         className="input-border input-font w-full focus:outline-none"
//                         {...register(`box32.${index}.zip`)}
//                       />
//                     </div>
//                     {/* phone */}
//                     <div>
//                       <label className="label">
//                         <span className="label-font">Phone</span>
//                       </label>
//                       <input
//                         defaultValue={field?.phone_one}
//                         type="number"
//                         placeholder="Phone"
//                         name="phone"
//                         className="input-border input-font w-full focus:outline-none"
//                         {...register(`box32.${index}.phone`)}
//                       />
//                     </div>

//                     {/* npi */}
//                     <div>
//                       <div className="mb-2 flex items-center gap-2">
//                         <div>
//                           <label className="label">
//                             <span className="label-font">NPI</span>
//                           </label>
//                           <input
//                             defaultValue={field?.npi}
//                             type="text"
//                             placeholder="1234"
//                             name="npi"
//                             className="input-border input-font w-full focus:outline-none"
//                             {...register(`box32.${index}.npi`)}
//                           />
//                         </div>

//                         <div
//                           onClick={() => remove(index)}
//                           className="bg-rose-600 text-white mt-[26px] p-[6px]"
//                         >
//                           <RiDeleteBin6Line />
//                         </div>
//                       </div>
//                     </div>
//                     {/* done */}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/*  */}
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default Form;

// dsalfjasld

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";

export default function Form() {
  const data = useSelector((state) => state.settingInfo); //After action dispatched response can be received here
  console.log("settings data");

  const primaryData = data?.settingDetails?.box_32main;
  const externalData = data?.settingDetails?.box_32;
  const dataChange = { ...primaryData, externalData };
  console.log("data chng", dataChange);
  // const testingobj = {
  //   City: "mirpur",
  //   Street: "usa",
  //   address: [
  //     { address: "dhaka", zip: "123", City: "dh", status: true },
  //     { address: "com", zip: "133", City: "uk", status: false },
  //     { address: "jos", zip: "23", City: "cm", status: true }
  //   ],
  //   assignment: "male",
  //   checkedActive: 1,
  //   client_dob: "",
  //   country: "NY",
  //   dob: "2021-08-05",
  //   email: "testdfv@sdf.dsf",
  //   first_date: "",
  //   first_name: "cbvxdfg",
  //   fruit: "Male",
  //   gender: "Male",
  //   group: "work",
  //   group2: "work",
  //   language: "male",
  //   last_name: "sdgsdg",
  //   middle_name: null,
  //   more_zip0: "34",
  //   more_zip1: "45234",
  //   phone: "+14353464363",
  //   pos: "work",
  //   race_details: "male",
  //   referred_by: "male",
  //   region: "work",
  //   zip: "500"
  // };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      box32: dataChange?.externalData,
    },
    mode: "onBlur",
  });

  React.useEffect(() => {
    reset({
      box32: dataChange?.externalData,
    });
  }, [dataChange?.externalData, reset]);

  const { fields, append, remove } = useFieldArray({
    name: "box32",
    control,
  });
  const onSubmit = (data) => console.log(data);

  console.log("fields", fields);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-3">
          {/* name  */}
          <div>
            <label className="label">
              <span className="label-font">Region Name</span>
            </label>
            <input
              type="text"
              placeholder="Main Zone"
              name="zone_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("zone_name", {})}
              disabled
            />
          </div>
          {/* address 1 */}
          <div>
            <label className="label">
              <span className="label-font">Facility Name</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="facility_name_two"
              className="input-border input-font w-full focus:outline-none"
              {...register("facility_name_two", {})}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-font">Address</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="address"
              className="input-border input-font w-full focus:outline-none"
              {...register("address", {})}
            />
          </div>
          {/* city  */}
          <div>
            <label className="label">
              <span className="label-font">City</span>
            </label>
            <input
              type="text"
              placeholder="New Jersy"
              name="city"
              className="input-border input-font w-full focus:outline-none"
              {...register("city", {})}
            />
          </div>
          {/* state  */}
          <div>
            <label className="label">
              <span className="label-font">State</span>
            </label>
            <select
              className="input-border input-font w-full focus:outline-none"
              name="state"
              {...register("state", {})}
            >
              <option value="AK">Alaska</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          {/* Zip  */}
          <div>
            <label className="label">
              <span className="label-font">Zip</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="zip"
              className="input-border input-font w-full focus:outline-none"
              {...register("zip", {})}
            />
          </div>
          {/* phone  */}
          <div>
            <label className="label">
              <span className="label-font">Phone</span>
            </label>
            <input
              type="text"
              placeholder="ABC Behavioral Therapy Center"
              name="phone_one"
              className="input-border input-font w-full focus:outline-none"
              {...register("phone_one", {})}
            />
          </div>

          {/* NPI */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div>
                <label className="label">
                  <span className="label-font">NPI</span>
                </label>
                <input
                  type="text"
                  placeholder="1234"
                  name="npi"
                  className="input-border input-font w-full focus:outline-none"
                  {...register("npi", {})}
                />
              </div>

              <div
                // onClick={handleAdd}
                onClick={() => append()}
                className="bg-secondary text-white  mt-[26px] p-[6px]"
              >
                <FaPlus />
              </div>
            </div>
          </div>
          {/* First form done  */}
        </div>

        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-2">
                  {/* {/ name  /} */}
                  <div>
                    <span className="label-font">Region Name</span>

                    <label className="label"></label>
                    <input
                      type="text"
                      placeholder="Main Zone"
                      defaultValue={field?.zone_name}
                      name="zone_name"
                      className="input-border input-font w-full focus:outline-none"
                      {...register(`box32.${index}.zone_name`)}
                    />
                  </div>
                  {/* {/ facility name /} */}
                  <div>
                    <label className="label">
                      <span className="label-font">Facility Name</span>
                    </label>
                    <input
                      defaultValue={field?.facility_name_two}
                      type="text"
                      placeholder="ABC Behavioral Therapy Center"
                      name="facility_name_three"
                      className="input-border input-font w-full focus:outline-none"
                      {...register(`box32.${index}.facility_name_three`)}
                    />
                  </div>
                  {/* address */}
                  <div>
                    <label className="label">
                      <span className="label-font">Address</span>
                    </label>
                    <input
                      defaultValue={field?.address}
                      type="text"
                      placeholder="ABC Behavioral Therapy Center"
                      name="address"
                      className="input-border input-font w-full focus:outline-none"
                      {...register(`box32.${index}.address`)}
                    />
                  </div>
                  {/* {/ city  /} */}
                  <div>
                    <label className="label">
                      <span className="label-font">City</span>
                    </label>
                    <input
                      defaultValue={field?.city}
                      type="text"
                      placeholder="New Jersy"
                      name="city"
                      ref={register}
                      className="input-border input-font w-full focus:outline-none"
                      {...register(`box32.${index}.city`)}
                    />
                  </div>
                  {/* state  */}
                  <div>
                    <label className="label">
                      <span className="label-font">State</span>
                    </label>
                    <select
                      defaultValue={field?.state}
                      className="input-border input-font w-full focus:outline-none"
                      {...register(`box32.${index}.state`)}
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>
                  {/* zip */}
                  <div>
                    <label className="label">
                      <span className="label-font">Zip</span>
                    </label>
                    <input
                      defaultValue={field?.zip}
                      type="number"
                      placeholder="zip"
                      name="zip"
                      className="input-border input-font w-full focus:outline-none"
                      {...register(`box32.${index}.zip`)}
                    />
                  </div>
                  {/* phone */}
                  <div>
                    <label className="label">
                      <span className="label-font">Phone</span>
                    </label>
                    <input
                      defaultValue={field?.phone_one}
                      type="number"
                      placeholder="Phone"
                      name="phone"
                      className="input-border input-font w-full focus:outline-none"
                      {...register(`box32.${index}.phone`)}
                    />
                  </div>

                  {/* npi */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div>
                        <label className="label">
                          <span className="label-font">NPI</span>
                        </label>
                        <input
                          defaultValue={field?.npi}
                          type="text"
                          placeholder="1234"
                          name="npi"
                          className="input-border input-font w-full focus:outline-none"
                          {...register(`box32.${index}.npi`)}
                        />
                      </div>

                      <div
                        onClick={() => remove(index)}
                        className="bg-rose-600 text-white mt-[26px] p-[6px]"
                      >
                        <RiDeleteBin6Line />
                      </div>
                    </div>
                  </div>
                  {/* done */}
                </div>
              </div>
            </div>
          );
        })}

        <input type="submit" />
      </form>
    </div>
  );
}
