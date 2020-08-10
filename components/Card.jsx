import Link from "next/link";
import styles from "../styles/Card.module.css";

const Card = ({ title, text, img, icon }) => {
  return (
    <article className={styles.card}>
      <img className={styles.img} src={img} alt={title} />
      <img className={styles.icon} src={icon} alt={title} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <Link href="/">
          <a className={styles.btn}>Leer más</a>
        </Link>
      </div>
    </article>
  );
};

export default Card;
