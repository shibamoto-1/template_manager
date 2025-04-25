import Sidebar from '../template/Sidebar';
import Content from '../template/Content';
import Header from '../Header';

export default function Test() {
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
