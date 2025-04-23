import { useEffect, useState } from "react";
import axios from 'axios';
import SelectItem from "../SelectItem"
import Body from "../Body"
import Form from "../Form";
import Header from "../Header";
import Cookies from "js-cookie";

export default function Template() {
  const [ templates, setTemplates ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState({body: "アイテムを選択してください"});

  const fetch = async() => {
    const res = await axios.get("http://localhost:3010/templates", {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      },
    });
    setTemplates(res.data);
  }


  const createItem = async(title, body, genre=1) => {
    await axios.post("http://localhost:3010/templates",
    {
      template: {
      title: title,
      body: body,
      category_id: genre
      }
    },
    {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      }
    }
    );
    fetch();
  }

  const editBody = async(body, id) => {
    await axios.patch(`http://localhost:3010/templates/${id}`, {
      body: body
    });
    fetch();
  }
  
  const deleteItem = async(id) => {
    if (!window.confirm(`本当に削除しますか？`)) return;
    await axios.delete(`http://localhost:3010/templates/${id}`,
    {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      }
    }
    );
    fetch();
  }

  const selectItem = (title) => {
    const matchContent =  templates.find((template) => template.title === title);
    setSelectedItem(matchContent);
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <div className="w-full h-full">
      <Header />
      <Form createItem={createItem} />
      <SelectItem templates={templates} selectItem={selectItem} deleteItem={deleteItem} />
      <div className="container mx-auto px-4 py-6">
        <Body item={selectedItem} editBody={editBody} />
      </div>
    </div>
  )
}

