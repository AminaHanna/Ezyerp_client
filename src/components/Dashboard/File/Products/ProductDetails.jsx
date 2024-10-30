import React from 'react';

const ProductDetails = () => {
  // Example product object
  const product = {
    productName: "Sample Product",
    shortName: "Sample",
    encode: "SP12345",
    barcode: "1234567890123",
    stock: 50,
    purchaseRate: 10.00,
    ct: { units: 15.00 }, // Assuming ct is an object with units property
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
    productImage: null // Replace with an actual file object if needed
  };

  // Create an array of objects for the product attributes
  const productAttributes = [
    { label: "Product Name", value: product.productName },
    { label: "Short Name", value: product.shortName },
    { label: "Encode", value: product.encode },
    { label: "Barcode", value: product.barcode },
    { label: "Stock", value: product.stock },
    { label: "Purchase Rate", value: product.purchaseRate },
    { label: "Sales Rate", value: product.ct.units },
    { label: "Purchase Cost", value: product.purchaseCost },
    { label: "MRP", value: product.mrp },
    { label: "Batch", value: product.batch },
    { label: "Category", value: product.category },
    { label: "Size Group", value: product.sizeGroup },
    { label: "Min Qty", value: product.minQty },
    { label: "Max Qty", value: product.maxQty },
    { label: "Length", value: product.length },
    { label: "Remarks", value: product.remarks },
    { label: "Type", value: product.type },
    { label: "Model", value: product.model },
    { label: "Packing Expense", value: product.packingExpense },
    { label: "Warranty Period", value: product.warrantyPeriod },
    { label: "Warranty Remarks", value: product.warrantyRemarks },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">Attribute</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {productAttributes.map((attribute, index) => (
              <tr key={index}>
                <td className="border border-gray-200 px-4 py-2"><strong>{attribute.label}:</strong></td>
                <td className="border border-gray-200 px-4 py-2">{attribute.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {product.productImage && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(product.productImage)}
            alt="Product"
            className="w-full h-auto rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
