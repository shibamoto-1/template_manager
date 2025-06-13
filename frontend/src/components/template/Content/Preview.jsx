import { useState } from "react";
import Markdown from "react-markdown";
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm'

export default function Preview({body}) {
  const [ isMarkdown, setIsMarkdown ] = useState(true);

  return(
    <div className="w-1/2 p-4 flex flex-col h-full min-h-full max-h-full">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium mb-1">プレビュー</h3>
          <p className="text-xs text-gray-500 mb-3">マークダウンが適用された状態で表示されます</p>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="checkbox">マークダウン適用</label>
          <input 
            id="checkbox"
            type="checkbox" 
            className="toggle toggle-sm toggle-primary "
            defaultChecked
            onClick={() => setIsMarkdown(!isMarkdown)}
            />
        </div>
      </div>
      
      <div className="border border-gray-300 rounded px-5 pt-2 h-full overflow-scroll">
        <div className="prose prose-sm overflow-scroll">
          {isMarkdown ? 
            <Markdown
              remarkPlugins={[remarkBreaks, remarkGfm]}>
              {body}
            </Markdown>
            :
            <p className="whitespace-pre-wrap">{body}</p>
          }
        </div>
      </div>
    </div>
  )
}
