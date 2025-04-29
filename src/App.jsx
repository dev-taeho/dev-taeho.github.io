import './App.css';
import Home from '@/src/pages/home';
import Project from '@src/pages/project';
import Experience from '@pages/experience';
import NotFoundPage from '@src/pages/not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';

function App() {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
