import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { useAuth } from '../../SignIn/Auth/AuthContext';

function FileDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const { logout } = useAuth();


  const handleMouseEnter = () => {
    setDropdownVisible(prev=>!prev);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setHovered(false);
  };

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="relative w-[50px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`p-2 cursor-pointer ${isHovered ? 'bg-white text-black' : 'text-white'}`}>File</button>
          {isDropdownVisible && 
            <div className="bg-white w-[200px] shadow-lg transition-all duration-300">
                <ul className="list-none">
                  <Link to={"/"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    >
                      Dashboard
                    </li>
                  </Link>

                  <Link to={"/signin"}>
                    <li
                    className="py-1 px-5 transition-all duration-300 hover:text-purple-700 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={handleLogout}
                    >
                      <p className='flex justify-between items-center gap-2'>
                        Logout
                        <LuLogOut />
                      </p>
                    </li>
                  </Link>
                </ul>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default FileDropdown;
