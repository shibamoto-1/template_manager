import { Copy, Edit, Save, Trash2 } from "lucide-react";
import { useContext } from "react";
import { TemplateContext } from "../../context/TemplateContext";
import { Link } from "react-router-dom";

export default function ContentHeader({title, body, id, copy, clickDeleteButton}) {
  const { handleUpdateTemplate } = useContext(TemplateContext);

  return(
    <div className="flex items-center justify-between border-b border-gray-200 p-3">

      <div className="flex gap-2">
        <Link to="/new">
          <button className="btn btn-sm btn-primary gap-1">
            <Edit className="h-4 w-4" />
            新規作成
          </button>
        </Link>
        <button className="btn btn-sm btn-outline gap-1">
          <Save className="h-4 w-4" onClick={() => handleUpdateTemplate(body, title, id)} />
          更新
        </button>
      </div>

      <div className="flex gap-2">
        <button className="btn btn-sm btn-outline gap-1" onClick={() => copy()}>
          <Copy className="h-4 w-4" />
          テンプレートをコピー
        </button>
        <button className="btn btn-sm btn-outline btn-error gap-1" onClick={() => clickDeleteButton()}>
          <Trash2 className="h-4 w-4" />
          削除
        </button>
      </div>

    </div>

  )
}