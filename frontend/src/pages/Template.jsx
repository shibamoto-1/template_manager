import SelectItem from "../components/SelectItem"
import Body from "../components/Body"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Template() {
  const [ templates, setTemplates ] = useState([]);
  const [ body, setBody ] = useState("");
  const [ bodyValue, setBodyValue ] = useState("");
  const [ titleValue, setTitleValue ] = useState("");

  const fetch = async() => {
    const res = await axios.get("http://localhost:3010/templates")
    setTemplates(res.data);
  }

  const createItem = async(title, body, genre=1) => {
    await axios.post("http://localhost:3010/templates", {
      title: title,
      body: body,
      genre_id: genre
    });
    fetch();
  }

  const selectItem = (title) => {
    const matchContent =  templates.find((template) => template.title === title);
    setBody(matchContent.body);
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <div className="w-full h-full">
      <div className="text-center my-5">
        <h1>ホームページです！</h1>
      </div>
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
      <div className="flex justify-around">
        <SelectItem templates={templates} selectItem={selectItem} />
        <Body body={body} />
      </div>
    </div>
  )
}
