import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/context/userContext';
import { render } from '@testing-library/react';
import { ProductsProvider } from './components/context/product-context';
import { DropDownProvider } from './components/context/DropDown-context';

const rootElement = document.getElementById('root');


render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DropDownProvider>
        <ProductsProvider>

          <App />
        </ProductsProvider>
        </DropDownProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();