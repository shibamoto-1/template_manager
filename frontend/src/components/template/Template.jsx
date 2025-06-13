import Sidebar from './Sidebar/Sidebar';
import { Content, NoContent } from './Content/Content';
import Header from '../Header';
import { useContext } from 'react';
import { TemplateContext } from '../context/TemplateContext';
import Loading from '../Loading';

export default function Template() {
  const { templates, isLoading } = useContext(TemplateContext);
  const isEmpty = templates.length === 0;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {isLoading ?
        <Loading />
        :
        <div className="flex border-b border-gray-200 h-full">
          <Sidebar />
          <div className="size-full" >
            {isEmpty ? <NoContent /> : <Content /> }
          </div>
        </div>
      }
    </div>
  );
}
