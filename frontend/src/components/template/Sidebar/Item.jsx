import { useContext } from "react"
import { TemplateContext } from "../../context/TemplateContext"

export default function Item({ template, categoryName }) {
  const { selectItem, selectedItem, setIsUpdated } = useContext(TemplateContext);
  return (
    <li
      key={template.id}
      className={`flex flex-col px-2 py-1 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
        selectedItem?.id === template.id ? 'bg-gray-100' : ''
      }`}
      onClick={() => {selectItem(template)
        setIsUpdated(false)}}
        >
      <p className="text-base">{template.title}</p>
      <span className="text-xs text-blue-600 my-1">{categoryName}</span>
    </li>  
  )
}
