import { useContext, useState } from "react";
import { TemplateContext } from "./context/TemplateContext";
import Category from "./Category";

export default function CategoryBar() {
  const { categories, templates } = useContext(TemplateContext);

  return(
    <div className="px-4 py-2 border-b border-gray-200">
      <h3 className="text-xs font-semibold text-gray-500">カテゴリー</h3>
      <ul className="mt-2">
        <Category key="all" templateSum={templates.length} />

        {categories.map((category) => {
          const templateSum = templates
                              .filter((template) => template.category_id === category.id)
                              .length;
          return <Category key={category.id} templateSum={templateSum} category={category} />;   
        })}
      </ul>
    </div>
  )
}
