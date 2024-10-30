import React from 'react';

function SalesTable({ customers }) {
  return (
    <div className="max-w-screen-2xl mx-auto bg-white rounded shadow-md">
      <div className="overflow-x-auto h-[360px]">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Customer ID</th>
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Address</th>
              <th className="border border-gray-200 px-4 py-2">Mobile No.</th>
              <th className="border border-gray-200 px-4 py-2">GST No.</th>
              <th className="border border-gray-200 px-4 py-2">Remarks</th>
              <th className="border border-gray-200 px-4 py-2">Opening Invoice</th>
              <th className="border border-gray-200 px-4 py-2">Area</th>
              <th className="border border-gray-200 px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td className="border border-gray-200 px-4 py-2">{customer.customerid}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.customer_name}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.address}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.mobileno}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.gstno}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.remarks}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.openinginv}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.area_name}</td>
                <td className="border border-gray-200 px-4 py-2">{customer.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesTable;
