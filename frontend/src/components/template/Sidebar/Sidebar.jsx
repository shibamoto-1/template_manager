import CategoryBar from './CategoryBar';
import ItemBar from './ItemBar';

export default function Sidebar() {
  return (
    <div className="w-56 border-r border-gray-200">
      <CategoryBar />
      <ItemBar />
    </div>
  )
}
