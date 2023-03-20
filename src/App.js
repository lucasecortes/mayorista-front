import './App.css';
import Hero from './pages/Hero';
import UnderConstruction from './pages/UnderConstruction';
import WebsiteLayout from './layouts/WebsiteLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />} />
          {/* <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} /> */}
          <Route path='/*' element={<UnderConstruction />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
