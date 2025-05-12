import ContentHeader from "./ContentHeader";
import Body from "./Body";
import Preview from "./Preview";
import { useContext, useEffect, useState } from "react";
import { TemplateContext } from "../../context/TemplateContext";

export default function Content() {
  const { selectedItem, handleDeleteTemplate } = useContext(TemplateContext);
  const [ title, setTitle ] = useState("");
  const [ body, setBody ] = useState("");
  const [ id, setId ] = useState(null);
  const [ titleInput, setTitleInput ] = useState("");
  const [ bodyInput, setBodyInput ] = useState("");


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
    setTitleInput(selectedItem.title);
    setBodyInput(selectedItem.body);
    setId(selectedItem.id);
    }
  }, [selectedItem]);

  return(
    <div>
      <ContentHeader title={titleInput} body={bodyInput} id={id} copy={copy} clickDeleteButton={clickDeleteButton} />
      <div className="flex flex-1">
        <Body title={title} setTitleInput={setTitleInput} body={body} setBodyInput={setBodyInput} titleInput={titleInput} bodyInput={bodyInput} />
        <Preview body={body} />
      </div>
    </div>
  )

}