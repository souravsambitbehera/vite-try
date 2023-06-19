import React from 'react';
import ProductList from './components/ProductList';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>My Store</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
