import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Items from './component/Items/Items';
import AllItems from './component/Items/AllItems';
import About from './component/About/About';
import Loader from './component/Loader/Loader';
import ErrorPage from './component/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/foodItems/:id',
          loader: ({ params }) =>
            fetch(`https://hungry-delight-server.vercel.app/foodItems/${params.id}`),
          element: <Items></Items>
        },
        {
          path: '/allItems',
          element: <AllItems></AllItems>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    },
  ])
  return (
    <div className="App overflow-x-hidden">
      <RouterProvider fallbackElement={<Loader></Loader>} router={router}></RouterProvider>
    </div>
  );
}

export default App;
