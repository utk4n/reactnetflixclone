import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/authContext';
import ToastifyContextProvider from './context/ToastifyContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ToastifyContextProvider>
    <AuthContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>
    </ToastifyContextProvider>
);

