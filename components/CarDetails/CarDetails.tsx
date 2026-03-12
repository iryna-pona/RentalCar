"use client";

import Image from "next/image";
import { Car } from "@/types/car";
import styles from "./CarDetails.module.css";

interface CarDetailsProps {
  car: Car;
}

const CheckIcon = () => (
  <Image
    src="/icons/check-circle.svg"
    alt="Check"
    width={24}
    height={24}
    className={styles.icon}
  />
);

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <div className={styles.carDetails}>
      <h2>
        {car.brand} {car.model}, {car.year}
      </h2>

      <p>id: {car.id}</p>
      <p>{car.address}</p>
      <p>Mileage: {car.mileage.toLocaleString()} km</p>
      <p>${car.rentalPrice}</p>
      <p>{car.description}</p>

      <h3>Rental Conditions:</h3>
      <ul className={styles.list}>
        {car.rentalConditions.map((c, i) => (
          <li key={i}>
            <CheckIcon />
            {c}
          </li>
        ))}
      </ul>

      <h3>Car Specifications:</h3>
      <ul className={styles.list}>
        <li>
          <Image
            src="/icons/year.svg"
            alt="Year"
            width={24}
            height={24}
            className={styles.icon}
          />
          Year: {car.year}
        </li>

        <li>
          <Image
            src="/icons/type.svg"
            alt="Type"
            width={24}
            height={24}
            className={styles.icon}
          />
          Type: {car.type}
        </li>

        <li>
          <Image
            src="/icons/fuel.svg"
            alt="Fuel"
            width={24}
            height={24}
            className={styles.icon}
          />
          Fuel Consumption: {car.fuelConsumption}
        </li>

        <li>
          <Image
            src="/icons/engine.svg"
            alt="Engine"
            width={24}
            height={24}
            className={styles.icon}
          />
          Engine Size: {car.engineSize}
        </li>
      </ul>

      <h3>Accessories and Functionalities:</h3>
      <ul className={styles.list}>
        {[...car.accessories, ...car.functionalities].map((a, i) => (
          <li key={i}>
            <CheckIcon />
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}