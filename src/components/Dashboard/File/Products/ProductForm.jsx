import React, { useState } from 'react';

const ProductForm = () => {
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState({
    productName: '',
    productId: '',
    shortName: '',
    encode: '',
    barcode: '',
    stock: '',
    purchaseRate: '',
    salesRate: '',
    units: '',
    purchaseCost: '',
    mrp: '',
    batch: '',
    category: '',
    sizeGroup: '',
    minQty: '',
    maxQty: '',
    length: '',
    remarks: '',
    type: '',
    model: '',
    packingExpense: '',
    warrantyPeriod: '',
    warrantyRemarks: '',
    productImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleDelete = () => {
    setFormData({
      productName: '',
      shortName: '',
      encode: '',
      barcode: '',
      stock: '',
      purchaseRate: '',
      salesRate: '',
      units: '',
      purchaseCost: '',
      mrp: '',
      batch: '',
      category: '',
      sizeGroup: '',
      minQty: '',
      maxQty: '',
      length: '',
      remarks: '',
      type: '',
      model: '',
      expiry: '',
      packingExpense: '',
      warrantyPeriod: '',
      level: '',
      weight: '',
      brand: '',
      pack: '',
      margin: '',
      width: '',
      wastage: '',
      warrantyRemarks: '',
      productImage: null,
    });
    setImagePreview('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="">
      <h2 className="text-2xl font-semibold">New Product</h2>
      <div className="">

        <div className="px-5">
          <div className="">
            <div className="flex flex-wrap items-center gap-2">
              <label htmlFor="productName" className="">Product: </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="border rounded px-2"
                required
              />
              {/* <select name="" id="" onChange={handleChange} className='border sm:w-[400px] '>
                <option value={formData.productName}>{formData.productName}</option>
              </select> */}

              <button className='border px-8 border-green-800'>Search</button>
              <button className='bg-purple-900 text-white px-5 rounded-md'>Clear</button>
              <button className='bg-purple-900 text-white px-5 rounded-md'>Close</button>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-1">
              <label htmlFor="shortName" className="">Product Id: </label>
              <input
                type="text"
                id="id"
                name="prodcutId"
                value={formData.productId}
                onChange={handleChange}
                className="border rounded px-2 w-[100px]"
              />
              <label htmlFor="shortName" className="">Product Name: </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="border px-2 rounded md:w-[200px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 px-5 flex flex-wrap">
          <button className='bg-slate-200 px-1 sm:px-5 border border-black'>Product</button>
          <button className='bg-slate-200 px-1 sm:px-5 border border-black'>Barcode</button>
          <button className='bg-slate-200 px-1 sm:px-5 border border-black'>Units</button>
          <button className='bg-slate-200 px-1 sm:px-5 border border-black'>Batch</button>
          <button className='bg-slate-200 px-1 sm:px-5 border border-black'>Price</button>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-24 px-5">
          <div className="">
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <label htmlFor="shortName" className="">Product Name: </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="border px-2 rounded"
              />

              <label htmlFor="shortName" className="">Short Name: </label>
              <input
                type="text"
                id="shortName"
                name="shortName"
                value={formData.shortName}
                onChange={handleChange}
                className="border px-2 rounded w-[150px]"
              />
            </div>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <label htmlFor="encode" className="">Encode: </label>
                <input
                  type="text"
                  id="encode"
                  name="encode"
                  placeholder="Encode"
                  value={formData.encode}
                  onChange={handleChange}
                  className="border px-2 w-[80px] rounded"
                />
                <label htmlFor="encode" className="">Barcode: </label>
                <input
                  type="text"
                  id="barcode"
                  name="barcode"
                  placeholder="Barcode"
                  value={formData.barcode}
                  onChange={handleChange}
                  className="border px-2 w-[80px] rounded"
                />
                
                <label htmlFor="units" className="">Units: </label>
                <input
                  type="text"
                  id="units"
                  name="units"
                  placeholder="Units"
                  value={formData.units}
                  onChange={handleChange}
                  className="border px-2 sm:ml-6 w-[80px] rounded"
                />

                <label htmlFor="tax" className="">Tax: </label>
                <select name="" id="" className='px-2 border'>
                  <option value="">Select Tax</option>
                  <option value="5%">5%</option>
                  <option value="10%">10%</option>
                </select>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <label htmlFor="stock" className="">Stock:</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="0.00"
                  value={formData.stock}
                  onChange={handleChange}
                  className="border px-2 sm:ml-3 w-[80px] rounded"
                />

                <label htmlFor="purchaserate" className="">Pur Rate:</label>
                <input
                  type="number"
                  id="purchaserate"
                  name="purchaserate"
                  placeholder="0.00"
                  value={formData.purchaseRate}
                  onChange={handleChange}
                  className="border px-2 w-[80px] rounded"
                />

                <label htmlFor="purchasecost" className="">Pur Cost:</label>
                <input
                  type="number"
                  id="purchasecost"
                  name="purchasecost"
                  placeholder="0.00"
                  value={formData.purchaseCost}
                  onChange={handleChange}
                  className="border px-2 w-[80px] rounded"
                />

                <label htmlFor="stock" className="">MRP:</label>
                <input
                  type="number"
                  id="mrp"
                  name="mrp"
                  placeholder="0.00"
                  value={formData.mrp}
                  onChange={handleChange}
                  className="border px-2 w-[80px] rounded"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <label htmlFor="batch" className="">Batch:</label>
                <input
                  type="text"
                  id="batch"
                  name="batch"
                  placeholder="Batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="border px-2 sm:ml-2 w-[80px] rounded"
                />

                <label htmlFor="salesrate" className="">Sales Rate:</label>
                <input
                  type="number"
                  id="salesrate"
                  name="salesrate"
                  placeholder="0.00"
                  value={formData.salesRate}
                  onChange={handleChange}
                  className="border px-2 w-[80px] rounded"
                />

                <label htmlFor="salecost" className="">Calculation:</label>
                <select name="" id="" className='border px-2 rounded'>
                  <option value="">Purchase Cost+Purchase Cost%</option>
                  <option value="Gross">Gross</option>
                  <option value="Net">Net</option>
                </select>
              </div>
           
          </div>

          <div className="-mt-16">
            <div className="border w-[150px] h-[150px]">
              {imagePreview && (
                <div className="">
                  <img src={imagePreview} alt="Product Preview" className="h-[150px] w-[150px] rounded" />
                </div>
              )}
            </div>
            <div className="">
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                onChange={handleFileChange}
                className=""
                required
              />
            </div>
          </div>

        </div>

      </div>

      <div className="">
        <div className="flex flex-wrap">
          <div className="px-5">
            <div className="flex flex-col">
              <label htmlFor="category" className="">Category: </label>
              <select name="" id="" className='border px-2 w-[200px] rounded'>
                <option value="">Select Category</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="item" className="">Item Type: </label>
              <select name="" id="" className='border w-[200px] px-2 rounded'>
                <option value="">Standard</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="minQty" className="">Min Qty: </label>
              <input
                type="number"
                id="minQty"
                name="minQty"
                placeholder="1"
                value={formData.minQty}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="expiry" className="">Expiry Date: </label>
              <input
                type="number"
                id="expiry"
                name="expiry"
                placeholder="0"
                value={formData.expiry}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="length" className="">Length: </label>
              <input
                type="number"
                id="length"
                name="length"
                placeholder="0"
                value={formData.length}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
          </div>

          <div className="px-5">
            <div className="flex flex-col">
              <label htmlFor="group" className="">Size group: </label>
              <select name="" id="" className='border px-2 w-[200px] rounded'>
                <option value="">Select Group</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="item" className="">Stock Type: </label>
              <select name="" id="" className='border w-[200px] px-2 rounded'>
                <option value="">Standard</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="maxqty" className="">Max Qty: </label>
              <input
                type="number"
                id="maxqty"
                name="maxqty"
                placeholder="1"
                value={formData.maxQty}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="expense" className="">Packing Expense: </label>
              <input
                type="number"
                id="expense"
                name="expense"
                placeholder="0"
                value={formData.packingExpense}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="months" className="">Warranty Period[months]: </label>
              <input
                type="number"
                id="warranty"
                name="warranty"
                placeholder="0.00"
                value={formData.warrantyPeriod}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
          </div>

          <div className="px-5">
            <div className="flex flex-col">
              <label htmlFor="model" className="">Model: </label>
              <select name="" id="" className='border px-2 w-[200px] rounded'>
                <option value="">Select</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="type" className="">Type: </label>
              <select name="" id="" className='border w-[200px] px-2 rounded'>
                <option value="">Goods</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="level" className="">Record Level: </label>
              <input
                type="number"
                id="level"
                name="level"
                placeholder="1"
                value={formData.level}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="wastage" className="">Wastage %: </label>
              <input
                type="number"
                id="wastage"
                name="wastage"
                placeholder="0"
                value={formData.wastage}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="weight" className="">Weight: </label>
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="0"
                value={formData.weight}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
          </div>

          <div className="px-5">
            <div className="flex flex-col">
              <label htmlFor="category" className="">Brand: </label>
              <select name="" id="" className='border px-2 w-[200px] rounded'>
                <option value=""></option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div className="mt-1 flex gap-2">
              {/* toggle */}
              <label htmlFor="toggle" className="">Tax Included ?</label>
              <input
                type="checkbox"
                id="toggle"
                name="toggle"
                value={formData.toggle}
                onChange={handleChange}
                className="border text-center rounded"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="pack" className="">Qty/Pack: </label>
              <input
                type="number"
                id="pack"
                name="pack"
                placeholder="1"
                value={formData.pack}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="margin" className="">Basic Margin %: </label>
              <input
                type="number"
                id="margin"
                name="margin"
                placeholder="0"
                value={formData.margin}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
            <div className="mt-1 flex flex-col">
              <label htmlFor="width" className="">Width: </label>
              <input
                type="number"
                id="width"
                name="width"
                placeholder="0"
                value={formData.width}
                onChange={handleChange}
                className="border text-center rounded w-[100px]"
              />
            </div>
          </div>

        </div>

        <div className="px-5 flex flex-wrap sm:gap-20">
          <div className="flex flex-col">
            <label htmlFor="">Remarks:</label>
            <textarea
            id="remarks"
            name="remarks"
            // rows="4"
            value={formData.remarks}
            onChange={handleChange}
            className="border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Warranty Remarks:</label>
            <textarea
            id="remarks"
            name="remarks"
            // rows="4"
            value={formData.remarks}
            onChange={handleChange}
            className="border rounded"
            />
          </div>

          <div className="">
            <div className="flex gap-2 m-2">
              <button type='submit' className='bg-gradient-to-r from-purple-600 via-purple-800 to-blue-900 text-white w-20 rounded-md'>Save</button>
              <button type='button' className='bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 text-white w-20 rounded-md'>Edit</button>
            </div>

            <div className="flex gap-2 m-2">
              <button type='button' className='bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 text-white w-20 rounded-md' onClick={handleDelete}>Delete</button>
              <button type='button' className='bg-gradient-to-r from-purple-600 via-purple-800 to-blue-900 text-white w-20 rounded-md' onClick={handleDelete}>Clear</button>
            </div>
          </div>

        </div>
      </div>
    </form>
    </>
  );
};

export default ProductForm;
