import React, { useEffect, useState } from 'react';

function SalesTable({ searchSelectedCustomer, onTotalMRPChange, onTotalGSTChange, onNetTotalChange }) {
  const [discounts, setDiscounts] = useState({});
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, qty) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: qty,
    }));
  };

  const handleDiscountPercentageChange = (productId, discountPercent, mrp, qty) => {
    const discountAmt = (discountPercent / 100) * mrp * qty;
    setDiscounts((prevDiscounts) => ({
      ...prevDiscounts,
      [productId]: { percent: discountPercent, amount: discountAmt },
    }));
  };


  useEffect(() => {
    let totalMRP = 0;
    let totalGST = 0;
    let netTotal = 0;

    searchSelectedCustomer.forEach((item) => {
      const qty = quantities[item.productid] || 1;
      const discount = discounts[item.productid] ? discounts[item.productid].amount : 0;
      const itemTotal = item.mrp * qty;
      const gst = (item.taxrate / 100) * item.mrp * qty;
      
      totalMRP += itemTotal;
      totalGST += gst;
      netTotal += itemTotal + gst - discount;
    });

    onTotalMRPChange(totalMRP);
    onTotalGSTChange(totalGST);
    onNetTotalChange(netTotal);
  }, [searchSelectedCustomer, quantities, discounts, onTotalMRPChange, onTotalGSTChange, onNetTotalChange]);


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
              // Default quantity to 1 if not specified
              const qty = quantities[item.productid] || 1; // Default quantity to 1
              const discount = discounts[item.productid] || { percent: 0, amount: 0 };
               // Calculate GST based on taxrate and mrp
               const gst = (item.taxrate / 100) * item.mrp * qty;
               const totalBeforeDiscount = item.mrp * qty;
               const totalAfterDiscount = totalBeforeDiscount - discount.amount + gst;
     

              return (
                <>
                <tr key={index}>
                <td className="border border-gray-200 px-4 py-2">{index+1}</td>
                <td className="border border-gray-200 px-4 py-2">{item.eancode}</td>
                <td className="border border-gray-200 px-4 py-2">{item.product_name}</td>
                <td className="border border-gray-200 px-4 py-2">{item.hsn_sac}</td>
                <td className="border border-gray-200 px-4 py-2">{item.taxrate}</td>
                <td className="border border-gray-200 px-4 py-2">{item.unit}</td>
                <td className="border border-gray-200 px-4 py-2">{item.mrp}</td>
                <td className="border border-gray-200 px-4 py-2">{item.unitid}</td>
                <td className="border border-gray-200 px-4 py-2">
                  <input
                    type="number"
                    className="w-[50px]"
                    value={qty}
                    onChange={(e) => handleQuantityChange(item.productid, e.target.value)}
                  />
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <input
                    type="number"
                    className="w-[50px]"
                    value={discount.percent}
                    onChange={(e) => handleDiscountPercentageChange(item.productid, e.target.value, item.mrp, qty)}
                  />
                </td>
                <td className="border border-gray-200 px-4 py-2 w-[100px]">{discount.amount.toFixed(2)}</td>
                <td className="border border-gray-200 px-4 py-2">{totalBeforeDiscount.toFixed(2)}</td>
                <td className="border border-gray-200 px-4 py-2">{gst.toFixed(2)}</td>
                <td className="border border-gray-200 px-4 py-2">{totalAfterDiscount.toFixed(2)}</td>
                <td className="border border-gray-200 px-4 py-2">{item.neg_stock}</td>
                <td className="border border-gray-200 px-4 py-2">...</td>
                <td className="border border-gray-200 px-4 py-2">{totalAfterDiscount.toFixed(2)}</td>
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
