import { useState } from 'react'
import './App.css'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: 
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    }
  ]
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
