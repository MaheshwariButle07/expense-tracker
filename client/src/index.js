import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import AddNewTransiction from './views/AddNewTransiction/AddNewTransiction';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/addTransiction",
    element:<AddNewTransiction/>
  }
])
root.render(<RouterProvider router={router}/>);


