import classes from './TodoList.module.scss';
import { Todo } from './Todo/Todo';
export const TodoList = () => {
  return (
    <div className={classes.todoContainer}>
      <ul className={`${classes.todoList} ${classes.failed}`}>
        <Todo text={'Первая задача'} />
        <Todo text={'Вторая задача'} />
      </ul>
    </div>
  );
};
