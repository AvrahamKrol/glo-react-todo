import './Todo.scss';
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-expect-error
export const Todo = ({ text }) => {
  return (
    <ul className="todo-list failed">
      <li className="todo-list-item__wrapper">
        <span>{text}</span>
        <div className="todo-list-item__buttons">
          <button className="btn-trash"></button>
          <button className="btn-check"></button>
        </div>
      </li>
    </ul>
  );
};
