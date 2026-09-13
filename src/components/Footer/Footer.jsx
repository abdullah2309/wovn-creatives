import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2026 WOVN Creatives. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;