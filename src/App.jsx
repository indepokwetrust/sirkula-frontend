import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import MyRequest from './pages/MyRequest.jsx'
// import AddNewLocation from './pages/AddNewLocation.jsx'
// import Authentication from './pages/Authentication.jsx'
// import Profile from './pages/Profile.jsx'
// import PersonList from './pages/PersonList.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Detail from './pages/Detail.jsx'
import DetailRequest from './pages/DetailRequest.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/explore', element: <Explore />},
  {path: '/detail', element: <Detail />},
  {path: '/my-request', element: <MyRequest />},
  {path: '/detail-request', element: <DetailRequest />}
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