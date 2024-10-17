"use client";
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

console.log(isOpen);


  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
     text-white p-4 shadow-lg h-24 flex justify-between items-center ">
      <div className="mx-8 px-4 hover:animate-bounce">
        <Link href="/" className="text-2xl font-bold border p-4 rounded-full hover:bg-gray-800 hover:text-red-600 hover:text-3xl">
        Learn8</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Hamburger icon */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row md:items-center md:gap-5
       text-xl font-semibold absolute top-24 left-0 right-0 md:bg-transparent md:relative 
       md:top-auto md:left-auto md:right-auto`}>
        <ul className="flex flex-col md:flex-row list-none gap-5 p-4 md:p-0">
          <li className="hover:uppercase hover:scale-110 hover:text-red-600 hover:bg-black hover:p-2 hover:rounded-md">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:uppercase hover:scale-110 hover:text-red-600  hover:bg-black hover:p-2 hover:rounded-md">
            <Link href="/">About</Link>
          </li>
          <li className="hover:uppercase hover:scale-110 hover:text-red-600  hover:bg-black hover:p-2 hover:rounded-md">
            <Link href="/">Contact</Link>
          </li>
          <li className="hover:uppercase hover:scale-110 hover:text-red-600  hover:bg-black hover:p-2 hover:rounded-md">
            <Link href="/">Services</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex gap-3 text-xl font-semibold">
        <button className="hover:uppercase hover:scale-110 hover:text-red-600 hover:bg-gray-800 border rounded m-2 p-2 hover:shadow-md">
          LogIn
        </button>
        <button className="hover:uppercase hover:scale-110 hover:text-red-600 hover:bg-gray-800 border rounded m-2 p-2 hover:shadow-md">
          SignUp
        </button>
      </div>
    </nav>
  );
};

export default Nav;
