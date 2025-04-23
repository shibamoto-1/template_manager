export default function Category() {
  return(
    <div className="px-4 py-2 border-b border-gray-200">
      <h3 className="text-xs font-semibold text-gray-500">カテゴリー</h3>
      {/* <ul className="mt-2 space-y-1">
        {categories.map((category) => (
          <li 
            key={category.name}
            className={`flex justify-between items-center px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer ${
              category.name === 'すべて' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <div className="flex items-center">
              {category.name}
            </div>
            <span className="text-xs text-gray-500">{category.count}</span>
          </li>
        ))} */}
      {/* </ul> */}
    </div>

  )
}