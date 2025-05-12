import { useContext, useState } from "react"
import StatusMessage from "./StatusMessage";
import { TemplateContext } from "../../context/TemplateContext"

export default function Body({title, setTitleInput, body, setBodyInput, titleInput, bodyInput}) {
  const { isUpdated } = useContext(TemplateContext);

  const isEditing = () => {
    if (titleInput === title && bodyInput === body){
      return false;
    } else {
      return true;
    };
  }

  const statusMessage = () => {
    if (isEditing()) return <StatusMessage color="yellow">編集中...</StatusMessage>;
    if (isUpdated) return <StatusMessage color="green" >更新しました！</StatusMessage>;
    return <StatusMessage color="blue">編集前</StatusMessage>;
  }
  

  return(
    <div className="flex-1 p-4 h-screen border-r border-gray-200"> 
    <div className="flex">
      <div className="w-1/2 border-b border-gray-200 mb-5">
        <input
          type="text"
          className="input input-ghost w-full"
          placeholder="テンプレートのタイトル"
          value={titleInput}
          onChange={e => setTitleInput(e.target.value)}
        />
      </div>     
      <div className="w-full content-end">
        {statusMessage()}
      </div>
    </div>
      
      <div className="w-full h-full pb-20">
        <textarea
          className="textarea size-full"
          placeholder="テンプレートの内容を入力してください..."
          value={bodyInput}
          onChange={e => setBodyInput(e.target.value)}
        />
      </div>
    </div>
  )
}
