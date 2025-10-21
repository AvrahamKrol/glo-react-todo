import classes from './Todo.module.scss';
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-expect-error
export const Todo = ({ text }) => {
  return (
    <li className={classes.todoListItem__wrapper}>
      <span>{text}</span>
      <div className={classes.todoListItem__buttons}>
        <button className={`${classes.button} ${classes.btnTrash}`}></button>
        <button className={`${classes.button} ${classes.btnUncheck}`}></button>
      </div>
    </li>
  );
};
