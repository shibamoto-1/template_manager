import ContentHeader from "../ContentHeader";
import Body from "../Body";
import Preview from "../Preview";
import { useContext, useEffect, useState } from "react";
import { TemplateContext } from "../context/TemplateContext";

export default function Content() {
  const { selectedItem, handleDeleteTemplate } = useContext(TemplateContext);
  const [ title, setTitle ] = useState("");
  const [ body, setBody ] = useState("");
  const [ id, setId ] = useState(null);

  const copy = () => {
    navigator.clipboard.writeText(body);
  }

  const clickDeleteButton = () => {
    handleDeleteTemplate(id);
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
        <Body title={title} setTitle={setTitle} body={body} setBody={setBody}/>
        <Preview body={body} />
      </div>
    </div>
  )

}