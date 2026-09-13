import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <span className={styles.label}>ABOUT US</span>

        <h1>We turn ideas into digital experiences.</h1>

        <p>
          WOVN Creatives is a digital creative studio focused on
          building modern, useful and visually engaging digital
          products.
        </p>
      </div>
    </section>
  );
}

export default About;