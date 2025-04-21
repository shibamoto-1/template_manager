import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../api/auth";

export const SignUp = () => {
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
    }
  };
  return (
    <div className="w-full h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-5 mt-20 mx-auto">
        <legend className="fieldset-legend">Sign up</legend>

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
        
        <label className="label" htmlFor="password_confirmation">Password confirm</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          placeholder="Password confirm"
          className="input"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mt-4" onClick={(e) => handleSignUpSubmit(e)}>
          アカウント作成
        </button>

        <Link to="/signin">サインインへ</Link>
      </fieldset>
    </div>
  );
};