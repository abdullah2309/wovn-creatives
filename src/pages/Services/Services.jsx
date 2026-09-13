import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern and responsive websites built for performance and scalability.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Clean and intuitive interfaces designed around real user needs.",
  },
  {
    id: 3,
    title: "Digital Products",
    description:
      "From idea to launch, we create digital products that solve problems.",
  },
];

function Services() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>SERVICES</span>

          <h1>What we do.</h1>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <span className={styles.number}>
                0{service.id}
              </span>

              <h2>{service.title}</h2>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;