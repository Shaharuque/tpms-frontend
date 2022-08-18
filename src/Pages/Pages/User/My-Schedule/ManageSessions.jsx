import React, { memo, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckPicker, Checkbox, Button, DateRangePicker } from "rsuite";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import UserScheduleTable from "./UserScheduleTable";
import {
  ManageTableColumnsColumn,
  ManageTableColumnsData,
} from "../../ListView/ManageTableColumns";
import { CheckBox } from "../../Settings/SettingComponents/CheckBox";

const ManageSessions = () => {
  const [billable, setBillable] = useState(true);
  const [table, setTable] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const data = useMemo(() => ManageTableColumnsData, []);
  const columns = useMemo(() => [...ManageTableColumnsColumn], []);

  const [patientsSelected, setPatientsSelected] = useState([]);
  const [providerSelected, setProviderSelected] = useState([]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    selectedFlatRows,
    setPageSize,
    // page,
    prepareRow,
  } = useTable(
    { columns, data },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <CheckBox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <CheckBox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { pageIndex, pageSize } = state;

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    // console.log(data);
    setTable(true);
    reset();
  };

  // ***************
  const datat = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
  ].map((item) => ({ label: item, value: item }));

  const footerStyles = {
    padding: "10px 2px",
    borderTop: "1px solid #e5e5e5",
  };

  const footerButtonStyle = {
    float: "right",
    marginRight: 10,
    marginTop: 2,
  };

  const allValue = datat.map((item) => item.value);

  const picker = React.useRef();
  const [value, setValue] = React.useState([]);

  const handleChange = (value) => {
    setValue(value);
  };

  const handleCheckAll = (value, checked) => {
    setValue(checked ? allValue : []);
  };

  return (
    <div className="h-[100vh]">
      <div className="flex flex-wrap justify-between items-center mb-5">
        <h1 className="text-lg my-2 text-orange-500">Manage Sessions</h1>
        <div>
          <Switch
            defaultChecked
            size="small"
            onClick={() => setBillable(!billable)}
          />
          <label
            className="form-check-label inline-block ml-2 text-sm text-gray-500"
            htmlFor="flexSwitchCheckDefault"
          >
            {billable ? "Billable" : "Non-Billable"}
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 my-5 mr-2 gap-5">
          {billable && (
            <div>
              <h1 className="text-xs mb-2 ml-1 mt-2">Provider</h1>
              <select
                className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                {...register("pos")}
              >
                <option value=""></option>
                <option value="Today">Demo data</option>
              </select>
            </div>
          )}
          <div className="w-full">
            <h1 className="text-xs mb-2 ml-1 mt-2 ">Seacrch By</h1>
            <select
              className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
              {...register("pos")}
            >
              <option value="1">Client</option>
            </select>
          </div>

          {billable && (
            <>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Client
                  </span>
                </label>
                <div>
                  <CheckPicker
                    data={datat}
                    placeholder="Select"
                    ref={picker}
                    style={{ width: 224 }}
                    value={value}
                    onChange={handleChange}
                    renderExtraFooter={() => (
                      <div style={footerStyles}>
                        <Checkbox
                          inline
                          indeterminate={
                            value.length > 0 && value.length < allValue.length
                          }
                          checked={value.length === allValue.length}
                          onChange={handleCheckAll}
                        >
                          Select All
                        </Checkbox>

                        <Button
                          style={footerButtonStyle}
                          appearance="primary"
                          size="sm"
                          onClick={() => {
                            picker.current.close();
                          }}
                        >
                          Ok
                        </Button>
                      </div>
                    )}
                  />
                </div>
              </div>
              </>
              )}
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Date Range
                  </span>
                </label>
                <div>
                  <DateRangePicker
                    onChange={(date) => {
                      console.log(date);
                    }}
                    placeholder="Select Date"
                  />
                </div>
              </div>
              <button
                className="  mb-1 mt-8 w-1/2 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Save
              </button>
            
          
        </div>
      </form>
      {billable && (
        <>
          {/* table  */}
          {table && (
            <div className="my-5">
              <UserScheduleTable
                getTableProps={getTableProps}
                headerGroups={headerGroups}
                getTableBodyProps={getTableBodyProps}
                rows={page}
                prepareRow={prepareRow}
              ></UserScheduleTable>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManageSessions;
