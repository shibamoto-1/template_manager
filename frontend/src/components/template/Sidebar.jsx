import SearchForm from '../SearchForm';
import Category from '../Category';
import Items from '../Items';


export default function Sidebar() {
  return (
    <div className="w-56 border-r border-gray-200">
      <SearchForm />
      <Category />
      <Items />
    </div>
  )
}