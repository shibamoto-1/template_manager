import { useState } from "react"

export default function Body({title, setTitle, body, setBody, isUpdated}) {
  const [ isEditing, setIsEditing ] = useState(false);

  const statusMessage = () => {
    if (isUpdated) return <p>編集しました</p>;
    if (isEditing) return <p>編集中です</p>;
    return <p>編集前です。</p>;
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
      <div>
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
