import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  IndianRupee,
  Building2,
  Truck,
  Package,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Employees",
      path: "/dashboard/employees",
      icon: Users,
    },
    {
      name: "Attendance",
      path: "/dashboard/attendance",
      icon: ClipboardCheck,
    },
    {
      name: "Wages",
      path: "/dashboard/wages",
      icon: IndianRupee,
    },
    {
      name: "Sites",
      path: "/dashboard/sites",
      icon: Building2,
    },
    {
      name: "Vehicles",
      path: "/dashboard/vehicles",
      icon: Truck,
    },
    {
      name: "Materials",
      path: "/dashboard/materials",
      icon: Package,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}

      <aside className={`admin-sidebar ${isOpen ? "sidebar-open" : ""}`}>
        {/* Brand */}
        <div className="sidebar-brand">
          <div className="brand-logo">B</div>

          <div className="brand-content">
            <h2>
              Builder<span>360</span>
            </h2>

            <p>Construction Management</p>
          </div>

          <button className="sidebar-close" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="sidebar-navigation">
          <p className="sidebar-heading">WORKSPACE</p>

          <nav>
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? "active" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sidebar-icon">
                    <Icon size={19} strokeWidth={2} />
                  </span>

                  <span className="sidebar-link-text">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="sidebar-footer">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            <span className="sidebar-icon">
              <Settings size={19} strokeWidth={2} />
            </span>

            <span className="sidebar-link-text">Settings</span>
          </NavLink>

          <button className="sidebar-link logout-link" onClick={handleLogout}>
            <span className="sidebar-icon">
              <LogOut size={19} strokeWidth={2} />
            </span>

            <span className="sidebar-link-text">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
