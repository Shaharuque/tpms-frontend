import React from 'react'
import { MdLaunch } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export default function CredenTial() {
  return (
    <div> <div className='p-2'>

      <h4 className="text-md mt-2 text-left text-orange-400 mb-4">Credentials</h4>
      <button type="submit" class="
      w-full
      px-2
      py-1.5
      
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
      <div className='block p-5  border   bg-white max-w-6xl mb-[14px]'>

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <table class="min-w-full">
                  <thead class="border  bg-gradient-to-r from-secondary to-primary  hover:to-secondary ">
                    <tr>
                    
                      <th scope="col" class="border text-sm font-medium text-white px-6 py-1 text-left">
                        Name
                      </th>
                      <th scope="col" class="border text-sm font-medium text-white px-6 py-1 text-left">
                        Credential Type
                      </th>
                      <th scope="col" class="border text-sm font-medium text-white px-6 py-1 text-left">
                        Data Issue
                      </th>
                      <th scope="col" class="border text-sm font-medium text-white px-6 py-1 text-left">
                        Data Expire
                      </th>
                      <th scope="col" class="border text-sm text-white font-medium  px-6 py-1 text-left">
                        File
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border">
                     
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                       <div className="flex justify-center gap-">
                          <div>< MdLaunch /></div>
                          <div><MdDeleteForever /></div>
                       </div>
                      </td>
                    
                    </tr>
                    <tr class="bg-white border">
                     
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      
                    </tr>
                    <tr class="bg-white border">
                      
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap border">
                        Cell
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Add Creddential
          </button>

        </div>

      </div>
      <button type="submit" class="
      w-full
      px-2
      py-1.5
      
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
      ease-in-out">Clearence</button>
      <button type="submit" class="
      w-full
      px-2
      py-1.5
      mt-4
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
      ease-in-out">Qualification</button>
    </div></div>
  )
}
