import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ProductsDropdown() {
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
          className="relative w-[90px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>Products</button>
          {isDropdownVisible && 
            <div className="bg-white w-[200px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                    <Link to={"product"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        New Product
                      </li>
                    </Link>

                    <Link to={"product-table"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Product List
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Product Stock Check
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

export default ProductsDropdown
