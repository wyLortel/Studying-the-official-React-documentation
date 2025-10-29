import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ isDark, toggleTheme }) {

  const [isMobailMenuOpen, setisMobailMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const[searchQuery , serSearchQuery] = useState('');

  return (
    <nav className='w-full text-white px-[8%] lg:px-[12%] flex items-center justify-between bg-white dark:bg-black transition fixed top-0 left-0 z-[9999] '>
      <Link to='/'>
        <div className='flex items-center space-x-2'>
          <div className='bg-gray-800 p-2 px-3 rounded-lg'>
            <i className='bi bi-substack text-white text-2xl'></i>
          </div>
          <h1 className='text-3xl font-bricolage trackin-widest font-bold dark:text-white  text-black'>
            Blog <span className='text-[#f4e005]'>Verse</span>
          </h1>
        </div>
      </Link>

      <ul className='hidden nav-menu lg:flex items-center space-x-6 text-sm font-medium text-black dark:text-white'>
        <li className='hover:text-yellow-400 text-lg cursor-pointer'>
          <Link to=''>
            <i className='bi bi-house-door-fill mr-1'></i>Home
          </Link>
        </li>
        <li className='hover:text-yellow-400 text-lg cursor-pointer'>
          <i className='bi bi-list-ul mr-1'></i>Categeries
        </li>
        <li className='hover:text-yellow-400 text-lg cursor-pointer'>
          <i className='bi bi-clock-history mr-1'></i>Latest Posts
        </li>
        <li className='hover:text-yellow-400 text-lg cursor-pointer'>
          <i className='bi bi-tags-fill mr-1'></i>Tags
        </li>
        <li className='hover:text-yellow-400 text-lg cursor-pointer'>
          <i className='bi bi-archive mr-1'></i>History
        </li>
      </ul>

      <div className='flex items-center space-x-4'>
        <div>
          <i
            className='bi bi-search text-lg cursor-pointer text-black dark:text-white'
            onClick={()=>setShowSearchModal(true)}
          ></i>
        </div>
        <div
          onClick={toggleTheme}
          className='bg-gray-800 flex items-center p-1 rounded-full cursor-pointer'
        >
          {!isDark ? (
            <i className='bi bi-sun text-yellow-400 text-sm mx-1'></i>
          ) : (
            <i className='bi bi-moon text-white text-sm mx-1'></i>
          )}
        </div>
        <button className='bg-white nav-btn text-black dark:bg-black dark:text-white font-semibold px-5 py-2 rounded border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 ease-in-out shadow-sm hover:shadow-md'>
          Register / Login
        </button>
        
        <button className="text-black dark:text-white text-2xl lg:hidden" onClick={()=>serIsMobileMenuOpen(!isMobailMenuOpen)}>
          <i className={`bi ${isMobailMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>

      </div>
    </nav>
  );
}

export default Nav;
