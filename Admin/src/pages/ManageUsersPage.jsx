import React from "react";
import Sidebar from "../components/Siderbar";
import UserManagement from "../components/UserManagement";

const ManageUsersPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <UserManagement />
      </div>
    </div>
  );
};

export default ManageUsersPage;
