// src/pages/AdminStudentView.jsx

import { useParams } from "react-router-dom";
import { users } from "../data/users";
import "./dashboard.css";

export default function AdminStudentView() {
  const { id } = useParams();
  const student = users.find(
    (u) => u.id === parseInt(id)
  );

  if (!student) {
    return <h2 style={{ padding: "40px" }}>Student not found</h2>;
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
      </aside>

      <main className="main">
        <h1>{student.name}</h1>

        <div className="cards">
          <div className="card">
            <p>Program</p>
            <h3>{student.programme}</h3>
          </div>

          <div className="card">
            <p>Status</p>
            <h3>{student.status}</h3>
          </div>

          <div className="card">
            <p>Courses</p>
            <h3>{student.courses.length}</h3>
          </div>
        </div>
      </main>
    </div>
  );
}