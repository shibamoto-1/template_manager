import { useContext, useEffect, useState } from "react"
import { TemplateContext } from "./pages/Test";

export default function Body2() {
  const { selectedItem } = useContext(TemplateContext);
  const [ input, setInput ] = useState("");
  const [ body, setBody ] = useState("");

  useEffect(() => {
    if(selectedItem){
    setInput(selectedItem.title);
    setBody(selectedItem.body);
    }
  }, [selectedItem]);

  return(
    <div className="flex-1 p-4 h-screen border-r border-gray-200"> 
      <div className="border-b border-gray-200 mb-5">
        <input
          type="text"
          className="input input-ghost w-full"
          placeholder="テンプレートのタイトル"
          value={input}
          onChange={e => setInput(e.target.value)}
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