import { Link, useNavigate } from "react-router-dom";
import { students } from "../data/students";
import "./dashboard.css";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  if (!role || role !== "student") {
    return <h2 style={{ padding: "40px" }}>Please login</h2>;
  }

  const student = students.find((s) => s.username === username);

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="layout">

      {/* Sidebar — SAME structure */}
      <aside className="sidebar student-sidebar">
        <h2>Student Panel</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/student">Dashboard</Link>
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        </nav>
      </aside>

      {/* Main — SAME structure */}
      <main className="main">
        <h1>Student Dashboard</h1>
        <p className="sub">Welcome back, {student.name}</p>

        {/* SAME card grid system */}
        <div className="cards">
          <Card title="Program" value={student.program} />
          <Card title="Status" value={student.status} />
          <Card title="Progress" value={`${student.progress}%`} />
          <Card title="Courses" value={student.courses.length} />
        </div>

        {/* Courses Section */}
        <h2 className="section">My Courses</h2>

        <div className="cards">
          {student.courses.map((course, index) => (
            <Card key={index} title={course} value="Ongoing" />
          ))}
        </div>

      </main>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="card">
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}