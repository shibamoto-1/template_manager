import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../api/auth";
import { AuthContext } from "../../App";

export const SignUp = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const generateParams = () => {
    const signUpParams = {
      registration: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    };
    return signUpParams;
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();
    try {
      const res = await signUp(params);
      console.log(res);
      alert("confirm email");
    } catch (e) {
      console.log("Error response:", e.response); 
      if (e.response && e.response.data && e.response.data.error) {
        console.log("エラー:", e.response.data.error);
        alert("エラー: " + e.response.data.error.join(", "));
      } else {
        alert("サインアップに失敗しました。再度お試しください。");
      }
    }
  };
  return (
    <>
      <h1>サインアップページです</h1>
      <form>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">パスワード確認</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            className="input"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary" onClick={(e) => handleSignUpSubmit(e)}>
          Submit
        </button>
      </form>
      <Link to="/signin">サインインへ</Link>
    </>
  );
};