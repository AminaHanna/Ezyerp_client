import React, { useEffect, useState } from 'react'
import FileDropdown from '../Dashboard/DropDowns/FileDropdown'
import MasterDropdown from '../Dashboard/DropDowns/MasterDropdown'
import ProductsDropdown from '../Dashboard/DropDowns/ProductsDropdown'
import PurchaseDropdown from '../Dashboard/DropDowns/PurchaseDropdown'
import SalesDropdown from '../Dashboard/DropDowns/SalesDropdown'
import TransactionDropdown from '../Dashboard/DropDowns/TransactionDropdown'
import AccountsDropdown from '../Dashboard/DropDowns/AccountsDropdown'
import OfficeDropdown from '../Dashboard/DropDowns/OfficeDropdown'
import ReportsDropdown from '../Dashboard/DropDowns/ReportsDropdown'
import ToolsDropdown from '../Dashboard/DropDowns/ToolsDropdown'
import HelpDropdown from '../Dashboard/DropDowns/HelpDropdown'
import LanguageSelector from '../Dashboard/DropDowns/LanguageSelector'
import buildingIcon from "../External Files/Icons/office-building.png"
import officeIcon from "../External Files/Icons/company.png"
import timeIcon from "../External Files/Icons/chronometer.png"
import adminIcon from "../External Files/Icons/admin.png"
import Navbar from './Navbar'
import { fetchCounters, loginUser } from '../External Files/api/api'

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [counterName, setCounterName] = useState('');
  const [employeeName, setEmployeeName] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  // Fetch employee name and counter details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginResponse = await loginUser();

        if (loginResponse && loginResponse.flag && loginResponse.employee) {
          setEmployeeName(loginResponse.employee.employee_name);
        } else {
          console.error("Employee data not found");
        }

        const counterResponse = await fetchCounters();
        if (counterResponse && counterResponse.flag && counterResponse.counters.length > 0) {
          setCounterName(counterResponse.counters[0].counter_name);
        } else {
          console.error("Counter data not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <>
    <div className="hidden bg-purple-900 h-10 md:flex px-5">
      <FileDropdown/>
      <MasterDropdown/>
      <ProductsDropdown/>
      <PurchaseDropdown/>
      <SalesDropdown/>
      <TransactionDropdown/>
      <AccountsDropdown/>
      <OfficeDropdown/>
      <ReportsDropdown/>
      <ToolsDropdown/>
      <HelpDropdown/>
    </div>

{/* for  mobile view */}
    <div className="">
      <Navbar/>
    </div>

        {/* second header section */}
    <div className="bg-white sm:flex hidden gap-1 py-1 justify-end shadow-md">
      <p className='px-2 border-r-2'>
        <LanguageSelector/>
      </p>

      <p className='flex'>
        <img className='h-5' src={buildingIcon} alt="" />
        <span className='px-2 border-r-2'>WELLFIT MARKETING AGENCY-Periyambalam</span>
      </p>

      <p className='flex'>
        <img className='h-6' src={adminIcon} alt="" />
        <span className='px-2 border-r-2'>{employeeName}</span>
      </p>

      <p className='flex'>
        <img className='h-5' src={officeIcon} alt="" />
        <span className='px-2 border-r-2'>{counterName}</span>
      </p>

      <p className='flex'>
        <img className='h-6' src={timeIcon} alt="" />
        {/* <span className='px-2'>17-Oct-2024 05:35:36 PM</span> */}
        <span className='px-2'>{currentDateTime.toLocaleString()}</span>
      </p>
    </div>
    </>
  )
}

export default Header
