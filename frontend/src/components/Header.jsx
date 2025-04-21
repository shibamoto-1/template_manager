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
    <header className="bg-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">My App</Link>
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