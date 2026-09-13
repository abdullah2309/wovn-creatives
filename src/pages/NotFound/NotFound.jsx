import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <span>404</span>

        <h1>Page not found.</h1>

        <p>
          The page you are looking for does not exist.
        </p>

        <Link to="/">Back Home</Link>
      </div>
    </section>
  );
}

export default NotFound;