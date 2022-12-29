import React from "react";

const ListViewNavbar = () => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 2xl:grid-cols-8 gap-2 mb-2">
          {billable && (
            <div>
              <label className="label">
                <span className="label-text mb-[2px] text-[16px] text-gray-100 text-left">
                  Clients
                </span>
              </label>

              <Clients
                patients={patients}
                setPatientId={setPatientId}
                receivedData={receivedData}
              ></Clients>
            </div>
          )}
          <div className="w-full">
            <label className="label">
              <span className="label-text mb-[2px] text-[16px] text-gray-100 text-left">
                Provider
              </span>
            </label>

            <Providers stuffs={stuffs} setStuffsId={setStuffsId}></Providers>
          </div>

          {billable ? (
            <>
              <div>
                <label className="label">
                  <span className="label-text text-[16px] text-gray-100 text-left">
                    Place of Services
                  </span>
                </label>
                <div>
                  <select
                    className=" bg-transparent border-b-[3px] border-[#ffffff] text-white py-[4px]  px-1  font-medium  text-[14px] w-full focus:outline-none"
                    {...register("place_of_service")}
                  >
                    <option value="" className="text-black">
                      Select
                    </option>
                    <option value="follow up" className="text-black">
                      Today's follow up
                    </option>
                    <option value="cat" className="text-black">
                      Lost 7 days
                    </option>
                    <option value="15" className="text-black">
                      Lost 15 days
                    </option>
                    <option value="15" className="text-black">
                      Lost 30 days
                    </option>
                    <option value="15" className="text-black">
                      30 days & over
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text  text-[16px] text-gray-100 text-left">
                    Selected date
                  </span>
                </label>
                {/* Date Range calender will be set here */}
                <div className="">
                  <div
                    onClick={() => setOpenCalendar(true)}
                    className="flex flex-wrap justify-center items-center border-b-[3px] border-[#ffffff] px-1 py-[4px] text [14px] w-full"
                  >
                    <input
                      value={
                        startDate
                          ? `${startMonth} ${startDay}, ${startYear}`
                          : "Start Date"
                      }
                      readOnly
                      className="focus:outline-none py-[1px] font-medium text-center bg-transparent text-white w-1/3 cursor-pointer"
                      {...register("start_date")}
                    />
                    <BsArrowRight className="w-1/3 text-white"></BsArrowRight>
                    <input
                      value={
                        endDate
                          ? `${endMonth} ${endDay}, ${endYear}`
                          : "End Date"
                      }
                      readOnly
                      className="focus:outline-none font-medium text-center bg-transparent text-white w-1/3 cursor-pointer"
                      {...register("end_date")}
                    />
                  </div>
                </div>
                {/* Multi date picker component called */}
                <div>
                  <div
                    ref={refClose}
                    // className="absolute z-10 md:ml-[5%] lg:ml-[10%] xl:ml-[27%] 2xl:ml-[35%]s"
                    className="absolute mt-2 z-10 sm:ml-[-290px]"
                  >
                    {openCalendar && (
                      <CustomDateRange
                        range={range}
                        setRange={setRange}
                        handleCancelDate={handleCancelDate}
                        setOpen={setOpenCalendar}
                      ></CustomDateRange>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="label-text text-[16px] text-gray-100 text-left">
                      status
                    </span>
                  </label>
                  <div>
                    <select
                      className="bg-transparent border-b-[3px] border-[#ffffff] px-1 py-[4px] font-medium text-white  text-[14px] w-full focus:outline-none"
                      {...register("status")}
                    >
                      <option value="" className="text-black">
                        Select
                      </option>
                      <option value="Today" className="text-black">
                        Today's follow up
                      </option>
                      <option className="text-black" value="UK">
                        Lost 7 days
                      </option>
                      <option className="text-black" value="15">
                        Lost 15 days
                      </option>
                      <option className="text-black" value="15">
                        Lost 30 days
                      </option>
                      <option className="text-black" value="15">
                        30 days & over
                      </option>
                    </select>
                  </div>
                </div>
                <button
                  className=" mb-3 mt-[35px] sm:w-1/4 pms-white-button"
                  type="submit"
                >
                  Go
                </button>
              </div>
            </>
          ) : (
            <button
              className=" mb-3 mt-[35px] sm:w-1/4 pms-white-button"
              type="submit"
            >
              Go
            </button>
          )}
          {table && (
            <>
              <div className="  ">
                <div className="px-2 py-2 w-full mr-2 mt-[35px] bg-white from-primary text-sm  hover:to-secondary text-secondary border border-secondary rounded-sm flex justify-between items-center ">
                  <input
                    placeholder="Search here..."
                    onChange={(e) => globalFilter(e.target.value)}
                    className="focus:outline-none w-full"
                  />
                  <label>
                    <BiSearchAlt />
                  </label>
                </div>
              </div>
              <button
                onClick={clearFilters}
                className="mb-2 mt-[35px]  w-1/3 px-1  bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
              >
                Clear filters
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ListViewNavbar;
