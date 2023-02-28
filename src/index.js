import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiThinkfic } from './features/apiSlice';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Redirect from './pages/redirect/Redirect';
import ReactDOM from 'react-dom';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ApiProvider api={ apiThinkfic}>
    <BrowserRouter>
    <Routes>
      
     <Route path="/" element={<App />} >
     
      </Route>
      <Route path="redirect" element={<Redirect/>} />
      <Route path="*" element={<h1>Route does not 
            exist</h1>}/>
    </Routes>

    </BrowserRouter>
    
 
     </ApiProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
