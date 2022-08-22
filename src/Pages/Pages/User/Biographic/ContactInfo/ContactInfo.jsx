import React from 'react'

export default function ContactInfo() {
  return (

    <div>

      <h4 className="text-lg mt-2 text-left text-orange-400 p-2">Contact Details</h4>
      <button type="submit" class="
      w-full
      px-6
      py-2.5
     
      text-white
      text-start
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
    bg-gradient-to-r from-secondary to-primary  hover:to-secondary 
      transition
      duration-150
      ease-in-out">Subscribe</button>
      <div className='block p-2  border   bg-white max-w-6xl mb-[14px]'>

        <form >
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


              >
                <option value="Speech Therapist">Speech Therapist</option>
                <option value="female">Female</option>
              </select>
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


              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Mobile
                </span>
              </label>
              <input
                type="text"
                name="mobile"
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

                name="comment"
                className="border text-sm p-1 mt-1 ml-1 h-24 w-full"
              >
                Notes
              </textarea>
            </div>
          </div>
          <div className="my-3 ml-1">
            <button
              className=" py-[5px]  px-4  text-sm font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save Contact
            </button>
          </div>
        </form>

      </div>
      <button type="submit" class="
      w-full
      px-6
      py-2.5
      
      text-white
      text-start
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
    bg-gradient-to-r from-secondary to-primary  hover:to-secondary 
      transition
      duration-150
      ease-in-out">Emergency Contact Details</button>

    </div>
  )
}
