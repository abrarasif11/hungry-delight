import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Items from './component/Items/Items';
import AllItems from './component/Items/AllItems';

function App() {
  const router = createBrowserRouter([
    {
     path : '/',
     element : <Main></Main>,
     children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/items',
        element : <Items></Items>
      },
      {
        path : '/allItems',
        element : <AllItems></AllItems>
      },
      {
        path : '/about',
        element : <Home></Home>
      },
     ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
