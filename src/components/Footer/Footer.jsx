import classes from "./Footer.module.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  console.log(currentYear);

  return (
    <footer className={classes.footer}>
      <small className={classes.small}>
        Medic&Lordson Copyright {currentYear}
      </small>
    </footer>
  );
};
export default Footer;
