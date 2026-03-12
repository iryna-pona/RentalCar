"use client";

import { useEffect, useState, useRef } from "react";
import { fetchCars, FetchCarsParams } from "@/app/api/cars";
import { Car } from "@/types/car";
import Filters from "@/components/Filters/Filters";
import CarList from "@/components/CarList/CarList";

const PER_PAGE = 12;

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState<FetchCarsParams>({});
  const [prevCarsCount, setPrevCarsCount] = useState(0);

  const firstNewCardRef = useRef<HTMLDivElement | null>(null);

  const loadCars = async (
    pageToLoad: number,
    currentFilters: FetchCarsParams
  ) => {
    const data = await fetchCars({
      ...currentFilters,
      page: pageToLoad,
      limit: PER_PAGE,
    });

    if (pageToLoad === 1) {
      setCars(data.cars);
      setPrevCarsCount(0);
    } else {
      setPrevCarsCount(cars.length);
      setCars((prev) => [...prev, ...data.cars]);
    }

    setPage(data.page);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    const fetchInitialCars = async () => {
      await loadCars(1, filters);
    };

    fetchInitialCars();
  });

  useEffect(() => {
    if (cars.length > prevCarsCount && firstNewCardRef.current) {
      firstNewCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [cars, prevCarsCount]);

  const handleSearch = (newFilters: FetchCarsParams) => {
    setFilters(newFilters);
  };

  const handleLoadMore = async () => {
    setPrevCarsCount(cars.length);
    await loadCars(page + 1, filters);
  };

  const showLoadMore = cars.length >= PER_PAGE && page < totalPages;

  return (
    <>
      <Filters onSearch={handleSearch} />

      <CarList
        cars={cars}
        firstNewCardRef={firstNewCardRef}
        prevCarsCount={prevCarsCount}
      />

      {showLoadMore && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </>
  );
}