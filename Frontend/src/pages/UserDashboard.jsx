import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { BarChart3, User, CheckCircle } from 'lucide-react';

const UserDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4">
        <CardContent className="flex items-center gap-4">
          <BarChart3 className="text-blue-500 w-8 h-8" />
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total Loans</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">12</h2>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4">
        <CardContent className="flex items-center gap-4">
          <CheckCircle className="text-green-500 w-8 h-8" />
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Approved Loans</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">8</h2>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4">
        <CardContent className="flex items-center gap-4">
          <User className="text-purple-500 w-8 h-8" />
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Welcome Back</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
