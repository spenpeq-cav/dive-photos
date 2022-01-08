import styles from "../styles/Home.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Photos</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
