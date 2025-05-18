import { Box, CircleArrowRight, SquareChartGantt } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import { guestLogin } from "../../api/auth";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../App";
import Cookies from "js-cookie";
import Button from "../Button";
import Logo from "../../assets/logo.svg";
import AA from "../../assets/AA.png";
import templateCreate from "../../assets/templateCreate.gif";
import copyAndUpdate from "../../assets/copy_update.gif";

export default function Home() {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const element = carouselRef.current;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      if (
        (element.scrollLeft <= 0 && e.deltaY < 0) ||
        (element.scrollLeft >= maxScrollLeft && e.deltaY > 0)
      ) return;

      e.preventDefault();
      element.scrollLeft += e.deltaY;
    }

    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [])

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
  <div className="text-center w-full pb-50">
    <Header />
    <div className="w-full px-3 py-7">
      <div className="py-12 space-y-5">
        <img src={Logo} alt="ロゴ" className="mx-auto h-18"  />
          <p>
            日報を書くたびに過去の投稿を振り返って... コピペして書き直して...<br/>
            そんな煩わしさをちょっとでも解消するべく<span><img src={Logo} alt="タイトル" className="inline px-2"/></span>は生まれました。
          </p>
      </div>
      <div className="pb-10">
        {isSignedIn ?
          <Link to="/template">
            <Button className="btn-primary">
              <p>サービスに戻る</p>
              <CircleArrowRight className="size-6 px-[2px] ml-[4px]" strokeWidth={1.5}/>

            </Button>
          </Link> : <>
          <form onSubmit={handleGuestLogin}>
            <Button type="submit" className="btn-secondary btn-wide pl-4 pr-[12px]">
              <p>サンプルを触ってみる</p>
              <CircleArrowRight className="size-6 px-[2px] ml-[8px]" strokeWidth={1.5}/>
            </Button>
          </form>
          <p className="text-sm text-base-content/60">※ゲストアカウントとして登録されます</p>
          </>
          }
      </div>
    </div>

    <div className="bg-slate-100 py-10">
      <h2 className="text-2xl font-bold">主な機能</h2>

      <div className="flex justify-center gap-5 px-3 pt-5 text-left">
        <div className="w-[28%] bg-base-100 rounded-md p-5">
          <Box className="text-blue-500 size-12"/>
          <h3 className="my-2 font-semibold">簡単テンプレート管理</h3>
          <p className="text-sm">テンプレートの作成・管理が簡単に行えます</p>
        </div>
        <div className="w-[28%] bg-base-100 rounded-md p-5">
          <SquareChartGantt className="text-blue-500 size-12"/>
          <h3 className="my-2 font-semibold">マークダウン対応</h3>
          <p className="text-sm">マークダウン記法を使用しているチャットツール用のテンプレートを作成することもできます。</p>
        </div>
      </div>
    </div>

    <div className="w-2/3 mx-auto pt-10 relative">
      <h2 className="text-2xl font-bold pb-10">使い方</h2>
      <div ref={carouselRef} className="flex  gap-20 py-10 bg-base-content/30 rounded-lg overflow-x-auto scroll-smooth">
        <div className="shrink-0">
        </div>

        <div className="shrink-0 card bg-base-100">
          <figure className="px-10 pt-10">
            <img src={templateCreate} alt="画像" className="h-100" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-lg">テンプレートの作成</p>
          </div>
        </div>

        <div className="shrink-0 card bg-base-100">
          <figure className="px-10 pt-10">
            <img src={copyAndUpdate} alt="画像" className="h-100" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-lg">ボタンを押すと中身をコピー。<br/>中身を書き換えても元のテンプレートは変更されません。</p>            
          </div>
        </div>

        <div className="shrink-0 card bg-base-100">
          <figure className="px-10 pt-10">
            <img src={AA} alt="画像" className="h-100" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-lg">（テンプレート以外でも...？）</p>
          </div>
        </div>

        <div className="shrink-0">
        </div>
      </div>
    </div>

  </div>
  )
}
