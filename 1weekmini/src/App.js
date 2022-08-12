import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { useEffect } from 'react';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/loginpage' element={<LoginPage />} /> */}
          <Route path='/' element={<MainPage />} />
          {/* <Route path='/detailpage' element={<DetailPage />} />
          <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
