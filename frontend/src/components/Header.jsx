import Logo from "../assets/logo.svg";
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../App"
import { signOut } from "../api/auth";
import Cookies from "js-cookie";

export default function Header() {
  const { isSignedIn } = useContext(AuthContext);
  const isGuest = Cookies.get("_is_guest");
  const navigate = useNavigate();

  const handleSignOutClick = async() => {
    try {
      const res = await signOut();

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

      {isSignedIn && !isGuest ? (
        <nav onClick={() => handleSignOutClick()}>
          <span>ログアウト</span>
        </nav>
      ) : (
        <nav className="space-x-4">
          <Link to="/signup">会員登録</Link>
          <Link to="/signin">ログイン</Link>
        </nav>
      )}
    </header>
  )
}