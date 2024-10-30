import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function OfficeDropdown() {
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
          className="relative w-[70px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>Office</button>
          {isDropdownVisible && 
            <div className="bg-white w-[200px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Staff
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Supplier
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Customer
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Customet Point Settings
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
                        Barcode Printing
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Settings
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Manage Office
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Bank Accounts
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Invoice Prefix
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

export default OfficeDropdown
