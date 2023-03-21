import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2><img className="logo" src={process.env.PUBLIC_URL+"logo1.png"} alt="logo"/></h2>
      </Link>
      <div className="menu">
        <Link to="/about">
          <h4>About</h4>
        </Link>
        <Link to="/city">
          <h4>Try Now</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
