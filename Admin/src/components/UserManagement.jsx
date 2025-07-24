import React, { useState } from "react";

const users = [
  { id: 1, email: "alice.smith@gmail.com", status: "Approved" },
  { id: 2, email: "bob.johnson@gmail.com", status: "Pending" },
  { id: 3, email: "charlie.brown@gmail.com", status: "Rejected" },
  { id: 4, email: "diana.owens@gmail.com", status: "Approved" },
  { id: 5, email: "edward.wilson@gmail.com", status: "Pending" },
  { id: 6, email: "fiona.clark@gmail.com", status: "Rejected" },
  { id: 7, email: "george.miller@gmail.com", status: "Approved" },
  { id: 8, email: "hannah.davis@gmail.com", status: "Pending" },
  { id: 9, email: "ian.roberts@gmail.com", status: "Rejected" },
  { id: 10, email: "julia.white@gmail.com", status: "Approved" },
];

const statusBadge = {
  Approved: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-700",
};

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus === "" || user.status === filterStatus)
  );

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72 p-2 border rounded-md"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Loan Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-md shadow bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Loan Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${statusBadge[user.status]}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredUsers.length === 0 && (
          <p className="p-4 text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
