
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', 
      element: <Main></Main>,
      children: [
        {
          path: '/', 
          element: <Home></Home>
        }, 
        {
          path: '/login', 
          element: <Login></Login>
        }, 
        {
          path: '/registration', 
          element: <Registration></Registration>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
