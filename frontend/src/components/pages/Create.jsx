import Markdown from "react-markdown";
import Header from "../Header";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TemplateContext } from "../context/TemplateContext";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  
  const { createItem } = useContext(TemplateContext);
  const navigate = useNavigate();


  const create = () => {
    createItem(title, body, category);
    navigate("/");
  }

  return(
    <div>
      <Header />

      <div className="flex">
        <div className="flex-1 h-screen p-5 border-r border-gray-300">
          <h1 className="text-xl font-semibold">新規テンプレート作成</h1>
          <div className="flex flex-col my-3">
            <label htmlFor="title">テンプレート名</label>
            <input type="text" placeholder="テンプレート名を入力" className="input" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="body">テンプレート内容</label>
            <textarea name="body" id="body" cols="30" rows="10" className={"textarea size-full"} value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
        </div>

        <div className="flex-1 p-5">
          <h2 className="text-md font-semibold">プレビュー</h2>
          <div className="flex flex-col my-3 h-24">
            <label htmlFor="category">カテゴリー</label>
            <input type="text" placeholder="カテゴリ名を入力" className="input" value={category} onChange={e => setCategory(e.target.value)} />
          </div>
          <div className="w-full h-40 border border-gray-300 rounded px-5 pt-2 pb-20">
            <div className="prose prose-sm">
              <Markdown>{body}</Markdown>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <Link to="/">
              <button className="btn">キャンセル</button>
            </Link>
            <button className="btn btn-primary" onClick={() => create()}>保存</button>
          </div>
        </div>
      </div>
    </div>
  )
}