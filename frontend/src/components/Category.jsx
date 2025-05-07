import { EllipsisVertical } from 'lucide-react';
import { useContext, useState } from 'react';
import { TemplateContext } from './context/TemplateContext';

export default function Category({ templateSum, category }) {
  const { selectCategory, selectedCategory, handleDeleteCategory } = useContext(TemplateContext);
  const [ isEditName, setIsEditName ] = useState(false);
  const [ categoryName, setCategoryName ] = useState(category.name);

  return (
    <li 
      className="flex justify-between items-center px-2 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer"
      onClick={() => selectCategory(category.name)}
    >
      <div className="flex justify-between w-full items-center">
        {/* カテゴリ名 */}
        <div className="flex space-x-5 items-center">
          {isEditName ? 
              (<input
                type="text"
                className="input"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                onBlur={() => setIsEditName(false)}
              />)
              :
              (<p
                className={`${selectedCategory === category ? 'text-blue-600' : ''}`}>
                {category.name}
              </p>)}
          <p className="text-xs text-gray-400">{templateSum}</p>
        </div>

        {/* 3点リーダー */}
        <div className="dropdown dropdown-right dropdown-center">
          <EllipsisVertical tabIndex={0} className="p-1 hover:text-red-500" strokeWidth={2}/>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" >
            <li>
              <p onClick={() => setIsEditName(true)} >カテゴリ名を編集</p>
            </li>
            <li>
              <p className="text-red-500" onClick={() => handleDeleteCategory(category.id)}>カテゴリを削除</p>
            </li>
          </ul>
        </div>
      </div>
    </li>

  )
}