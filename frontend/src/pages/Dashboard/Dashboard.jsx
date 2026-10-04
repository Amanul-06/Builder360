import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          backgroundColor: "#f3f4f6",
          padding: "40px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#17212b",
          }}
        >
          Builder360 Dashboard
        </h1>

        <p
          style={{
            color: "#64748b",
            marginTop: "10px",
          }}
        >
          Welcome to your admin portal.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
