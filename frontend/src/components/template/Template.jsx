import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import Header from '../Header';

export default function Template() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1" >
          <Content />
        </div>
      </div>
    </>
  );
}
