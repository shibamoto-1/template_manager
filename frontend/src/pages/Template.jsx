import { useEffect, useState } from "react";
import axios from 'axios';
import SelectItem from "../components/SelectItem"
import Body from "../components/Body"
import Form from "../components/Form";

export default function Template() {
  const [ templates, setTemplates ] = useState([]);
  const [ body, setBody ] = useState("アイテムを選択してください");

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

  const editBody = async(body, id) => {
    await axios.patch(`http://localhost:3010/template/${id}`, {
      body: body
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
      <Form createItem={createItem} />
      <SelectItem templates={templates} selectItem={selectItem} />
      <div className="container mx-auto px-4 py-6">
        <Body body={body} setBody={setBody} />
      </div>
    </div>
  )
}
