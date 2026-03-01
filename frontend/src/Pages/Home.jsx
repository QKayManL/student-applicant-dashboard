import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-card">
        <h1>Student Applicant System</h1>
        <p>
          Manage applications with clarity, speed, and confidence.
        </p>

        <div className="home-actions">
          <Link to="/login" className="btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}