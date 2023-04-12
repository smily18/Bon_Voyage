import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <Link to="/">
        <h2>
          <img className="logo" src={"../logo1.png"} alt="logo" />
        </h2>
      </Link>
      <div>
        {user && <Link className="right" to="/user"><HiUserCircle /></Link>}
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
