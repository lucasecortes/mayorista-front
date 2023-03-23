import './App.css';
import Hero from './pages/Hero';
import UnderConstruction from './pages/UnderConstruction';
import WebsiteLayout from './layouts/WebsiteLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Groceries from './pages/Groceries';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/groceries' element={<Groceries />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/*' element={<UnderConstruction />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
