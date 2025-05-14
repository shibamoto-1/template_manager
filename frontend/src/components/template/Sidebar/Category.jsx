import { EllipsisVertical } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { TemplateContext } from '../../context/TemplateContext';
import DeleteModal from "../../DeleteModal";


export default function Category({ templateSum, category = null }) {
  const { selectCategory, selectedCategory, handleUpdateCategoryName, handleDeleteCategory } = useContext(TemplateContext);
  const [ isEditName, setIsEditName ] = useState(false);
  const [ categoryName, setCategoryName ] = useState(category ? category.name : "全カテゴリ");
  const modalRef = useRef();
  const inputRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current.showModal();
  }

  const handleCloseModal = () => {
    modalRef.current.close();
  }

  const deleteCategory = () => {
    handleDeleteCategory(category.id);
    modalRef.current.close();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateCategoryName(category.id, categoryName);
    setIsEditName(false);
  }
  const handleOnBlur = () => {
    setIsEditName(false);
    setCategoryName(category.name);
  }
  
  useEffect(() =>  {
    if (isEditName) {
    inputRef.current.focus();
    }
  }, [isEditName]);

  return (
    <li className="flex justify-between items-center pr-2 text-sm">
      {/* カテゴリ名 */}
      <div className="flex space-x-5 w-full">
        {isEditName ? 
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="input input-ghost h-8 my-2"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            onBlur={handleOnBlur}
          />
        </form>
          :
          <button
            type="button"
            className={`flex justify-between items-center rounded size-full pl-2 pr-3 py-3 hover:bg-gray-100 cursor-pointer ${selectedCategory === category ? 'text-blue-600' : ''}`}
            onClick={() => selectCategory(category ? category.name : null)}
          >
            <span>{categoryName}</span>
            <span className="text-xs text-gray-400">{templateSum}</span>
          </button>
        }
      </div>

      {/* 3点リーダー */}
      {category && 
        <div className="dropdown dropdown-right dropdown-center">
          <EllipsisVertical tabIndex={0} className="p-1 mr-1 hover:text-red-500" strokeWidth={2}/>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" >
            <li>
              <p onClick={() => setIsEditName(true)} >カテゴリ名を編集</p>
            </li>
            <li>
              <p className="text-red-500" onClick={() => handleOpenModal()}>カテゴリを削除</p>
            </li>
          </ul>
        </div>
      }

      <DeleteModal
        modalRef={modalRef}
        title="カテゴリを削除しますか？"
        message={`残りのテンプレート数は${templateSum}個です`}
        onConfirm={deleteCategory}
        handleCloseModal={handleCloseModal}
      />
    </li>
  )
}
