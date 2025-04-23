import { useState } from 'react';
import Sidebar from '../template/Sidebar';
import Content from '../template/Content';
import Cookies from 'js-cookie';
import Header from '../Header';

export default function Test() {
  // const [ templates, setTemplates ] = useState([]);
  // const [ selectedItem, setSelectedItem ] = useState({body: "アイテムを選択してください"});

  const fetch = async() => {
    const res = await axios.get("http://localhost:3010/templates")
    setTemplates(res.data);
  }

  // const createItem = async(title, body, genre=1) => {
  //   await axios.post("http://localhost:3010/templates", {
  //     title: title,
  //     body: body,
  //     genre_id: genre
  //   });
  //   fetch();
  // }

  // const editBody = async(body, id) => {
  //   await axios.patch(`http://localhost:3010/templates/${id}`, {
  //     body: body
  //   });
  //   fetch();
  // }
  
  // const deleteItem = async(id) => {
  //   if (!window.confirm(`本当に削除しますか？`)) return;
  //   await axios.delete(`http://localhost:3010/templates/${id}`)
  //   fetch();
  // }

  // const selectItem = (title) => {
  //   const matchContent =  templates.find((template) => template.title === title);
  //   setSelectedItem(matchContent);
  // }

  // useEffect(() => {
  //   fetch();
  // }, [])

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1" >
        <Header />
        <Content />
      </div>

    </div>
  );
}