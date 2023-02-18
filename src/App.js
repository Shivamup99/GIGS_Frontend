import React from 'react';
import './App.css';
import {createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import Categories from './pages/categories/Categories'
import Category from './pages/category/Category'
import Add from './pages/add/Add'
import MyGig from './pages/myGigis/MyGig'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Orders from './pages/order/Order'
function App() {
  const Layout = ()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Dashboard/>
        },
        {
          path:'/gigs',
          element:<Categories/>
        },
        {
          path:'/gig/:id',
          element:<Category/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/myGigs',
          element:<MyGig/>
        },
        {
          path:'/add',
          element:<Add/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/message/:id',
          element:<Message/>
        },
      ]
    }
  ])
  return (
    <div className="app">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
