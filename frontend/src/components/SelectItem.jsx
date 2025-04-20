import deleteButton from "../assets/delete_button.svg"

export default function SelectItem({ templates, selectItem, deleteItem }) {
  return (
    <div className="border p-5 m-5 flex space-x-3">
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
  )
}