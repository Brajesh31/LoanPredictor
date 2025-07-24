// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ManageUsersPage from "./pages/ManageUsersPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/admin/users" element={<ManageUsersPage />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import ManageUsersPage from "./pages/ManageUsersPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/admin/users" element={<ManageUsersPage />} />
//         <Route path="/" element={<Navigate to="/admin/users" />} /> {/* Redirect root to /admin/users */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ManageUsersPage from "./pages/ManageUsersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/users" replace />} />
        <Route path="/admin/users" element={<ManageUsersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
