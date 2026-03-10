import Image from 'next/image';
import Link from 'next/link';
import { Car } from "@/types/car";
import styles from "./CarCard.module.css";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const parts = car.address.split(",").map(part => part.trim());

  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];

  return (
    <div className={styles.card}>
      <Image
        src={car.img}
        alt={car.model}
        width={300}
        height={200}
        className={styles.img}
      />

      <h2 className={styles.title}>
        {car.brand} {car.model}, {car.year}
      </h2>

      <h2 className={styles.title}>$ {car.rentalPrice}</h2>

      <p className={styles.info}>
        {city} | {country} | {car.rentalCompany} |
      </p>

      <p className={styles.info}>
        {car.type} | {car.mileage} km
      </p>

      <Link href={`/cars/${car.id}`} className={styles.buttonCard}>
        Read more
      </Link>
    </div>
  );
}