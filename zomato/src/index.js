import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gujrati from './pages/Gujrati';
import Chinese from './pages/Chinesse';
import Punjabi from './pages/Punjabi';
import SouthIndian from './pages/SouthIndian';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/gujrati' element={<Gujrati/>}/>
          <Route path='/chinese' element={<Chinese/>}/>
          <Route path='/punjabi' element={<Punjabi/>}/>
          <Route path='/southindian' element={<SouthIndian/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
);
