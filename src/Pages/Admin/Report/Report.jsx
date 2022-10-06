import React, { useState } from "react";

const Report = () => {
  const [type, setType] = useState("");

  const handleType = (e) => {
    setType(e);
  };
  console.log(type);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    // console.log(event.target.date.value);
    // console.log(event.target.tx_type.value);
    // console.log(event.target.type.value);
  };
  return (
    <div className="h-[100vh]">
      <form
        className="flex flex-wrap items-center gap-2"
        onSubmit={handlePlaceOrder}
      >
        <div>
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
              All Report
            </span>
          </label>
          <select
            name="tx_type"
            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
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
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
              Type
            </span>
          </label>
          <select
            onChange={(e) => setType(e.target.value)}
            name="type"
            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
          >
            <option value=""></option>
            <option value="specific_date">Specific Date</option>
            <option value="date_range">Date Range</option>
          </select>
        </div>

        <div>
          <input
            className="hover:shadow-lg rounded-md bg-secondary text-white py-2 text-xs px-3 mt-6 mx-2"
            type="submit"
            value="Export"
          />
        </div>
      </form>
    </div>
  );
};

export default Report;
