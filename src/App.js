import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Context/AuthProvider';
import { routers } from './Routers/Router';

function App() {
  const {darkMode} = useContext(AuthContext)
  const router = routers
  // Create a client
  const queryClient = new QueryClient()
  return (
    <div className={`${darkMode ? 'bg-gray-50 text-gray-900' : 'bg-gray-900 text-white'}`}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </div>
  );
}

export default App;
