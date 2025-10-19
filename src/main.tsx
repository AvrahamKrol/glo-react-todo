import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/index.scss';
import './assets/scss/normalize.css';
import { TodoListPage } from './pages/TodoListPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoListPage />
  </StrictMode>
);
