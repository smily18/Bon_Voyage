import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { BiLogOut } from "react-icons/bi";
import {GrAdd} from "react-icons/gr"

const User = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="user">
      <h2>User Details</h2>
      {user && (
        <div>
          <ul className="item">
            <div className="user-img">
              <img src="../user.jpg" alt="" />
            </div>
            <li>
              <b>User Name</b>{" "}
              <span>
                {user.user.firstName} {user.user.lastName}
              </span>
            </li>
            <li>
              <b>User Email</b> <span>{user.user.email}</span>
            </li>
            <li>
              <b>Date of Birth</b> <span>{user.user.dob}</span>
            </li>
            <li>
              <b>Gender</b> <span>{user.user.gender}</span>
            </li>
          </ul>
          <div className="but">
            <button onClick={handleClick}>
              Logout <BiLogOut />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
