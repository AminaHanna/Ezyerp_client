import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ReportsDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);


  const handleMouseEnter = () => {
    setDropdownVisible(prev=>!prev);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setHovered(false);
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
        <div
          className="relative w-[80px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>Reports</button>
          {isDropdownVisible && 
            <div className="bg-white w-[200px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Purchase & Return
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Sales & Return
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Dump Reports
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Day/Cash/Bank/Other
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      GST Reports
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Stock Report
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Income Report
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Expense Report
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Credit Aging Report
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Outstanding Report
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Debitor list
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Counter Submission
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Customer Statement
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Customer Points Report
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Supplier Statement
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Ledger Statement
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Profit/Loss
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Trail Balance
                    </li>
                  </Link>

                  <Link to={"/admin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Balance Sheet
                    </li>
                  </Link>
                    
                </ul>
            </div>
          }
        </div>
      </header>
    </div>
    </>
  )
}

export default ReportsDropdown
