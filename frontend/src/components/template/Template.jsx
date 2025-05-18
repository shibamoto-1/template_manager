import Sidebar from './Sidebar/Sidebar';
import { Content, NoContent } from './Content/Content';
import Header from '../Header';
import { useContext } from 'react';
import { TemplateContext } from '../context/TemplateContext';
import Loading from '../Loading';

export default function Template() {
  const { templates, isLoading } = useContext(TemplateContext);
  const isEmpty = templates.length === 0;
  
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className='flex flex-col h-screen flex-1'>
      <Header />
      {isLoading ?
        <Loading />
        :
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1" >
            {isEmpty ? <NoContent /> : <Content /> }
          </div>
        </div>
      }
    </div>
  );
}
