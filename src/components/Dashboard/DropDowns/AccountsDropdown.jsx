import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AccountsDropdown() {
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
          className="relative w-[100px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>Accounts</button>
          {isDropdownVisible && 
            <div className="bg-white w-[200px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Chart of Accounts
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Journey Entry
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Contra Entry
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Receipt
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Payment
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Expense
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Income
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Post Dated Cheque
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Migrate Opening Balance
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Update Credit Aging
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Update Leger
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

export default AccountsDropdown
