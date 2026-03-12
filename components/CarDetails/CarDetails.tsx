import { Car } from "@/types/car";
import styles from "./CarDeteils.module.css";

interface CarCardProps {
  car: Car;
}

const Icon = () => (
  <span className={styles.icon}>✔️</span> // або свій SVG/спрайт
);

export default function CarDetails({ car }: CarCardProps) {
    return (
        <div className={styles.carDeteils}>
            <h2>{car.brand} {car.model}, {car.year}</h2>
            <p>id: {car.id}</p>
            <p>{car.address}</p>
            <p>Mileage: {car.mileage}km</p>
            <p>${car.rentalPrice}</p>
            <p>{car.description}</p>
            
            {/* Rental Conditions */}
            <h3>Rental Conditions:</h3>
            <ul className={styles.list}>
              {car.rentalConditions.map((c, i) => (
                <li key={i}>
                  <Icon /> {c}
                </li>
              ))}
            </ul>

            {/* Car Specifications */}
            <h3>Car Specifications:</h3>
            <ul className={styles.list}>
              <li>
                <img src="/icons/year.svg" alt="Year" className={styles.icon} />
                Year: {car.year}
              </li>
              <li>
                <img src="/icons/type.svg" alt="Type" className={styles.icon} />
                Type: {car.type}
              </li>
              <li>
                <img src="/icons/fuel.svg" alt="Fuel" className={styles.icon} />
                Fuel Consumption: {car.fuelConsumption}
              </li>
              <li>
                <img src="/icons/engine.svg" alt="Engine" className={styles.icon} />
                Engine Size: {car.engineSize}
              </li>
            </ul>

            {/* Accessories and Functionalities */}
            <h3>Accessories and Functionalities:</h3>
            <ul className={styles.list}>
              {[...car.accessories, ...car.functionalities].map((a, i) => (
                <li key={i}>
                  <Icon /> {a}
                </li>
              ))}
            </ul>
        </div>
    );
}