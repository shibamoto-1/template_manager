import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const TemplateContext = createContext();

export default function TemplateProvider({ children }) {
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
  const createItem = async(title, body, category) => {
    await axios.post("http://localhost:3010/templates",
    {
      title: title,
      body: body,
      name: category
    },
    {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      }
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
    });
    fetch();
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <TemplateContext.Provider value={{ templates, selectItem, selectedItem, createItem, updateTemplate, deleteItem }}>
      {children}
    </TemplateContext.Provider>
  );
}