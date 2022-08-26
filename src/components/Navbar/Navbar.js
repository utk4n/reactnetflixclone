import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {

  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const logoutHandle = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);

  return (
    // z-index ekleyebilirim duruma göre
<>
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to={"/"}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={"/account"}>
            <button className="text-white pr-4">My Account</button>
          </Link>

          <button
            onClick={logoutHandle}
            className="bg-red-600 px-6 py-1 rounded-md text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 py-1 rounded-md text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
      
    </div>
    <ToastContainer />
    </>
  );
};

export default Navbar;
