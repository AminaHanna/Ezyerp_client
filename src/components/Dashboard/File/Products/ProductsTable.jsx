import React from 'react';

function ProductsTable() {
  const products = [
    {
      productName: "Sample Product 1",
      shortName: "Sample 1",
      encode: "SP12345",
      barcode: "1234567890123",
      stock: 50,
      purchaseRate: 10.00,
      ct: { units: 15.00 },
      purchaseCost: 8.00,
      mrp: 12.00,
      batch: "B123",
      category: "Electronics",
      sizeGroup: "Medium",
      minQty: 1,
      maxQty: 10,
      length: "20cm",
      remarks: "Best seller",
      type: "Gadget",
      model: "XYZ-2024",
      packingExpense: 0.50,
      warrantyPeriod: "1 Year",
      warrantyRemarks: "Manufacturer warranty",
    },
    {
      productName: "Sample Product 2",
      shortName: "Sample 2",
      encode: "SP67890",
      barcode: "9876543210987",
      stock: 30,
      purchaseRate: 12.00,
      ct: { units: 18.00 },
      purchaseCost: 10.00,
      mrp: 15.00,
      batch: "B456",
      category: "Appliances",
      sizeGroup: "Large",
      minQty: 2,
      maxQty: 20,
      length: "30cm",
      remarks: "New arrival",
      type: "Appliance",
      model: "ABC-2024",
      packingExpense: 1.00,
      warrantyPeriod: "2 Years",
      warrantyRemarks: "Extended warranty",
    },
    {
      productName: "Sample Product 3",
      shortName: "Sample 3",
      encode: "SP54321",
      barcode: "1230984567890",
      stock: 40,
      purchaseRate: 9.50,
      ct: { units: 14.50 },
      purchaseCost: 7.50,
      mrp: 11.00,
      batch: "B789",
      category: "Home Goods",
      sizeGroup: "Small",
      minQty: 3,
      maxQty: 15,
      length: "15cm",
      remarks: "Limited stock",
      type: "Accessory",
      model: "DEF-2024",
      packingExpense: 0.75,
      warrantyPeriod: "6 Months",
      warrantyRemarks: "Limited warranty",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Product Name</th>
              <th className="border border-gray-200 px-4 py-2">Short Name</th>
              <th className="border border-gray-200 px-4 py-2">Encode</th>
              <th className="border border-gray-200 px-4 py-2">Barcode</th>
              <th className="border border-gray-200 px-4 py-2">Stock</th>
              <th className="border border-gray-200 px-4 py-2">Purchase Rate</th>
              <th className="border border-gray-200 px-4 py-2">Sales Rate</th>
              <th className="border border-gray-200 px-4 py-2">Purchase Cost</th>
              <th className="border border-gray-200 px-4 py-2">MRP</th>
              <th className="border border-gray-200 px-4 py-2">Batch</th>
              <th className="border border-gray-200 px-4 py-2">Category</th>
              <th className="border border-gray-200 px-4 py-2">Size Group</th>
              <th className="border border-gray-200 px-4 py-2">Min Qty</th>
              <th className="border border-gray-200 px-4 py-2">Max Qty</th>
              <th className="border border-gray-200 px-4 py-2">Length</th>
              <th className="border border-gray-200 px-4 py-2">Remarks</th>
              <th className="border border-gray-200 px-4 py-2">Type</th>
              <th className="border border-gray-200 px-4 py-2">Model</th>
              <th className="border border-gray-200 px-4 py-2">Packing Expense</th>
              <th className="border border-gray-200 px-4 py-2">Warranty Period</th>
              <th className="border border-gray-200 px-4 py-2">Warranty Remarks</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="border border-gray-200 px-4 py-2">{product.productName}</td>
                <td className="border border-gray-200 px-4 py-2">{product.shortName}</td>
                <td className="border border-gray-200 px-4 py-2">{product.encode}</td>
                <td className="border border-gray-200 px-4 py-2">{product.barcode}</td>
                <td className="border border-gray-200 px-4 py-2">{product.stock}</td>
                <td className="border border-gray-200 px-4 py-2">{product.purchaseRate}</td>
                <td className="border border-gray-200 px-4 py-2">{product.ct.units}</td>
                <td className="border border-gray-200 px-4 py-2">{product.purchaseCost}</td>
                <td className="border border-gray-200 px-4 py-2">{product.mrp}</td>
                <td className="border border-gray-200 px-4 py-2">{product.batch}</td>
                <td className="border border-gray-200 px-4 py-2">{product.category}</td>
                <td className="border border-gray-200 px-4 py-2">{product.sizeGroup}</td>
                <td className="border border-gray-200 px-4 py-2">{product.minQty}</td>
                <td className="border border-gray-200 px-4 py-2">{product.maxQty}</td>
                <td className="border border-gray-200 px-4 py-2">{product.length}</td>
                <td className="border border-gray-200 px-4 py-2">{product.remarks}</td>
                <td className="border border-gray-200 px-4 py-2">{product.type}</td>
                <td className="border border-gray-200 px-4 py-2">{product.model}</td>
                <td className="border border-gray-200 px-4 py-2">{product.packingExpense}</td>
                <td className="border border-gray-200 px-4 py-2">{product.warrantyPeriod}</td>
                <td className="border border-gray-200 px-4 py-2">{product.warrantyRemarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
