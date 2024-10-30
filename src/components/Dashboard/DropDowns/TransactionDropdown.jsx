import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import moreIcon from "../../External Files/Icons/play.png"

function TransactionDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isSubDropdown1Visible, setSubDropdown1Visible] = useState(false);
  const [isSubDropdown2Visible, setSubDropdown2Visible] = useState(false);


  const handleMouseEnter = () => {
    setDropdownVisible(prev=>!prev);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setHovered(false);
  };

  const handleClickSubMenu1 = () => {
    setSubDropdown1Visible(prev=>!prev);
  };

  const handleClickSubMenu2 = () => {
    setSubDropdown2Visible(prev=>!prev);
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
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>Transaction</button>
          {isDropdownVisible && 
            <div className="bg-white w-[200px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Dump Entry
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Purchase Order
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={()=>handleClickSubMenu1()}
                      >
                        <p className='flex items-center justify-between'>
                        Stock Adjectments
                        <img className='w-3 h-3' src={moreIcon} alt="" />
                        </p>
                      </li>
                    </Link>
                    {/* sub-menu */}
                    {isSubDropdown1Visible &&
                    <div className="bg-white -my-8 mx-[200px] absolute w-[200px] shadow-lg transition-all duration-300"
                      onMouseLeave={() => setSubDropdown1Visible(false)}
                      >
                      <ul className="list-none">
                        <Link to={"/admin"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            stock 1
                          </li>
                        </Link>

                        <Link to={"/admin"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            stock 2
                          </li>
                        </Link>
                        </ul>
                    </div>
                    }
                    {/* sub-menu-end */}

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={()=>handleClickSubMenu2()}
                      >
                        <p className='flex items-center justify-between'>
                        Stock Transfers
                        <img className='w-3 h-3' src={moreIcon} alt="" />
                        </p>
                      </li>
                    </Link>
                    {/* sub-menu */}
                    {isSubDropdown2Visible &&
                    <div className="bg-white -my-8 mx-[200px] absolute w-[200px] shadow-lg transition-all duration-300"
                      onMouseLeave={() => setSubDropdown2Visible(false)}
                      >
                      <ul className="list-none">
                        <Link to={"/admin"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            stock transfer1
                          </li>
                        </Link>

                        <Link to={"/admin"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            stock transfer2
                          </li>
                        </Link>
                        </ul>
                    </div>
                    }
                    {/* sub-menu-end */}
                    
                </ul>
            </div>
          }
        </div>
      </header>
    </div>
    </>
  )
}

export default TransactionDropdown
