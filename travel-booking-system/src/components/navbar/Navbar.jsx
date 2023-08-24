import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h1>CODSOFT</h1>
          <span className="logo"></span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Home</button>
            <button className="navButton">About</button>
            <button className="navButton">Blog</button>
            {/* <button className="navButton">Pages</button> */}
            <button className="navButton">Contact</button>
            {!user && <button className="navButton">Log In/Sign Up</button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
