import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
  
  const menuItems = [
    { to: "/", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: "/atscenters", label: "ATS Centers", icon: <Home className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Overlay (only on small screens when sidebar is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:shadow-none`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
              ATS
            </div>
            <span className="text-lg font-semibold text-blue-800">ATS System</span>
          </div>
          {/* Close Button for mobile */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-4 py-6">
          <div className="space-y-2">
            {menuItems.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                onClick={onClose}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${isActive(to)
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"}`}
              >
                {icon}
                <span className="ml-3">{label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
