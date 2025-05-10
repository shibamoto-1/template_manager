import { Copy, Edit, Save, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { TemplateContext } from "../../context/TemplateContext";
import { Link } from "react-router-dom";
import Tooltip from "../../ToolTip";
import Button from "../../Button";

export default function ContentHeader({title, body, id, copy, clickDeleteButton}) {
  const { handleUpdateTemplate } = useContext(TemplateContext);
  const [showTooltip, setShowTooltip] = useState(false);

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


  return(
    <div className="flex items-center justify-between border-b border-gray-200 p-3">

      <div className="flex gap-2">
        <Link to="/new">
          <Button className="btn-primary btn-sm gap-1">
            <Edit className="h-4 w-4" />
            新規作成
          </Button>
        </Link>

        <Button className="btn-outline btn-sm gap-1"
                onClick={() => handleUpdateTemplate(body, title, id)}>
          <Save className="h-4 w-4" />
          更新
        </Button>
      </div>

      <div className="flex gap-2">
        <Button className="btn-outline btn-sm gap-1 relative" 
                onClick={() => handleCopy()}>
          {showTooltip && <Tooltip />}
          <Copy className="h-4 w-4" />
          テンプレートをコピー
        </Button>

        <Button className="btn-outline btn-sm btn-error gap-1"
                onClick={() => clickDeleteButton()}>
          <Trash2 className="h-4 w-4" />
          削除
        </Button>
      </div>
    </div>
  )
}
