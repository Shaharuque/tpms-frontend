import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const EmargencyContact = () => {
    const [note, setNote] = useState("");
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        // you can do async server request and fill up form
        setTimeout(() => {
            reset({
                first_name: `tofayel`,
                middle_name: "islam",
            });
        }, 600);
    }, [reset]);

    const onSubmit = (data) => {
        console.log(data);
        console.log(note);
    };
  return (
    <div>
      <div className="p-2">
        <h4 className="text-md mt-2 text-left text-orange-400 mb-3">
          Contact Details
        </h4>
        <button
          type="submit"
          class="
      w-full
      py-1.5
      px-2
      
      text-white
      text-start
      font-normal
      text-xs
      leading-tight
    
      rounded
      shadow-md
    bg-gradient-to-r from-secondary to-primary  hover:to-secondary 
      transition
      duration-150
      ease-in-out"
        >
          Contact Details
        </button>
        <div className="block p-3  border   bg-white max-w-6xl mb-[14px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Address1
                  </span>
                </label>
                <input
                  type="text"
                  name="address1"
                  className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                  {...register("address1")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Address2
                  </span>
                </label>
                <input
                  type="text"
                  name="address2"
                  className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                  {...register("address1")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    City
                  </span>
                </label>
                <input
                  type="text"
                  name="city"
                  className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                  {...register("city")}
                />
              </div>


              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Zip
                  </span>
                </label>
                <input
                  type="text"
                  name="zip"
                  className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                  {...register("zip")}
                />
              </div>

                          <div>
                              <label className="label">
                                  <span className="label-text text-xs text-gray-600 text-left">
                                      State
                                  </span>
                              </label>
                              <select
                                  className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                                  {...register("state")}
                              >
                                  <option value="Speech Therapist">Speech Therapist</option>
                                  <option value="female">Female</option>
                              </select>
                          </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Fax
                  </span>
                </label>
                <input
                  type="text"
                  name="fax"
                  className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                  {...register("fax")}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Main Phone
                  </span>
                </label>
                <input
                  type="text"
                  name="main_phone"
                  className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                  {...register("main_phone")}
                />
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Notes
                  </span>
                </label>
                <textarea
                  {...register("comment")}
                  name="comment"
                  className="border text-sm p-1 mt-1 ml-1 h-24 w-full rounded focus:border-blue-600 focus:outline-none "
                >
                  {/**onChange={(e) => setNote(e.target.value)} */}
                </textarea>
              </div>
            </div>
            <div className="my-3 ml-1">
              <button
                className=" py-[5px]  px-2  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded"
                type="submit"
              >
                Save Contact
              </button>
            </div>
          </form>
        </div>
        <button
          type="submit"
          class="
      w-full
      py-1.5
      px-2
      text-white
      text-start
      font-normal
      text-xs
      leading-tight
      rounded
      shadow-md
      bg-gradient-to-r from-secondary to-primary  hover:to-secondary 
      transition
      duration-150
      ease-in-out"
        >
          Emergency Contact Details
        </button>
      </div>
    </div>
  );
};

export default EmargencyContact;
