import React, { useState } from "react";
import { useForm} from "react-hook-form";
import { Switch } from "antd";
import { useEffect } from "react";

const InsuranceDetails = (props) => {
  if(props.ViewDetailData || null){
    console.log('data receve with props')
    console.log("props check",props)

   
  }
 
  const ViewDetailData = props.ViewDetailData;
  const [active, setActive] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("formsubmit", data);
  };

  useEffect(() => {
      // you can do async server request and fill up form
      // setTimeout(() => {

      //   // if(ViewDetailData?.all_insurance_detail){
         
      //   // }

      //   if(ViewDetailData?.selected_insurance_details === 'success'){
      //     console.log("check da 2", ViewDetailData?.selected_insurance_details)
        
      //   }else{

      //     console.log("check data settime out target", ViewDetailData?.all_insurance_detail )
      //     reset({
      //       payor_name: ViewDetailData?.all_insurance_details?.name
      //     });
          
      //   }
      // },
      //  0);

      if(ViewDetailData?.selected_insurance_details === 'success'){
      reset({
      
        payor_name: ViewDetailData?.selected_insurance_details?.payor_name,
        address: ViewDetailData?.selected_insurance_details?.address,
        city: ViewDetailData?.selected_insurance_details?.city,
        state: ViewDetailData?.selected_insurance_details?.state,
        zip: ViewDetailData?.selected_insurance_details?.zip,
        contact_one: ViewDetailData?.selected_insurance_details?.contact_one,
        contact_two: ViewDetailData?.selected_insurance_details?.contact_two,
        phone_one: ViewDetailData?.selected_insurance_details?.phone_one,
        phone_two: ViewDetailData?.selected_insurance_details?.phone_two,
        billing_aber: ViewDetailData?.selected_insurance_details?.billing_aber,
        ele_payor_id: ViewDetailData?.selected_insurance_details?.ele_payor_id,
      });
    }else{

          console.log("check data settime out target", ViewDetailData?.all_insurance_detail )
          reset({
            payor_name: ViewDetailData?.all_insurance_details?.name
          });
        }



    }, [ViewDetailData?.all_insurance_details?.name, ViewDetailData?.selected_insurance_details?.payor_name]);
    // console.log('data receve', ViewDetailData.status)

  return (
    <div className="border p-5">
      <h1 className="text-lg text-orange-500 my-1">Insurance Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-4 gap-y-2">
          {/* name  */}
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("payor_name")}
            />
          </div>
          {/* Address  */}
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Address
              </span>
            </label>
            <input
              type="text"
              name="Address"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("address")}
            />
          </div>
          {/* Address  */}
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                City
              </span>
            </label>
            <input
              type="text"
              name="city"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("city")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                State
              </span>
            </label>
            <div>
              <select
                className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1  w-full focus:outline-none"
                {...register("state")}
              >
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          {/* Address  */}
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Zip
              </span>
            </label>
            <input
              type="text"
              name="zip"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("zip")}
            />
          </div>
          {/* Address  */}
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Contract1
              </span>
            </label>
            <input
              type="text"
              name="contract1"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("contact_one")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Contract2
              </span>
            </label>
            <input
              type="text"
              name="contract2"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("contact_two")}
            />
          </div>
          {/* Address  */}
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Phone1
              </span>
            </label>
            <input
              type="text"
              name="phone1"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("phone_one")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Phone2
              </span>
            </label>
            <input
              type="text"
              name="phone2"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("phone_two")}
            />
          </div>
          <div className="flex justify-start items-end my-2 md:my-0">
            <div className="flex justify-center ml-1 items-center">
              {/* <input
                  type="checkbox"
                  // checked={value ? true : false}
                  name="patient"
                  // onClick={() => {
                  //   setValue(!value);
                  // }}
                /> */}
              <Switch
                size="small"
                checked={active ? true : false}
                onClick={() => setActive(!active)}
              />
              <span className="font-medium ml-1 text-gray-600 text-[16px]">
                Regional Center
              </span>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Billing abreviation(3 char)
              </span>
            </label>
            <input
              type="text"
              name="billing observation"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("billing_aber")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                Electronic Insurance ID
              </span>
            </label>
            <input
              type="text"
              name="Electronic_"
              className="input-border text-gray-600 rounded-sm  text-[16px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("ele_payor_id")}
            />
          </div>
        </div>
        <button
          className=" py-[5px] mt-7 px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          type="submit"
        >
          Save
        </button>
        <button className="py-[5px] mt-7 ml-2 px-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md">
          Delete
        </button>
      </form>
    </div>
  );
};

export default InsuranceDetails;
