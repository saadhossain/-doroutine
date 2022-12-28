import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Routers/Router';

function App() {
  const router = routers
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
