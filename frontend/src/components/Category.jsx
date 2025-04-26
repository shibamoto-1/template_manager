import { useContext } from "react"
import { TemplateContext } from "./context/TemplateContext"
import { X } from 'lucide-react'

export default function Category() {
  const { categories, selectCategory, selectedCategory, handleDeleteCategory, templates } = useContext(TemplateContext);

  return(
    <div className="px-4 py-2 border-b border-gray-200">
      <h3 className="text-xs font-semibold text-gray-500">カテゴリー</h3>
      <ul className="mt-2 space-y-1">

        <li
          className={`flex justify-between items-center px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer ${
            selectedCategory === null ? 'text-blue-600' : ''
          }`}
          onClick={() => selectCategory(null)}
        >
          <div className="flex space-x-4 items-center">
            <p>全カテゴリー</p>
            <p className="text-xs text-gray-400">{templates.length}</p>
          </div>
        </li>

        {categories.map((category) => {
          const templateSum = templates.filter((template) => template.category_id === category.id).length;

          return (
            <li 
            key={category.name}
            className="flex justify-between items-center px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => selectCategory(category.name)}
          >
            <div className="flex justify-between w-full items-center">
              <div className="flex space-x-5 items-center">
                <p className={`${selectedCategory === category ? 'text-blue-600' : ''}`}>
                  {category.name}
                </p>
                <p className="text-xs text-gray-400">{templateSum}</p>
              </div>
              <X className="size-5 hover:text-red-500" onClick={() => handleDeleteCategory(category.id)} />
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  )
}
