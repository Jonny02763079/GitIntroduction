import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Willkommen auf meiner coolen Seite!</h1>
        <p className={styles.text}>Eine moderne Single Page Application mit Next.js und maßgeschneidertem CSS.</p>
        <Image src="/cool-image.jpg" alt="Coole Grafik" width={300} height={200} className={styles.image} />
        <button className={styles.button}>Drück mich!</button>
      </div>
    </div>
  );
}
