import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function HelpDropdown() {
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
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>Help</button>
          {isDropdownVisible && 
            <div className="bg-white w-[200px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Any Desk
                      </li>
                    </Link>

                    <Link to={"/admin"}>
                      <li
                      className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      >
                        Control Panel
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

export default HelpDropdown
