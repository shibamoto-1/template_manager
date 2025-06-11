import Markdown from "react-markdown";
import Header from "../Header";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TemplateAPIContext, TemplateContext } from "../context/TemplateContext";
import Button from "../Button";
import { useForm } from "react-hook-form";
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm'


export default function Create() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onBlur" });
  const { categories } = useContext(TemplateContext);
  const { handleCreateTemplate } = useContext(TemplateAPIContext);
  const navigate = useNavigate();

  const bodyValue = watch("body");

  const create = (data) => {
    const { title, body, category } = data;
    handleCreateTemplate(title, body, category);
    navigate("/template");
  }

  return(
    <div className="max-h-screen">
      <Header />

      <div className="flex">
        <div className="flex-1 h-screen p-5 border-r border-gray-300">
          <h1 className="text-xl font-semibold">新規テンプレート作成</h1>
          <div className="flex flex-col my-3">
            <label htmlFor="title">テンプレート名</label>
            <input
              type="text"
              id="title"
              placeholder="テンプレート名を入力"
              className="input"
              {...register("title", {
                required: "タイトルは必須です"
              })}
              />
            <p className="text-red-400">{errors?.title?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="body" className="mb-3">テンプレート内容</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="25"
              placeholder="内容を入力してください..."
              className="textarea w-full"
              {...register("body")}
              />
          </div>
        </div>

        <div className="flex-1 p-5">
          <h2 className="text-xl font-semibold">プレビュー</h2>
          <div className="flex flex-col mt-3 mb-4 h-18">
            <label htmlFor="category">カテゴリー</label>
            <input
              type="text"
              id="category"
              list="list"
              autoComplete="off"
              placeholder="カテゴリ名を入力"
              className="input"
              {...register("category", {
                required: "カテゴリ名は必須です"
              })}
              />
            <datalist id="list">
              {categories.map(category => <option key={category.id} value={category.name} />)}
            </datalist>
            <p className="text-red-400">{errors?.category?.message}</p>

          </div>
          <div className="w-full min-h-[65%] border border-gray-300 rounded px-5 mt-10">
            <div className="prose prose-sm">
              <Markdown
                remarkPlugins={[remarkBreaks, remarkGfm]}>
                {bodyValue}
              </Markdown>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <Link to="/template" className="btn btn-soft btn-secondary">
              キャンセル
            </Link>
            <Button className="btn-primary" onClick={handleSubmit(create)}>保存</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
