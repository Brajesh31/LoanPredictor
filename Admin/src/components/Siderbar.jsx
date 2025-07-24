import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart2, Users, DollarSign } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Admin</h2>
      <nav className="space-y-4">
        <NavLink to="/admin/users" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Users size={18} /> Users
        </NavLink>
        <NavLink to="/admin/loans" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <DollarSign size={18} /> Loans
        </NavLink>
        <NavLink to="/admin/analytics" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <BarChart2 size={18} /> Analytics
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
