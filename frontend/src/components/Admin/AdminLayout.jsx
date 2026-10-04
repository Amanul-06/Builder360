import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navigation = [
    { name: "Dashboard", path: "/admin" },
    { name: "Employees", path: "/admin/employees" },
    { name: "Attendance", path: "/admin/attendance" },
    { name: "Wages", path: "/admin/wages" },
    { name: "Sites", path: "/admin/sites" },
    { name: "Assignments", path: "/admin/assignments" },
    { name: "Daily Updates", path: "/admin/daily-updates" },
    { name: "Materials", path: "/admin/materials" },
    { name: "Reports", path: "/admin/reports" },
    { name: "Inquiries", path: "/admin/inquiries" },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <div className="admin-logo-mark">B</div>

          <div>
            <h2>Builder360</h2>
            <span>Management</span>
          </div>
        </div>

        <nav className="admin-navigation">
          <p className="admin-nav-label">MANAGEMENT</p>

          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `admin-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-user">
            <div className="admin-user-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div className="admin-user-info">
              <strong>{user?.name || "Admin"}</strong>

              <span>{user?.role || "Administrator"}</span>
            </div>
          </div>

          <button className="admin-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="admin-main">
        <header className="admin-header">
          <div>
            <span className="admin-header-label">BUILDER360</span>

            <h1>Management Panel</h1>
          </div>

          <div className="admin-header-user">
            <span>{user?.name || "Admin"}</span>

            <div className="admin-header-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
