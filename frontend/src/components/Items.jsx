import { useContext, useEffect, useState } from "react"
import { TemplateContext } from "./context/TemplateContext"

export default function Items() {
  const { templates, selectItem, selectedItem, categories, selectedCategory } = useContext(TemplateContext);
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredTemplates(templates);
    } else {
      const filtered = templates.filter(
        template => template.category_id === selectedCategory.id
      );
      setFilteredTemplates(filtered);
    }
  }, [templates, selectedCategory]);

  return (
    <div className="max-h-1/3 px-4 py-2">
      <h3 className="text-xs font-semibold text-gray-500">テンプレート一覧</h3>
      <ul className="mt-2 space-y-1">
        {filteredTemplates.map((template) => {
          const category = categories.find((category) => category.id === template.category_id)

          return(
            <li
              key={template.id}
              className={`px-2 py-1 text-sm border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedItem?.id === template.id ? 'bg-gray-100' : ''
              }`}
              onClick={() => selectItem(template.title)}
            >
                <div className="flex flex-col">
                  <div className="text-base">{template.title}</div>
                  <span className="text-xs text-blue-600 my-1">{category?.name}</span>
                </div>
            </li>
          )
        })}
      </ul>
    </div>
  ) 
}
