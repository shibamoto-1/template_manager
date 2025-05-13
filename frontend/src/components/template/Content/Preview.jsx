import Markdown from "react-markdown";

export default function Preview({bodyInput}) {

  return(
    <div className="flex-1 p-4">
      <h3 className="text-lg font-medium mb-1">プレビュー</h3>
      <p className="text-xs text-gray-500 mb-3">マークダウンが適用された状態で表示されます</p>
      
      <div className="w-full h-full border border-gray-300 rounded px-5 pt-2 pb-20">
        <div className="prose prose-sm">
          <Markdown>{bodyInput}</Markdown>
        </div>
      </div>
    </div>
  )
}
