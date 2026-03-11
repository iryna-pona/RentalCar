"use client";

import { useEffect, useState } from "react";
import { fetchCars } from "@/app/api/cars";
import { Car } from "@/types/car";
import { FetchCarsParams } from "@/app/api/cars";
import Filters from "@/components/Filters/Filters";
import CarList from "@/components/CarList/CarList";

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const loadInitialCars = async () => {
      const data = await fetchCars();
      setCars(data.cars);
    };

    loadInitialCars();
  }, []);

  const handleSearch = async (filters: FetchCarsParams) => {
    const data = await fetchCars(filters);
    setCars(data.cars);
  };

  return (
    <>
      <Filters onSearch={handleSearch} />
      <CarList cars={cars} />
    </>
  );
}