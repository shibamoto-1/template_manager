import Sidebar from './Sidebar/Sidebar';
import { Content, NoContent } from './Content/Content';
import Header from '../Header';
import { useContext } from 'react';
import { TemplateContext } from '../context/TemplateContext';

export default function Template() {
  const { templates } = useContext(TemplateContext);
  const isEmpty = templates.length === 0;
  
  return (
    <div className='flex flex-col h-screen flex-1'>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1" >
          {!isEmpty ? <Content  /> : <NoContent />}
        </div>
      </div>
    </div>
  );
}
