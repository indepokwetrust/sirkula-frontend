import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import MyRequest from './pages/MyRequest.jsx'

import Detail from './pages/Detail.jsx'
import DetailRequest from './pages/DetailRequest.jsx'

import Authentication from './pages/Authentication.jsx'
import Authentication2 from './pages/Authentication2.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/explore', element: <Explore />},
  {path: '/detail', element: <Detail />},
  {path: '/my-request', element: <MyRequest />},
  {path: '/detail-request', element: <DetailRequest />},
  {path: '/authentication', element: <Authentication />},
  {path: '/authentication2', element: <Authentication2 />},
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App