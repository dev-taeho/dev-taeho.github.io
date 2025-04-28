import './App.css';
import Home from '@page/Home';
import Project from '@page/Project';
import Experience from '@page/Experience';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
