import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import { AuthContext } from "../../App";
import { useForm } from "react-hook-form";
import Button from "../Button";

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});
  const { setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // モーダルに変更予定
  const [isError, setIsError] = useState(false);

  const onSubmit = async(data) => {
    try {
      const res = await signIn(data);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        Cookies.remove("_is_guest");

        setIsSignedIn(true);
        navigate("/template");
      }
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  }

  return (
    <div className="w-full h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-5 mt-20 mx-auto">
        <legend className="fieldset-legend">Sign In</legend>

        {/* モーダルに変更予定 */}
        {isError && <p className="text-red-400 mb-4">メールアドレスまたはパスワードが間違っています。</p>}

        <label className="label" htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            placeholder="Email"
            className="input"
            {...register("email", {
              required: "メールアドレスは必須です。",
              pattern: {value: /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/, message: "メールアドレスの形式が違います。"},
            })}
          />
          <p className="text-red-400">{errors?.email?.message}</p>

        <label className="label" htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            placeholder="Password"
            className="input"
            {...register("password", {
              required: "パスワードは必須です。", 
              minLength: {value: 6, message: "パスワードは6文字以上で入力してください。"},
            })}
          />
          <p className="text-red-400">{errors?.password?.message}</p>

        <Button type="submit" className="btn-primary mt-4" onClick={handleSubmit(onSubmit)}>
          ログイン
        </Button>

        <Link to="/signup">サインアップへ</Link>
      </fieldset>
    </div>
  );
};
