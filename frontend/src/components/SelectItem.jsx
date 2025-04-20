export default function SelectItem({ templates, selectItem }) {
  return (
    <div className="border p-5 m-5 flex flex-col space-y-3">
      {templates.map(template => 
        <button key={template.title} className="btn btn-primary" onClick={() => selectItem(template.title)} >
          {template.title}
        </button>
      )}
    </div>
  )
}