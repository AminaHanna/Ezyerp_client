import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToolsDropdown from '../Dashboard/DropDowns/ToolsDropdown';
import FileDropdown from '../Dashboard/DropDowns/FileDropdown';
import ProductsDropdown from '../Dashboard/DropDowns/ProductsDropdown';
import closeIcon from "../External Files/Icons/close.png"
import barIcon from "../External Files/Icons/menu.png"
import MasterDropdown from '../Dashboard/DropDowns/MasterDropdown';
import PurchaseDropdown from '../Dashboard/DropDowns/PurchaseDropdown';
import SalesDropdown from '../Dashboard/DropDowns/SalesDropdown';
import TransactionDropdown from '../Dashboard/DropDowns/TransactionDropdown';
import AccountsDropdown from '../Dashboard/DropDowns/AccountsDropdown';
import OfficeDropdown from '../Dashboard/DropDowns/OfficeDropdown';
import ReportsDropdown from '../Dashboard/DropDowns/ReportsDropdown';
import HelpDropdown from '../Dashboard/DropDowns/HelpDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="">

          <div className="md:hidden">
            <button
              className="p-2 text-sm font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <p className='text-xl text-white'>
                <img className='h-4' src={closeIcon} alt="" />
              </p> : <p className='text-xl'>
                <img className='h-5' src={barIcon} alt="" />
              </p> }
            </button>
          </div>

      </div>
      {isOpen && (
        <div className="md:hidden top-0">
          <div className="">
            <div className="w-[200px] bg-purple-900 left-0 fixed h-full">
               <div className="mx-8">
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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;