import ContentHeader from "./ContentHeader";
import Body from "./Body";
import Preview from "./Preview";
import { useContext, useEffect, useState } from "react";
import { TemplateAPIContext, TemplateContext } from "../../context/TemplateContext";
import Button from "../../Button";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";


export default function Content({ isEmpty }) {
  const { selectedItem } = useContext(TemplateContext);
  const { handleDeleteTemplate } = useContext(TemplateAPIContext);
  const [ title, setTitle ] = useState("");
  const [ body, setBody ] = useState("");
  const [ id, setId ] = useState(null);

  const copy = () => {
    navigator.clipboard.writeText(selectedItem.body);
  }

  const clickDeleteButton = (modalRef) => {
    handleDeleteTemplate(id);
    setTitle("");
    setBody("");
    modalRef?.current.close();
  }

  useEffect(() => {
    if(selectedItem){
    setTitle(selectedItem.title);
    setBody(selectedItem.body);
    setId(selectedItem.id);
    }
  }, [selectedItem]);

  if(isEmpty){
    return(
      <div className="h-full flex flex-col justify-top items-center pt-20 gap-10">
        <div className="text-gray-500 text-center">
          テンプレートが空です。新規作成してください。
        </div>
        <Link to="/new">
          <Button className="btn-primary btn-sm gap-1">
            <Edit className="h-4 w-4" />
            新規作成
          </Button>
        </Link>
      </div>
    )
  }

  return(
    <div>
      <ContentHeader title={title} body={body} id={id} copy={copy} clickDeleteButton={clickDeleteButton} />
      <div className="flex flex-1">
        <Body title={title} setTitle={setTitle} body={body} setBody={setBody} />
        <Preview body={body} />
      </div>
    </div>
  )

}