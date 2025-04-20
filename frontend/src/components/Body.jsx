import Markdown from 'react-markdown';

export default function Body({ body, setBody }) {
  return (
    <div className="flex space-x-4">
      <div className="w-1/2 border p-5">
        <textarea 
          value={body} 
          onChange={e => setBody(e.target.value)}
          className="w-full h-[300px]"
        />
      </div>
      
      <div className="w-1/2 border p-5">
        <div className="prose">
          <Markdown>{body}</Markdown>
        </div>
      </div>
    </div>
  )
}
