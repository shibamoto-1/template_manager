import { Copy, Edit, Save, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "../../Tooltip";
import Button from "../../Button";
import DeleteModal from "../../DeleteModal";

export default function ContentHeader({handleUpdate, handleDelete, copy}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const modalRef = useRef();

  const deleteButton = () => {
    handleDelete(modalRef);
  }

  const handleCopy = () => {
    setShowTooltip(true);
    copy();
  }

  useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  }, [showTooltip]);

  const handleOpenModal = () => {
    modalRef.current.showModal();
  }

  const handleCloseModal = () => {
    modalRef.current.close();
  }

  return(
    <div className="flex items-center justify-between border-b border-gray-200 p-3">

      <div className="flex gap-2">
        <Link to="/new">
          <Button className="btn-primary btn-sm gap-1">
            <Edit className="h-4 w-4" />
            新規作成
          </Button>
        </Link>

        <Button className="btn-outline btn-sm gap-1" onClick={handleUpdate}>
          <Save className="h-4 w-4" />
          更新
        </Button>
      </div>

      <div className="flex gap-2">
        <Button className="btn-outline btn-sm gap-1 relative" onClick={() => handleCopy()}>
          {showTooltip && <Tooltip />}
          <Copy className="h-4 w-4" />
          テンプレートをコピー
        </Button>

        <Button className="btn-outline btn-sm btn-error gap-1" 
          onClick={()=>handleOpenModal()}>
          <Trash2 className="h-4 w-4" />
          削除
        </Button>
      </div>

      <DeleteModal
        modalRef={modalRef}
        handleCloseModal={handleCloseModal}
        onConfirm={deleteButton}
        title="テンプレートを削除しますか？"
        />
    </div>
  )
}
