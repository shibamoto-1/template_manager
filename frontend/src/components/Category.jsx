import { useContext } from "react"
import { TemplateContext } from "./context/TemplateContext"
import { X } from 'lucide-react'

export default function Category() {
  const { categories, selectCategory, selectedCategory, handleDeleteCategory } = useContext(TemplateContext);

  return(
    <div className="px-4 py-2 border-b border-gray-200">
      <h3 className="text-xs font-semibold text-gray-500">カテゴリー</h3>
      <ul className="mt-2 space-y-1">

        <li
          className={`flex justify-between items-center px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer ${
            selectedCategory === null ? 'bg-blue-50 text-blue-600' : ''
          }`}
          onClick={() => selectCategory(null)}
        >
            全カテゴリー
        </li>

        {categories.map((category) => (
          <li 
            key={category.name}
            className={`flex justify-between items-center px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer ${
              selectedCategory === category ? 'bg-blue-50 text-blue-600' : ''
            }`}
            onClick={() => selectCategory(category.name)}
          >
            <div className="flex justify-between w-full items-center">
              <p>
                {category.name}
              </p>
              <X className="size-5 hover:text-red-500" onClick={() => handleDeleteCategory(category.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
