import CarCard from "../CarCard/CarCard";
import { Car } from "@/types/car";

interface Props {
  cars: Car[];
}

export default function CarList({ cars }: Props) {
  if (!cars.length) {
    return <p>No cars found</p>;
  }

  return (
    <>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </>
  );
}