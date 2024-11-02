import React, { useCallback, useEffect, useState } from "react";
import SalesTable from "./SalesTable";
import { CiCirclePlus } from "react-icons/ci";
import { errorToast } from "../../../External Files/Toast/toast";
import { fetchCustomers, fetchPriceType, fetchSalesItems, fetchSalesMan } from "../../../External Files/api/api";

function Sales() {
  const [selected7Value, setSelected7Value] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [salesman, setSalesMan] = useState([]);
  const [pricetype, setPriceType] = useState([]);
  const [column, setColumn] = useState(0);


// ---------customers----------
  const [ selectedCustomer, setSelectedCustomer] = useState('');
  const [ searchSelectedCustomer, setSearchSelectedCustomer] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    customer: '',
    customer_name: '',
    address: '',
    mobileno: '',
    gstno: '',
    gst: '',
    remarks: '',
    openinginv: '',
    code: '',
    invoiceDate: '',
    invoiceTime: '',
    salesman: '',
    invoiceNo: '',
    so_qt: '',
    type: '',
    ob_amount: '',
        // ...other fields
  });

  const handleCustomerClick = async () => {
    // Fetch customers when the select dropdown is clicked
    if (customers.length === 0) {
      await fetchCustomerDetails();
    }
  }

  
  const fetchCustomerDetails = async () => {
    try {
      const datas = [
        { key: "officeid", value: "1" },
        { key: "officecode", value: "RD01" },
        { key: "financialyearid", value: "1" }
      ];
     

      const response = await fetchCustomers(datas);

        const customersData = response.customers.map(customer => ({
          value: customer.customerid,
          label: customer.customer_name,
          address: customer.address,
          mobileno: customer.mobileno,
          gstno: customer.gstno,
          gst: customer.gstno ? 1 : 0,
          remarks: customer.remarks,
          openinginv: customer.openinginv,
          //...other fields
        }));
        setCustomers(customersData);
    } catch (err) {
      console.error('Error fetching customers:', err);
      errorToast('An error occurred while fetching customers');
    }
  };


    const fetchSalesData = async () => {
      try {
        const data = [
          { key: "officeid", value: "1" },
          { key: "officecode", value: "RD01" },
          { key: "financialyearid", value: "1" },
        ];
        
        const response = await fetchSalesMan(data); // Ensure fetchSalesMan points to the correct endpoint for pricetype
        
        console.log('API response for salesman:', response);
  
        if (response && response.pricetype) {
          const salesManData = {
            value: response.pricetype.employeeid,
            label: response.pricetype.employee_name,
          };
          setSalesMan([salesManData]);
        } else {
          throw new Error('Pricetype data not found');
        }
      } catch (error) {
        console.error('Error fetching salesman data:', error);
        errorToast('An error occurred while fetching salesman data');
      }
    };

    const fetchPriceTypeData = async () => {
      try {
        const data = [
          { key: "officeid", value: "1" },
          { key: "officecode", value: "RD01" },
          { key: "financialyearid", value: "1" },
        ];
        
        const response = await fetchPriceType(data); // Ensure fetchSalesMan points to the correct endpoint for pricetype
        
        console.log('API response for price type:', response);
  
        if (response && response.pricetype) {
          const priceTypeData = {
            value: response.pricetype.pricetypeid,
            label: response.pricetype.pricetypename,
          };
          setPriceType([priceTypeData]);
        } else {
          throw new Error('Pricetype data not found');
        }
      } catch (error) {
        console.error('Error fetching pricetype data:', error);
        errorToast('An error occurred while fetching pricetype data');
      }
    };


  
const searchSalesItems = async (query) => {
  let columnValue;
  let formattedQuery;

  // if (query.trim() === "") {
  //   columnValue = 0;
  //   formattedQuery = "";
  // } else if (query.startsWith("#") && query.length > 1) {
  //   columnValue = 1;
  //   formattedQuery = `%${query.slice(1)}%`;
  // } else if (query.startsWith("$") && query.length > 1) {
  //   columnValue = 0;
  //   formattedQuery = `${query.slice(1)}%`;
  // } else {
  //   columnValue = 2;
  //   formattedQuery = `%${query}%`;
  //   // console.log("No Datas");
  // }
  if(query.startsWith("$"))
    {
      let qty=query.slice(6)/1000;
      let barcode=query.slice(1,6);
      console.log(qty, barcode);
      columnValue=2;
      formattedQuery=barcode;
    }
    else if(query.startsWith("#"))
    {
      let qty=1;
      let barcode=query.slice(1);
      console.log(qty, barcode);
      columnValue=1;
      formattedQuery=barcode;
    } 
    else {
      let qty=1;
      let barcode=query;
      console.log(qty, barcode);
      columnValue=1;
      formattedQuery=barcode;
    }
  setColumn(columnValue);
  

    const data = [
      { key: "officeid", value: "1" },
      { key: "officecode", value: "RD01" },
      { key: "financialyearid", value: "1" },
      { key: "column", value: columnValue },
      { key: "barcode", value: formattedQuery }
    ];

    console.log("Formatted data for API call:", data);

    try {
      const result = await fetchSalesItems(data);
      if (result.flag) {
        setFilteredData(result.salesitems);
      } else {
        setFilteredData([]);
        errorToast("No data found");
      }
    } catch (err) {
      console.error("Error fetching data in searchSalesItems:", err.message);
      errorToast("No Datas Found");
    }
};


  useEffect(() => {
    fetchPriceTypeData();
    fetchSalesData();
    fetchCustomerDetails();
    fetchSalesItems();
  }, []);


  const handleCustomerChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCustomer(selectedValue);

    const selectedCustomerData = customers.find(customer => customer.value === selectedValue);

    setFormData({
      address: selectedCustomerData ? selectedCustomerData.address : '',
      mobileno: selectedCustomerData ? selectedCustomerData.mobileno : '',
      gstno: selectedCustomerData ? selectedCustomerData.gstno : '',
      gst: selectedCustomerData ? (selectedCustomerData.gstno ? 1 : 0) : 0,
      remarks: selectedCustomerData? selectedCustomerData.remarks : '',
      openinginv: selectedCustomerData? selectedCustomerData.openinginv : '',
      //...other fields
    });
  };
        
  // -----------------------------------------------------------------


  useEffect(() => {
    // Set the initial date and time
    const today = new Date().toISOString().split("T")[0];
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);

    setFormData((prevData) => ({
      ...prevData,
      invoiceDate: today,
      invoiceTime: currentTime,
    }));

    // Update the time every second
    const interval = setInterval(() => {
      const newTime = new Date().toTimeString().slice(0, 5); // HH:MM format
      setFormData((prevData) => ({
        ...prevData,
        invoiceTime: newTime,
      }));
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const [oldformData, setoldFormData] = useState({
    customer: "",
    address: "",
    mobileno: "",
    GSTno: "",
    GST: "",
    OBamount: "",
    invoiceDate: "",
    invoiceNo: "",
    salesman: "",
    checkedby: "",
    createdby: "",
    type: "",
    tax: "",
    pricetype: "",
    remarks: "",
    so_qt_no: "",
    payment_type: "",
    couponamount: "",
    billdiscount: "",
    netGST: "",
    netTotal: "",
    totalAmount: "",
    roundoff: "",
    paidAmount: "",
    balance: "",
  });


  const handleselect7Change = (event) => {
    setSelected7Value(event.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

// search popup item for select items
  const handleSelectCustomerFromPopup = (customer) => {
    setSearchSelectedCustomer((prev) => [...prev, customer]);
    setShowPopup(false); // Close popup after selection
  };



  const handleGSTChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, code: value }); // Update formData with GST input value
    setSearchQuery(value);
    

    if (value.trim() !== "") {
      setShowPopup(true);
      // filterData(value);
    
      searchSalesItems(value);
    } else {
      setShowPopup(false);
      // setFilteredData([]);
    }
  };

  const filterData = (query) => {
    const filtered = customers.filter(
      (customer) =>
        customer.gstno.toLowerCase().includes(query.toLowerCase()) ||
        customer.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSearchInputChange = useCallback((e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // filterData(query);
    searchSalesItems(query);
  }, [searchSalesItems]);


  const closePopup = () => {
    setShowPopup(false);
    setSearchQuery("");
    setFilteredData([]); // Reset filtered data when closing the popup
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col h-screen justify-between">

        <div className="">
        <h1 className="bg-purple-900 text-white p-2">New Sale</h1>
        {/* <div className="flex flex-col justify-between"> */}

        <div className="flex flex-wrap gap-5 px-2 bg-purple-100">
          <div className="">
            <div className="flex flex-wrap gap-2 items-center mt-2">
              <label htmlFor="">Customer:</label>
              <input
                type="text"
                name="customer"
                placeholder="Card Holder"
                // value={formData.label}
                value={customers.find(customer => customer.value === selectedCustomer)?.label || ''}
                onChange={handleCustomerChange}
                className="border rounded p-1"
              />
              {/* <select
                id="selectBox"
                value={selectedCustomer}
                onClick={handleCustomerClick}
                onChange={handleCustomerChange}
                className="border p-1 w-[280px]"
              >
                {
                  customers.map((customer) => (
                    <option key={customer.value} value={customer.value}>
                      {customer.label}
                    </option>
                  ))
                }
              </select> */}
              <select
                id="selectBox"
                value={selectedCustomer}
                onClick={handleCustomerClick}
                onChange={handleCustomerChange}
                className="border p-1 w-[285px] sm:w-[278px]"
              >
                <option value=""></option>
                {
                  customers.map((customer, index) => (
                    <option key={`${customer.value}-${index}`} value={customer.value}>
                      {customer.label}
                    </option>
                  ))
                }
              </select>
              <span className="ml-7 font-bold text-2xl">
                <CiCirclePlus />
              </span>
              <input
                type="text"
                name=""
                placeholder=""
                // value={formData.productName}
                onChange={handleChange}
                className="border rounded p-1 sm:ml-6 w-[225px] sm:w-[241px]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <label htmlFor="">Address:</label>
              <textarea
                name="address"
                placeholder=""
                value={formData.address}
                onChange={handleCustomerChange}
                className="border rounded p-1 w-[208px] sm:w-[480px]"
              />
              <div className="">
              <label htmlFor="">OB Amount : </label>
              <input
                type="text"
                name="OBamount"
                placeholder="0"
                value={formData.ob_amount}
                onChange={handleChange}
                className="border rounded p-1 text-center sm:w-[224px]"
              />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center mt-1">
              <label htmlFor="">Mobile: </label>
              <input
                type="text"
                name="mobile"
                placeholder=""
                value={formData.mobileno}
                onChange={handleCustomerChange}
                className="border rounded p-1 sm:ml-3 sm:w-[160px]"
              />
              <div className="">
              <label htmlFor="">GST No: </label>
              <input
                type="text"
                name="gstno"
                placeholder=""
                value={formData.gstno}
                onChange={handleCustomerChange}
                className="border rounded p-1 sm:w-[155px]"
              />
              </div>
              <div className="">
              <label htmlFor="">GST: </label>
              <input
                type="text"
                name="GST"
                placeholder=""
                value={formData.gst}
                onChange={handleCustomerChange}
                className="border rounded text-center p-1 sm:w-[45px]"
              />
              </div>
              <div className="">
              <label htmlFor="">Invoice No : </label>
              <input
                type="text"
                name="invoiceNo"
                placeholder=""
                value={formData.invoiceNo}
                onChange={handleChange}
                className="border rounded p-1 sm:w-[233px]"
              />
              </div>
            </div>
            
            <div className="mt-1 flex flex-wrap items-center gap-3">
            {/* <label htmlFor="GST">GST:</label> */}
                <input
                  type="text"
                  name="code"
                  placeholder="Code/#Name"
                  value={formData.code}
                  onChange={handleGSTChange}
                  className="border p-3 sm:ml-5 rounded sm:w-[535px]"
                />
                {/* Popup */}
                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[70%] text-center">
                      {/* <p className="text-lg">{popupMessage}</p> */}
                      <div className="">
                        {/* search bar */}
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={handleSearchInputChange}
                          // onChange={(e)=> filterData(e.target.value)}
                          className="border rounded-md w-full py-2 px-4 focus:outline-none"
                        />
                        <div className="mt-4 max-h-[300px] overflow-y-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-purple-100">
                                <th className="border p-2">Item Name</th>
                                <th className="border p-2">Unit</th>
                                <th className="border p-2">Batch</th>
                                <th className="border p-2">MRP</th>
                                <th className="border p-2">Rate</th>
                                <th className="border p-2">Stock</th>
                                <th className="border p-2">Code</th>
                              </tr>
                            </thead>
                            <tbody>
                            {filteredData.length > 0 ? (
                              filteredData.map((item, index) => (
                                <tr
                                  key={`${item.productid}-${index}`}
                                  className="border-t cursor-pointer"
                                  onClick={() => {
                                    handleSelectCustomerFromPopup(item);
                                    setShowPopup(false);
                                  }}
                                >
                                  <td className="p-2">{item.eancode}</td>
                                  <td className="p-2">{item.unit}</td>
                                  <td className="p-2">{item.batch_name}</td>
                                  <td className="p-2">{item.mrp}</td>
                                  <td className="p-2">{item.min_rate}</td>
                                  <td className="p-2">{item.total_stock}</td>
                                  <td className="p-2">{item.barcode}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td className="p-2 text-center" colSpan="7">No results found</td>
                              </tr>
                            )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <button
                        onClick={closePopup}
                        className="mt-4 px-4 py-2 bg-purple-900 text-white rounded-md hover:bg-purple-500 focus:outline-none"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
                {/* ------------------------------------ */}
              <div className="">
                <div className="">
                <label className="text-red-500">Invoice Date : </label>
                <input
                  type="date"
                  name="invoiceDate"
                  value={formData.invoiceDate}
                  onChange={handleChange}
                  className="border rounded"
                />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <input
                    type="checkbox"
                    id="tax"
                    name="tax"
                    value={oldformData.tax}
                    onChange={handleChange}
                    className="border rounded"
                  />
                  <label htmlFor="termsOfDelivery">Our Branch</label>
                  <label htmlFor="" className="text-red-500">
                    Pending Bill=60:
                  </label>
                </div>
              </div>
              <div className="">
                <input
                  type="time"
                  name="invoiceDate"
                  value={formData.invoiceTime}
                  onChange={handleChange}
                  className="border rounded sm:mb-6"
                />
              </div>
            </div>
          </div>

          <div className="">
            <h1>Terms Of Delivery</h1>
            {/* checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="tax"
                name="tax"
                value={oldformData.tax}
                onChange={handleChange}
                className="border rounded"
              />
              <label htmlFor="termsOfDelivery">Tax</label>
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="">Sales Man: </label>
              <select
                name="salesman"
                value={formData.salesman}
                onChange={handleChange}
                className="border w-[115px]"
              >
                {/* <option value="">--Choose an option--</option> */}
                {
                  salesman.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="flex gap-2 items-center mt-2">
              <label htmlFor="">Checked By:</label>
              <select
                value={formData.salesman}
                onChange={handleChange}
                className="border"
              >
                {/* <option value="">--Choose an option--</option> */}
                {
                  salesman.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="flex gap-3 items-center mt-2">
              <label htmlFor="">Created By:</label>
              <select
                value={formData.salesman}
                onChange={handleChange}
                className="border"
              >
                {/* <option value="">--Choose an option--</option> */}
                {
                  salesman.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className="">
            <div className="flex items-center gap-2 mt-1">
              <label htmlFor="" className="text-red-500">
                Type :
              </label>
              <select
                value={formData.value}
                onChange={handleChange}
                className="border"
              >
                <option value="option1">GST</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="mt-1">
              <label htmlFor="">Price Type : </label>
              <select
                value={formData.pricetype}
                onChange={handleChange}
                className="border w-[152px]"
              >
                {
                  pricetype.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="flex gap-2 mt-1">
              <label htmlFor="">Remarks:</label>
              <textarea
                name="remarks"
                placeholder=""
                value={formData.remarks}
                onChange={handleCustomerChange}
                className="border rounded"
              />
            </div>

            <div className=" mt-1">
              <label htmlFor="">SO/QT No: </label>
              <select
                value={formData.value}
                onChange={handleChange}
                className="border"
              >
                <option value="option1">SO</option>
                <option value="option2">QT</option>
                <option value="option3">DS</option>
              </select>
              <input
                type="text"
                name="so_qt_no"
                placeholder=""
                value={formData.so_qt_no}
                onChange={handleChange}
                className="border rounded ml-1 px-1 w-[110px] sm:w-[108px]"
              />
            </div>
          </div>
        </div>

        </div>

        <div className="">
          {/* <SalesTable customers={customers} /> */}
          {/* pass selected customers from search popup menu */}
          <SalesTable searchSelectedCustomer={searchSelectedCustomer} />
          {/* {searchSelectedCustomer && <SalesTable searchSelectedCustomer={searchSelectedCustomer}/>} */}
        </div>

          <div className="">
            <div className="">
              <div className="bg-purple-900 px-5 py-2 flex">
                <h1 className="text-white w-[50%]">0 Days</h1>
                <h1 className="text-white text-center font-bold">Total Amount: 0</h1>
              </div>

              <div className="flex flex-wrap justify-between bg-slate-100 pb-1">

                <div className="px-2">
                  <div className="flex flex-wrap mt-1 gap-5 justify-between">
                    <div className="pl-8 sm:pl-5">
                      <label htmlFor="">Payment Type : </label>
                      <select
                        value={selected7Value}
                        onChange={handleselect7Change}
                        className="border sm:w-[200px]"
                      >
                        <option value="option1">Cash</option>
                        <option value="option2">Credit</option>
                        <option value="option3">Cheque</option>
                      </select>
                    </div>

                    <div className="pr-4">
                      <label htmlFor="">Total Amount : </label>
                      <input
                        type="number"
                        name="totalAmount"
                        placeholder="0"
                        value={oldformData.totalAmount}
                        onChange={handleChange}
                        className="border rounded px-2 sm:w-[200px]"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="">Round Off : </label>
                      <input
                        type="number"
                        name="roundOff"
                        placeholder="0"
                        value={oldformData.roundoff}
                        onChange={handleChange}
                        className="border rounded px-2 sm:w-[200px]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-5 mt-1 justify-between">
                    <div className="">
                      <label htmlFor="">Coupon Amount : </label>
                      <input
                        type="number"
                        name="couponAmount"
                        placeholder="0"
                        value={oldformData.couponamount}
                        onChange={handleChange}
                        className="border px-2 rounded sm:w-[200px]"
                      />
                    </div>

                    <div className="sm:pl-10">
                      <label htmlFor="">Net GST : </label>
                      <input
                        type="number"
                        name="netGST"
                        placeholder="0"
                        value={oldformData.netGST}
                        onChange={handleChange}
                        className="border px-2 rounded sm:w-[200px]"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="">Paid Amount : </label>
                      <input
                        type="number"
                        name="paidAmount"
                        placeholder="0"
                        value={oldformData.paidAmount}
                        onChange={handleChange}
                        className="border px-2 rounded sm:w-[200px]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-5 mt-1 justify-between">
                    <div className="sm:pl-7">
                      <label htmlFor="">Bill Discount : </label>
                      <input
                        type="number"
                        name="billDiscount"
                        placeholder="0"
                        value={oldformData.billdiscount}
                        onChange={handleChange}
                        className="border px-2 rounded sm:w-[200px]"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="">Net Total : </label>
                      <input
                      type="number"
                        name="netTotal"
                        placeholder="0"
                        value={oldformData.netTotal}
                        onChange={handleChange}
                        className="border px-2 rounded sm:w-[200px]"
                      />       
                    </div>

                    <div className="">
                      <label htmlFor="">Balance : </label>
                      <input
                        type="number"
                        name="balance"
                        placeholder="0"
                        value={oldformData.balance}
                        onChange={handleChange}
                        className="border px-2 rounded sm:w-[200px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-1">
                  <div className="flex flex-wrap gap-3 items-center">
                    <button
                      type="submit"
                      className="bg-purple-900 text-white px-5 py-1 rounded"
                    >
                      Save & Print
                    </button>
                    <button
                      type="reset"
                      className="bg-slate-400 text-white px-4 py-1 rounded ml-2"
                    >
                      Edit Bill
                    </button>
                    <button
                      type="button"
                      className="bg-slate-400 text-white px-4 py-1 rounded ml-2"
                    >
                      Delete Bill
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      className="bg-purple-900 text-white px-5 py-1 rounded ml-2"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="bg-slate-400 text-white px-5 py-1 rounded ml-2"
                    >
                      Re-Print
                    </button>
                    <button
                      type="button"
                      className="bg-purple-900 text-white px-6 py-1 rounded ml-2"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="bg-purple-900 text-white px-6 py-1 rounded ml-2"
                    >
                      Close
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
      
        </div>
      </form>
    </>
  );
}

export default Sales;