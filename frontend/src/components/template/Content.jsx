import ContentHeader from "../ContentHeader";
import Body2 from "../Body2";
import Preview from "../Preview";
import { useContext, useEffect, useRef, useState } from "react";
import { TemplateContext } from "../pages/Test";

export default function Content() {
  const { selectedItem, deleteItem } = useContext(TemplateContext);
  const [ title, setTitle ] = useState("");
  const [ body, setBody ] = useState("");
  const [ id, setId ] = useState(null);

  const copy = () => {
    navigator.clipboard.writeText(body);
  }

  const clickDeleteButton = () => {
    deleteItem(id);
    setTitle("");
    setBody("");
  }

  useEffect(() => {
    if(selectedItem){
    setTitle(selectedItem.title);
    setBody(selectedItem.body);
    setId(selectedItem.id);
    }
  }, [selectedItem]);


  return(
    <div>
      <ContentHeader title={title} body={body} id={id} copy={copy} clickDeleteButton={clickDeleteButton} />
      <div className="flex flex-1">
        <Body2 title={title} setTitle={setTitle} body={body} setBody={setBody}/>
        <Preview body={body} />
      </div>
    </div>
  )

}