import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import useToken from "../../../../../../CustomHooks/useToken";
import { useGetLedgerTransactionsMutation } from "../../../../../../features/Billing_redux/AR_Ledger_redux/ledgerApi";

const ViewTransactions = ({ selectedRowId }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { Text } = Typography;
  const { token } = useToken();

  const [
    getLedgerTransactions,
    { data: ledgerData, isLoading: ledgerLoading },
  ] = useGetLedgerTransactionsMutation();

  useEffect(() => {
    if (selectedRowId?.length > 0) {
      getLedgerTransactions({
        token,
        payload: {
          ids: selectedRowId,
        },
      });
    }
  }, [selectedRowId, getLedgerTransactions, token]);

  //   const column = [
  //     {
  //       title: "Patient",
  //       dataIndex: "patient",
  //       key: "patient",
  //       width: 100,
  //       render: (_, record) => {
  //         return (
  //           <div>
  //             <h1
  //             >
  //               {record?.ledger_client?.client_full_name}
  //             </h1>
  //           </div>
  //         );
  //       },
  //       filteredValue: filteredInfo.patient || null,
  //       onFilter: (value, record) => record.patient.includes(value),
  //       sorter: (a, b) => {
  //         return a.patient > b.patient ? -1 : 1;
  //       },
  //       sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
  //       ellipsis: false,
  //     },
  //     {
  //       title: "Payor",
  //       dataIndex: "payor",
  //       key: "payor",
  //       width: 100,
  //       render: (_, record) => {
  //         return (
  //           <div>
  //             <h1>
  //               {allPayor?.find((p) => p?.payor_id === record?.payor_id)
  //                 ?.payor_name || "-"}
  //             </h1>
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.payor > b.payor ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "payor" ? sortedInfo.order : null,
  //       ellipsis: false,
  //     },
  //     {
  //       title: "DOS",
  //       key: "dos",
  //       dataIndex: "dos",
  //       width: 100,
  //       render: (_, record) => {
  //         return (
  //           <div>
  //             <h1>{dateConverter(record?.ledger_process_clm?.schedule_date)}</h1>
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.dos > b.dos ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "dos" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },
  //     {
  //       title: "CPT",
  //       key: "cpt",
  //       dataIndex: "cpt",
  //       width: 80,
  //       render: (_, record) => {
  //         return (
  //           <div>
  //             <h1>{record?.ledger_process_clm?.cpt}</h1>
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.cpt > b.cpt ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },

  //     {
  //       title: "Unit",
  //       key: "unit",
  //       dataIndex: "unit",
  //       width: 70,
  //       render: (_, record) => {
  //         return (
  //           <div>
  //             <h1>{record?.ledger_process_clm?.units_value_calc}</h1>
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.unit > b.unit ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "unit" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },
  //     {
  //       title: "Date Billed",
  //       key: "date_billed",
  //       dataIndex: "date_billed",
  //       width: 120,
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.date_billed > b.date_billed ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder:
  //         sortedInfo.columnKey === "date_billed" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },
  //     {
  //       title: "Allwd.$",
  //       key: "allowed_amount",
  //       dataIndex: "allowed_amount",
  //       width: 100,
  //       render: (_, record) => {
  //         return (
  //           <div>
  //             <h1>
  //               {record?.lreport_dep_payment?.length > 0
  //                 ? parseFloat(record?.lreport_dep_payment[0]?.amount)?.toFixed(2)
  //                 : (
  //                     parseFloat(record?.ledger_process_clm?.rate) *
  //                     parseFloat(record?.ledger_process_clm?.units)
  //                   )?.toFixed(2)}
  //             </h1>
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.allowed_amount > b.allowed_amount ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder:
  //         sortedInfo.columnKey === "allowed_amount" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },

  //     {
  //       title: "Paid",
  //       key: "paid",
  //       dataIndex: "paid",
  //       width: 70,
  //       render: (_, record) => {
  //         let result = record?.lreport_dep_payment?.map((each) => each?.payment);
  //         let sum = 0;
  //         for (let i = 0; i < result?.length; i++) {
  //           sum += parseFloat(result[i]);
  //         }
  //         return (
  //           <div className="text-center">
  //             {record?.lreport_dep_payment?.length > 0
  //               ? sum?.toFixed(2)
  //               : 0?.toFixed(2)}
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.paid > b.paid ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "paid" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },
  //     {
  //       title: "Adj",
  //       key: "adj",
  //       dataIndex: "adj",
  //       width: 70,
  //       render: (_, record) => {
  //         return (
  //           <div className="text-center">
  //             {record?.lreport_dep_payment?.length > 0
  //               ? parseFloat(record?.lreport_dep_payment[0]?.adjustment)?.toFixed(
  //                   2
  //                 )
  //               : 0?.toFixed(2)}
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.adj > b.adj ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "adj" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },
  //     {
  //       title: "Balance",
  //       key: "balance",
  //       dataIndex: "balance",
  //       width: 70,
  //       render: (_, record) => {
  //         return (
  //           <div className="text-center">
  //             {record?.lreport_dep_payment?.length > 0
  //               ? parseFloat(record?.lreport_dep_payment[0]?.balance)?.toFixed(2)
  //               : (
  //                   parseFloat(record?.ledger_process_clm?.rate) *
  //                   parseFloat(record?.ledger_process_clm?.units)
  //                 )?.toFixed(2)}
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.balance > b.balance ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "balance" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },

  //     {
  //       title: "Claim No",
  //       key: "claim_no",
  //       dataIndex: "claim_no",
  //       width: 80,
  //       render: (_, record) => {
  //         return (
  //           <div>
  //             <h1 className="text-secondary">
  //               {record?.lreport_mclam?.claim_id}
  //             </h1>
  //           </div>
  //         );
  //       },
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.claim_no > b.claim_no ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "claim_no" ? sortedInfo.order : null,
  //       ellipsis: true,
  //     },
  //     {
  //       title: "NT",
  //       key: "nt",
  //       dataIndex: "nt",
  //       width: 60,
  //       filters: [{}],
  //       filteredValue: filteredInfo.nt || null,
  //       onFilter: (value, record) => record.nt.includes(value),
  //       //   sorter is for sorting asc or dsc purcpte
  //       sorter: (a, b) => {
  //         return a.nt > b.nt ? -1 : 1; //sorting problem solved using this logic
  //       },
  //       sortOrder: sortedInfo.columnKey === "nt" ? sortedInfo.order : null,
  //       ellipsis: true,
  //       render: (_, { nt }) => {
  //         return (
  //           <div className="mx-auto">
  //             {nt === true ? (
  //               <span className="font-normal flex justify-center items-center text-green-600">
  //                 <BsFileEarmarkPlusFill />
  //               </span>
  //             ) : (
  //               <span className="font-normal flex justify-center items-center text-gray-500">
  //                 <BsFileEarmarkPlusFill />
  //               </span>
  //             )}
  //           </div>
  //         );
  //       },
  //     },
  //     {
  //       title: "Action",
  //       dataIndex: "operation",
  //       key: "operation",
  //       width: 90,
  //       render: (_, { record }) => {
  //         return <SessionWiseModal record={record}></SessionWiseModal>;
  //       },
  //     },
  //   ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };
  return (
    <div>
      <Table
        rowKey={(record) => record.id}
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        size="small"
        bordered
        className=" text-xs font-normal "
        // columns={column}
        // dataSource={ledgerData}
        // scroll={{
        //   y: 700,
        // }}
        onChange={handleChange}
        summary={(pageData) => {
          let totalAllowed = 0;
          let totalPaid = 0;
          let totalBalance = 0;
          let totalAdj = 0;
          pageData.forEach(({ lreport_dep_payment, ledger_process_clm }) => {
            let presentBalance;
            if (lreport_dep_payment?.length > 0) {
              presentBalance = parseFloat(lreport_dep_payment[0]?.balance);
            } else {
              presentBalance =
                parseFloat(ledger_process_clm?.rate) *
                parseFloat(ledger_process_clm?.units);
            }

            let presentAdj;
            if (lreport_dep_payment?.length > 0) {
              presentAdj = parseFloat(lreport_dep_payment[0]?.adjustment);
            } else {
              presentAdj = 0;
            }

            let presentPaid;
            if (lreport_dep_payment?.length > 0) {
              presentPaid = parseFloat(lreport_dep_payment[0]?.payment);
            } else {
              presentPaid = 0;
            }

            let presentAllwd;
            if (lreport_dep_payment > 0) {
              presentAllwd = parseFloat(lreport_dep_payment[0]?.amount);
            } else {
              presentAllwd =
                parseFloat(ledger_process_clm?.rate) *
                parseFloat(ledger_process_clm?.units);
            }
            totalAllowed += parseFloat(presentAllwd);
            totalPaid += parseFloat(presentPaid);
            totalAdj = parseFloat(totalAdj) + parseFloat(presentAdj);
            totalBalance = parseFloat(totalBalance) + presentBalance;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={2} colSpan={7}>
                  <span className="text-black font-bold flex justify-end mx-5 ">
                    {" "}
                    Total
                  </span>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={8}>
                  <Text className="text-black font-bold flex justify-center">
                    {totalAllowed?.toFixed(2)}
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text className="text-black font-bold flex justify-center">
                    {totalPaid?.toFixed(2)}
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text className="text-black font-bold flex justify-center">
                    {totalAdj?.toFixed(2)}
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text className="text-black font-bold flex justify-center">
                    {totalBalance?.toFixed(2)}
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2} colSpan={3}></Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </div>
  );
};

export default ViewTransactions;
