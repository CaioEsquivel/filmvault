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
import { CategoriesPage } from './pages/categories/categories.jsx'
import { Wishlist } from './pages/wishlist/wishlist.jsx'


import { GenreProvider } from './context/GenreContext.jsx'
import { KeyProvider } from './context/KeyContext.jsx'
import { CardPopupProvider } from './context/CardPopupContext.jsx'
import { CardToggleProvider } from './context/CardToggleContext.jsx'
import { InputProvider } from './context/InputContext.jsx'
import { FilterMovieArrProvider } from './context/FilterMovieArrContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'




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
      },
      {
        path:'category',
        element: <CategoriesPage />
      },
      {
        path:'wishlist',
        element: <Wishlist />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KeyProvider>
      <GenreProvider>
        <CardPopupProvider>
          <CardToggleProvider>
              <InputProvider>
                <FilterMovieArrProvider>
                  <WishlistProvider>
                    <RouterProvider router={route} />
                  </WishlistProvider>
                </FilterMovieArrProvider>
              </InputProvider>
          </CardToggleProvider>
        </CardPopupProvider>
      </GenreProvider>
    </KeyProvider>
  </StrictMode>,
)
