import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Home from "./pagers/Home";
import Cart from "./pagers/Cart";
import NotFound from "./pagers/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wraper">
      <Header />
    <main>
        <section className="section">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/basket" element={<Cart/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>  
        </section> 
    </main>
    <footer></footer>
</div>
  );
}

export default App;
