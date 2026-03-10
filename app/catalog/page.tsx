import Image from "next/image";
import { fetchCarById } from "@/app/api/cars";
import RentForm from "@/components/RentForm/RentForm";
import CarDeteils from "@/components/CarDeteils/CarDeteils";

interface CarPageProps {
  params: {
    id: string;
  };
}

export default async function CarPage({ params }: CarPageProps) {
  const car = await fetchCarById(params.id);

  return (
    <div>
        <Image src={car.img} alt={car.model} width={640} height={512} className={styles.img} />
        <RentForm />
        <CarDeteils />  
    </div>
  );
}