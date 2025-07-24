import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-2xl shadow-md p-4 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-2 ${className}`}>
      {children}
    </div>
  );
};
