import React from "react";
import { useForm } from "react-hook-form";
import { FiCopy } from "react-icons/fi";

const WorkSchedule = () => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="sm:h-[100vh]">
      <h1 className="text-lg mt-2 text-left text-orange-400">Work Schedule</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* working hours  */}

        <div className="my-5 mx-5">
          <h1 className="">Select Working Hours</h1>
          <div>
            {" "}
            <div className=" my-2 mr-2 gap-5 overflow-scroll">
              <div className="flex items-center my-3 gap-2">
                <h5 className="text-sm text-gray-500 w-[80px] mr-5 ">Day</h5>
                <h5 className="text-sm text-gray-500 w-[125px] px-1">
                  Start Time
                </h5>

                <h5 className="text-sm text-gray-500 w-[130px] mr-5 ">
                  End Time
                </h5>
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Monday</h5>
                <input
                  type="time"
                  name="mon_start_time"
                  // value={time?.mon_end_time}
                  format="h:mm A"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("mon_start_time")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">
                  to
                </span>
                <input
                  type="time"
                  name="mon_end_time"
                  format="h:mm A"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("mon_end_time")}
                />
                <div className="flex items-center gap-2 text-sm font-normal">
                  <FiCopy className="text-secondary" /> Copy time to all
                </div>
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">
                  Tuesday
                </h5>
                <input
                  type="time"
                  name="tus_start"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("tus_start")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">
                  to
                </span>
                <input
                  type="time"
                  name="tus_end"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("tus_end")}
                />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">
                  Wednesday
                </h5>
                <input
                  type="time"
                  name="wed_start"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("wed_start")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">
                  to
                </span>
                <input
                  type="time"
                  name="wed_end"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("wed_end")}
                />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">
                  Thursday
                </h5>
                <input
                  type="time"
                  name="thur_start"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("thur_start")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">
                  to
                </span>
                <input
                  type="time"
                  name="thur_end"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("thur_end")}
                />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Friday</h5>
                <input
                  type="time"
                  name="fri_start"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("fri_start")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">
                  to
                </span>
                <input
                  type="time"
                  name="fri_end"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("fri_end")}
                />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">
                  Saturday
                </h5>
                <input
                  type="time"
                  name="sat_start"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("sat_start")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">
                  to
                </span>
                <input
                  type="time"
                  name="sat_end"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("sat_end")}
                />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Sunday</h5>
                <input
                  type="time"
                  name="sun_start"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("sun_start")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">
                  to
                </span>
                <input
                  type="time"
                  name="sun_end"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("sun_end")}
                />
              </div>
            </div>
            {/* submit  */}
            <input className="pms-button mb-3" type="submit" value={"Save"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkSchedule;
