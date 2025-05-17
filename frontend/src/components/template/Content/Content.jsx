import ContentHeader from "./ContentHeader";
import Body from "./Body";
import Preview from "./Preview";
import { useContext, useEffect, useState } from "react";
import { TemplateAPIContext, TemplateContext } from "../../context/TemplateContext";
import Button from "../../Button";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";


export function Content() {
  const { selectedTemplate } = useContext(TemplateContext);
  const { handleUpdateTemplate, handleDeleteTemplate } = useContext(TemplateAPIContext);
  const [ title, setTitle ] = useState("");
  const [ body, setBody ] = useState("");
  const [ id, setId ] = useState(null)
  const [ isUpdated, setIsUpdated ] = useState(false);

  const isEditing = () => {
    if (selectedTemplate.title === title && selectedTemplate.body === body){
      return false;
    } else {
      return true;
    };
  }
  useEffect(() => {
    if (selectedTemplate) {
      setTitle(selectedTemplate.title);
      setBody(selectedTemplate.body);
      setId(selectedTemplate.id);
      setIsUpdated(false);
    }
  }, [selectedTemplate.id]);

  const handleUpdate = () => {
    handleUpdateTemplate(body, title, id);
    setIsUpdated(true);
  }

  const copy = () => {
    navigator.clipboard.writeText(body);
  }

  const handleDelete = (modalRef) => {
    handleDeleteTemplate(id);
    setTitle("");
    setBody("");
    modalRef?.current.close();
  }

  return(
    <div>
      <ContentHeader copy={copy} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      <div className="flex flex-1">
        <Body title={title} setTitle={setTitle} body={body} setBody={setBody} isEditing={isEditing} isUpdated={isUpdated} />
        <Preview body={body} />
      </div>
    </div>
  )

}

export function NoContent() {
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
