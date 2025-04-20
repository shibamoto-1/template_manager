import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Template from './pages/Template';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
