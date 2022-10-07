import { CssBaseline } from "@mui/material";
import React, { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { PayColumns } from "./PayPeriod/PayPeriodColumns";
import { useForm } from "react-hook-form";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";

const PayPeriod = () => {
  const data = useMemo(() => PayColumns, []);

  const columns = useMemo(
    () => [
      {
        Header: "From Data",
        accessor: "from_data", // accessor is the "key" in the data
      },
      {
        Header: "To Data",
        accessor: "to_date",
      },
      {
        Header: "Last date to submit time",
        accessor: "submit_time",
      },
      {
        Header: "Check Date",
        accessor: "check_date",
      },
      {
        Header: "Week Day",
        accessor: "week_day",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Pay Period</h1>

        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <h1 className="px-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
              Create Pay Period
            </h1>
          </label>

          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id="pay-box" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box box">
              <label
                htmlFor="pay-box"
                className="btn btn-sm btn-circle hover:bg-primary hover:text-white absolute right-2 top-2"
              >
                ✕
              </label>
              <div>
                <h1 className="text-lg  text-left text-orange-400">
                  Create/Edit Pay Period
                </h1>
                <div className="divider"></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full text-sm">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 mr-2 gap-5">
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Select Pay Period length
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("Length")}
                        >
                          <option value="Mr">Bi Weekly</option>
                          <option value="Mrs">Yearly</option>
                          <option value="Miss">Miss</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Week Day
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("week_day")}
                        >
                          <option value="Mr">Sunday</option>
                          <option value="Mrs">Monday</option>
                          <option value="Miss">Tuesday</option>
                          <option value="Dr">Wednesday</option>
                        </select>
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Select Year
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("year")}
                        >
                          <option value="Mr">2019</option>
                          <option value="Mrs">2020</option>
                          <option value="Miss">2021</option>
                          <option value="Dr">2022</option>
                        </select>
                      </div>

                      {/* End Date  */}
                      <div>
                        {" "}
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            End Date
                          </span>
                        </label>
                        <input
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          type="date"
                          {...register("date")}
                        />
                      </div>
                      {/* staff_number  */}
                      <div className="mt-[-15px]">
                        {" "}
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            After how many days staff can't submit time sheet?
                          </span>
                        </label>
                        <input
                          type="number"
                          name="staff_number"
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("staff_number")}
                        />
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-xs text-gray-500 text-left">
                            Check Date
                          </span>
                        </label>
                        <select
                          className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                          {...register("week_day")}
                        >
                          <option value="Mr">Sunday</option>
                          <option value="Mrs">Monday</option>
                          <option value="Miss">Tuesday</option>
                          <option value="Dr">Wednesday</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="divider"></div>
                  {/* submit box  */}

                  {/* <input type="submit" /> */}

                  <div className="modal-action">
                    <input
                      type="submit"
                      value={"SAVE"}
                      className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                    ></input>
                    <label
                      htmlFor="pay-box"
                      className="py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                    >
                      Close
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CssBaseline />
      <SettingTableBox
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      ></SettingTableBox>
    </div>
  );
};

export default PayPeriod;
