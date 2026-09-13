import styles from "./Contact.module.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted");
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span>CONTACT</span>

          <h1>Let's work together.</h1>

          <p>
            Have an idea or project in mind? Send us a message.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            placeholder="Your email"
            required
          />

          <textarea
            placeholder="Tell us about your project"
            rows="6"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;