import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Clock, BarChart3, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", text: "Home", icon: <Home size={18} /> },
    { path: "/timeline", text: "Timeline", icon: <Clock size={18} /> },
    { path: "/stats", text: "Stats", icon: <BarChart3 size={18} /> },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#14362A] tracking-tight"
          >
            KeenKeeper
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#14362A] text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#14362A] p-2 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
                    isActive
                      ? "bg-[#14362A] text-white"
                      : "text-gray-600 bg-gray-50 hover:bg-gray-100"
                  }`
                }
              >
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
