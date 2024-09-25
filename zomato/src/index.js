import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
);
