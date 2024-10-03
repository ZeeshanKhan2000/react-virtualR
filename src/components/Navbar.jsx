import { Menu, X } from 'lucide-react'; // Importing Menu and X icons
import { useState } from 'react';
import React from 'react';
import logo from "../assets/logo.png"; // Adjust the path as necessary
import navItems from "../constant/index"; // Adjust the path as necessary

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close the menu on link click
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" style={{ height: '40px', width: '40px' }} />
            <span className="text-xl tracking-tight text-red-700">virtualR</span>
          </div>
          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu" className="lg:hidden">
            {isMobileMenuOpen ? (
              <X className="text-white" /> // X icon when menu is open
            ) : (
              <Menu className="text-white" /> // Menu icon when menu is closed
            )}
          </button>
          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex ml-10 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="text-white">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* Authentication Links */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className='py-2 px-3 border rounded-md'>
              Sign In
            </a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>
              Create Account
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex justify-center items-center flex-col mt-2 p-4 rounded-md">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <li key={index} className="text-white py-2">
                  <a href={item.href} onClick={handleLinkClick}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center space-x-12 items-center mt-4">
              <a href="#" className='py-2 px-3 border rounded-md'>
                Sign In
              </a>
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
