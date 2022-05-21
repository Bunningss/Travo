import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.scss';
import { useState } from 'react';

// Components
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

// Pages
import Home from './pages/Home/Home';

function App() {
  const [ active, setActive ] = useState(false);
  return (
    <BrowserRouter>
      <Topbar active={active} setActive={setActive}/>
      <Sidebar active={active} setActive={setActive}/>
      <Routes>
        <Route exact path='/' element={<Home active={active} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
