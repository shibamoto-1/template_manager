import deleteButton from "../assets/delete_button.svg"

export default function SelectItem({ templates, selectItem, deleteItem }) {
  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl font-semibold">テンプレートを選択</h2>
      <div className="p-5 flex space-x-3 justify-center">
        {templates.map(template => 
          <button key={template.title} className="btn btn-primary">
            <span onClick={() => selectItem(template.title)}>
              {template.title}
            </span>
            <span className="ml-3" onClick={() => deleteItem(template.id)} >
              <img src={deleteButton} className="size-3"/>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}