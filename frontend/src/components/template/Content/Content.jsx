import ContentHeader from "./ContentHeader";
import Body from "./Body";
import Preview from "./Preview";
import { useContext, useEffect, useState } from "react";
import { TemplateAPIContext, TemplateContext } from "../../context/TemplateContext";
import Button from "../../Button";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


export function Content() {
  const { selectedTemplate } = useContext(TemplateContext);
  const { handleUpdateTemplate, handleDeleteTemplate } = useContext(TemplateAPIContext);
  const [ id, setId ] = useState(null)
  const { 
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: {title: "", body: "" }, mode: "onBlur" });
  const [ title, body ] = watch([ "title", "body" ]);
  const [ isUpdated, setIsUpdated ] = useState(false);

  useEffect(() => {
    if (selectedTemplate) {
      reset({
        title: selectedTemplate.title,
        body: selectedTemplate.body
      })
      setId(selectedTemplate.id);
      setIsUpdated(false);
    }
  }, [selectedTemplate.id]);
  
  const isEditing = () => {
    if (selectedTemplate.title === title && selectedTemplate.body === body){
      return false;
    } else {
      return true;
    };
  }
  
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
        <Body isEditing={isEditing} isUpdated={isUpdated} register={register} errors={errors} />
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
