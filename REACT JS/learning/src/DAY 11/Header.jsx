import { Link } from "react-router-dom";


function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#eee" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/college">College</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
      </div>
    </header>
  );
}

export default Header;
