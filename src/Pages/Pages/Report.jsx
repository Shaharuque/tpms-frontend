import React, { useState } from "react";

const Report = () => {
  const [date, setDate] = useState("");
  const [type, setType] = useState(false);

  const handleType = (e) => {
    setType(!type);
  };

  console.log("date = ", date);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    console.log(event.target.date.value);
    console.log(event.target.tx_type.value);
    console.log(event.target.type.value);
  };
  return (
    <div className="h-[100vh]">
      <form
        className="flex flex-wrap items-center gap-2"
        onSubmit={handlePlaceOrder}
      >
        <div>
          <h1 className="text-xs mb-3 ml-1">Tx Type</h1>
          <select
            name="tx_type"
            className="border rounded-sm px-2 py-2 mx-1 text-xs "
          >
            <option value="0"></option>
            <option value="Insurance Collection">Insurance Collection</option>
            <option value="Payment Deposits">Payment Deposits</option>
            <option value="Payment Deposit Breakdown">
              Payment Deposit Breakdown
            </option>
            <option value="Billed Sessions">Billed Sessions</option>
            <option value="Sessions Pending Billing">
              Sessions Pending Billing
            </option>
            <option value="Max Total Auth Utilization">
              Max Total Auth Utilization
            </option>
            <option value="Authorization Breakdown">
              Authorization Breakdown
            </option>
            <option value="Provider Session Notes">
              Provider Session Notes
            </option>
            <option value="Schedule">Schedule</option>
            <option value="Patient Schedule">Patient Schedule</option>
            <option value="Staff Schedule">Staff Schedule</option>
            <option value="Schedule Billable">Schedule Billable</option>
            <option value="AR Ledger with Balance">
              AR Ledger with Balance
            </option>
            <option value="Aging by IBD (initial billed date)">
              Aging by IBD (initial billed date)
            </option>
            <option value="Primary AR">Primary AR</option>
            <option value="Payee Rate list">Payee Rate list</option>
            <option value="Patient AR-Ledger w/ Note Payee">
              Patient AR-Ledger w/ Note Payee
            </option>
            <option value="Expired Auths">Expired Auths</option>
            <option value="Expiring Auths">Expiring Auths</option>
            <option value="Patient Responsibility">
              Patient Responsibility
            </option>
          </select>
        </div>
        <div>
          <h1 className="text-xs mb-3 ml-1 ">Type</h1>
          <select
            onChange={(e) => handleType(e)}
            name="type"
            className="border rounded-sm px-2 py-2 mx-1 text-xs "
          >
            <option value="Select Tx type">Specific Date</option>
            <option value="Behavior Therapy">Date Range</option>
          </select>
        </div>
        {type && (
          <div>
            {" "}
            <h1 className="text-xs mb-3 ml-1 ">Date Range</h1>
            <input
              name="date"
              className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
              type="date"
            />
          </div>
        )}
        <div>
          <input
            className="hover:shadow-lg rounded-sm bg-secondary text-white py-1 px-3 mt-7 mx-2"
            type="submit"
            value="Export"
          />
        </div>
      </form>
    </div>
  );
};

export default Report;
