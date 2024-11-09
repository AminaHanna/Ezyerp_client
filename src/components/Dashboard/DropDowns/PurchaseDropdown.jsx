import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import moreIcon from "../../External Files/Icons/play.png";

function PurchaseDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isSubDropdownVisible, setSubDropdownVisible] = useState(false);
  const [isSubDropVisible, setSubDropVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(prev=>!prev);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setHovered(false);
  };

  const handleClickSubMenu = () => {
    setSubDropdownVisible(prev=>!prev);
  };

  const handleSubMenu = () => {
    setSubDropVisible(prev=>!prev);
  };

  return (
    <>
    <div className="">
      <div className="">
        <div
          className="relative w-[90px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>Purchase</button>
          {isDropdownVisible && 
            <div className="bg-white w-[210px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                    <Link to={"/"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        New Purchase
                      </li>
                    </Link>

                    <Link to={"/"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Purchase Return
                      </li>
                    </Link>

                    <Link to={"/"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={()=>handleSubMenu()}
                      >
                        <p className='flex items-center justify-between'>
                        Purchase Order
                        <img className='w-3 h-3' src={moreIcon} alt="" />
                        </p>
                      </li>
                    </Link>
                    {/* sub-menu */}
                    {isSubDropVisible &&
                    <div className="bg-white -my-8 mx-[200px] absolute w-[200px] shadow-lg transition-all duration-300"
                      onMouseLeave={() => setSubDropVisible(false)}
                      >
                      <ul className="list-none">
                        <Link to={"/"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            Purcahse 1
                          </li>
                        </Link>

                        <Link to={"/"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            purchase 2
                          </li>
                        </Link>
                        </ul>
                    </div>
                    }
                    {/* sub-menu-end */}

                    <Link to={"/"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={()=>handleClickSubMenu()}
                      >
                        <p className='flex items-center justify-between'>
                        Goods Receipt Notes
                        <img className='w-3 h-3' src={moreIcon} alt="" />
                        </p>
                      </li>
                    </Link>
                    {/* sub-menu */}
                    {isSubDropdownVisible &&
                    <div className="bg-white -my-8 mx-[200px] absolute w-[200px] shadow-lg transition-all duration-300"
                      onMouseLeave={() => setSubDropdownVisible(false)}
                      >
                      <ul className="list-none">
                        <Link to={"/"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            New Goods Receipt
                          </li>
                        </Link>

                        <Link to={"/"}>
                          <li
                          className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          >
                            Goods Reciept
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
      </div>
    </div>
    </>
  )
}

export default PurchaseDropdown
