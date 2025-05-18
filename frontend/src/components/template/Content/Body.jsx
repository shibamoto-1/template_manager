import StatusMessage from "./StatusMessage";

export default function Body({isEditing, isUpdated, register, errors}) {

  const statusMessage = () => {
    if (isEditing()) return <StatusMessage color="yellow">編集中...</StatusMessage>;
    if (isUpdated) return <StatusMessage color="green" >更新しました！</StatusMessage>;
    return <StatusMessage color="blue">編集前</StatusMessage>;
  }

  return(
    <div className="flex-1 p-4 h-screen border-r border-gray-200"> 
    <div className="flex">
      <div className="w-1/2 mb-5">
        <input
          type="text"
          className="input input-ghost w-full border-gray-200"
          placeholder="テンプレートのタイトル"
          {...register("title", {
            required: "タイトルは必須です"
          })}
        />
        <p className="text-sm text-red-500">{errors?.title?.message}</p>
      </div>     
      <div className="w-full content-end">
        {statusMessage()}
      </div>
    </div>
      
      <div className="w-full h-full pb-20">
        <textarea
          className="textarea size-full"
          placeholder="テンプレートの内容を入力してください..."
          {...register("body")}
        />
      </div>
    </div>
  )
}
