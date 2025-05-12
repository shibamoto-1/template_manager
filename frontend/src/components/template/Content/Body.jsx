import { useState } from "react"
import StatusMessage from "./StatusMessage";

export default function Body({title, setTitle, body, setBody, isUpdated}) {
  const [ isEditing, setIsEditing ] = useState(false);

  const statusMessage = () => {
    if (isUpdated) return <StatusMessage color="green" >更新しました！</StatusMessage>;
    if (isEditing) return <StatusMessage color="yellow">編集中...</StatusMessage>;
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
          value={title}
          onChange={e => {setTitle(e.target.value)
                          setIsEditing(true)}}
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
          value={body}
          onChange={e => {setBody(e.target.value)
                        setIsEditing(true)}}
        />
      </div>
    </div>
  )
}
