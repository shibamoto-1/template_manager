import Markdown from "react-markdown";
import Header from "../Header";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TemplateContext } from "../context/TemplateContext";
import Button from "../Button";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  
  const { handleCreateTemplate } = useContext(TemplateContext);
  const navigate = useNavigate();


  const create = () => {
    handleCreateTemplate(title, body, category);
    navigate("/template");
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
          <div className="flex flex-col">
            <label htmlFor="body">テンプレート内容</label>
            <textarea name="body" id="body" cols="30" rows="30" className="textarea w-full" value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
        </div>

        <div className="flex-1 p-5">
          <h2 className="text-md font-semibold">プレビュー</h2>
          <div className="flex flex-col my-3 h-24">
            <label htmlFor="category">カテゴリー</label>
            <input type="text" placeholder="カテゴリ名を入力" className="input" value={category} onChange={e => setCategory(e.target.value)} />
          </div>
          <div className="w-full min-h-[70%] max-h-screen border border-gray-300 rounded px-5 pt-2 pb-20">
            <div className="prose prose-sm">
              <Markdown>{body}</Markdown>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <Link to="/template">
              <Button>キャンセル</Button>
            </Link>
            <Button className="btn-primary" onClick={() => create()}>保存</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
