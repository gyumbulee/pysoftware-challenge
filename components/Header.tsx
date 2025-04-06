'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { menuItems as mockMenuItems } from '../lib/mockData'; // Import mock data as fallback

type MenuItem = {
  menu_item: string;
  href: string;
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems); // Initialize with mock data
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold">PySoftware</h1>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href}>
                <span className="hover:underline cursor-pointer">{item.menu_item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 px-4 space-y-4 bg-blue-700 py-4 rounded-lg">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href}>
                <span
                  className="block py-2 border-b border-white hover:underline"
                  onClick={() => setIsOpen(false)} // Close the menu after clicking a link
                >
                  {item.menu_item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
