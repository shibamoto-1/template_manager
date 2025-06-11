import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import { AuthContext } from "../../App";
import { useForm } from "react-hook-form";
import Button from "../Button";
import GoogleLogin from "../oauth_button/GoogleLogin";

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});
  const { setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  const onSubmit = async(data) => {
    try {
      const res = await signIn(data);
      if (res.status === 200) {
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
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold">ログイン</h2>
      </div>

      <fieldset className="fieldset rounded-box w-sm p-6 mt-10 shadow mx-auto">
        <div className="my-5 flex-col">
          <GoogleLogin />
        </div>

        <div class="w-full">
          <div class="divider">または</div>
        </div>

        {isError && <p className="text-red-400 mb-4">メールアドレスまたはパスワードが間違っています。</p>}

        <label className="label" htmlFor="email">メールアドレス</label>
        <input
            type="email"
            id="email"
            placeholder="Email"
            className="input w-sm mb-1"
            {...register("email", {
              required: "メールアドレスは必須です。",
              pattern: {value: /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/, message: "メールアドレスの形式が違います。"},
            })}
          />
          <p className="text-red-400">{errors?.email?.message}</p>

        <label className="label" htmlFor="password">パスワード</label>
        <input
            type="password"
            id="password"
            placeholder="Password"
            className="input w-sm mb-1"
            {...register("password", {
              required: "パスワードは必須です。", 
              minLength: {value: 6, message: "パスワードは6文字以上で入力してください。"},
            })}
          />
          <p className="text-red-400">{errors?.password?.message}</p>

        <Button type="submit" className="btn-primary mt-4" onClick={handleSubmit(onSubmit)}>
          ログイン
        </Button>

        <p className="text-center mt-5">
          すでにアカウントをお持ちの方は<span className="text-blue-600"><Link to="/signup">こちら</Link></span>
        </p>

        <Link to="/" className="mt-3 text-blue-600">ホームページに戻る</Link>
      </fieldset>
    </div>
  );
};
