import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Routers/Router';

function App() {
  const router = routers
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
