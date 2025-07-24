import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
// import AddNewLocation from './pages/AddNewLocation.jsx'
// import Authentication from './pages/Authentication.jsx'
// import Profile from './pages/Profile.jsx'
// import PersonList from './pages/PersonList.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  // {path: '/add-new-location', element: <AddNewLocation />},
  // {path: '/profile', element: <Profile />},
  // {path: '/authentication', element: <Authentication />},
  // {path: '/person-list', element: <PersonList />}
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