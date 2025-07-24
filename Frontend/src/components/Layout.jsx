// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   Home,
//   LayoutDashboard,
//   User,
//   FileText,
//   Menu,
//   X,
//   Moon,
//   Sun,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
// } from "lucide-react";
// import { jwtDecode } from "jwt-decode";
// import { toast } from "react-toastify";

// const Layout = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [username, setUsername] = useState("User");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUsername(decoded?.name || "User");
//       } catch (err) {
//         setUsername("User");
//       }
//     }
//   }, []);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const toggleCollapse = () => setSidebarCollapsed(!sidebarCollapsed);
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     toast.success("Logged out successfully");
//     navigate("/login");
//   };

//   const navItems = [
//     { path: "/", label: "Home", icon: <Home size={18} /> },
//     { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
//     { path: "/profile", label: "Profile", icon: <User size={18} /> },
//     { path: "/loans", label: "My Loans", icon: <FileText size={18} /> },
//   ];

//   return (
//     <div className={`min-h-screen flex transition-all duration-300 ${darkMode ? "dark bg-blue-900 text-white" : "bg-gray-50 text-black-900"}`}>
      
//       {/* Mobile toggle */}
//       <button
//         onClick={toggleSidebar}
//         className="md:hidden p-4 absolute z-20 top-0 left-0"
//       >
//         {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`bg-white dark:bg-gray-800 shadow-md h-full fixed md:static z-10 transform transition-all duration-300
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
//           ${sidebarCollapsed ? "w-20" : "w-64"}
//         `}
//       >
//         <div className="p-4 flex items-center justify-between">
//           <span className={`text-xl font-bold ${sidebarCollapsed && "hidden"}`}>User Panel</span>
//           <button onClick={toggleCollapse} className="hidden md:block">
//             {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
//           </button>
//         </div>

//         <nav className="space-y-4 px-4">
//           {navItems.map(({ path, label, icon }) => (
//             <NavLink
//               to={path}
//               key={path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-2 py-2 rounded-md transition-colors ${
//                   isActive
//                     ? "bg-blue-100 text-blue-600 dark:bg-blue-900"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-700"
//                 }`
//               }
//             >
//               {icon}
//               {!sidebarCollapsed && <span>{label}</span>}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Bottom controls */}
//         <div className="mt-auto px-4 py-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
//           <button
//             onClick={toggleDarkMode}
//             className="flex items-center gap-2 hover:text-blue-500"
//           >
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             {!sidebarCollapsed && (darkMode ? "Light Mode" : "Dark Mode")}
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-64">
//         <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center sticky top-0 z-10">
//           <div className="font-bold text-lg">Loan Prediction System</div>
//           <div className="relative group">
//             <div className="flex items-center gap-2 cursor-pointer">
//               <div className="w-8 h-8 bg-gray-300 rounded-full" />
//               <div className="hidden md:block">{username}</div>
//             </div>

//             <div className="absolute right-0 mt-10 w-40 bg-white dark:bg-gray-700 rounded shadow hidden group-hover:block z-50">
//               <button
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                 onClick={() => navigate("/profile")}
//               >
//                 Profile
//               </button>
//               <button
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                 onClick={handleLogout}
//               >
//                 <div className="flex items-center gap-2">
//                   <LogOut size={16} /> Logout
//                 </div>
//               </button>
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 p-6">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;



import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  User,
  FileText,
  Menu,
  X,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("User");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded?.name || "User");
      } catch {
        setUsername("User");
      }
    }
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleCollapse = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { path: "/profile", label: "Profile", icon: <User size={18} /> },
    { path: "/loans", label: "My Loans", icon: <FileText size={18} /> },
  ];

  return (
    <div className={`min-h-screen flex ${darkMode ? "dark bg-gray-800 text-white" : "bg-gray-100 text-black"} transition-all`}>
      
      {/* Mobile toggle */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 fixed top-0 left-0 z-30"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-20 h-full shadow-md bg-white dark:bg-gray-600 transition-all duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${sidebarCollapsed ? "w-20" : "w-64"}
        `}
      >
        <div className="p-4 flex items-center justify-between">
          {!sidebarCollapsed && <span className="text-xl font-bold">User Panel</span>}
          <button onClick={toggleCollapse} className="hidden md:block">
            {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="space-y-2 px-4">
          {navItems.map(({ path, label, icon }) => (
            <NavLink
              to={path}
              key={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              {icon}
              {!sidebarCollapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-4 py-6 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <button onClick={toggleDarkMode} className="flex items-center gap-2 hover:text-blue-500">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {!sidebarCollapsed && (darkMode ? "Light Mode" : "Dark Mode")}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        {/* Header */}
        <header className="bg-white dark:bg-gray-600 shadow px-4 py-3 flex justify-between items-center sticky top-0 z-10">
          <div className="font-bold text-lg">Loan Prediction System</div>
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              <div className="hidden md:block">{username}</div>
            </div>
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded shadow hidden group-hover:block z-50">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => navigate("/profile")}
              >
                Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={handleLogout}
              >
                <div className="flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
