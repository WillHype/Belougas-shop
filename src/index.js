import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider> {/*permet de fournir les données dans toutes les pages*/}
    <App />
  </ShopContextProvider>
);

