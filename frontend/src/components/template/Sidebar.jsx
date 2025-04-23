import SearchForm from '../SearchForm';
import Category from '../Category';
import Items from '../Items';
import { useContext } from 'react';
import { TemplateContext } from '../pages/Test';

export default function Sidebar() {
  const { selectItem } = useContext(TemplateContext);
  return (
    <div className="w-56 border-r border-gray-200">
      <SearchForm />
      <Category />
      <Items />
    </div>
  )
}