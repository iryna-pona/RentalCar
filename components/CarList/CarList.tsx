import CarCard from "../CarCard/CarCard";
import { Car } from "@/types/car";
import { RefObject } from "react";

interface Props {
  cars: Car[];
  firstNewCardRef: RefObject<HTMLDivElement | null>;
}

export default function CarList({ cars, firstNewCardRef }: Props) {
  if (!cars.length) {
    return <p>No cars found</p>;
  }

  return (
    <div>
      {cars.map((car, index) => (
        <div
          key={car.id}
          ref={index === cars.length - 1 ? firstNewCardRef : null}
        >
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}