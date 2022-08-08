import React, { useMemo } from 'react';
import { useFilters, usePagination, useSortBy,useTable } from 'react-table';
import TableLayout from './TableLayout';

const TableInstance = ({ tableData }) => {
    console.log(tableData)

    const [columns, data] = useMemo(
        () => {
          const columns = [
            {
              Header: 'ID',
              accessor: 'id'
            },
            {
              Header: 'Patient',
              accessor: 'client_full_name'
            },
 
            {
              Header: 'DOB',
              accessor: 'client_dob'
            },
            {
              Header: 'Upvotes',
              accessor: 'upvotes'
            }
          ];
          return [columns, tableData];
        },
        [tableData]
      );
    
      const tableInstance = useTable({ columns, data },useFilters, useSortBy, usePagination);
      console.log(tableInstance)
    return (
        <div>
            <TableLayout {...tableInstance}></TableLayout>
        </div>
    );
};

export default TableInstance;