export default function Body2({title, setTitle, body, setBody}) {
  return(
    <div className="flex-1 p-4 h-screen border-r border-gray-200"> 
      <div className="border-b border-gray-200 mb-5">
        <input
          type="text"
          className="input input-ghost w-full"
          placeholder="テンプレートのタイトル"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>     
      
      <div className="w-full h-full pb-20">
        <textarea
          className="textarea size-full"
          placeholder="テンプレートの内容を入力してください..."
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </div>
    </div>
  )
}
