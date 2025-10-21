import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import { TodoList } from '../components/TodoList/TodoList';
import type { TodoItem } from '../models/todo-item';
import { useState } from 'react';

export const TodoListPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  function createNewTodo(text: string) {
    const newTodo: TodoItem = {
      id: todos.length,
      text,
      isDone: false,
    };
    setTodos([newTodo, ...todos]);
  }
  function updatedTodo(todoItem: TodoItem) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  function deleteTodo(todoItem: TodoItem) {
    const newTodos = todos.filter((todo) => todo.id !== todoItem.id);
    setTodos(newTodos);
  }
  return (
    <>
      <Header />
      <Form createNewTodo={createNewTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updatedTodo={updatedTodo}
      />
    </>
  );
};
