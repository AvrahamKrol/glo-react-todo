import classes from './Form.module.scss';
export const Form = () => {
  return (
    <div className={classes.formWrapper}>
      <form action="#" className={classes.form}>
        <label>
          <input className={`${classes.form} ${classes.input}`} type="text" />
          <button className={`${classes.form} ${classes.button}`}></button>
        </label>
      </form>
    </div>
  );
};
