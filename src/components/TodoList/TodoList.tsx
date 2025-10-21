import classes from './TodoList.module.scss';
import { Todo } from './Todo/Todo';
import type { TodoItem } from '../../models/todo-item';
export const TodoList = (props: {
  todos: TodoItem[];
  updatedTodo: Function;
  deleteTodo: Function;
}) => {
  function uncheckedList() {
    return props.todos
      .filter((todo) => !todo.isDone)
      .map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updatedTodo={props.updatedTodo}
          deleteTodo={props.deleteTodo}
        />
      ));
  }
  function checkedList() {
    return props.todos
      .filter((todo) => todo.isDone)
      .map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updatedTodo={props.updatedTodo}
          deleteTodo={props.deleteTodo}
        />
      ));
  }
  return (
    <div className={classes.todoContainer}>
      <ul className={`${classes.todoList} ${classes.failed}`}>
        {uncheckedList()}
      </ul>
      <ul className={`${classes.todoList} ${classes.completed}`}>
        {checkedList()}
      </ul>
    </div>
  );
};
