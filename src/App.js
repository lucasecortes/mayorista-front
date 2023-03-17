import './App.css';
import Hero from './pages/Hero';
import UnderConstruction from './pages/UnderConstruction';
import WebsiteLayout from './layouts/WebsiteLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <WebsiteLayout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/*' element={<UnderConstruction />} />
          </Routes>
        </BrowserRouter>
      </WebsiteLayout>
    </>
  );
}

export default App;
