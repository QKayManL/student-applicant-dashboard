import { Outlet } from "react-router-dom";
console.log("Layout is rendering");


function MainLayout() {
  return (
    <div>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <h2>Student Applicant System</h2>
      </header>

      <main style={{ padding: "40px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
