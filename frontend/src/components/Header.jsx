import Logo from "../assets/logo.svg";
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../App"
import { signOut } from "../api/auth";

export default function Header() {
  const { isSignedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOutClick = async() => {
    try {
      const res = await signOut();
      console.log(res);

      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <header className="p-4 flex justify-between items-center border-b border-gray-200">
      <h1 className="">
        <img src={Logo} />
      </h1>

      {isSignedIn ? (
        <nav onClick={() => handleSignOutClick()}>
          <span>ログアウト</span>
        </nav>
      ) : (
        <nav className="space-x-4">
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </nav>
      )}
    </header>
  )
}