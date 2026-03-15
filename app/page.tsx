import Image from "next/image";
import Link from "next/link";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <Image
        src="/images/hero@2x.jpg"
        alt="Rental cars background"
        fill
        className={styles.background}
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link href="/catalog" className={styles.button}>
          View Catalog
        </Link>
      </div>
    </main>
  );
}
