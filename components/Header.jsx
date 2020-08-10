import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img
            className={styles.logo}
            src="/images/logo.png"
            alt="Capital Consulting"
          />
        </a>
      </Link>

      <nav>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.text}>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/servicios">
              <a className={styles.text}>Servicios</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/links">
              <a className={styles.text}>Links</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#contacto">
              <a className={styles.text}>Contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
