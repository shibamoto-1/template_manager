import { useContext } from "react"
import { TemplateContext } from "./pages/Test"

export default function Items() {
  const { templates, selectItem, selectedItem } = useContext(TemplateContext);

  return (
    <div className="max-h-1/3 px-4 py-2">
      <h3 className="text-xs font-semibold text-gray-500">テンプレート一覧</h3>
      <ul className="mt-2 space-y-1">
        {templates.map((template) => (
          <li
            key={template.id}
            className={`px-2 py-2 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
              selectedItem?.id === template.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => selectItem(template.title)}
          >
            <div className="font-medium">{template.title}</div>
            <div className="flex justify-between mt-1">
              {/* <span className="text-xs text-gray-500">{template.category}</span> */}
            </div>
          </li>
        ))}
      </ul>
    </div>

  ) 
}