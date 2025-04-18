import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <nav className='mb-4'>
      <Link to="/">ホーム</Link> | 
      <Link to="/about"> アバウト</Link> | 
      <Link to="/contact"> お問い合わせ</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
