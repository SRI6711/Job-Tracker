import { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
  total: 0,
  interview: 0,
  offer: 0,
  rejected: 0,
  successRate: 0,
});

 useEffect(() => {
  const updateStats = () => {
    const saved = JSON.parse(localStorage.getItem("applications")) || [];

    const total = saved.length;
    const interview = saved.filter(app => app.status === "Interview").length;
    const offer = saved.filter(app => app.status === "Offer").length;
    const rejected = saved.filter(app => app.status === "Rejected").length;

    const successRate =
      total === 0 ? 0 : Math.round((offer / total) * 100);

    setStats({ total, interview, offer, rejected, successRate });
  };

  updateStats();

  window.addEventListener("storage", updateStats);

  return () => {
    window.removeEventListener("storage", updateStats);
  };
}, []);

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="stats-container">
        <div className="stat-card total">
          <h3>Total Applications</h3>
          <p>{stats.total}</p>
        </div>

        <div className="stat-card interview">
          <h3>Interviews</h3>
          <p>{stats.interview}</p>
        </div>

        <div className="stat-card offer">
          <h3>Offers</h3>
          <p>{stats.offer}</p>
        </div>

        <div className="stat-card rejected">
          <h3>Rejected</h3>
          <p>{stats.rejected}</p>
        </div>
        <div className="stat-card success">
          <h3>Success Rate</h3>
          <p>{stats.successRate}%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;