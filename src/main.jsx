import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.jsx'
import { Home } from './pages/Home.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <LayoutMain/>,
  children: [
    {index: true, element: <Home/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
