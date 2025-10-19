import './TodoList.scss';
import { Todo } from './Todo/Todo';
export const TodoList = () => {
  return (
    <div className="todo-container">
      <Todo text={'Первая задача'} />
      <Todo text={'Вторая задача'} />
    </div>
  );
};
