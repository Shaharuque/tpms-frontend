import { CssBaseline } from "@mui/material";
import React, { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { PayColumns } from "./PayPeriod/PayPeriodColumns";
import { useForm } from "react-hook-form";

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
                          className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                          className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                          className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                          className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                          className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                          className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                      className="px-5  py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                    ></input>
                    <label
                      htmlFor="pay-box"
                      className="px-5  py-2 border rounded-md"
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
      <div className="pb-3 overflow-y-hidden">
        <table
          className="border w-24  overflow-scroll  sm:w-full "
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="bg-secondary border  px-2 py-1 text-sm text-white"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span className=" ml-4 ">
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⇓ "
                          : " ⇑ "
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          border: "solid 1px gray",
                        }}
                        className="text-xs py-[6px] w-10 md:w-24 text-center text-gray-600 "
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayPeriod;
