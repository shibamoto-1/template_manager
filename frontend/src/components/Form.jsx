import { useState } from "react";

export default function Form({ createItem }) {
  const [ bodyValue, setBodyValue ] = useState("");
  const [ titleValue, setTitleValue ] = useState("");

  return(
    <div className="text-center">
      <h2>作成エリア</h2>
      <div>
        <label htmlFor="title">タイトル</label>
        <input type="text" id="title" className="input" value={titleValue} onChange={e => setTitleValue(e.target.value)} />
      </div>
      <div>
        <label htmlFor="body">内容</label>
        <input type="text" id="body" className="input" value={bodyValue} onChange={e => setBodyValue(e.target.value)} />
      </div>
      <button className="btn btn-secondary" onClick={() => createItem(titleValue, bodyValue)}>作成</button>
    </div>
  )
}