import Image from "next/image";
import { fetchCarById } from "@/app/api/cars";
import RentForm from "@/components/RentForm/RentForm";
import CarDetails from "@/components/CarDetails/CarDetails";

interface CarPageProps {
  params: {
    id: string;
  };
}

export default async function CarPage({ params }: CarPageProps) {
   const car = await fetchCarById(params.id);
    if (!car) return <p>Car not found</p>;

    return (
      <section>
        <div>
          <Image src={car.img} alt={car.model} width={640} height={512} />
          <RentForm />
          <CarDetails car={car} />  
        </div>
      </section>
    );
}