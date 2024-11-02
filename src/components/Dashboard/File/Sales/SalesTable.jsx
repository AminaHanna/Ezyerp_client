import React from 'react';

function SalesTable({ searchSelectedCustomer }) {
  return (
    <div className="max-w-screen-2xl mx-auto bg-white rounded shadow-md">
      <div className="overflow-x-auto h-[360px]">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 w-14 py-2 font-semibold">SI NO</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Code</th>
              <th className="border border-gray-200 px-4 w-[300px] py-2 font-semibold">Item Name</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">HSN/SAC</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Tax</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Unit</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">MRP</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Unit Price</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Qty</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Disc%</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Disc Amt</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Total</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">GST</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Total Amount</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Stock</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">?</th>
              <th className="border border-gray-200 px-4 py-2 font-semibold">Tamt</th>
            </tr>
          </thead>
          <tbody>
            {searchSelectedCustomer.map((item, index) => {
              return (
                <>
                <tr key={index}>
                <td className="border border-gray-200 px-4 py-2">{index+1}</td>
                <td className="border border-gray-200 px-4 py-2">{item.productid}</td>
                <td className="border border-gray-200 px-4 py-2">{item.product_name}</td>
                <td className="border border-gray-200 px-4 py-2">{item.hsn_sac}</td>
                <td className="border border-gray-200 px-4 py-2">{item.taxrate}</td>
                <td className="border border-gray-200 px-4 py-2">{item.unit}</td>
                <td className="border border-gray-200 px-4 py-2">{item.mrp}</td>
                <td className="border border-gray-200 px-4 py-2">{item.unitid}</td>
                <td className="border border-gray-200 px-4 py-2">qty</td>
                <td className="border border-gray-200 px-4 py-2">Disc%</td>
                <td className="border border-gray-200 px-4 py-2">disc amt</td>
                <td className="border border-gray-200 px-4 py-2">..</td>
                <td className="border border-gray-200 px-4 py-2">..</td>
                <td className="border border-gray-200 px-4 py-2">{item.total_stock}</td>
                <td className="border border-gray-200 px-4 py-2">{item.neg_stock}</td>
                <td className="border border-gray-200 px-4 py-2">..</td>
                <td className="border border-gray-200 px-4 py-2">..</td>
              </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesTable;
