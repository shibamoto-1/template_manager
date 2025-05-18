import Logo from "../assets/logo.svg";
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../App"
import { signOut } from "../api/auth";
import Cookies from "js-cookie";

export default function Header() {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const isGuest = Cookies.get("_is_guest");
  const navigate = useNavigate();

  const handleSignOutClick = async() => {
    try {
      const res = await signOut();
      Cookies.remove("_access_token")
      Cookies.remove("_client")
      Cookies.remove("_uid")
      navigate("/");
      setTimeout(() => setIsSignedIn(false), 50);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <header className="p-4 flex justify-between items-center border-b border-gray-200">
      <Link to="/">
        <img src={Logo} alt="ロゴ" />
      </Link>

      {isSignedIn && !isGuest ? (
        <nav className="cursor-pointer" onClick={() => handleSignOutClick()}>
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