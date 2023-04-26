import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './pages/PageLayout';


const HomePage = lazy(() => import('./pages/HomePage'));
const TodoListPage = lazy(() => import('./pages/TodoListPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path='todos' element={<TodoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
    
  );
}

export default App;
