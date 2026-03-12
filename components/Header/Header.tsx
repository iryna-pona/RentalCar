"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const logoLetters = ["R","e","n","t","a","l","C","a","r"];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {logoLetters.map((letter) => (
          <Image
            key={letter}
            src={`/icons/logo/${letter}.svg`}
            alt={letter}
            width={24}
            height={24}
          />
        ))}
      </div>

      <nav className={styles.nav}>
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className={`${styles.navLink} ${pathname === "/catalog" ? styles.active : ""}`}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
}