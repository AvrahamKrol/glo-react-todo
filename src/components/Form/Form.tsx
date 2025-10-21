import { useState } from 'react';
import classes from './Form.module.scss';
export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState<string>('');
  function formSubmit() {
    if (text) {
      props.createNewTodo(text);
      setText('');
    }
  }
  return (
    <div className={classes.formWrapper}>
      <form action="#" className={classes.form} onSubmit={formSubmit}>
        <label>
          <input
            className={`${classes.form} ${classes.input}`}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className={`${classes.form} ${classes.button}`}></button>
        </label>
      </form>
    </div>
  );
};
