import { Car } from "@/types/car";
import styles from "./CarDeteils.module.css";

interface CarCardProps {
  car: Car;
}

export default function CarDeteils({ car }: CarCardProps) {
    return (
        <div className={styles.carDeteils}>
            <h2>{car.brand} {car.model}, {car.year}</h2>
            <p>id: {car.id}</p>
            <p>{car.address}</p>
            <p>Mileage: {car.mileage}km</p>
            <p>${car.rentalPrice}</p>
            <p>{car.description}</p>
            <h3>Rental Conditions:</h3>
            <p>{car.rentalConditions}</p>
            <h3>Car Specifications:</h3>
            <ul>
                <li></li>
            </ul>
            <h3>Accessories and functionalities:</h3>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}