import React, { useEffect, useRef, useState } from 'react';

function SalesTable({ searchSelectedCustomer, discounts, onTotalMRPChange, onTotalGSTChange, onNetTotalChange, focusCodeInput }) {
  const [quantities, setQuantities] = useState({});
  const [discountAmounts, setDiscountAmounts] = useState({});
  const [discountPercentages, setDiscountPercentages] = useState({});

  const handleQuantityChange = (productId, qty) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: qty,
    }));
  };

  const handleDiscountPercentageChange = (productId, discountPercent, mrp, qty) => {
    const discountAmt = ((discountPercent / 100) * mrp * qty).toFixed(2);
    setDiscountPercentages((prevPercentages) => ({
      ...prevPercentages,
      [productId]: discountPercent,
    }));
    setDiscountAmounts((prevAmounts) => ({
      ...prevAmounts,
      [productId]: parseFloat(discountAmt),
    }));
  };

  useEffect(() => {
    let totalMRP = 0;
    let totalGST = 0;
    let netTotal = 0;

    searchSelectedCustomer.forEach((item) => {
      const qty = quantities[item.productid] || 1;
      const discountPercent = discountPercentages[item.productid] || 
        (discounts && discounts.disc_perc ? parseFloat(discounts.disc_perc) : parseFloat(discounts.estimatedisc_perc) || 0);
      const discountAmount = discountAmounts[item.productid] || ((discountPercent / 100) * item.mrp * qty);
      const itemTotal = item.mrp * qty;
      const gst = (item.taxrate / 100) * item.mrp * qty;
      const totalAfterDiscount = itemTotal - discountAmount;
      
      totalMRP += totalAfterDiscount;
      totalGST += gst;
      netTotal += itemTotal + gst - discountAmount;
    });

    onTotalMRPChange(totalMRP);
    onTotalGSTChange(totalGST);
    onNetTotalChange(netTotal);
  }, [searchSelectedCustomer, quantities, discounts, discountPercentages, discountAmounts, onTotalMRPChange, onTotalGSTChange, onNetTotalChange]);

  const qtyRefs = useRef([]);
  const discRefs = useRef([]);

  useEffect(() => {
    if (searchSelectedCustomer.length > 0) {
      const lastIndex = searchSelectedCustomer.length - 1;
      if (qtyRefs.current[lastIndex]) {
        qtyRefs.current[lastIndex].focus();
      }
    }
  }, [searchSelectedCustomer]);

  const handleQtyKeyDown = (e, index) => {
    if (e.key === 'Enter' && discRefs.current[index]) {
      e.preventDefault();
      discRefs.current[index].focus();
    }
  };

  const handleDiscKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      focusCodeInput();
    }
  };

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
              const qty = quantities[item.productid] || 1;
              const gst = (item.taxrate / 100) * item.mrp * qty;
              const discountPercent = discountPercentages[item.productid] || 
                (discounts && discounts.disc_perc ? parseFloat(discounts.disc_perc) : parseFloat(discounts.estimatedisc_perc) || 0);
              const discountAmount = discountAmounts[item.productid] || (discountPercent / 100) * item.mrp * qty;
              const totalBeforeDiscount = item.mrp * qty;
              const totalAfterDiscount = totalBeforeDiscount - discountAmount;
              const totalGSTandDiscount = totalAfterDiscount + gst;

              return (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.eancode || item.barcode}</td>
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
                      ref={(el) => (qtyRefs.current[index] = el)}
                      onChange={(e) => handleQuantityChange(item.productid, e.target.value)}
                      onKeyDown={(e) => handleQtyKeyDown(e, index)}
                    />
                  </td>
                  <td className="border border-gray-200 px-4 py-2 w-[100px]">
                    <input
                      type="number"
                      className="w-[60px]"
                      value={discountPercent}
                      ref={(el) => (discRefs.current[index] = el)}
                      onKeyDown={handleDiscKeyDown}
                      onChange={(e) => handleDiscountPercentageChange(item.productid, parseFloat(e.target.value) || 0, item.mrp, qty)}
                    />
                  </td>
                  <td className="border border-gray-200 px-4 py-2 w-[100px]">{discountAmount.toFixed(2)}</td>
                  <td className="border border-gray-200 px-4 py-2">{totalAfterDiscount.toFixed(2)}</td>
                  <td className="border border-gray-200 px-4 py-2">{gst.toFixed(2)}</td>
                  <td className="border border-gray-200 px-4 py-2">{totalGSTandDiscount.toFixed(2)}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.neg_stock}</td>
                  <td className="border border-gray-200 px-4 py-2">...</td>
                  <td className="border border-gray-200 px-4 py-2">{totalGSTandDiscount.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesTable;
