import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from 'react-router-dom';
import router from './components/routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './providers/AuthProviders.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <Toaster/>
    <RouterProvider router={router}/>
   </AuthProvider>
   
  </React.StrictMode>,
)
