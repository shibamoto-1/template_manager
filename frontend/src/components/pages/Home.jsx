import { Box, CircleArrowRight, SquareChartGantt } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import { guestLogin } from "../../api/auth";
import { useContext } from "react";
import { AuthContext } from "../../App";
import Cookies from "js-cookie";
import Button from "../Button";

export default function Home() {
  const { setIsSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGuestLogin = async(e) => {
    e.preventDefault();
    const res = await guestLogin();
    Cookies.set("_access_token", res.data.token["accessToken"]);
    Cookies.set("_client", res.data.token["client"]);
    Cookies.set("_uid", res.data.token["uid"]);
    Cookies.set("_is_guest", "true");

    setIsSignedIn(true);
    navigate("/template");
  }

  return (
  <div className="text-center">
    <Header />
    <div className="w-full px-3 py-7">
      <div className="py-16 space-y-5">
        <h1 className="text-4xl font-extrabold">定型文の管理をシンプルに</h1>
        <p>投稿用の定型文を整理・編集・使い回せる、効率重視のWebツール。</p>
      </div>
      <div className="flex gap-5 justify-center pb-10">
        <Link to="/signup">
          <Button className="btn-primary">アカウント作成</Button>
        </Link>
        <form onSubmit={handleGuestLogin}>
          <Button type="submit" className="btn-secondary pl-4 pr-[12px]">
            <p>デモを見る</p>
            <CircleArrowRight className="size-6 px-[2px] ml-[2px]" strokeWidth={1.5}/>
          </Button>
        </form>
      </div>
    </div>

    <div className="bg-slate-100 py-7">
      <h2 className="text-2xl font-bold">主な機能</h2>

      <div className="flex justify-center gap-5 px-3 pt-5 text-left">
        <div className="w-[28%] bg-base-100 rounded-md p-5">
          <Box className="text-blue-500 size-12"/>
          <h3 className="my-2 font-semibold">簡単テンプレート管理</h3>
          <p className="text-sm">直感的なインターフェースで、テンプレートの作成・管理が簡単に行えます</p>
        </div>
        <div className="w-[28%] bg-base-100 rounded-md p-5">
          <SquareChartGantt className="text-blue-500 size-12"/>
          <h3 className="my-2 font-semibold">マークダウン対応</h3>
          <p className="text-sm">マークダウン記法を使用しているチャットツール用のテンプレートを作成することもできます。</p>
        </div>
      </div>
    </div>

    {/* <div>
      スクショカルーセル
    </div> */}

    {/* <div className="w-full my-7 flex gap-3 justify-center">
      <button className="btn">アカウント作成</button>
      <button className="btn">デモを見る</button>
    </div> */}

  </div>
  )
}
