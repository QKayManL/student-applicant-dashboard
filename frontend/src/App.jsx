import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LandingPage from "./Pages/LandingPage";
import ApplicantDashboard from "./Pages/ApplicantDashboard";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<ApplicantDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
