import React, { memo, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import {
  ManageTableColumnsColumn,
  ManageTableColumnsData,
} from "./ListView/ManageTableColumns";
import { CheckBox } from "./Settings/SettingComponents/CheckBox";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";

const ListView = () => {
  const [billable, setBillable] = useState(true);
  const [table, setTable] = useState(false);

  const data = useMemo(() => ManageTableColumnsData, []);
  const columns = useMemo(() => [...ManageTableColumnsColumn], []);

  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
    { label: "maru 🍓", value: "maru" },
    { label: "mariu 🍓", value: "mariu" },
    { label: "maruy 🍓", value: "maruy" },
  ];

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
  console.log(selectedFlatRows);
  const { pageIndex, pageSize } = state;

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    console.log(data);
    setTable(true);
    reset();
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
              <h1 className="text-xs mb-2 ml-1 ">Patients</h1>
              <MultiSelect
                options={options}
                value={patientsSelected}
                onChange={setPatientsSelected}
                labelledBy="Select"
                className="text-xs"
              />
            </div>
          )}
          <div className="w-full">
            <h1 className="text-xs mb-2 ml-1 ">Provider</h1>
            <MultiSelect
              options={options}
              value={providerSelected}
              onChange={setProviderSelected}
              labelledBy="Select"
              className="text-xs"
            />
          </div>

          {billable && (
            <>
              <div>
                <h1 className="text-xs mb-2 ml-1 ">Place Of Service</h1>

                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("POS")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div>
                <h1 className="text-xs mb-2 ml-1 ">Status</h1>
                <select
                  className=" border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("status")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
            </>
          )}
          <button
            className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Go
          </button>
        </div>
      </form>
      {/* table  */}
      {table && (
        <div className="my-5">
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
          ></SettingTableBox>
        </div>
      )}
    </div>
  );
};

export default memo(ListView);
