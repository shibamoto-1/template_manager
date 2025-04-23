export default function Preview() {
  return(
    <div className="flex-1 p-4">
      <h3 className="text-lg font-medium mb-1">プレビュー</h3>
      <p className="text-xs text-gray-500 mb-3">マークダウンが適用された状態で表示されます</p>
      
      <div className="w-full h-full pb-20">
        <textarea
          className="textarea size-full prose prose-sm"
          placeholder="テンプレートの内容を入力してください..."
        ></textarea>
      </div>
    </div>
  )
}
