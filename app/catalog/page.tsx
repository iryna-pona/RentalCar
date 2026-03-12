"use client";

import { useEffect, useRef } from "react";
import { useCarsStore } from "@/store/useCarsStore";
import { FetchCarsParams } from "@/app/api/cars";
import Filters from "@/components/Filters/Filters";
import CarList from "@/components/CarList/CarList";

export default function CatalogPage() {
  const cars = useCarsStore((state) => state.cars);
  const page = useCarsStore((state) => state.page);
  const totalPages = useCarsStore((state) => state.totalPages);
  const filters = useCarsStore((state) => state.filters);
  const setFilters = useCarsStore((state) => state.setFilters);
  const loadCars = useCarsStore((state) => state.loadCars);
  const loadFavorites = useCarsStore((state) => state.loadFavorites);

  const firstNewCardRef = useRef<HTMLDivElement | null>(null);
  const prevCarsCountRef = useRef(0);

  useEffect(() => {
    if (cars.length > prevCarsCountRef.current) {
      firstNewCardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    prevCarsCountRef.current = cars.length;
  }, [cars]);

  useEffect(() => {
    loadFavorites();
    loadCars(1);
  }, [filters, loadCars, loadFavorites]);

  const handleSearch = (newFilters: FetchCarsParams) => setFilters(newFilters);
  const handleLoadMore = () => loadCars(page + 1);
  const showLoadMore = cars.length && page < totalPages;

  return (
    <>
      <Filters onSearch={handleSearch} />
      <CarList cars={cars} firstNewCardRef={firstNewCardRef} />
      {showLoadMore && <button onClick={handleLoadMore}>Load more</button>}
    </>
  );
}