import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Willkommen auf meiner coolen Seite!</h1>
        <p className={styles.text}>Eine moderne Single Page Application mit Next.js und maßgeschneidertem CSS.</p>
        <Image src="https://wallpaperaccess.com/full/4627932.jpg" alt="Coole Grafik" width={300} height={200} className={styles.image} />
        <button className={styles.button}>Drück mich!</button>
        <Link href={"/settings"}>
          <button className={styles.button}>Einstellungen</button>
        </Link>
      </div>
    </div>
  );
}
