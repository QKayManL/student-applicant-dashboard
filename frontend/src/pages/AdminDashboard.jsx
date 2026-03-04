import { Link } from "react-router-dom";
import { useState } from "react";
import "./dashboard.css";
import { users } from "../data/users";


export default function AdminDashboard() {
  const [filter, setFilter] = useState("all");
  const studentUsers = users.filter(u => u.role === "student");

  
  const total = studentUsers.length;
  const pending = studentUsers.filter(u => u.status === "Pending").length;
  const approved = studentUsers.filter(u => u.status === "Approved").length;
  const rejected = studentUsers.filter(u => u.status === "Rejected").length;

  const filteredStudents =
  filter === "all"
    ? studentUsers
    : studentUsers.filter(u => u.status === filter);

  return (
    <div className="layout">

      <aside className="sidebar">
        <h2>Admin Panel</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/admin">Dashboard</Link>
          <Link to="/student">Student View</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </aside>

      <main className="main">
        <h1>Admin Dashboard</h1>

        <div className="cards">
          <ClickableCard title="Total Applicants" value={total} onClick={() => setFilter("all")} />
          <ClickableCard title="Pending" value={pending} onClick={() => setFilter("Pending")} />
          <ClickableCard title="Approved" value={approved} onClick={() => setFilter("Approved")} />
          <ClickableCard title="Rejected" value={rejected} onClick={() => setFilter("Rejected")} />
        </div>

        <h2 className="section">
          {filter === "all" ? "All Students" : `${filter} Students`}
        </h2>

        <div className="cards">

  {filteredStudents.map((student) => (
  <Link
    key={`${student.id}-${student.username}`}
    to={`/admin/student/${student.id}`}
    className="student-link"
  >
    <div className="card">
      <p>{student.name}</p>
      <h3>{student.programme}</h3>
      <p className="sub">{student.status}</p>
    </div>
  </Link>
))}
</div>
       

      </main>
    </div>
  );
}

function ClickableCard({ title, value, onClick }) {
  return (
    <div className="card" style={{ cursor: "pointer" }} onClick={onClick}>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}