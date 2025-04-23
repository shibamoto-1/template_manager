import { Copy, Edit, Save, Trash2 } from "lucide-react";

export default function ContentHeader() {
  return(
    <div className="flex items-center justify-between border-b border-gray-200 p-3">

      <div className="flex gap-2">
        <button className="btn btn-sm btn-primary gap-1">
          <Edit className="h-4 w-4" />
          新規作成
        </button>
        <button className="btn btn-sm btn-outline gap-1">
          <Save className="h-4 w-4" />
          更新
        </button>
      </div>

      <div className="flex gap-2">
      <button className="btn btn-sm btn-outline gap-1">
          <Copy className="h-4 w-4" />
          プレビューをコピー
        </button>
        <button className="btn btn-sm btn-outline btn-error gap-1">
          <Trash2 className="h-4 w-4" />
          削除
        </button>
      </div>

    </div>

  )
}