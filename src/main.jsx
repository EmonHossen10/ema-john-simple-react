import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Oders from './component/Oders/Oders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './Loader/cartProductsLoader';
import Checkout from './component/cart/Checkout/Checkout';
import SignUp from './component/Signup/SignUp';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoutes from './Routes/PrivateRoutes';


const router=createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element: <Oders></Oders>,
        loader: cartProductsLoader
      },
      {
        path:'inventory',
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
      {
        path:"checkout",
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* step 5 */}
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
