import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from '../components/Login.jsx'
import Register from  '../components/Register.jsx'
import Dashboard from '../components/Dashboard.jsx'
import Submit from '../components/Submit.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

   
const router = createBrowserRouter([ 
  {
    path:'/',
    element:<App />,
  },
 {
  path:'/login',
  element:<Login />
 },
 {
  path: '/register',
  element:<Register />
 },

 {
  path:'/dashboard',
  element:<Dashboard />
 },

 {
  path:'/submit',
  element:<Submit />
 }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
