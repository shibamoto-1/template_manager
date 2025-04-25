import SearchForm from '../SearchForm';
import Category from '../Category';
import Items from '../Items';
import { useContext } from 'react';
import { TemplateContext } from "../context/TemplateContext";

export default function Sidebar() {
  const { selectItem, categories } = useContext(TemplateContext);

  return (
    <div className="w-56 border-r border-gray-200">
      <Category />
      <Items />
    </div>
  )
}
