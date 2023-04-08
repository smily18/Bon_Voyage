import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h2>
          <img
            className="logo"
            src={"../logo1.png"}
            alt="logo"
          />
        </h2>
      </Link>
      <div>
        {user && <button onClick={handleClick}>Logout</button>}
        {user && (
          <div className="menu">
            <Link to="/about">
              <h4>About</h4>
            </Link>
            <Link to="/city">
              <h4>Try Now</h4>
            </Link>
          </div>
        )}
        {!user && (
          <div className="menu">
            <Link to="/login">
              <h4>Login</h4>
            </Link>
            <Link to="/signup">
              <h4>Sign Up</h4>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
