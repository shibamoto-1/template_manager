import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth";
import Cookies from "js-cookie";
import { AuthContext } from "../../App";
import { useForm } from "react-hook-form";
import Button from "../Button";
import GoogleLogin from "../oauth_button/GoogleLogin";


export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});
  const { setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);


  const onSubmit = async (data) => {
    try {
      const res = await signUp(data);
      Cookies.remove("_is_guest");

      setIsSignedIn(true);
      navigate("/template");
    } catch (e) {
      console.log("Error response:", e); 
      setIsError(true);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold">アカウント作成</h2>
      </div>

      <fieldset className="fieldset bg-white rounded-box w-sm shadow p-6 mt-10 mx-auto">
        <div className="my-5 flex-col">
          <GoogleLogin />
        </div>

        <div class="w-full">
          <div class="divider">または</div>
        </div>

        {/* モーダルに変更予定 */}
        {isError && <p className="text-red-400 mb-4">入力が間違っています。</p>}


        <label className="label" htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          placeholder="email@example.com"
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
          name="password"
          className="input w-sm mb-1"
          {...register("password", {
            required: "パスワードは必須です。", 
            minLength: {value: 6, message: "パスワードは6文字以上で入力してください。"},
          })}
        />
        <p className="text-red-400">{errors?.password?.message}</p>

        
        <label className="label" htmlFor="password_confirmation">パスワード確認</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          className="input w-sm mb-2"
          {...register("passwordConfirmation", {
            required: "確認用パスワードは必須です。", 
            minLength: {value: 6, message: "パスワードは6文字以上で入力してください。"},
          })}
        />
        <p className="text-red-400">{errors?.passwordConfirmation?.message}</p>

        <Button type="submit" className="btn-primary mt-4" onClick={handleSubmit(onSubmit)}>
          アカウント作成
        </Button>

        <p className="text-center mt-5">
          すでにアカウントをお持ちの方は<span className="text-blue-600"><Link to="/signin">こちら</Link></span>
        </p>
        
        <div className="mt-3">
          <Link to="/" className="text-blue-600">ホームページに戻る</Link>
        </div>
      </fieldset>
    </div>
  );
};