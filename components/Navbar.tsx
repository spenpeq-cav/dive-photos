import styles from "../styles/Home.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <h1>SPEN DIVES</h1>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Locations</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
