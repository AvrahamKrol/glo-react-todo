// import './Header.scss';
import classes from './Header.module.scss';
export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <a href="#" className={classes.link}>
          ToDo
        </a>
      </div>
    </header>
  );
};
