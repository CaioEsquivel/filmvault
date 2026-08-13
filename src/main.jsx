import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Register } from './pages/register/Register.jsx'
import { Login } from './pages/login/login.jsx'
import { Master } from './pages/main/Master.jsx'
import { Dashboard } from './pages/dashboard/dashboard.jsx'
import { Archive } from './pages/archive/archive.jsx'



const route = createBrowserRouter([
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '/',
    element: <Master />,
    children: [
      {
        index:true,
        element: <Dashboard />
      },
      {
        path:'archive',
        element: <Archive />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
