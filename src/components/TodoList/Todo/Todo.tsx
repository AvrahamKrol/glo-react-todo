import classes from './Todo.module.scss';
import { type TodoItem } from '../../../models/todo-item';

export const Todo = (props: {
  todo: TodoItem;
  updatedTodo: Function;
  deleteTodo: Function;
}) => {
  return (
    <li className={classes.todoListItem__wrapper}>
      <span>{props.todo.text}</span>
      <div className={classes.todoListItem__buttons}>
        <button
          className={`${classes.button} ${classes.btnTrash}`}
          onClick={() => props.deleteTodo(props.todo)}
        ></button>
        <button
          className={
            props.todo.isDone
              ? `${classes.button} ${classes.btnCheck}`
              : `${classes.button} ${classes.btnUncheck}`
          }
          onClick={() => props.updatedTodo(props.todo)}
        ></button>
      </div>
    </li>
  );
};
