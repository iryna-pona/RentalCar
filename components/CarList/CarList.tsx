import CarCard from "../CarCard/CarCard";
import { Car } from "@/types/car";

interface Props {
  cars: Car[];
}

export default function CarList({ cars }: Props) {
  return (
    <div>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}