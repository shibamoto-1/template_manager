import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { signIn } from "../../api/auth";
import { AuthContext } from "../../App";
import { useForm } from "react-hook-form";
import Button from "../Button";
import GoogleLogin from "../oauth_button/GoogleLogin";

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});
  const { setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ errorMessage, setErrorMessage ] = useState(false);

  const onSubmit = async(data) => {
    try {
      await signIn(data);
      Cookies.remove("_is_guest");

      setIsSignedIn(true);
      navigate("/template");
    } catch (e) {
      setErrorMessage("メールアドレスまたはパスワードが間違っています。");
      console.log("Error response:", e); 
    }
  }

  useEffect(() => {
    const error = searchParams.get("error");
    
    if(!error) return;
    
    if(error === "422") {
      setErrorMessage("既にユーザーが存在しています。別の方法でお試しください。");
    }
  
    searchParams.delete("error");
    setSearchParams(searchParams);
    }, []);

  return (
    <div className="w-full h-screen">
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold">ログイン</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset rounded-box w-sm p-6 mt-10 shadow mx-auto">
          <div className="my-5 flex-col">
            <GoogleLogin />
          </div>

          <div className="w-full">
            <div className="divider">または</div>
          </div>

          {errorMessage && <p className="text-red-400 mb-4">{errorMessage}</p>}

          <label className="label" htmlFor="email">メールアドレス</label>
          <input
              type="email"
              id="email"
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
              className="input w-sm mb-1"
              {...register("password", {
                required: "パスワードは必須です。", 
                minLength: {value: 6, message: "パスワードは6文字以上で入力してください。"},
              })}
            />
            <p className="text-red-400">{errors?.password?.message}</p>

          <Button type="submit" className="btn-primary mt-4">
            ログイン
          </Button>

          <p className="text-center mt-5">
            新規登録は<span className="text-blue-600"><Link to="/signup">こちら</Link></span>
          </p>

          <div className="mt-3">
            <Link to="/" className="text-blue-600">ホームページに戻る</Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
