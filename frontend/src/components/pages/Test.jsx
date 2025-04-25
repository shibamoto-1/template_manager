import Sidebar from '../template/Sidebar';
import Content from '../template/Content';
import Header from '../Header';

export default function Test() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1" >
        <Header />
        <Content />
      </div>
    </div>
  );
}
