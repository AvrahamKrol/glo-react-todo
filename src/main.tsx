import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './normalize.css';
import { TodoList } from './pages/TodoList.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);
