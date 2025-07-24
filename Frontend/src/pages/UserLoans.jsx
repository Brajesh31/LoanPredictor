import React from "react";

const UserLoans = () => {
  const loanData = [
    {
      id: "L001",
      amount: 50000,
      status: "Approved",
      date: "2025-06-10",
    },
    {
      id: "L002",
      amount: 30000,
      status: "Pending",
      date: "2025-06-20",
    },
    {
      id: "L003",
      amount: 45000,
      status: "Rejected",
      date: "2025-07-01",
    },
  ];

  const statusColors = {
    Approved: "text-green-600 bg-green-100",
    Pending: "text-yellow-600 bg-yellow-100",
    Rejected: "text-red-600 bg-red-100",
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        My Loan Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="py-3 px-4 text-gray-700 dark:text-gray-300">Loan ID</th>
              <th className="py-3 px-4 text-gray-700 dark:text-gray-300">Amount</th>
              <th className="py-3 px-4 text-gray-700 dark:text-gray-300">Status</th>
              <th className="py-3 px-4 text-gray-700 dark:text-gray-300">Date</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((loan) => (
              <tr key={loan.id} className="border-b dark:border-gray-800">
                <td className="py-3 px-4 text-gray-800 dark:text-white">{loan.id}</td>
                <td className="py-3 px-4 text-gray-800 dark:text-white">₹{loan.amount.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[loan.status]}`}>
                    {loan.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-800 dark:text-white">{loan.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLoans;
