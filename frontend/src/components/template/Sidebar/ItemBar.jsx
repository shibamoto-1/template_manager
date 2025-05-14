import { useContext, useEffect, useState } from "react"
import { TemplateContext } from "../../context/TemplateContext"
import Item from "./Item";

// [役割]
// カテゴリの選択によって表示するItemを選ぶエリア

export default function ItemBar() {
  const { templates, categories, selectedCategory } = useContext(TemplateContext);

  const filteredTemplates =  () => {
    if (selectedCategory === null) {
      return templates;
    } else {
      return templates.filter(template => template.category_id === selectedCategory.id);
    }
  }

  return (
    <div className="max-h-1/3 px-4 py-2">
      <h3 className="text-xs font-semibold text-gray-500">テンプレート一覧</h3>
      <ul className="mt-2 space-y-1">
        {filteredTemplates().map((template) => {
          const category = categories.find((category) => category.id === template.category_id)
          return <Item key={template.id} template={template} categoryName={category.name} />;
        })}
      </ul>
    </div>
  ) 
}
