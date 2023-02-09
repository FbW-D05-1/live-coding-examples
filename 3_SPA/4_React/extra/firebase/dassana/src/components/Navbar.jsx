import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//style and icons
import "./Navbar.css";
import Group from "../assets/group.svg";

export default function Navbar() {
  const { user } = useAuthContext();
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
        {!user && (
          <>
            {" "}
            {/** Need a parent element fot the 2 list items and to do that without a new DIV we need to use the empty react Fragment */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
        {user && (
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
        )}
      </ul>
    </div>
  );
}
