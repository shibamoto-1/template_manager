import { useContext, useState } from "react";
import { TemplateContext } from "./context/TemplateContext";
import Category from "./Category";
import { SquareDashed } from "lucide-react";

export default function CategoryBar() {
  const { categories, selectCategory, selectedCategory, templates } = useContext(TemplateContext);

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
            <Category key={category.id} templateSum={templateSum} category={category} />
          )       
        })}
      </ul>
    </div>
  )
}
