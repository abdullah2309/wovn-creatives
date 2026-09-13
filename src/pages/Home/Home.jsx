import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            Creative Digital Studio
          </span>

          <h1>
            We create
            <span> digital experiences</span>
            that matter.
          </h1>

          <p>
            WOVN Creatives helps brands build modern websites,
            digital products and creative experiences.
          </p>

          <div className={styles.actions}>
            <Link to="/services" className={styles.primaryButton}>
              Our Services
            </Link>

            <Link to="/contact" className={styles.secondaryButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;