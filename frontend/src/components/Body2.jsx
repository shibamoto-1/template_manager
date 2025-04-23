export default function Body2() {
  return(
    <div className="flex-1 p-4 h-screen border-r border-gray-200"> 
      <div className="border-b border-gray-200 mb-5">
        <input
          type="text"
          className="input input-ghost w-full"
          placeholder="テンプレートのタイトル"
        />
      </div>     
      
      <div className="w-full h-full pb-20">
        <textarea
          className="textarea size-full"
          placeholder="テンプレートの内容を入力してください..."
        ></textarea>
      </div>
    </div>
  )
}