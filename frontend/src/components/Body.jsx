import Markdown from 'react-markdown';
import { useState, useEffect } from 'react';

export default function Body({ item, editBody }) {
  const [ body, setBody ] = useState(item.body);

  useEffect(() => {
    setBody(item.body);
  }, [item]);

  return (
    <div className="flex space-x-4">
      <div className="w-1/2 border p-5">
        <textarea 
          value={body} 
          onChange={e => setBody(e.target.value)}
          className="w-full h-[300px]"
        />
        <button className='btn btn-secondary' onClick={() => editBody(body, item.id)}>更新</button>
      </div>
      
      <div className="w-1/2 border p-5">
        <div className="prose">
          <Markdown>{body}</Markdown>
        </div>
      </div>
    </div>
  )
}
