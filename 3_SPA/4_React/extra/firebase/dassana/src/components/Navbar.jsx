import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

//style and icons
import "./Navbar.css";
import Group from "../assets/group.svg";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Group} alt="Site Logo Group icon" />
          <Link to="/">
            <span>Dassana</span>
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
