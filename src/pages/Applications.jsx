import { useState, useEffect } from "react";
import "./Applications.css";
const Applications = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);
  
  const [applications, setApplications] = useState(() => {
  const saved = localStorage.getItem("applications");
   return saved ? JSON.parse(saved) : [];
   });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

const handleSubmit = (e) => {
  e.preventDefault();

  if (editId) {
    // UPDATE MODE
    const updatedApps = applications.map((app) =>
      app.id === editId
        ? { ...app, company, role, status }
        : app
    );

    setApplications(updatedApps);
    setEditId(null);
  } else {
    // ADD MODE
    const newApp = {
      id: Date.now(),
      company,
      role,
      status,
    };

    setApplications([...applications, newApp]);
  }

  setCompany("");
  setRole("");
  setStatus("Applied");
};

  const handleDelete = (id) => {
    const updated = applications.filter((app) => app.id !== id);
    setApplications(updated);
  };

  const filteredApplications =
  filter === "All"
    ? applications
    : applications.filter((app) => app.status === filter);
    
 return (
  <div className="app-container">
    <h1 className="app-title">Applications</h1>

    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>

      <button type="submit"
       className="add-btn">
        {editId ? "Update" : "Add"}
      </button>
    </form>

    <select
     value={filter}
    onChange={(e) => setFilter(e.target.value)}
    style={{ marginBottom: "20px", padding: "8px" }}
    >
      <option>All</option>
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>

    <div className="cards">
      {filteredApplications.map((app) => {
        const statusClass = app.status.toLowerCase();

        return (
          <div key={app.id} className="card">
            <h3>{app.company}</h3>
            <p>{app.role}</p>

            <span className={`status ${statusClass}`}>
              {app.status}
            </span>

            <button
              className="delete-btn"
              onClick={() => handleDelete(app.id)}
            >
              Delete
            </button>

            <button
              className="edit-btn"
              onClick={() => {
              setCompany(app.company);
              setRole(app.role);
              setStatus(app.status);
              setEditId(app.id);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default Applications;