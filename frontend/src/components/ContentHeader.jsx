import { Copy, Edit, Save, Trash2 } from "lucide-react";
import { useContext } from "react";
import { TemplateContext } from "./pages/Test";

export default function ContentHeader({title, body, id, copy, clickDeleteButton}) {
  const { updateTemplate, deleteItem } = useContext(TemplateContext);

  return(
    <div className="flex items-center justify-between border-b border-gray-200 p-3">

      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary gap-1">
          <Edit className="h-4 w-4" />
          新規作成（使用不可）
        </button>
        <button className="btn btn-sm btn-outline gap-1">
          <Save className="h-4 w-4" onClick={() => updateTemplate(body, title, id)} />
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