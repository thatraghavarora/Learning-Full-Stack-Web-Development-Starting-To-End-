import { Link, Outlet } from "react-router-dom";

function College() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to College Section</h2>
      <div style={{ margin: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="engineering">Engineering</Link>
        <Link to="medical">Medical</Link>
      </div>
      <Outlet /> {/* Renders nested routes here */}
    </div>
  );
}

export default College;
