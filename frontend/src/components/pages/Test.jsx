import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

import Sidebar from '../template/Sidebar';
import Content from '../template/Content';
import Header from '../Header';

export const TemplateContext = createContext();

export default function Test() {
  const [ templates, setTemplates ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState(null);

  const selectItem = (title) => {
    const matchContent =  templates.find((template) => template.title === title);
    setSelectedItem(matchContent);
  }


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
    await axios.post("http://localhost:3010/templates", {
      title: title,
      body: body,
      genre_id: genre
    });
    fetch();
  }

  const updateTemplate = async(body, title, id) => {
    await axios.patch(`http://localhost:3010/templates/${id}`, {
      title: title,
      body: body
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
  
  const deleteItem = async(id) => {
    if (!window.confirm(`本当に削除しますか？`)) return;
    await axios.delete(`http://localhost:3010/templates/${id}`)
    fetch();
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <TemplateContext.Provider value={{ templates, selectItem, selectedItem, updateTemplate }}>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1" >
          <Header />
          <Content />
        </div>
      </div>
    </TemplateContext.Provider>
  );
}