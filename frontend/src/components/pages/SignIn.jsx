import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import { AuthContext } from "../../App";

export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        navigate("/");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-5 mt-20 mx-auto">
        <legend className="fieldset-legend">Sign In</legend>

        <label className="label" htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        <label className="label" htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        

        <button type="submit" className="btn btn-primary mt-4" onClick={(e) => handleSignInSubmit(e)}>
          ログイン
        </button>

        <Link to="/signup">サインアップへ</Link>

      </fieldset>
    </div>
  );
};