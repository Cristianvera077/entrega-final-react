
import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes} from'react-router-dom';
import cart from './components/cart';

import NavBar from './components/NavBar';

import {itemListContainer} from '/components/itemListContainer';
import {ItemDetailContainer} from './components/ItemdetailContainer';


import CartProvider from'./CartContext/CartContext';


function App() {

  return ( <>
  <BrowserRouter>
<CartContext.Provider>
  <NavBar/>
  <routes>
    <route path='/'element={<itemListContainer/>}/>
    <route path='/categoria/:categoriaId'element={<itemListContainer/>}/>
    <route path='/cart'element={<itemListContainer/>}/>
    <route path='/detalle/detalleId'element={<itemListContainer/>}/>
  </routes>
  </CartContext.Provider>
  </BrowserRouter>
  </>);
}

export default App;
