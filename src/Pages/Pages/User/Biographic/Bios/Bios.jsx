

import React from "react";
import person from "../../../../Assets/user.png";

export const Bios = () => {




    return (
        <div>
        
            <div >
                <h1 className="text-lg mt-2 text-left text-orange-400 p-2">Bio's</h1>
                <div className="div-img ">
                <div>
                        <img src={person} className=' h-40 ' alt="Dami img not taken" />
                 </div>
                 <div>
                        <div class="mb-3 w-76">
                            
                            <input class="form-control
   " type="file" id="formFile"/>
                        </div>
                </div>
                </div>
                <form >
                    <div className=" grid grid-rows-2 md:grid-cols-3 lg:grid-cols-4  gap-3 p-2">
                        {/* name  */}
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    First Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                className=" px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Middle intial
                                </span>
                            </label>
                            <input
                                type="text"
                                name="middle_name"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Last Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"



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
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"



                            />
                        </div>

                        <div>
                            {" "}
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Staff Birthday
                                </span>
                            </label>
                            <input
                                className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                                type="date"

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
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"



                            />
                        </div>
                        {/* phone & email  */}
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Office Phone
                                </span>
                            </label>
                            <input
                                type="text"
                                name="office_phone"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


                                placeholder="(123)-456-7822"
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
                                name="office_email"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"



                            />
                        </div>





                    </div>

                    <div className="grid grid-cols-3 gap-3 p-2">{/* driving license */}
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Office email
                                </span>
                            </label>
                            <input
                                type="text"
                                name="driving_license"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Drivers License & Expiration Date
                                </span>
                            </label>
                            <input
                                className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                                type="date"

                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Title
                                </span>
                            </label>
                            <select
                                className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"

                            >
                                <option value="Speech Therapist">Speech Therapist</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                    </div>





                    <div className="grid grid-rows-2 lg:grid-cols-4 gap-3 p-2">

                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Hiring Date with Company
                                </span>
                            </label>
                            <input
                                className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                                type="date"

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

                            >
                                <option value="Speech Therapist">Speech Therapist</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Tx Type
                                </span>
                            </label>
                            <select
                                className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"

                            >
                                <option value="Speech Therapist">Select tx type</option>
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
                                name="caqh_id"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


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
                                name="language"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


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
                                name="taxonomy_code"
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


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
                                className="px-2 py-1  text-xs w-full font-normal
                                text-black
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"


                            />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text text-xs text-gray-600 text-left">
                                    Default Timezone:
                                </span>
                            </label>
                            <input
                                className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                                type="date"

                            />
                        </div>
                       

                       
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xs text-gray-600 text-left">
                                Gender
                            </span>
                        </label>
                        <div className="flex items-center">
                            <div className="flex ml-1 mt-1 items-center">
                                <input
                                    type="radio"
                                    name="patient"

                                />
                                <span className="text-xs ml-1 text-gray-600 font-normal">
                                    female
                                </span>
                            </div>
                            <div className="flex ml-1 mt-1 items-center">
                                <input
                                    type="radio"
                                    name="patient"

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
                 


                </form>
            </div>

        </div>
    )
}
