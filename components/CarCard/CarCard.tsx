"use client";

import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types/car";
import styles from "./CarCard.module.css";
import { useCarsStore } from "@/store/useCarsStore";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const parts = car.address.split(",").map((part) => part.trim());
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];

  const favorites = useCarsStore((state) => state.favorites);
  const addFavorite = useCarsStore((state) => state.addFavorite);
  const removeFavorite = useCarsStore((state) => state.removeFavorite);

  const isFavorite = favorites.some((c) => c.id === car.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(car.id);
    } else {
      addFavorite(car);
    }
  };

  const formattedMileage = car.mileage
    .toLocaleString("en-US")
    .replace(/,/g, " ");

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image
          src={car.img}
          alt={car.model}
          width={300}
          height={200}
          className={styles.img}
        />

        <button
          className={styles.favoriteButton}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Image
            src={
              isFavorite
                ? "/favorites/heart-filled.svg"
                : "/favorites/heart-empty.svg"
            }
            alt={isFavorite ? "To favorites" : "Not to favorites"}
            width={24}
            height={24}
          />
        </button>
      </div>

      <h2 className={styles.title}>
        {car.brand} {car.model}, {car.year}
      </h2>

      <h2 className={styles.title}>$ {car.rentalPrice}</h2>

      <p className={styles.info}>
        {city} | {country} | {car.rentalCompany} |
      </p>

      <p className={styles.info}>
        {car.type} | {formattedMileage} km
      </p>

      <Link href={`/catalog/${car.id}`} className={styles.buttonCard}>
        Read more
      </Link>
    </div>
  );
}