import CarCard from "../CarCard/CarCard";
import { Car } from "@/types/car";
import { RefObject } from "react";

interface Props {
  cars: Car[];
  firstNewCardRef: RefObject<HTMLDivElement | null>;
  prevCarsCount: number;
}

export default function CarList({ cars, firstNewCardRef, prevCarsCount }: Props) {
  if (!cars.length) {
    return <p>No cars found</p>;
  }

  return (
    <div>
      {cars.map((car, index) => (
        <div
          key={car.id}
          ref={index === prevCarsCount ? firstNewCardRef : null}
        >
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}